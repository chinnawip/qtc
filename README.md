Main purpose of this project is that to add new validation for amount and date. The validation rule is been defined in the resource file (jquery.validationEngine-en.js)

How to use validation for those fields?


For amount:

<input value="" class="validate[amount[ADV0500]] text-input" type="text" name="amountid53" id="amountid53" />
Rule definition:
 "ADV0500": {
             "beforeComma": 5,
             "afterComma":0,
             "amountRange": [">0"],
             "plus": "+",
             "minus": "-",
             "alertText": "* Enter valid amount in '99999' format.",
             "alertTextRange": " Please enter valid amount range >0"
            }

For Date:
<input value="" class="validate[date[DAT00003]] text-input" type="text" name="date1" id="date1" />

Rule definition:
 "DAT00003": {
              "dateFormat": ["TTMM","T.M."],
              "dateFormatOutput": "TTMM",
              "alertText": "* Please enter valid date in one of these formats"
              }



For more details about the usage of these fields, please look at the "jquery.validationEngine-en.js"  and "demoAmountAndDateValidation.html"

I can be reached at chinna_wip@yahoo.com if any queries on this project.

                               *** Happy Validation ***
