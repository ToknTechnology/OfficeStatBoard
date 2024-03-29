from flask import Flask
from flask_cors import CORS, cross_origin
import mysql
#import base64
import json
import requests
from mysql.connector import Error
from datetime import datetime
import pytz
#import time
#import os

# variables
database = 'tokn_production_mt'
# database = 'dev_mt'

servers = []
companyDetail = []
serverDetail = []
userDetail = []
# [{'Lat':'35.1', 'Lon':'125.0'},{'Lat':'35.5', 'Lon':'126.0'}]
result = {}
userList = []
currentDate = ''

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)


# functions
def getServerDetails():
    recsFound = []
    try:
        connection = mysql.connector.connect(
            host='tokn-cloud-production.ceb8tlhezqpa.ap-southeast-2.rds.amazonaws.com',
            database=database,
            user='toknsystems',
            password='Ctjye570jcd08i7Z3ZyVc2xJH3or{^NB',
            use_pure=True)

        cursor = connection.cursor(prepared=True)
        sql_Query = """select * from """ + database + """.tblserver where serveraddress <> ''"""

        cursor.execute(sql_Query)
        records = cursor.fetchall()
        for row in records:
            try:
                entry = {}
                entry['servername'] = row[0].decode('utf-8')
                entry['serveraddress'] = row[1].decode('utf-8')
                entry['lasttimestamp'] = row[2]
                recsFound.append(entry)
            except Error as e:
                print("Error building data result")

        return recsFound

    except Error as e:
        print("Error reading data from MySQL table", e)
    finally:
        if (connection.is_connected()):
            connection.close()
            cursor.close()


