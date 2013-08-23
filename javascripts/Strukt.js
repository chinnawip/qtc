module('Strukt');

   var field = $('<input></input>'),
      result;


   var _struktComment = function () { 
         return 'Input: ' + field.val() + ' , Result: ' + result;
      };

   var _runStrukt = function(_rule, _value) {
         field.val(_value);
         $.methodStrukt(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultString'); 
      };

   var _runStruktwithError = function(_rule, _value) {
         field.val(_value);
         $.methodStrukt(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultErrorText'); 
      };

test('STR010', function() {
   $.customOptions.allrules['STR010'] = {
      'struktFormat': [["'32345.'10000:39999"],["'99.'GG10000:39999AA'77.'10000:39999"]],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR010'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

    result = _runStrukt(_rule, '32345.10000');
    strictEqual(result, '32345.10000', _struktComment());
 
});

test('STR020', function() {
   $.customOptions.allrules['STR020'] = {
      'struktFormat': [['%GG..','%KK-.'], ['%GG...','%KK-.']],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR020'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

    result = _runStrukt(_rule, 'adsdad1232%$43AZ1s');
    strictEqual(result, 'adsdad1232%$43azs', _struktComment());
 
});
test('STR030', function() {
   $.customOptions.allrules['STR030'] = {
      'struktFormat': [['10000:23000AA','.GG']],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

    result = _runStruktwithError(_rule, '24000fs');
    strictEqual(result, _alertText, _struktComment());
 
});
