(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required",
                    "alertTextDateRange": "* Both date range fields are required"
                },
                "requiredInFunction": {
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters required"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {
                    //  Check if date is valid by leap year
            "func": function (field) {
                    var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                    var match = pattern.exec(field.val());
                    if (match == null)
                       return false;

                    var year = match[1];
                    var month = match[2]*1;
                    var day = match[3]*1;
                    var date = new Date(year, month - 1, day); // because months starts from 0.

                    return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
                },
             "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },

                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // DAT00003 DATUM  EIN=(TTMM,T.M.),AUS='TTMM'
                // for T.M.JJ. ([1-9][\.][1-9][\.][0-9]{2}[\.]) 
                "DAT00003": {
                   // "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                  // "regex": /^(((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012]))|([1-9][\.][1-9][\.]))$/,
                   "dateFormat": ["TTMM","T.M."],
                   "dateFormatOutput": "TTMM",
                   "alertText": "* Please enter valid date in one of these formats"
                },
                // DAT00004 DATUM  EIN=(TTMMJJ,T.M.JJ,TT.MM.JJ),AUS='TTMMJJ'
                "DAT00004": {
                  // "regex": /^(((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2}))|([1-9][\.][1-9][\.][0-9]{2})|((0[1-9]|[12][0-9]|3[01])[\.](0[1-9]|1[012])[\.][0-9]{2}))$/,
                   "dateFormat": ["TTMMJJ","T.M.JJ","TT.MM.JJ"],
                   "dateFormatOutput": "TTMMJJ",
                   "alertText": "* Please enter valid date in correct format"
                },
                // DAT00005 DATUM  EIN=(TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ),AUS='TTMMJJJJ'
                "DAT00005": {
                  // "regex": /^(((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{4}))|((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2}))|([1-9][\.][1-9][\.][0-9]{4})|([1-9][\.][1-9][\.][0-9]{2}))$/,
                   "dateFormat": ["TTMMJJJJ","TTMMJJ","T.M.JJ","T.M.JJJJ"],
                   "dateFormatOutput": "TTMMJJJJ",
                   "alertText": "* Please enter valid date in correct format"
                },
                // DAT00006 DATUM  EIN=(MMJJ,M.JJ),AUS='MMJJ'
                "DAT00006": {
                   // "regex": /^(((0[1-9]|1[012])([0-9]{2}))|([1-9][\.][0-9]{2}))$/,
                   "dateFormat": ["MMJJ","M.JJ"],
                   "dateFormatOutput": "MMJJ",
                   "alertText": "* Please enter valid date in correct format"
                },
                //DAT00008 DATUM EIN=(MM.JJ,MM.JJJJ),AUS='MM.JJJJ'
                "DAT00008": {
                  // "regex": /^(((0[1-9]|1[012])[\.]([0-9]{2}))|((0[1-9]|1[012])[\.][0-9]{4}))$/,
                   "dateFormat": ["MM.JJ","MM.JJJJ"],
                   "dateFormatOutput": "MM.JJJJ",
                   "alertText": "* Please enter valid date in correct format"
                },
                // DAT00007 DATUM EIN=(M/JJ,M/JJJJ),AUS='MM/JJJJ',ZEIT=(199001:HEUTM)
                "DAT00007": {
                  // "regex": /^(([1-9][\/][0-9]{2})|([1-9][\/][0-9]{4}))$/,
                   "dateFormat": ["M/JJ","M/JJJJ"],
                   "dateFormatOutput": "MM/JJJJ",
                   "dateRange": "199001:TODAYM",
                   "alertText": "* Please enter valid date in correct format",
                   "alertTextRange": " Please enter valid date range between 01.01.1990 and Today",
                   "alertTextRangeFormat": " Please define valid date range format like [YYYYMM]:[TODAYM|TODAYE|[TODAYE+N month(s)]] or [<=|<|>|>=][TODAYE|TODAYM|[TODAYE+N month(s)]]"
                },
                //DAT00009 DATUM  EIN=(TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ),AUS=TT.MM.JJJJ,  ZEIT=(<=HEUTE)
                "DAT00009": {
                  // "regex": /^(((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{4}))|((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2}))|([1-9][\.][1-9][\.][0-9]{4})|([1-9][\.][1-9][\.][0-9]{2}))$/,
                   "dateFormat": ["TTMMJJJJ","TTMMJJ","T.M.JJ","T.M.JJJJ"],
                   "dateFormatOutput": "TT.MM.JJJJ",
                   "dateRange": "<=TODAYE",
                   "alertText": "* Please enter valid date in correct format",
                   "alertTextRange": " Please enter valid date <= Today",
                   "alertTextRangeFormat": " Please define valid date range format like [YYYYMM]:[TODAYM|TODAYE|[TODAYE+N month(s)]] or [<=|<|>|>=][TODAYE|TODAYM|[TODAYE+N month(s)]]"
                },
                // DAT00011 DATUM  EIN=(TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ),AUS=TT.MM.JJJJ, ZEIT=(HEUTE:HEUTE+6M)
                 "DAT00011": {
                  // "regex": /^(((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{4}))|((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2}))|([1-9][\.][1-9][\.][0-9]{4})|([1-9][\.][1-9][\.][0-9]{2}))$/,
                   "dateFormat": ["TTMMJJJJ","TTMMJJ","T.M.JJ","T.M.JJJJ"],
                   "dateFormatOutput": "TT.MM.JJJJ",
                   "dateRange": "TODAYE:TODAYE+6M",
                   "alertText": "* Please enter valid date between today  and six months from today",
                   "alertTextRange": " Please enter valid date range between TODAYE:TODAYE+6M",
                   "alertTextRangeFormat": " Please define valid date range format like [YYYYMM]:[TODAYM|TODAYE|[TODAYE+N month(s)]] or [<=|<|>|>=][TODAYE|TODAYM|[TODAYE+N month(s)]]"
                 },
                // DAT00012 DATUM  EIN=(TTMMJJJJ,T.M.JJJJ,TT.MM.JJJJ),AUS=TT.MM.JJJJ
                "DAT00012": {
                  // "regex": /^(((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{4}))|([1-9][\.][1-9][\.][0-9]{4})|((0[1-9]|[12][0-9]|3[01])[\.](0[1-9]|1[012])[\.][0-9]{4}))$/,
                   "dateFormat": ["TTMMJJJJ","T.M.JJJJ","TT.MM.JJJJ"],
                   "dateFormatOutput": "TT.MM.JJJJ",
                   "dateRange": "",
                   "alertText": "* Please enter valid date in correct format"
                },
                // DAT00013 DATUM  EIN=(TTMM,T.M.,T.MM.,TT.M.),AUS=TT.MM.
                "DAT00013": {
                  // "regex": /^((0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])|([1-9][\.][1-9][\.])|(([1-9])[\.](0[1-9]|1[012])[\.])|((0[1-9]|[12][0-9]|3[01])[\.][1-9][\.]))$/,
                   "dateFormat": ["TTMM","T.M.","T.MM.","TT.M."],
                   "dateFormatOutput": "TT.MM.",
                   "alertText": "* Please enter valid date in correct format"
                },
                "amount1": {
                     // "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                        "regex": /^[\+\-]?(([0-9]{1,3})([.][0-9]{3})*)?([\,]([0-9]{2}))$/,
                                    "alertText": "* Enter valid amount"
                },
                "CUSERRMSG": {
                    "ruleNotFound": "jqv:custom rule not found ",
                    "propBeforCommaNotFound" : "The property 'beforeComma' is not defined.",
                    "propPlusErrMsg" : "The value of the property 'plus' should be '+'.",
                    "propMinusErrMsg" : "The value of the property 'minus' should be '-'.",
                    "cusParFunNotFound" : "jqv:custom parameter 'function' is no function", 
                    "cusTypeNotAllowed" : "jqv:custom type not allowed"

                },
                // VSPBTG01 BETRAG NACHK=2,VORK=5,LEER=(' ','0',' '),DEZ=',',         WERT=('0:10','99,99')   
                "VSPBTG01":{
                     "beforeComma": 2,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "amountRange": ["0:10","99,99"],
                     "emptyFormat": " ,0, ",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": "* Enter valid amount between 0 and 1"
                },
                // VSPBTG02 BETRAG NACHK=0,VORK=2,LEER=(' ','0',' '),WERT=(0,1)
                "VSPBTG02":{
                     "beforeComma": 2,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "amountRange": ["0","1"],
                     "emptyFormat": " ,0, ",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": "* Enter valid amount between 0 and 1"
                },
                "LDC0200": {
                     "beforeComma": 2,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "plusLeadVal": "C",
                     "minusLeadVal": "D",
                     "alertText": "* Enter valid amount in '99' format."
                },
                "LDC0402": {
                     "beforeComma": 4,
                     "afterComma":2,
                     "plus": "+",
                     "minus": "-",
                     "plusLeadVal": "C",
                     "minusLeadVal": "D",
                     "alertText": "* Enter valid amount in '9999,99' format."
                },
                "ADV0200": {
                  //   "regex": /^(([1-9]{1,2}))$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "amountRange": [">0"],
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": " Please enter valid amount range >0"
                },
                "ADV0500": {
                    // "regex": /^(([1-9]{1,5}))$/,
                     "beforeComma": 5,
                     "afterComma":0,
                     "amountRange": [">0"],
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99999' format.",
                     "alertTextRange": " Please enter valid amount range >0"
                },
                "BTRM0100": {
                    // "regex": /^[\+]?(([1-9]{1}))$/,
                     "beforeComma": 1,
                     "afterComma":0,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9' format"
                },
                "BTRM0101": {
                     // "regex": /^[\+]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1})))?$/,
                     "beforeComma": 1,
                     "afterComma":1,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9,9' format"
                },
                "BTRM0102": {
                 //     "regex": /^[\+]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,2})))?$/,
                     "beforeComma": 1,
                     "afterComma":2,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9,99' format"
                },
                "BTRM0104": {
                    //  "regex": /^[\+]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,4})))?$/,
                     "beforeComma": 1,
                     "afterComma":4,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9,9999' format"
                },
                "BTRM0106": {
                    // "regex": /^[\+]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,6})))?$/,
                     "beforeComma": 1,
                     "afterComma":6,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9,999999' format"
                },
                "BTRM0107": {
                     // "regex": /^[\+]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,7})))?$/,
                     "beforeComma": 1,
                     "afterComma":7,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9,9999999' format"
                },
                "BTRM0200": {
                    // "regex": /^[\+]?(([1-9]{1,2})(([\.][0-9]{1})*))?$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '99' format"
                },
                "BTRM0201": {
                    // "regex": /^[\+]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][1-9]{1}))?$/,
                     "beforeComma": 2,
                     "afterComma":1,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '99,9' format"
                },
                "BTRM0202": {
                //     "regex": /^[\+]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][0-9]{1,2}))?$/,
                     "beforeComma": 2,
                     "afterComma":2,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '99,99' format"
                }, 
                "BTRM0205": {
                    // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,2})(([\,][0-9]{1,5}))?$/,
                     "beforeComma": 2,
                     "afterComma":5,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '99,99999' format"
                },
                "BTRM0207": {
                    // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,2})(([\,][0-9]{1,7}))?$/,
                     "beforeComma": 2,
                     "afterComma":7,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '99,9999999' format"
                },
                "BTRM0208": {
                     //"regex": /^[\+]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][1-9]{1,8}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,2})(([\,][0-9]{1,8}))?$/,
                     "beforeComma": 2,
                     "afterComma":8,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '99,99999999' format"
                },

                "BTRM0300": {
                     //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?$/,
                    // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})?$/,
                     "beforeComma": 3,
                     "afterComma":0,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '999' format"
                },
                "BTRM0301": {
                     //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1}))?$/,
                    // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][1-9]{1}))?$/,
                     "beforeComma": 3,
                     "afterComma":1,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '999,9' format"
                },
                "BTRM0302": {
                     //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,2}))?$/,
                    // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,2}))?$/,
                     "beforeComma": 3,
                     "afterComma":2,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '999,99' format"
                }, 
                "BTRM0303": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,3}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 3,
                      "afterComma":3,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999,999' format"
                },
                "BTRM0304": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,4}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,4}))?$/,
                      "beforeComma": 3,
                      "afterComma":4,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999,9999' format"
                },
                "BTRM0305": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,5}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,5}))?$/,
                      "beforeComma": 3,
                      "afterComma":5,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999,99999' format"
                },                
                "BTRM0308": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,8}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,8}))?$/,
                      "beforeComma": 3,
                      "afterComma":8,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999,99999999' format"
                },
                "BTRM0309": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,9}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,9}))?$/,
                      "beforeComma": 3,
                      "afterComma":9,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999,999999999' format"
                },
                
                "BTRM0400": {
                     //"regex": /^[\+]?(([1-9]{1,4})(([\.][0-9]{1,3})*))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})?$/,
                     "beforeComma": 4,
                     "afterComma":0,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9999' format"
                },
                "BTRM0402": {
                     //"regex": /^[\+]?(([1-9]{1,4})(([\.][0-9]{1,3})*))?(([\,][1-9]{1,2}))?$/,
                    // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,2}))?$/,
                     "beforeComma": 4,
                     "afterComma":2,
                     "plus": "+",
                     "alertText": "* Enter valid amount in '9999,99' format"
                }, 
                "BTRM0404": {
                      //"regex": /^[\+]?(([1-9]{1,4})(([\.][0-9]{1,3})*))?(([\,][1-9]{1,4}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,4}))?$/,
                      "beforeComma": 4,
                      "afterComma":4,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '9999,9999' format"
                },
                "BTRM0407": {
                      //"regex": /^[\+]?(([1-9]{1,4})(([\.][0-9]{1,3})*))?(([\,][1-9]{1,5}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,7}))?$/,
                      "beforeComma": 4,
                      "afterComma":7,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '9999,9999999' format"
                },   
                "BTRM0500": {
                      //"regex": /^[\+]?(([1-9]{1,5})(([\.][0-9]{1,4})*))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})?$/,
                      "beforeComma": 5,
                      "afterComma":0,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999'format"
                },
                "BTRM0502": {
                      //"regex": /^[\+]?(([1-9]{1,5})(([\.][0-9]{1,4})*))?(([\,][1-9]{1,2}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 5,
                      "afterComma":2,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999,99' format"
                }, 

                "BTRM0503": {
                      //"regex": /^[\+]?(([1-9]{1,5})(([\.][0-9]{1,4})*))?(([\,][1-9]{1,3}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 5,
                      "afterComma":3,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999,999'  format"
                }, 
                "BTRM0504": {
                      //"regex": /^[\+]?(([1-9]{1,5})(([\.][0-9]{1,4})*))?(([\,][1-9]{1,4}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})(([\,][0-9]{1,4}))?$/,
                      "beforeComma": 5,
                      "afterComma":4,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999,9999' format"
                },
                "BTRM0600": {
                      //"regex": /^[\+]?(([1-9]{1,6})(([\.][0-9]{1,5})*))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})?$/,
                      "beforeComma": 6,
                      "afterComma":0,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999999'  format"
                },
                "BTRM0602": {
                      //"regex": /^[\+]?(([1-9]{1,6})(([\.][0-9]{1,5})*))?(([\,][1-9]{1,2}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 6,
                      "afterComma":2,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999999,99' format"
                }, 

                "BTRM0604": {
                      //"regex": /^[\+]?(([1-9]{1,6})(([\.][0-9]{1,5})*))?(([\,][1-9]{1,4}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,4}))?$/,
                      "beforeComma": 6,
                      "afterComma":4,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999999,9999' format"
                }, 
                "BTRM0605": {
                      //"regex": /^[\+]?(([1-9]{1,6})(([\.][0-9]{1,5})*))?(([\,][1-9]{1,5}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,5}))?$/,
                      "beforeComma": 6,
                      "afterComma":5,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '999999,99999' format"
                },
                "BTRM0608": {
                       //"regex": /^[\+]?(([1-9]{1,6})(([\.][0-9]{1,5})*))?(([\,][1-9]{1,8}))?$/,
                       // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,8}))?$/,
                       "beforeComma": 6,
                       "afterComma":8,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '999999,99999999' format"
                }, 
                "BTRM0700": {
                      //"regex": /^[\+]?(([1-9]{1,7})(([\.][0-9]{1,6})*))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})?$/,
                      "beforeComma": 7,
                      "afterComma":0,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '9999999' format"
                },
                "BTRM0702": {
                      //"regex": /^[\+]?(([1-9]{1,7})(([\.][0-9]{1,6})*))?(([\,][1-9]{1,2}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 7,
                      "afterComma":2,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '9999999,99' format"
                }, 

                "BTRM0800": {
                      //"regex": /^[\+]?(([1-9]{1,8})(([\.][0-9]{1,7})*))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})?$/,
                      "beforeComma": 8,
                      "afterComma":0,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999999' format"
                }, 
                 "BTRM0801": {
                      //"regex": /^[\+]?(([1-9]{1,8})(([\.][0-9]{1,7})*))?(([\,][1-9]{1,1}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][1-9]{1,1}))?$/,
                      "beforeComma": 8,
                      "afterComma":1,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999999,9' format"
                }, 
                "BTRM0802": {
                      //"regex": /^[\+]?(([1-9]{1,8})(([\.][0-9]{1,7})*))?(([\,][1-9]{1,2}))?$/,
                     // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 8,
                      "afterComma":2,
                      "plus": "+",
                      "alertText": "* Enter valid amount in '99999999,99' format"
                },
                "BTRM0807": {
                       //"regex": /^[\+]?(([1-9]{1,8})(([\.][0-9]{1,7})*))?(([\,][1-9]{1,7}))?$/,
                       // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,7}))?$/,
                       "beforeComma": 8,
                       "afterComma":7,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '99999999,9999999' format"
                },            
                "BTRM0900": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})?$/,
                       "beforeComma": 9,
                       "afterComma": 0,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '999999999' format"
                },
                "BTRM0902": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 9,
                       "afterComma": 2,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '999999999,99' format"
                },
                "BTRM0905": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,5}))?$/,
                       "beforeComma": 9,
                       "afterComma": 5,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '999999999,99999' format"
                },
                "BTRM0906": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,6}))?$/,
                       "beforeComma": 9,
                       "afterComma": 6,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '999999999,999999' format"
                },
                "BTRM1000": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9][0-9]{1,9})?$/,
                       "beforeComma": 10,
                       "afterComma": 0,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '9999999999' format"
                },
                "BTRM1002": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9][0-9]{1,9})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 10,
                       "afterComma": 2,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '9999999999,99' format"
                },
                "BTRM1005": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9][0-9]{1,9})(([\,][0-9]{1,5}))?$/,
                       "beforeComma": 10,
                       "afterComma": 5,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '9999999999,99999' format"
                },
                "BTRM1100": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,11})?$/,
                       "beforeComma": 11,
                       "afterComma": 0,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '99999999999' format"
                },
                "BTRM1102": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9][0-9][0-9]{1,9})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 11,
                       "afterComma": 2,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '99999999999,99' format"
                },
                "BTRM1300": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,13})?$/,
                       "beforeComma": 13,
                       "afterComma": 0,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '9999999999999' format"

                },
                "BTRM1400": {
                      // "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,14})?$/,
                       "beforeComma": 14,
                       "afterComma": 0,
                       "plus": "+",
                       "alertText": "* Enter valid amount in '99999999999999' format"
                },
                "BTR00100": {
                    // "regex": /^[\+\-]?(([1-9]{1}))$/,
                     "beforeComma": 1,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9' format"
                },
                "BTR00101": {
                      //   "regex": /^[\+\-]?((([0-9]{1})?([\,]([0-9]{1})))| ([0-9]{1}))$/,
                      // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1})))?$/,
                     "beforeComma": 1,
                     "afterComma":1,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,9' format"
                },
                "BTR00102": {
                     // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,2})))?$/,
                     "beforeComma": 1,
                     "afterComma":2,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,99' format"
                },
                "BTR00103": {
                     // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,3})))?$/,
                     "beforeComma": 1,
                     "afterComma":3,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,999'  format"
                },
                "BTR00104": {
                     // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,4})))?$/,
                     "beforeComma": 1,
                     "afterComma":4,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,9999' format"
                },
                 "BTR00105": {
                     // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,5})))?$/,
                     "beforeComma": 1,
                     "afterComma":5,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,99999' format"
                },
                "BTR00106": {
                    // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,6})))?$/,
                     "beforeComma": 1,
                     "afterComma":6,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,999999' format"
                },
                "BTR00112": {
                     // "regex": /^[\+\-]?((([0-9]{1}))|([0-9]{1}))?(([\,]([0-9]{1,12})))?$/,
                     "beforeComma": 1,
                     "afterComma":12,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9,999999999999' format"
                },
                "BTR00200": {
                    // "regex": /^[\+\-]?(([1-9]{1,2})(([\.][0-9]{1})*))?$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99' format"
                },
                "BTR00201": {
                    // "regex": /^[\+\-]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][1-9]{1}))?$/,
                     "beforeComma": 2,
                     "afterComma":1,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99,9' format"
                },
                "BTR00202": {
                    // "regex": /^[\+\-]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][0-9]{1,2}))?$/,
                     "beforeComma": 2,
                     "afterComma":2,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99,99'  format"
                }, 
                
                "BTR00203": {
                    // "regex": /^[\+\-]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][0-9]{1,3}))?$/,
                     "beforeComma": 2,
                     "afterComma":3,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99,999'  format"
                }, 
                "BTR00205": {
                     //"regex": /^[\+\-]?(([1-9]{1,2})(([\.][0-9]{1})*))?(([\,][1-9]{1,5}))?$/,
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,2})(([\,][0-9]{1,5}))?$/,
                     "beforeComma": 2,
                     "afterComma":5,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99,99999'  format"
                },
                "BTR00300": {
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})?$/,
                     "beforeComma": 3,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '999'   format"
                },
                "BTR00301": {
                     //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1}))?$/,
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][1-9]{1}))?$/,
                     "beforeComma": 3,
                     "afterComma":1,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '999,9'  format"
                },
                "BTR00302": {
                     //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,2}))?$/,
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,2}))?$/,
                     "beforeComma": 3,
                     "afterComma":2,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in  '999,99'  format"
                }, 
                "BTR00303": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,3}))?$/,
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 3,
                      "afterComma":3,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999,999'  format"
                },
                "BTR00304": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,4}))?$/,
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,4}))?$/,
                      "beforeComma": 3,
                      "afterComma":4,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999,9999'  format"
                },
                "BTR00306": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,5}))?$/,
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,5}))?$/,
                      "beforeComma": 3,
                      "afterComma":6,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999,999999'  format"
                },                
                "BTR00308": {
                      //"regex": /^[\+]?(([1-9]{1,3})(([\.][0-9]{1,2})*))?(([\,][1-9]{1,8}))?$/,
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,3})(([\,][0-9]{1,8}))?$/,
                      "beforeComma": 3,
                      "afterComma":8,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999,99999999'   format"
                },
                "BTR00400": {
                     //"regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})?$/,
                     "beforeComma": 4,
                     "afterComma":0,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9999'  format"
                },
                "BTR00401": {
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][1-9]{1}))?$/,
                     "beforeComma": 4,
                     "afterComma":1,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9999,9'  format"
                },
                
                "BTR00402": {
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,2}))?$/,
                     "beforeComma": 4,
                     "afterComma":2,
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '9999,99'  format"
                },
                "BTR00403": {
                    // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,3}))?$/,
                     "beforeComma": 4,
                     "afterComma":3,
                     "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999,999'  format"
                },
                "BTR00404": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,4}))?$/,
                      "beforeComma": 4,
                      "afterComma":4,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999,9999'  format"
                },
                "BTR00405": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,5}))?$/,
                      "beforeComma": 4,
                      "afterComma":5,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999,99999'  format"
                },
                "BTR00407": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,4})(([\,][0-9]{1,7}))?$/,
                      "beforeComma": 4,
                      "afterComma":7,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999,9999999'  format"
                }, 
                "BTR00500": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})?$/,
                      "beforeComma": 5,
                      "afterComma":0,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999'  format"
                },
                "BTR00501": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})(([\,][1-9]{1}))?$/,
                      "beforeComma": 5,
                      "afterComma":1,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999,9'  format"
                }, 
                "BTR00502": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 5,
                      "afterComma":2,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999,99'  format"
                }, 
                "BTR00503": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,5})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 5,
                      "afterComma":3,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999,999'  format"
                },
                "BTR00600": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})?$/,
                      "beforeComma": 6,
                      "afterComma":0,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999999'  format"
                },
                "BTR00601": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1}))?$/,
                      "beforeComma": 6,
                      "afterComma":1,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999999,9'  format"
                },
                "BTR00602": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 6,
                      "afterComma":2,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999999,99' format"
                }, 

                "BTR00603": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 6,
                      "afterComma":3,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999999,999' format"
                }, 
                "BTR00608": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,6})(([\,][0-9]{1,8}))?$/,
                      "beforeComma": 6,
                      "afterComma":8,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '999999,99999999' format"
                },
                "BTR00700": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})?$/,
                      "beforeComma": 7,
                      "afterComma":0,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999999' format"
                },
                "BTR00701": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})(([\,][0-9]{1}))?$/,
                      "beforeComma": 7,
                      "afterComma":1,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999999,9' format"
                }, 
                "BTR00702": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 7,
                      "afterComma":2,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999999,99' format"
                },
                "BTR00703": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 7,
                      "afterComma":3,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '9999999,999' format"
                },
                "BTR00800": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})?$/,
                      "beforeComma": 8,
                      "afterComma":0,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999999' format"
                }, 
                 "BTR00801": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,1}))?$/,
                      "beforeComma": 8,
                      "afterComma":1,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999999,9' format"
                }, 
                "BTR00802": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,2}))?$/,
                      "beforeComma": 8,
                      "afterComma":2,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999999,99' format"
                },
                "BTR00803": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,3}))?$/,
                      "beforeComma": 8,
                      "afterComma":3,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999999,999' format"
                },
                "BTR00805": {
                     // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,5}))?$/,
                      "beforeComma": 8,
                      "afterComma":5,
                      "plus": "+",
                      "minus": "-",
                      "alertText": "* Enter valid amount in '99999999,99999' format"
                },
                "BTR00807": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,8})(([\,][0-9]{1,7}))?$/,
                       "beforeComma": 8,
                       "afterComma":7,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '99999999,9999999' format"
                },
                "BTR00900": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})?$/,
                       "beforeComma": 9,
                       "afterComma": 0,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '999999999' format"
                },
                "BTR00901": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,1}))?$/,
                       "beforeComma": 9,
                       "afterComma": 1,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '999999999,9' format"
                },
                "BTR00902": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 9,
                       "afterComma": 2,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '999999999,99' format"
                },
                "BTR00903": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,3}))?$/,
                       "beforeComma": 9,
                       "afterComma": 3,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '999999999,999' format"
                },
                "BTR00905": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,9})(([\,][0-9]{1,5}))?$/,
                       "beforeComma": 9,
                       "afterComma": 5,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '999999999,99999' format"
                }, 
                "BTR01000": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,10})?$/,
                       "beforeComma": 10,
                       "afterComma": 0,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999' format"
                },
                "BTR01001": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,10})(([\,][0-9]{1,1}))?$/,
                       "beforeComma": 10,
                       "afterComma": 1,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999,9' format"
                },
                "BTR01002": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,10})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 10,
                       "afterComma": 2,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999,99' format"
                },
                "BTR01003": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,10})(([\,][0-9]{1,3}))?$/,
                       "beforeComma": 10,
                       "afterComma": 3,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999,999' format"
                },
                 "BTR01004": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,10})(([\,][0-9]{1,4}))?$/,
                       "beforeComma": 10,
                       "afterComma": 4,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999,9999' format"
                },                
                "BTR01005": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,10})(([\,][0-9]{1,5}))?$/,
                       "beforeComma": 10,
                       "afterComma": 5,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999,99999' format"
                },
                "BTR01102": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,11})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 11,
                       "afterComma": 2,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '99999999999,99' format"
                },
                "BTR01302": {
                      // "regex": /^[\+\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,13})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 13,
                       "afterComma": 2,
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999999999,99' format"
                },  
                "BTRLVE01": {
                    // "regex": /^(([0-9]{1,2}))$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "amountRange": ["0:23"],
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": "* Enter valid amount between 0 and 23."
                },
                "BTRLVE02": {
                    // "regex": /^(([0-9]{1,2}))$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "amountRange": ["0:59"],
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": "* Enter valid amount between 0 and 59."
                },     
                "BTRLVE03": {
                    // "regex": /^(([0-9]{1,2}))$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "amountRange": ["0:24"],
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": "* Enter valid amount between 0 and 24."
                },  
                "BTRLVF01": {
                    // "regex": /^(([0-9]{1,2}))$/,
                     "beforeComma": 2,
                     "afterComma":0,
                     "amountRange": ["0:10"],
                     "plus": "+",
                     "minus": "-",
                     "alertText": "* Enter valid amount in '99' format.",
                     "alertTextRange": "* Enter valid amount between 0 and 10."
                },
                "BTRN0700": {
                    //   "regex": /^[\-]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,7})?$/,
                       "beforeComma": 7,
                       "afterComma": 0,
                       "amountRange": ["<0"],
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '9999999' format.",
                       "alertTextRange": "* Enter valid amount less than 0"                                            
                },
                "BTRW0202": {
                     //  "regex": /^[\+]?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]{1,2})(([\,][0-9]{1,2}))?$/,
                       "beforeComma": 2,
                       "afterComma": 2,
                       "amountRange": ["0:99,99"],
                       "plus": "+",
                       "minus": "-",
                       "alertText": "* Enter valid amount in '99,99' format.",
                       "alertTextRange": "* Enter valid amount between 0 and 99,99"
                },                
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                 "ajaxNameCallPhp": {
                        // remote json service location
                        "url": "phpajax/ajaxValidateFieldName.php",
                        // error
                        "alertText": "* This name is already taken",
                        // speaks by itself
                        "alertTextLoad": "* Validating, please wait"
                    },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
                //tls warning:homegrown not fielded
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded
                "dateTimeFormat": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
                }
            };

        }
    };

    $.validationEngineLanguage.newLang();

})(jQuery);