def get_connections(URL):
    headers = {
        'Authorization': 'Bearer MDAwMDAwMDAwMDAwMDAwMDAq:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUT0tOIn0.0-MWTvkx4bG-DY9hZAA-Jnqg4EoHGVrdlCSoU1QWv5U',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    try:
        response = requests.request("GET", URL, headers=headers, data='', timeout=5)
        return (json.loads(response.text))
    except requests.exceptions.Timeout:
        # print('Server at : ' + server['servername'] + ' : ' + server['serveraddress'] + ' not responding, might be scaled down')
        return []


def getUsersLoggedOnToday():
    # read the last logged in data from the db
    global userList
    try:
        connection = mysql.connector.connect(
            host='tokn-cloud-production.ceb8tlhezqpa.ap-southeast-2.rds.amazonaws.com',
            database=database,
            user='toknsystems',
            password='Ctjye570jcd08i7Z3ZyVc2xJH3or{^NB',
            use_pure=True)

        cursor = connection.cursor(prepared=True)

        # collect detail by company / instance
        userList.clear()

        #calculate the dates


        sql_Query = """select distinct(userID) from """ + database + """.tbldevice where (lastlogindate = %s and lastLoginTime >= %s)  or (lastLoginDate = %s and lastLoginTime <= %s)"""

        #get system date
        now = datetime.now()  # current system date and time
        systemDateMidnight = now.strftime("%Y/%m/%d 00:00:00")
        UTC = pytz.timezone('UTC')

        # calculate UTC from date
        systemDateObject = datetime.strptime(systemDateMidnight, '%Y/%m/%d %H:%M:%S')
        UTCDateTime = systemDateObject.astimezone(UTC)
        FromDate = UTCDateTime.strftime("%Y/%m/%d")
        FromTime = UTCDateTime.strftime("%H:%M:%S")
        ToDate = systemDateObject.strftime("%Y/%m/%d")

        parms = (FromDate, FromTime, ToDate, FromTime,)
        print(sql_Query + str(parms))
        cursor.execute(sql_Query, parms)
        records = cursor.fetchall()
        for row in records:
            try:
                userList.append(row[0].decode('utf-8'))
            except Error as e:
                print("Error building data result")

        return userList
    except Error as e:
        print("Error reading logon data from MySQL table", e)

    finally:
        if (connection.is_connected()):
            connection.close()
            cursor.close()


def process_servers(servers):
    global result
    global companyDetail
    global serverDetail
    global userDetail
    global userList
    global currentDate
    userDetail = []

    # Get the data
    for server in servers:
        process_server(server)

    # company placeholders
    companyLabels = []
    companySeries = []
    companyData = []

    # server placeholders
    serverLabels = []
    serverSeries = []
    serverData = []

    # reformat the company
    companySeries.append('Total')
    for company in companyDetail:
        companyLabels.append(company['CompanyName'])
        companyData.append(company['Count'])

    CompanyInfo = {}
    CompanyInfo['CompanyLabels'] = companyLabels
    CompanyInfo['CompanySeries'] = companySeries
    CompanyInfo['CompanyData'] = companyData
    result['CompanyInfo'] = CompanyInfo

    # reformat the company data
    serverSeries.append('Total')
    for server in serverDetail:
        serverLabels.append(server['ServerName'])
        serverData.append(server['Count'])

    ServerInfo = {}
    ServerInfo['ServerLabels'] = serverLabels
    ServerInfo['ServerSeries'] = serverSeries
    ServerInfo['ServerData'] = serverData
    result['ServerInfo'] = ServerInfo
    result['UserInfo'] = userDetail
    result['UserList'] = getUsersLoggedOnToday()

    # save the userList to local location
    f = open("users.json", "w")
    f.write(json.dumps(userList))
    f.close()


def process_server(server):
    if server['serveraddress'] is None or server['serveraddress'] == '':
        return
    url = 'http://' + server['serveraddress'] + ':8000/Connector'
    entries = get_connections(url)
    global companyDetail
    global userDetail

    # kill all anonymous entries
    for entry in entries:

        if 'User' in entry:
            if ((entry['User'] == '') or (entry['User'] == 'Anonymous')):
                entries.remove(entry)
        else:
            entries.remove(entry)

    # create a DB connection and keep it open
    try:
        connection = mysql.connector.connect(
            host='tokn-cloud-production.ceb8tlhezqpa.ap-southeast-2.rds.amazonaws.com',
            database=database,
            user='toknsystems',
            password='Ctjye570jcd08i7Z3ZyVc2xJH3or{^NB',
            use_pure=True)

        cursor = connection.cursor(prepared=True)

        # collect detail by company / instance
        for entry in entries:
            if 'company' in entry:
                entryCompany = entry['company']

                # add company to count
                found = False
                for company in companyDetail:
                    if entryCompany == company['Company']:
                        found = True
                        company['Count'] = company['Count'] + 1
                        break

                if not found:
                    companyline = {}
                    companyline['Company'] = entryCompany

                    sql_Query = """select name1 from """ + database + """.tblcompany where companynumber = %s"""
                    parms = (entryCompany,)
                    cursor.execute(sql_Query, parms)
                    records = cursor.fetchall()
                    for row in records:
                        try:
                            companyline['CompanyName'] = row[0].decode('utf-8') + ' ' + entryCompany[-3:]
                        except Error as e:
                            print("Error building data result")

                    companyline['Count'] = 1
                    companyDetail.append(companyline)
            userEntry = {}
            if ('Lat' in entry) & ('Lon' in entry):
                if (entry['Lat']) != '-0.1':
                    userEntry['Lat'] = entry['Lat']
                    userEntry['Lon'] = entry['Lon']
                    userDetail.append(userEntry)


    except Error as e:
        print("Error reading data from MySQL table", e)

    finally:
        if (connection.is_connected()):
            connection.close()
            cursor.close()

    serverEntry = {}
    serverEntry['ServerName'] = server['serveraddress']
    serverEntry['Count'] = str(len(entries))
    serverDetail.append(serverEntry)

    # print('Server at : ' + server['servername'] + ' : ' + server['serveraddress'] + ' has ' + str(len(entries)) + ' connections')
    # for company in companies:
    #    print(company['company'] + ' has ' + str(company['Count']) + ' connected users')


def clearAll():
    global servers
    global companyDetail
    global serverDetail
    global companyLabels
    global companySeries
    global companyData
    global serverLabels
    global serverSeries
    global serverData

    servers = []
    companyDetail = []
    serverDetail = []
    companyLabels = []
    companySeries = []
    companyData = []

    # server placeholders
    serverLabels = []
    serverSeries = []
    serverData = []


@app.route("/")
@cross_origin()
def main():
    global result
    result = {}

    # clear all
    clearAll()
    servers = getServerDetails()

    now = datetime.now()  # current date and time
    date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    print('Run at ' + date_time)
    process_servers(servers)

    return json.dumps(result)


if __name__ == "__main__":
    app.run()