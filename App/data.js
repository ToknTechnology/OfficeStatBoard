var DATA_1 = [
    
    {
        "TYPE": "Sales Performance 1",
        "SECTION":[
            {
                "ID":"001",
                "NAME":"My Sales Overview",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Outlet"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Outlet 1",
                            "LFY_S": "$1,049,889",
                            "YTD_LY": "$454,922",
                            "YTD_TY": "$568,733",
                            "YTD_DOL": "$113,811",
                            "YTD_PER": "25%",
                        }
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                
            },
            {
                "ID":"002",
                "NAME":"By Product YTD",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Product"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Cash 3",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Lotto",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Sratch n Win",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "ID":"003",
                "NAME":"By Product Group YTD",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Product"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Cash 3",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Lotto",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Sratch n Win",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "ID":"004",
                "NAME":"Total Sales YTD",
                "SOURCE":"TBL",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "head":[
                        {"THEAD":"Outlet"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Outlet 1",
                            "LFY_S": "$1,049,889",
                            "YTD_LY": "$454,922",
                            "YTD_TY": "$568,733",
                            "YTD_DOL": "$113,811",
                            "YTD_PER": "25%",
                        }
                    ]
                },
            }
        ]     
    },
    {
        "TYPE": "Charts",
        "SECTION":[
            {
                "ID":"004",
                "NAME":"Sales by Month YTD",
                "SOURCE":"LINE",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["JUN", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN","FEB","MAR","APR","MAY","JUN"],
                    "series":["Last FY", "This FY"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "elements": {
                            "line": {
                                "fill": false,                     
                                "tension": 0 
                            },                   
                        },
                        "scales": {
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "thousands (000s)"
                                }
                            }]
                        }
                    },
                    "data":[
                        [1700, 800, 900, 850],
                        [1000, 800, 700, 750, 760, 800, 500,600,700,1000,1100,900]
                    ],
                    "colors" : [
                        {
                            "borderColor": "#f7b100",
                            "pointBackgroundColor": "#f7b100",
                        },
                        {
                            
                            "borderColor": "#0092ba",
                            "pointBackgroundColor": "#0092ba",
                        }
                    ]                      
                }
            },
            {
                "ID":"005",
                "NAME":"Cumulative Sales YTD",
                "SOURCE":"LINE",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["JUN", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN","FEB","MAR","APR","MAY","JUN"],
                    "series":["Last FY", "This FY"],
                    "options":{
                        "scales": {
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "thousands (000s)"
                                }
                            }]
                        },
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "elements": {
                            "line": {
                                "fill": false,                     
                                "tension": 0 
                            },                   
                        }
                    },
                    "data":[
                        [1050, 1150, 1300, 1400],
                        [1000, 1100, 1200, 1300, 1400, 1500, 1600,1700,1800,1900,2000,2200]
                    ],
                    "colors" : [
                        {
                            "borderColor": "#f7b100",
                            "pointBackgroundColor": "#f7b100",
                        },
                        {
                            
                            "borderColor": "#0092ba",
                            "pointBackgroundColor": "#0092ba",
                        }
                    ]                      
                }
            },
            {
                "ID":"004",
                "NAME":"LY Sales by Game YTD",
                "SOURCE":"BAR",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["Network","Oulet"], 
                    "series":["Minor Games", "OZ Lotto", "Powerball", "Red Lotto", "Sratch n Win"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "scales": {
                            "xAxes": [{
                                "stacked": true, 
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }],
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "Percent Scales"
                                },
                                "stacked": true,
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    },
                    "data":[
                        [5.9, 4.6],
                        [16, 22.8],
                        [30.4, 46.3],
                        [34.7, 21.1],
                        [12.9, 5.3]
                    ],
                    "colors" : [
                        {
                            "backgroundColor": "#008f6b",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#10a300",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#002a58",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#e40013",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#9300af",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        }
                    ]       
                }
            },
            {
                "ID":"004",
                "NAME":"TY Sales by Game YTD",
                "SOURCE":"BAR",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["Network","Oulet"], 
                    "series":["Minor Games", "OZ Lotto", "Powerball", "Red Lotto", "Sratch n Win"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "scales": {
                            "xAxes": [{
                                "stacked": true, 
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }],
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "Percent Scales"
                                },
                                "stacked": true,
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    },
                    "data":[
                        [5.9, 4.6],
                        [16, 22.8],
                        [30.4, 46.3],
                        [34.7, 21.1],
                        [12.9, 5.3]
                    ],
                    "colors" : [
                        {
                            "backgroundColor": "#008f6b",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#10a300",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#002a58",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#e40013",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#9300af",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        }
                    ]       
                }             
            }
        ]     
    }       
];
var DATA_2 = [
    
    {
        "TYPE": "Sales Performance 2",
        "SECTION":[
            {
                "ID":"001",
                "NAME":"My Sales Overview",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Outlet"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Outlet 1",
                            "LFY_S": "$1,049,889",
                            "YTD_LY": "$454,922",
                            "YTD_TY": "$568,733",
                            "YTD_DOL": "$113,811",
                            "YTD_PER": "25%",
                        }
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                
            },
            {
                "ID":"002",
                "NAME":"By Product YTD",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Product"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Cash 3",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Lotto",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Sratch n Win",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "ID":"003",
                "NAME":"By Product Group YTD",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Product"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Cash 3",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Lotto",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Sratch n Win",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "ID":"004",
                "NAME":"Total Sales YTD",
                "SOURCE":"TBL",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "head":[
                        {"THEAD":"Outlet"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Outlet 1",
                            "LFY_S": "$1,049,889",
                            "YTD_LY": "$454,922",
                            "YTD_TY": "$568,733",
                            "YTD_DOL": "$113,811",
                            "YTD_PER": "25%",
                        }
                    ]
                },
            }
        ]     
    },
    {
        "TYPE": "Charts",
        "SECTION":[
            {
                "ID":"004",
                "NAME":"Sales by Month YTD",
                "SOURCE":"LINE",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["JUN", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN","FEB","MAR","APR","MAY","JUN"],
                    "series":["Last FY", "This FY"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "elements": {
                            "line": {
                                "fill": false,                     
                                "tension": 0 
                            },                   
                        },
                        "scales": {
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "thousands (000s)"
                                }
                            }]
                        }
                    },
                    "data":[
                        [1700, 800, 900, 850],
                        [1000, 800, 700, 750, 760, 800, 500,600,700,1000,1100,900]
                    ],
                    "colors" : [
                        {
                            "borderColor": "#f7b100",
                            "pointBackgroundColor": "#f7b100",
                        },
                        {
                            
                            "borderColor": "#0092ba",
                            "pointBackgroundColor": "#0092ba",
                        }
                    ]                      
                }
            },
            {
                "ID":"005",
                "NAME":"Cumulative Sales YTD",
                "SOURCE":"LINE",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["JUN", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN","FEB","MAR","APR","MAY","JUN"],
                    "series":["Last FY", "This FY"],
                    "options":{
                        "scales": {
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "thousands (000s)"
                                }
                            }]
                        },
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "elements": {
                            "line": {
                                "fill": false,                     
                                "tension": 0 
                            },                   
                        }
                    },
                    "data":[
                        [1050, 1150, 1300, 1400],
                        [1000, 1100, 1200, 1300, 1400, 1500, 1600,1700,1800,1900,2000,2200]
                    ],
                    "colors" : [
                        {
                            "borderColor": "#f7b100",
                            "pointBackgroundColor": "#f7b100",
                        },
                        {
                            
                            "borderColor": "#0092ba",
                            "pointBackgroundColor": "#0092ba",
                        }
                    ]                      
                }
            },
            {
                "ID":"004",
                "NAME":"LY Sales by Game YTD",
                "SOURCE":"BAR",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["Network","Oulet"], 
                    "series":["Minor Games", "OZ Lotto", "Powerball", "Red Lotto", "Sratch n Win"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "scales": {
                            "xAxes": [{
                                "stacked": true, 
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }],
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "Percent Scales"
                                },
                                "stacked": true,
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    },
                    "data":[
                        [5.9, 4.6],
                        [16, 22.8],
                        [30.4, 46.3],
                        [34.7, 21.1],
                        [12.9, 5.3]
                    ],
                    "colors" : [
                        {
                            "backgroundColor": "#008f6b",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#10a300",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#002a58",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#e40013",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#9300af",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        }
                    ]       
                }
            },
            {
                "ID":"004",
                "NAME":"TY Sales by Game YTD",
                "SOURCE":"BAR",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["Network","Oulet"], 
                    "series":["Minor Games", "OZ Lotto", "Powerball", "Red Lotto", "Sratch n Win"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "scales": {
                            "xAxes": [{
                                "stacked": true, 
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }],
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "Percent Scales"
                                },
                                "stacked": true,
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    },
                    "data":[
                        [5.9, 4.6],
                        [16, 22.8],
                        [30.4, 46.3],
                        [34.7, 21.1],
                        [12.9, 5.3]
                    ],
                    "colors" : [
                        {
                            "backgroundColor": "#008f6b",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#10a300",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#002a58",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#e40013",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#9300af",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        }
                    ]       
                }             
            }
        ]     
    }       
];
var DATA_3 = [
    
    {
        "TYPE": "Sales Performance 3",
        "SECTION":[
            {
                "ID":"001",
                "NAME":"My Sales Overview",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Outlet"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Outlet 1",
                            "LFY_S": "$1,049,889",
                            "YTD_LY": "$454,922",
                            "YTD_TY": "$568,733",
                            "YTD_DOL": "$113,811",
                            "YTD_PER": "25%",
                        }
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                
            },
            {
                "ID":"002",
                "NAME":"By Product YTD",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Product"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Cash 3",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Lotto",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Sratch n Win",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "ID":"003",
                "NAME":"By Product Group YTD",
                "SOURCE":"TBL",
                "DATA":{
                    "head":[
                        {"THEAD":"Product"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Cash 3",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Lotto",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                        {
                            "NAME": "Sratch n Win",
                            "LFY_S": "$4,612",
                            "YTD_LY": "$1,484",
                            "YTD_TY": "$2,756",
                            "YTD_DOL": "$1,272",
                            "YTD_PER": "85.7%",
                        },
                    ]
                },
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "ID":"004",
                "NAME":"Total Sales YTD",
                "SOURCE":"TBL",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "head":[
                        {"THEAD":"Outlet"},
                        {"THEAD":"Last FY Sales"},
                        {"THEAD":"YTD Sales LY"},
                        {"THEAD":"YTD Sales TY"},
                        {"THEAD":"YTD Difference($)"},
                        {"THEAD":"YTD Difference(%)"}
                    ],
                    "body":[
                        {
                            "NAME": "Outlet 1",
                            "LFY_S": "$1,049,889",
                            "YTD_LY": "$454,922",
                            "YTD_TY": "$568,733",
                            "YTD_DOL": "$113,811",
                            "YTD_PER": "25%",
                        }
                    ]
                },
            }
        ]     
    },
    {
        "TYPE": "Charts",
        "SECTION":[
            {
                "ID":"004",
                "NAME":"Sales by Month YTD",
                "SOURCE":"LINE",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["JUN", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN","FEB","MAR","APR","MAY","JUN"],
                    "series":["Last FY", "This FY"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "elements": {
                            "line": {
                                "fill": false,                     
                                "tension": 0 
                            },                   
                        },
                        "scales": {
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "thousands (000s)"
                                }
                            }]
                        }
                    },
                    "data":[
                        [1700, 800, 900, 850],
                        [1000, 800, 700, 750, 760, 800, 500,600,700,1000,1100,900]
                    ],
                    "colors" : [
                        {
                            "borderColor": "#f7b100",
                            "pointBackgroundColor": "#f7b100",
                        },
                        {
                            
                            "borderColor": "#0092ba",
                            "pointBackgroundColor": "#0092ba",
                        }
                    ]                      
                }
            },
            {
                "ID":"005",
                "NAME":"Cumulative Sales YTD",
                "SOURCE":"LINE",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["JUN", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN","FEB","MAR","APR","MAY","JUN"],
                    "series":["Last FY", "This FY"],
                    "options":{
                        "scales": {
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "thousands (000s)"
                                }
                            }]
                        },
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "elements": {
                            "line": {
                                "fill": false,                     
                                "tension": 0 
                            },                   
                        }
                    },
                    "data":[
                        [1050, 1150, 1300, 1400],
                        [1000, 1100, 1200, 1300, 1400, 1500, 1600,1700,1800,1900,2000,2200]
                    ],
                    "colors" : [
                        {
                            "borderColor": "#f7b100",
                            "pointBackgroundColor": "#f7b100",
                        },
                        {
                            
                            "borderColor": "#0092ba",
                            "pointBackgroundColor": "#0092ba",
                        }
                    ]                      
                }
            },
            {
                "ID":"004",
                "NAME":"LY Sales by Game YTD",
                "SOURCE":"BAR",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["Network","Oulet"], 
                    "series":["Minor Games", "OZ Lotto", "Powerball", "Red Lotto", "Sratch n Win"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "scales": {
                            "xAxes": [{
                                "stacked": true, 
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }],
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "Percent Scales"
                                },
                                "stacked": true,
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    },
                    "data":[
                        [5.9, 4.6],
                        [16, 22.8],
                        [30.4, 46.3],
                        [34.7, 21.1],
                        [12.9, 5.3]
                    ],
                    "colors" : [
                        {
                            "backgroundColor": "#008f6b",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#10a300",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#002a58",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#e40013",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#9300af",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        }
                    ]       
                }
            },
            {
                "ID":"004",
                "NAME":"TY Sales by Game YTD",
                "SOURCE":"BAR",
                "DESC":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "DATA":{
                    "type":"StackedBar",
                    "labels":["Network","Oulet"], 
                    "series":["Minor Games", "OZ Lotto", "Powerball", "Red Lotto", "Sratch n Win"],
                    "options":{
                        "legend": {
                            "display": true,
                            "position": "bottom"
                        },
                        "scales": {
                            "xAxes": [{
                                "stacked": true, 
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }],
                            "yAxes": [{
                                "scaleLabel": {
                                    "display": true,
                                    "labelString": "Percent Scales"
                                },
                                "stacked": true,
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    },
                    "data":[
                        [5.9, 4.6],
                        [16, 22.8],
                        [30.4, 46.3],
                        [34.7, 21.1],
                        [12.9, 5.3]
                    ],
                    "colors" : [
                        {
                            "backgroundColor": "#008f6b",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#10a300",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#002a58",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#e40013",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        },
                        {
                            "backgroundColor": "#9300af",   
                            "strokeColor": "rgba(111,111,111,0)",   
                            "borderWidth": 0, 
                        }
                    ]       
                }             
            }
        ]     
    }       
];