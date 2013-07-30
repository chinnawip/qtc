module('Betragregeln');

   var field = $('<input></input>'),
      result;

   var _amountComment = function () { 
         return 'Input: ' + field.val() + ' , Result: ' + result;
      };

   var _runAmount = function(_rule, _value) {
         field.val(_value);
         $.methodAmount(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultString'); 
      };

   var _runAmountwithError = function(_rule, _value) {
         field.val(_value);
         $.methodAmount(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultErrorText'); 
      };


test('ADV0200', function() {
   $.customOptions.allrules['ADV0200'] = {
         'beforeComma': 2,
         'afterComma': 0,
         'amountRange': ['>0'],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': ' Please enter valid amount range >0'
      };

   var _rule = ['','ADV0200'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '07');
   strictEqual(result, 'C0C7',  _amountComment());

   result = _runAmount(_rule, '99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+11');
   strictEqual(result, 'C1C1',  _amountComment());   

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-7');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());
});
test('ADV0500', function() {
   $.customOptions.allrules['ADV0500'] = {
         'beforeComma': 5,
         'afterComma':0,
         'amountRange': ['>0'],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999" format.',
         'alertTextRange': ' Please enter valid amount range >0'
      };
   var _rule = ['','ADV0500'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777');
   strictEqual(result, 'C0C0C7C7C7',  _amountComment());

   result = _runAmount(_rule, '123');
   strictEqual(result, 'C0C0C1C2C3',  _amountComment());

   result = _runAmountwithError(_rule, '123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99999');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-777');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777');
   strictEqual(result, 'C0C0C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());


});

test('BTRM0100', function() {
   $.customOptions.allrules['BTRM0100'] = {
         'beforeComma': 1,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "9" format'
      };
   var _rule = ['','BTRM0100'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C1',  _amountComment());

   result = _runAmount(_rule, '9');
   strictEqual(result, 'C9',  _amountComment());

   result = _runAmount(_rule, '7');
   strictEqual(result, 'C7',  _amountComment());

   result = _runAmountwithError(_rule, '12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C1',  _amountComment());

   result = _runAmount(_rule, '+9');
   strictEqual(result, 'C9',  _amountComment());

   result = _runAmount(_rule, '+7');
   strictEqual(result, 'C7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());


});
test('BTRM0101', function() {
   $.customOptions.allrules['BTRM0101'] = {
         'beforeComma': 1,
         'afterComma':1,
         'plus': '+',
         'alertText': '* Enter valid amount in "9,9" format'
      };
   var _rule = ['','BTRM0101'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '9,9');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '7,7');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,9');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,7');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9,9');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7,7');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());


});

test('BTRM0102', function() {
   $.customOptions.allrules['BTRM0102'] = {
         'beforeComma': 1,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "9,99" format'
      };

   var _rule = ['','BTRM0102'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,99');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,77');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,99');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,77');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,00');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());


});

test('BTRM0104', function() {
   $.customOptions.allrules['BTRM0104'] = {
         'beforeComma': 1,
         'afterComma':4,
         'plus': '+',
         'alertText': '* Enter valid amount in "9,9999" format'
      };

   var _rule = ['','BTRM0104'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,9999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,7777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,9999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,7777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7,7777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());


});
test('BTRM0106', function() {
   $.customOptions.allrules['BTRM0106'] = {
         'beforeComma': 1,
         'afterComma':6,
         'plus': '+',
         'alertText': '* Enter valid amount in "9,999999" format'
      };

   var _rule = ['','BTRM0106'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,0123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7,777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());


});
test('BTRM0107', function() {
   $.customOptions.allrules['BTRM0107'] = {
         'beforeComma': 1,
         'afterComma':7,
         'plus': '+',
         'alertText': '* Enter valid amount in "9,9999999" format'
      };

   var _rule = ['','BTRM0107'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,0000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,01234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9,9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7,7777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());


   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0200', function() {
   $.customOptions.allrules['BTRM0200'] = {
         'beforeComma': 2,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "99" format'
      };
   var _rule = ['','BTRM0200'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0201', function() {
   $.customOptions.allrules['BTRM0201'] = {
         'beforeComma': 2,
         'afterComma':1,
         'plus': '+',
         'alertText': '* Enter valid amount in "99,9" format'
      };

   var _rule = ['','BTRM0201'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,9');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,7');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,9');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,7');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99,9');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77,7');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0202', function() {
   $.customOptions.allrules['BTRM0202'] = {
         'beforeComma': 2,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "99,99" format'
      };

   var _rule = ['','BTRM0202'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,99');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,77');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,99');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,77');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0205', function() {
   $.customOptions.allrules['BTRM0205'] = {
         'beforeComma': 2,
         'afterComma':5,
         'plus': '+',
         'alertText': '* Enter valid amount in "99,99999" format'
      };

   var _rule = ['','BTRM0205'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77,77777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0207', function() {
   $.customOptions.allrules['BTRM0207'] = {
         'beforeComma': 2,
         'afterComma':7,
         'plus': '+',
         'alertText': '* Enter valid amount in "99,9999999" format'
      };

   var _rule = ['','BTRM0207'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99,9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77,7777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0208', function() {
   $.customOptions.allrules['BTRM0208'] = {
         'beforeComma': 2,
         'afterComma':8,
         'plus': '+',
         'alertText': '* Enter valid amount in "99,99999999" format'
      };

   var _rule = ['','BTRM0208'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99,99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77,77777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0300', function() {
   $.customOptions.allrules['BTRM0300'] = {
         'beforeComma': 3,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "999" format'
      };

   var _rule = ['','BTRM0300'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0301', function() {
   $.customOptions.allrules['BTRM0301'] = {
         'beforeComma': 3,
         'afterComma':1,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,9" format'
      };

   var _rule = ['','BTRM0301'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,9');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,7');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,9');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,7');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,9');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,7');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0302', function() {
   $.customOptions.allrules['BTRM0302'] = {
         'beforeComma': 3,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,99" format'
      };

   var _rule = ['','BTRM0302'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,99');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,77');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,99');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,77');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('BTRM0303', function() {
   $.customOptions.allrules['BTRM0303'] = {
         'beforeComma': 3,
         'afterComma':3,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,999" format'
      };

   var _rule = ['','BTRM0303'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('BTRM0304', function() {
   $.customOptions.allrules['BTRM0304'] = {
         'beforeComma': 3,
         'afterComma':4,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,9999" format'
      };
   var _rule = ['','BTRM0304'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,7777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0305', function() {
   $.customOptions.allrules['BTRM0305'] = {
         'beforeComma': 3,
         'afterComma':5,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,99999" format'
      };

   var _rule = ['','BTRM0305'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,77777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0308', function() {
   $.customOptions.allrules['BTRM0308'] = {
         'beforeComma': 3,
         'afterComma':8,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,99999999" format'
      };

   var _rule = ['','BTRM0308'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,77777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0309', function() {
   $.customOptions.allrules['BTRM0309'] = {
         'beforeComma': 3,
         'afterComma':9,
         'plus': '+',
         'alertText': '* Enter valid amount in "999,999999999" format'
      };

   var _rule = ['','BTRM0309'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,000000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,000000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,123456789');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999,9999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,000000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999,999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777,777777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0400', function() {
   $.customOptions.allrules['BTRM0400'] = {
         'beforeComma': 4,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999" format'
      };

   var _rule = ['','BTRM0400'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0402', function() {
   $.customOptions.allrules['BTRM0402'] = {
         'beforeComma': 4,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999,99" format'
      };

   var _rule = ['','BTRM0402'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,77');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,77');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0404', function() {
   $.customOptions.allrules['BTRM0404'] = {
         'beforeComma': 4,
         'afterComma':4,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999,9999" format'
      };

   var _rule = ['','BTRM0404'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345,1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777,7777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0407', function() {
   $.customOptions.allrules['BTRM0407'] = {
         'beforeComma': 4,
         'afterComma':7,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999,9999999" format'
      };

   var _rule = ['','BTRM0407'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345,1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999,99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999,9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777,7777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0500', function() {
   $.customOptions.allrules['BTRM0500'] = {
         'beforeComma': 5,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999"format'
      };

   var _rule = ['','BTRM0500'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0502', function() {
   $.customOptions.allrules['BTRM0502'] = {
         'beforeComma': 5,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999,99" format'
      };

   var _rule = ['','BTRM0502'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0503', function() {
   $.customOptions.allrules['BTRM0503'] = {
         'beforeComma': 5,
         'afterComma':3,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999,999"  format'
      };

   var _rule = ['','BTRM0503'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456,123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777,777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0504', function() {
   $.customOptions.allrules['BTRM0504'] = {
         'beforeComma': 5,
         'afterComma':4,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999,9999" format'
      };

   var _rule = ['','BTRM0504'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456,1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777,7777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0600', function() {
   $.customOptions.allrules['BTRM0600'] = {
         'beforeComma': 6,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999"  format'
      };

   var _rule = ['','BTRM0600'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0602', function() {
   $.customOptions.allrules['BTRM0602'] = {
         'beforeComma': 6,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999,99" format'
      };

   var _rule = ['','BTRM0602'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0604', function() {
   $.customOptions.allrules['BTRM0604'] = {
         'beforeComma': 6,
         'afterComma':4,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999,9999" format'
      };

   var _rule = ['','BTRM0604'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777,7777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0605', function() {
   $.customOptions.allrules['BTRM0605'] = {
         'beforeComma': 6,
         'afterComma':5,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999,99999" format'
      };

   var _rule = ['','BTRM0605'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777,77777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0608', function() {
   $.customOptions.allrules['BTRM0608'] = {
         'beforeComma': 6,
         'afterComma':8,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999,99999999" format'
      };

   var _rule = ['','BTRM0608'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999,999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999,99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777,77777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0700', function() {
   $.customOptions.allrules['BTRM0700'] = {
         'beforeComma': 7,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999999" format'
      };
   var _rule = ['','BTRM0700'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0702', function() {
   $.customOptions.allrules['BTRM0702'] = {
         'beforeComma': 7,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999999,99" format'
      };

   var _rule = ['','BTRM0702'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0800', function() {
   $.customOptions.allrules['BTRM0800'] = {
         'beforeComma': 8,
         'afterComma':0,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999" format'
      };

   var _rule = ['','BTRM0800'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0801', function() {
   $.customOptions.allrules['BTRM0801'] = {
         'beforeComma': 8,
         'afterComma':1,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999,9" format'
      };

   var _rule = ['','BTRM0801'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,2');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999,9');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777,7');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0802', function() {
   $.customOptions.allrules['BTRM0802'] = {
         'beforeComma': 8,
         'afterComma':2,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999,99" format'
      };

   var _rule = ['','BTRM0802'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0807', function() {
   $.customOptions.allrules['BTRM0807'] = {
         'beforeComma': 8,
         'afterComma':7,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999,9999999" format'
      };

   var _rule = ['','BTRM0807'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999,99999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,0000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999,9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777,7777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0900', function() {
   $.customOptions.allrules['BTRM0900'] = {
         'beforeComma': 9,
         'afterComma': 0,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999999" format'
      };

   var _rule = ['','BTRM0900'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0902', function() {
   $.customOptions.allrules['BTRM0902'] = {
         'beforeComma': 9,
         'afterComma': 2,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999999,99" format'
      };

   var _rule = ['','BTRM0902'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0905', function() {
   $.customOptions.allrules['BTRM0905'] = {
         'beforeComma': 9,
         'afterComma': 5,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999999,99999" format'
      };

   var _rule = ['','BTRM0905'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999999,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777777,77777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM0906', function() {
   $.customOptions.allrules['BTRM0906'] = {
         'beforeComma': 9,
         'afterComma': 6,
         'plus': '+',
         'alertText': '* Enter valid amount in "999999999,999999" format'
      };
   var _rule = ['','BTRM0906'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999999,9999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999999,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777777,777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1000', function() {
   $.customOptions.allrules['BTRM1000'] = {
         'beforeComma': 10,
         'afterComma': 0,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999999999" format'
      };

   var _rule = ['','BTRM1000'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1002', function() {
   $.customOptions.allrules['BTRM1002'] = {
         'beforeComma': 10,
         'afterComma': 2,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999999999,99" format'
      };

   var _rule = ['','BTRM1002'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999999999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1005', function() {
   $.customOptions.allrules['BTRM1005'] = {
         'beforeComma': 10,
         'afterComma': 5,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999999999,99999" format'
      };

   var _rule = ['','BTRM1005'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999999999,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-999999999,99999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-777777777,77777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1100', function() {
   $.customOptions.allrules['BTRM1100'] = {
         'beforeComma': 11,
         'afterComma': 0,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999999" format'
      };

   var _rule = ['','BTRM1100'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1102', function() {
   $.customOptions.allrules['BTRM1102'] = {
         'beforeComma': 11,
         'afterComma': 2,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999999,99" format'
      };

   var _rule = ['','BTRM1102'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789012,12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777777,77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1300', function() {
   $.customOptions.allrules['BTRM1300'] = {
         'beforeComma': 13,
         'afterComma': 0,
         'plus': '+',
         'alertText': '* Enter valid amount in "9999999999999" format'
      };

   var _rule = ['','BTRM1300'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-9999999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-7777777777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRM1400', function() {
   $.customOptions.allrules['BTRM1400'] = {
         'beforeComma': 14,
         'afterComma': 0,
         'plus': '+',
         'alertText': '* Enter valid amount in "99999999999999" format'
      };

   var _rule = ['','BTRM1400'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999999999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99999999999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-77777777777777');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00100', function() {
   $.customOptions.allrules['BTR00100'] = {
         'beforeComma': 1,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9" format'
      };

   var _rule = ['','BTR00100'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C1',  _amountComment());

   result = _runAmount(_rule, '9');
   strictEqual(result, 'C9',  _amountComment());

   result = _runAmount(_rule, '7');
   strictEqual(result, 'C7',  _amountComment());

   result = _runAmountwithError(_rule, '12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-1');
   strictEqual(result, 'D1',  _amountComment());


   result = _runAmount(_rule, '-9');
   strictEqual(result, 'D9',  _amountComment());


   result = _runAmount(_rule, '-7');
   strictEqual(result, 'D7',  _amountComment());


   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C1',  _amountComment());

   result = _runAmount(_rule, '+9');
   strictEqual(result, 'C9',  _amountComment());

   result = _runAmount(_rule, '+7');
   strictEqual(result, 'C7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00101', function() {
   $.customOptions.allrules['BTR00101'] = {
         'beforeComma': 1,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,9" format'
      };

   var _rule = ['','BTR00101'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '9,9');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '7,7');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,9');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,7');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,1');
   strictEqual(result, 'C0D1',  _amountComment());

   result = _runAmount(_rule, '-9,9');
   strictEqual(result, 'C9D9',  _amountComment());

   result = _runAmount(_rule, '-7,7');
   strictEqual(result, 'C7D7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00102', function() {
   $.customOptions.allrules['BTR00102'] = {
         'beforeComma': 1,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,99" format'
      };

   var _rule = ['','BTR00102'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,99');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,77');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,99');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,77');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,00');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,1');
   strictEqual(result, 'C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-9,99');
   strictEqual(result, 'C9C9D9',  _amountComment());

   result = _runAmount(_rule, '-7,77');
   strictEqual(result, 'C7C7D7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00103', function() {
   $.customOptions.allrules['BTR00103'] = {
         'beforeComma': 1,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,999"  format'
      };

   var _rule = ['','BTR00103'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,001');
   strictEqual(result, 'C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-9,999');
   strictEqual(result, 'C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '-7,777');
   strictEqual(result, 'C7C7C7D7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00104', function() {
   $.customOptions.allrules['BTR00104'] = {
         'beforeComma': 1,
         'afterComma':4,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,9999" format'
      };

   var _rule = ['','BTR00104'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,9999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,7777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,9999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,7777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,001');
   strictEqual(result, 'C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1,1111');
   strictEqual(result, 'C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2,2222');
   strictEqual(result, 'C2C2C2C2D2',  _amountComment());

   result = _runAmount(_rule, '-3,3333');
   strictEqual(result, 'C3C3C3C3D3',  _amountComment());

   result = _runAmount(_rule, '-4,4444');
   strictEqual(result, 'C4C4C4C4D4',  _amountComment());

   result = _runAmount(_rule, '-5,5555');
   strictEqual(result, 'C5C5C5C5D5',  _amountComment());

   result = _runAmount(_rule, '-6,6666');
   strictEqual(result, 'C6C6C6C6D6',  _amountComment());

   result = _runAmount(_rule, '-7,7777');
   strictEqual(result, 'C7C7C7C7D7',  _amountComment());

   result = _runAmount(_rule, '-8,8888');
   strictEqual(result, 'C8C8C8C8D8',  _amountComment());

   result = _runAmount(_rule, '-9,9999');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00105', function() {
   $.customOptions.allrules['BTR00105'] = {
         'beforeComma': 1,
         'afterComma':5,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,99999" format'
      };

   var _rule = ['','BTR00105'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,99999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,77777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,99999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,77777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,1');
   strictEqual(result, 'C0C1C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-1,11111');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2,22222');
   strictEqual(result, 'C2C2C2C2C2D2',  _amountComment());

   result = _runAmount(_rule, '-3,33333');
   strictEqual(result, 'C3C3C3C3C3D3',  _amountComment());

   result = _runAmount(_rule, '-4,44444');
   strictEqual(result, 'C4C4C4C4C4D4',  _amountComment());

   result = _runAmount(_rule, '-5,55555');
   strictEqual(result, 'C5C5C5C5C5D5',  _amountComment());

   result = _runAmount(_rule, '-6,66666');
   strictEqual(result, 'C6C6C6C6C6D6',  _amountComment());

   result = _runAmount(_rule, '-7,77777');
   strictEqual(result, 'C7C7C7C7C7D7',  _amountComment());

   result = _runAmount(_rule, '-8,88888');
   strictEqual(result, 'C8C8C8C8C8D8',  _amountComment());

   result = _runAmount(_rule, '-9,99999');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00106', function() {
   $.customOptions.allrules['BTR00106'] = {
         'beforeComma': 1,
         'afterComma':6,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,999999" format'
      };

   var _rule = ['','BTR00106'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,0123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,00001');
   strictEqual(result, 'C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1,111111');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2,222222');
   strictEqual(result, 'C2C2C2C2C2C2D2',  _amountComment());

   result = _runAmount(_rule, '-3,333333');
   strictEqual(result, 'C3C3C3C3C3C3D3',  _amountComment());

   result = _runAmount(_rule, '-4,444444');
   strictEqual(result, 'C4C4C4C4C4C4D4',  _amountComment());

   result = _runAmount(_rule, '-5,555555');
   strictEqual(result, 'C5C5C5C5C5C5D5',  _amountComment());

   result = _runAmount(_rule, '-6,666666');
   strictEqual(result, 'C6C6C6C6C6C6D6',  _amountComment());

   result = _runAmount(_rule, '-7,777777');
   strictEqual(result, 'C7C7C7C7C7C7D7',  _amountComment());

   result = _runAmount(_rule, '-8,888888');
   strictEqual(result, 'C8C8C8C8C8C8D8',  _amountComment());

   result = _runAmount(_rule, '-9,999999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00112', function() {
   $.customOptions.allrules['BTR00112'] = {
         'beforeComma': 1,
         'afterComma':12,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9,999999999999" format'
      };

   var _rule = ['','BTR00112'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,000000000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9,999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7,777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,000000000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9,999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7,777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12,012345678901');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,0123456789012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,00000000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1,111111111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2,222222222222');
   strictEqual(result, 'C2C2C2C2C2C2C2C2C2C2C2C2D2',  _amountComment());

   result = _runAmount(_rule, '-3,333333333333');
   strictEqual(result, 'C3C3C3C3C3C3C3C3C3C3C3C3D3',  _amountComment());

   result = _runAmount(_rule, '-4,444444444444');
   strictEqual(result, 'C4C4C4C4C4C4C4C4C4C4C4C4D4',  _amountComment());

   result = _runAmount(_rule, '-5,555555555555');
   strictEqual(result, 'C5C5C5C5C5C5C5C5C5C5C5C5D5',  _amountComment());

   result = _runAmount(_rule, '-6,666666666666');
   strictEqual(result, 'C6C6C6C6C6C6C6C6C6C6C6C6D6',  _amountComment());

   result = _runAmount(_rule, '-7,777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7D7',  _amountComment());

   result = _runAmount(_rule, '-8,888888888888');
   strictEqual(result, 'C8C8C8C8C8C8C8C8C8C8C8C8D8',  _amountComment());

   result = _runAmount(_rule, '-9,999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00200', function() {
   $.customOptions.allrules['BTR00200'] = {
         'beforeComma': 2,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99" format'
      };

   var _rule = ['','BTR00200'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-10');
   strictEqual(result, 'C1D0',  _amountComment());


   result = _runAmount(_rule, '-11');
   strictEqual(result, 'C1D1',  _amountComment());


   result = _runAmount(_rule, '-12');
   strictEqual(result, 'C1D2',  _amountComment());

   result = _runAmount(_rule, '-13');
   strictEqual(result, 'C1D3',  _amountComment());

   result = _runAmount(_rule, '-14');
   strictEqual(result, 'C1D4',  _amountComment());

   result = _runAmount(_rule, '-15');
   strictEqual(result, 'C1D5',  _amountComment());

   result = _runAmount(_rule, '-16');
   strictEqual(result, 'C1D6',  _amountComment());

   result = _runAmount(_rule, '-17');
   strictEqual(result, 'C1D7',  _amountComment());

   result = _runAmount(_rule, '-18');
   strictEqual(result, 'C1D8',  _amountComment());

   result = _runAmount(_rule, '-99');
   strictEqual(result, 'C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00201', function() {
   $.customOptions.allrules['BTR00201'] = {
         'beforeComma': 2,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99,9" format'
      };

   var _rule = ['','BTR00201'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,9');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,7');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,9');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,7');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-01');
   strictEqual(result, 'C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-11,1');
   strictEqual(result, 'C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21,2');
   strictEqual(result, 'C2C1D2',  _amountComment());

   result = _runAmount(_rule, '-31,3');
   strictEqual(result, 'C3C1D3',  _amountComment());

   result = _runAmount(_rule, '-41,4');
   strictEqual(result, 'C4C1D4',  _amountComment());

   result = _runAmount(_rule, '-51,5');
   strictEqual(result, 'C5C1D5',  _amountComment());

   result = _runAmount(_rule, '-61,6');
   strictEqual(result, 'C6C1D6',  _amountComment());

   result = _runAmount(_rule, '-71,7');
   strictEqual(result, 'C7C1D7',  _amountComment());

   result = _runAmount(_rule, '-81,8');
   strictEqual(result, 'C8C1D8',  _amountComment());

   result = _runAmount(_rule, '-99,9');
   strictEqual(result, 'C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00202', function() {
   $.customOptions.allrules['BTR00202'] = {
         'beforeComma': 2,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99,99"  format'
      };

   var _rule = ['','BTR00202'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,99');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,77');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,99');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,77');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,00');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,10');
   strictEqual(result, 'C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-10,01');
   strictEqual(result, 'C1C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-20,02');
   strictEqual(result, 'C2C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-30,03');
   strictEqual(result, 'C3C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-40,04');
   strictEqual(result, 'C4C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-50,05');
   strictEqual(result, 'C5C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-60,06');
   strictEqual(result, 'C6C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-70,07');
   strictEqual(result, 'C7C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-80,08');
   strictEqual(result, 'C8C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-99,99');
   strictEqual(result, 'C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00203', function() {
   $.customOptions.allrules['BTR00203'] = {
         'beforeComma': 2,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99,999"  format'
      };

   var _rule = ['','BTR00203'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-01,010');
   strictEqual(result, 'C0C1C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-10,001');
   strictEqual(result, 'C1C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-20,002');
   strictEqual(result, 'C2C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-30,003');
   strictEqual(result, 'C3C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-40,004');
   strictEqual(result, 'C4C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-50,005');
   strictEqual(result, 'C5C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-60,006');
   strictEqual(result, 'C6C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-70,007');
   strictEqual(result, 'C7C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-80,008');
   strictEqual(result, 'C8C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-99,999');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00205', function() {
   $.customOptions.allrules['BTR00205'] = {
         'beforeComma': 2,
         'afterComma':5,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99,99999"  format'
      };

   var _rule = ['','BTR00205'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,00010');
   strictEqual(result, 'C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-01,00010');
   strictEqual(result, 'C0C1C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-10,00001');
   strictEqual(result, 'C1C0C0C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-20,00002');
   strictEqual(result, 'C2C0C0C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-30,00003');
   strictEqual(result, 'C3C0C0C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-40,00004');
   strictEqual(result, 'C4C0C0C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-50,00005');
   strictEqual(result, 'C5C0C0C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-60,00006');
   strictEqual(result, 'C6C0C0C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-70,00007');
   strictEqual(result, 'C7C0C0C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-80,00008');
   strictEqual(result, 'C8C0C0C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-99,99999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00300', function() {
   $.customOptions.allrules['BTR00300'] = {
         'beforeComma': 3,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999"   format'
      };

   var _rule = ['','BTR00300'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-10');
   strictEqual(result, 'C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-111');
   strictEqual(result, 'C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-212');
   strictEqual(result, 'C2C1D2',  _amountComment());

   result = _runAmount(_rule, '-313');
   strictEqual(result, 'C3C1D3',  _amountComment());

   result = _runAmount(_rule, '-414');
   strictEqual(result, 'C4C1D4',  _amountComment());

   result = _runAmount(_rule, '-515');
   strictEqual(result, 'C5C1D5',  _amountComment());

   result = _runAmount(_rule, '-616');
   strictEqual(result, 'C6C1D6',  _amountComment());

   result = _runAmount(_rule, '-717');
   strictEqual(result, 'C7C1D7',  _amountComment());

   result = _runAmount(_rule, '-818');
   strictEqual(result, 'C8C1D8',  _amountComment());

   result = _runAmount(_rule, '-999');
   strictEqual(result, 'C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00301', function() {
   $.customOptions.allrules['BTR00301'] = {
         'beforeComma': 3,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999,9"  format'
      };

   var _rule = ['','BTR00301'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,9');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,7');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,9');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,7');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-011');
   strictEqual(result, 'C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111,1');
   strictEqual(result, 'C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211,2');
   strictEqual(result, 'C2C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311,3');
   strictEqual(result, 'C3C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411,4');
   strictEqual(result, 'C4C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511,5');
   strictEqual(result, 'C5C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611,6');
   strictEqual(result, 'C6C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711,7');
   strictEqual(result, 'C7C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811,8');
   strictEqual(result, 'C8C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999,9');
   strictEqual(result, 'C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00302', function() {
   $.customOptions.allrules['BTR00302'] = {
         'beforeComma': 3,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in  "999,99"  format'
      };

   var _rule = ['','BTR00302'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,99');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,77');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,99');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,77');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,00');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,10');
   strictEqual(result, 'C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-001,10');
   strictEqual(result, 'C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-100,01');
   strictEqual(result, 'C1C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-200,02');
   strictEqual(result, 'C2C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-300,03');
   strictEqual(result, 'C3C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-400,04');
   strictEqual(result, 'C4C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-500,05');
   strictEqual(result, 'C5C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-600,06');
   strictEqual(result, 'C6C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-700,07');
   strictEqual(result, 'C7C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-800,08');
   strictEqual(result, 'C8C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-999,99');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00303', function() {
   $.customOptions.allrules['BTR00303'] = {
         'beforeComma': 3,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999,999"  format'
      };

   var _rule = ['','BTR00303'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,010');
   strictEqual(result, 'C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-01,010');
   strictEqual(result, 'C0C0C1C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-100,001');
   strictEqual(result, 'C1C0C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-200,002');
   strictEqual(result, 'C2C0C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-300,003');
   strictEqual(result, 'C3C0C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-400,004');
   strictEqual(result, 'C4C0C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-500,005');
   strictEqual(result, 'C5C0C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-600,006');
   strictEqual(result, 'C6C0C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-700,007');
   strictEqual(result, 'C7C0C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-800,008');
   strictEqual(result, 'C8C0C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-999,999');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00304', function() {
   $.customOptions.allrules['BTR00304'] = {
         'beforeComma': 3,
         'afterComma':4,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999,9999"  format'
      };

   var _rule = ['','BTR00304'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-0,0010');
   strictEqual(result, 'C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-01,0010');
   strictEqual(result, 'C0C0C1C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-100,0001');
   strictEqual(result, 'C1C0C0C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-200,0002');
   strictEqual(result, 'C2C0C0C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-300,0003');
   strictEqual(result, 'C3C0C0C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-400,0004');
   strictEqual(result, 'C4C0C0C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-500,0005');
   strictEqual(result, 'C5C0C0C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-600,0006');
   strictEqual(result, 'C6C0C0C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-700,0007');
   strictEqual(result, 'C7C0C0C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-800,0008');
   strictEqual(result, 'C8C0C0C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-999,9999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00306', function() {
   $.customOptions.allrules['BTR00306'] = {
         'beforeComma': 3,
         'afterComma':6,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999,999999"  format'
      };

   var _rule = ['','BTR00306'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0,000010');
   strictEqual(result, 'C0C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-01,000010');
   strictEqual(result, 'C0C0C1C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-100,000001');
   strictEqual(result, 'C1C0C0C0C0C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-200,000002');
   strictEqual(result, 'C2C0C0C0C0C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-300,000003');
   strictEqual(result, 'C3C0C0C0C0C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-400,000004');
   strictEqual(result, 'C4C0C0C0C0C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-500,000005');
   strictEqual(result, 'C5C0C0C0C0C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-600,000006');
   strictEqual(result, 'C6C0C0C0C0C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-700,000007');
   strictEqual(result, 'C7C0C0C0C0C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-800,000008');
   strictEqual(result, 'C8C0C0C0C0C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-999,999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234,000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,0123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00308', function() {
   $.customOptions.allrules['BTR00308'] = {
         'beforeComma': 3,
         'afterComma':8,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999,99999999"   format'
      };

   var _rule = ['','BTR00308'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0,00000010');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-01,00000010');
   strictEqual(result, 'C0C0C1C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-100,00000001');
   strictEqual(result, 'C1C0C0C0C0C0C0C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-200,00000002');
   strictEqual(result, 'C2C0C0C0C0C0C0C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-300,00000003');
   strictEqual(result, 'C3C0C0C0C0C0C0C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-400,00000004');
   strictEqual(result, 'C4C0C0C0C0C0C0C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-500,00000005');
   strictEqual(result, 'C5C0C0C0C0C0C0C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-600,00000006');
   strictEqual(result, 'C6C0C0C0C0C0C0C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-700,00000007');
   strictEqual(result, 'C7C0C0C0C0C0C0C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-800,00000008');
   strictEqual(result, 'C8C0C0C0C0C0C0C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234,00000001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,012345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00400', function() {
   $.customOptions.allrules['BTR00400'] = {
         'beforeComma': 4,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999" format'
      };

   var _rule = ['','BTR00400'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-10');
   strictEqual(result, 'C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111');
   strictEqual(result, 'C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2112');
   strictEqual(result, 'C2C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3113');
   strictEqual(result, 'C3C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4114');
   strictEqual(result, 'C4C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5115');
   strictEqual(result, 'C5C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6116');
   strictEqual(result, 'C6C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7117');
   strictEqual(result, 'C7C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8118');
   strictEqual(result, 'C8C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999');
   strictEqual(result, 'C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());
   
   result = _runAmountwithError(_rule, '12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00401', function() {
   $.customOptions.allrules['BTR00401'] = {
         'beforeComma': 4,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999,9"  format'
      };

   var _rule = ['','BTR00401'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,9');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,7');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,9');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,7');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0000');
   strictEqual(result, 'C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0001,0');
   strictEqual(result, 'C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111,1');
   strictEqual(result, 'C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,2');
   strictEqual(result, 'C2C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,3');
   strictEqual(result, 'C3C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,4');
   strictEqual(result, 'C4C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,5');
   strictEqual(result, 'C5C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,6');
   strictEqual(result, 'C6C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,7');
   strictEqual(result, 'C7C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,8');
   strictEqual(result, 'C8C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,9');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00402', function() {
   $.customOptions.allrules['BTR00402'] = {
         'beforeComma': 4,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999,99"  format'
      };

   var _rule = ['','BTR00402'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,77');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,77');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0000');
   strictEqual(result, 'C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0001,00');
   strictEqual(result, 'C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111,11');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,12');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,13');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,14');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,15');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,16');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,17');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,18');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,99');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00403', function() {
   $.customOptions.allrules['BTR00403'] = {
         'beforeComma': 4,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999,999"  format'
      };

   var _rule = ['','BTR00403'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0000');
   strictEqual(result, 'C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0001,010');
   strictEqual(result, 'C0C0C0C1C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111,111');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,112');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,113');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,114');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,115');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,116');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,117');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,118');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00404', function() {
   $.customOptions.allrules['BTR00404'] = {
         'beforeComma': 4,
         'afterComma':4,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999,9999"  format'
      };

   var _rule = ['','BTR00404'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0001,0010');
   strictEqual(result, 'C0C0C0C1C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111,1111');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,1112');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,1113');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,1114');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,1115');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,1116');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,1117');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,1118');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,01234');
   strictEqual(result, _alertText,  _amountComment());
   
   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00405', function() {
   $.customOptions.allrules['BTR00405'] = {
         'beforeComma': 4,
         'afterComma':5,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999,99999"  format'
      };

   var _rule = ['','BTR00405'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0001,00010');
   strictEqual(result, 'C0C0C0C1C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111,11111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,11112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,11113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,11114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,11115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,11116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,11117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,11118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00407', function() {
   $.customOptions.allrules['BTR00407'] = {
         'beforeComma': 4,
         'afterComma':7,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999,9999999"  format'
      };

   var _rule = ['','BTR00407'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0,1');
   strictEqual(result, 'C0C0C0C0C1C0C0C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-0001,0000010');
   strictEqual(result, 'C0C0C0C1C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111,1111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,1111112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,1111113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,1111114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,1111115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,1111116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,1111117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,1111118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,0123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,01234567');
   strictEqual(result, _alertText,  _amountComment());
   
   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00500', function() {
   $.customOptions.allrules['BTR00500'] = {
         'beforeComma': 5,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999"  format'
      };

   var _rule = ['','BTR00500'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-11111');
   strictEqual(result, 'C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21112');
   strictEqual(result, 'C2C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31113');
   strictEqual(result, 'C3C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41114');
   strictEqual(result, 'C4C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51115');
   strictEqual(result, 'C5C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61116');
   strictEqual(result, 'C6C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71117');
   strictEqual(result, 'C7C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81118');
   strictEqual(result, 'C8C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00501', function() {
   $.customOptions.allrules['BTR00501'] = {
         'beforeComma': 5,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999,9"  format'
      };

   var _rule = ['','BTR00501'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,9');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,7');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,9');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,7');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00000');
   strictEqual(result, 'C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00001');
   strictEqual(result, 'C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111,1');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,2');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,3');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,4');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,5');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,6');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,7');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,8');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,9');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00502', function() {
   $.customOptions.allrules['BTR00502'] = {
         'beforeComma': 5,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999,99"  format'
      };

   var _rule = ['','BTR00502'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00000');
   strictEqual(result, 'C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00001');
   strictEqual(result, 'C0C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111,11');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,12');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,13');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,14');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,15');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,16');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,17');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,18');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,99');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00503', function() {
   $.customOptions.allrules['BTR00503'] = {
         'beforeComma': 5,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999,999"  format'
      };

   var _rule = ['','BTR00503'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00001,000');
   strictEqual(result, 'C0C0C0C0C1C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00600', function() {
   $.customOptions.allrules['BTR00600'] = {
         'beforeComma': 6,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999"  format'
      };

   var _rule = ['','BTR00600'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-111111');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211112');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311113');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411114');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511115');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611116');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711117');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811118');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00601', function() {
   $.customOptions.allrules['BTR00601'] = {
         'beforeComma': 6,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999,9"  format'
      };

   var _rule = ['','BTR00601'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,1');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,2');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,3');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,4');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,5');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,6');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,7');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,8');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,9');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00602', function() {
   $.customOptions.allrules['BTR00602'] = {
         'beforeComma': 6,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999,99" format'
      };

   var _rule = ['','BTR00602'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001,10');
   strictEqual(result, 'C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00603', function() {
   $.customOptions.allrules['BTR00603'] = {
         'beforeComma': 6,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999,999" format'
      };

   var _rule = ['','BTR00603'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001,110');
   strictEqual(result, 'C0C0C0C0C0C1C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00608', function() {
   $.customOptions.allrules['BTR00608'] = {
         'beforeComma': 6,
         'afterComma':8,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999,99999999" format'
      };

   var _rule = ['','BTR00608'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001,10');
   strictEqual(result, 'C0C0C0C0C0C1C1C0C0C0C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-111111,11111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,11111112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,11111113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,11111114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,11111115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,11111116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,11111117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,11111118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,012345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,012345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('BTR00700', function() {
   $.customOptions.allrules['BTR00700'] = {
         'beforeComma': 7,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999" format'
      };

   var _rule = ['','BTR00700'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-1111111');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111112');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111113');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111114');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111115');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111116');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111117');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111118');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00701', function() {
   $.customOptions.allrules['BTR00701'] = {
         'beforeComma': 7,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999,9" format'
      };

   var _rule = ['','BTR00701'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,1');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,2');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,3');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,4');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,5');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,6');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,7');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,8');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00702', function() {
   $.customOptions.allrules['BTR00702'] = {
         'beforeComma': 7,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999,99" format'
      };

   var _rule = ['','BTR00702'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00703', function() {
   $.customOptions.allrules['BTR00703'] = {
         'beforeComma': 7,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999,999" format'
      };

   var _rule = ['','BTR00703'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-0000001,110');
   strictEqual(result, 'C0C0C0C0C0C0C1C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00800', function() {
   $.customOptions.allrules['BTR00800'] = {
         'beforeComma': 8,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999" format'
      };

   var _rule = ['','BTR00800'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-11111111');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111112');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111113');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111114');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111115');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111116');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111117');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111118');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00801', function() {
   $.customOptions.allrules['BTR00801'] = {
         'beforeComma': 8,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999,9" format'
      };

   var _rule = ['','BTR00801'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111111,1');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111,2');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111,3');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111,4');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111,5');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111,6');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111,7');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111,8');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345678,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00802', function() {
   $.customOptions.allrules['BTR00802'] = {
         'beforeComma': 8,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999,99" format'
      };

   var _rule = ['','BTR00802'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345678,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00803', function() {
   $.customOptions.allrules['BTR00803'] = {
         'beforeComma': 8,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999,999" format'
      };

   var _rule = ['','BTR00803'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00000001,110');
   strictEqual(result, 'C0C0C0C0C0C0C0C1C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00805', function() {
   $.customOptions.allrules['BTR00805'] = {
         'beforeComma': 8,
         'afterComma':5,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999,99999" format'
      };

   var _rule = ['','BTR00805'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00000001,110');
   strictEqual(result, 'C0C0C0C0C0C0C0C1C1C1C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111111,11111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111,11112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111,11113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111,11114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111,11115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111,11116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111,11117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111,11118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00807', function() {
   $.customOptions.allrules['BTR00807'] = {
         'beforeComma': 8,
         'afterComma':7,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999,9999999" format'
      };

   var _rule = ['','BTR00807'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-00000001,110');
   strictEqual(result, 'C0C0C0C0C0C0C0C1C1C1C0C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111111,1111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111,1111112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111,1111113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111,1111114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111,1111115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111,1111116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111,1111117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111,1111118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999,9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,0123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,01234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00900', function() {
   $.customOptions.allrules['BTR00900'] = {
         'beforeComma': 9,
         'afterComma': 0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999999" format'
      };

   var _rule = ['','BTR00900'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-111111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());


   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00901', function() {
   $.customOptions.allrules['BTR00901'] = {
         'beforeComma': 9,
         'afterComma': 1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999999,9" format'
      };

   var _rule = ['','BTR00901'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111111,1');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111111,2');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111111,3');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111111,4');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111111,5');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111111,6');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111111,7');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111111,8');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00902', function() {
   $.customOptions.allrules['BTR00902'] = {
         'beforeComma': 9,
         'afterComma': 2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999999,99" format'
      };

   var _rule = ['','BTR00902'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00903', function() {
   $.customOptions.allrules['BTR00903'] = {
         'beforeComma': 9,
         'afterComma': 3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999999,999" format'
      };

   var _rule = ['','BTR00903'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000000001,110');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR00905', function() {
   $.customOptions.allrules['BTR00905'] = {
         'beforeComma': 9,
         'afterComma': 5,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "999999999,99999" format'
      };

   var _rule = ['','BTR00905'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1C1C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-111111111,11111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111111,11112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111111,11113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111111,11114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111111,11115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111111,11116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111111,11117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111111,11118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01000', function() {
   $.customOptions.allrules['BTR01000'] = {
         'beforeComma': 10,
         'afterComma': 0,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999" format'
      };

   var _rule = ['','BTR01000'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-1111111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9D9',  _amountComment());


   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01001', function() {
   $.customOptions.allrules['BTR01001'] = {
         'beforeComma': 10,
         'afterComma': 1,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999,9" format'
      }

   var _rule = ['','BTR01001'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111111,1');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111111,2');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111111,3');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111111,4');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111111,5');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111111,6');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111111,7');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111111,8');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01002', function() {
   $.customOptions.allrules['BTR01002'] = {
         'beforeComma': 10,
         'afterComma': 2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999,99" format'
      };

   var _rule = ['','BTR01002'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01003', function() {
   $.customOptions.allrules['BTR01003'] = {
         'beforeComma': 10,
         'afterComma': 3,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999,999" format'
      };

   var _rule = ['','BTR01003'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111111111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01004', function() {
   $.customOptions.allrules['BTR01004'] = {
         'beforeComma': 10,
         'afterComma': 4,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999,9999" format'
      };

   var _rule = ['','BTR01004'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,0001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,7777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111111111,1111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111111,1112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111111,1113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111111,1114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111111,1115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111111,1116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111111,1117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111111,1118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999,9999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,0001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,01234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01005', function() {
   $.customOptions.allrules['BTR01005'] = {
         'beforeComma': 10,
         'afterComma': 5,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999,99999" format'
      };

   var _rule = ['','BTR01005'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,00001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777,77777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1C0C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111111111,11111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111111,11112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111111,11113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111111,11114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111111,11115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111111,11116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111111,11117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111111,11118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999,99999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,00001');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,012345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01102', function() {
   $.customOptions.allrules['BTR01102'] = {
         'beforeComma': 11,
         'afterComma': 2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99999999999,99" format'
      };

   var _rule = ['','BTR01102'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456789012,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345678901,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTR01302', function() {
   $.customOptions.allrules['BTR01302'] = {
         'beforeComma': 13,
         'afterComma': 2,
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999999999,99" format'
      };

   var _rule = ['','BTR01302'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
      

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111111111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901234,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567890123,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRLVE01', function() {
   $.customOptions.allrules['BTRLVE01'] = {
         'beforeComma': 2,
         'afterComma':0,
         'amountRange': ["0:23","70:90"],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': '* Enter valid amount between 0 and 23.'
      };

   var _rule = ['','BTRLVE01'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRLVE02', function() {
   $.customOptions.allrules['BTRLVE02'] = {
         'beforeComma': 2,
         'afterComma':0,
         'amountRange': ["0:59"],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': '* Enter valid amount between 0 and 59.'
      };

   var _rule = ['','BTRLVE02'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRLVE03', function() {
   $.customOptions.allrules['BTRLVE03'] = {
         'beforeComma': 2,
         'afterComma':0,
         'amountRange': ['0:24'],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': '* Enter valid amount between 0 and 24.'
      };

   var _rule = ['','BTRLVE03'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRLVF01', function() {
   $.customOptions.allrules['BTRLVF01'] = {
         'beforeComma': 2,
         'afterComma':0,
         'amountRange': ['0:10'],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': '* Enter valid amount between 0 and 10.'
      };

   var _rule = ['','BTRLVF01'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;
      

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRN0700', function() {
   $.customOptions.allrules['BTRN0700'] = {
         'beforeComma': 7,
         'afterComma': 0,
         'amountRange': ['<0'],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "9999999" format.',
         'alertTextRange': '* Enter valid amount less than 0'                                            
      };

   var _rule = ['','BTRN0700'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;
      

   result = _runAmount(_rule, '-1111111');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111112');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111113');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111114');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111115');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111116');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111117');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111118');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '9999999');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '7777777');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+9999999');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+7777777');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('BTRW0202', function() {
   $.customOptions.allrules['BTRW0202'] = {
         'beforeComma': 2,
         'afterComma': 2,
         'amountRange': ["0:99,99"],
         'plus': '+',
         'minus': '-',
         'alertText': '* Enter valid amount in "99,99" format.',
         'alertTextRange': '* Enter valid amount between 0 and 99,99'
      };

   var _rule = ['','BTRW0202'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;
      
   result = _runAmount(_rule, '12');
   strictEqual(result, 'C1C2C0C0',  _amountComment());

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,99');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,77');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,99');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,77');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123,00');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-00,10');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-01,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-10,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-20,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-30,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-40,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-50,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-60,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-70,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-80,01');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99,99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
test('VSPBTG01', function() {
   $.customOptions.allrules['VSPBTG01'] = {
         'beforeComma': 5,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'amountRange': ['0:10',"99,99"],
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': '* Enter valid amount among the range ["0:10","99,99"]'
      };

   var _rule = ['','VSPBTG01'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C1C0C0',  _amountComment());

   result = _runAmount(_rule, '99,99');
   strictEqual(result, 'C0C0C0C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '10');
   strictEqual(result, 'C0C0C0C1C0C0C0',  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '11');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '100');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,12');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '12345,123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C1C0C0',  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPBTG02', function() {
   $.customOptions.allrules['VSPBTG02'] = {
         'beforeComma': 2,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'amountRange': ['0','1'],
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99" format.',
         'alertTextRange': '* Enter valid amount between 0 and 1'
      };


   var _rule = ['','VSPBTG02'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText,
      _alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());
   
   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-1');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertTextRange,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0101', function() {
   $.customOptions.allrules['VSPV0101'] = {
         'beforeComma': 1,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9,9" format.'
      };


   var _rule = ['','VSPV0101'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C1C0',  _amountComment());

   result = _runAmount(_rule, '1,1');
   strictEqual(result, 'C1C1',  _amountComment());

   result = _runAmount(_rule, '-1');
   strictEqual(result, 'C1D0',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C1C0',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,9');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0106', function() {
   $.customOptions.allrules['VSPV0106'] = {
         'beforeComma': 1,
         'afterComma':6,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9,999999" format.'
      };


   var _rule = ['','VSPV0106'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C1C0C0C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '1,111111');
   strictEqual(result, 'C1C1C1C1C1C1C1',  _amountComment());

   result = _runAmount(_rule, '9,99');
   strictEqual(result, 'C9C9C9C0C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-1');
   strictEqual(result, 'C1C0C0C0C0C0D0',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C1C0C0C0C0C0C0',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+77');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0402', function() {
   $.customOptions.allrules['VSPV0402'] = {
         'beforeComma': 4,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999,99" format.'
      };

   var _rule = ['','VSPV0402'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C1C0C0',  _amountComment());

   result = _runAmount(_rule, '9,99');
   strictEqual(result, 'C0C0C0C9C9C9',  _amountComment());

   result = _runAmount(_rule, '9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '99');
   strictEqual(result, 'C0C0C9C9C0C0',  _amountComment());

   result = _runAmount(_rule, '123');
   strictEqual(result, 'C0C1C2C3C0C0',  _amountComment());

   result = _runAmount(_rule, '-1');
   strictEqual(result, 'C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-99');
   strictEqual(result, 'C0C0C9C9C0D0',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C1C0C0',  _amountComment());

   result = _runAmount(_rule, '+99');
   strictEqual(result, 'C0C0C9C9C0C0',  _amountComment());

   result = _runAmount(_rule, '+77');
   strictEqual(result, 'C0C0C7C7C0C0',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,111111');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999,999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0403', function() {
   $.customOptions.allrules['VSPV0403'] = {
         'beforeComma': 4,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999,999" format.'
      };
   var _rule = ['','VSPV0403'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C1C0C0C0',  _amountComment());

   result = _runAmount(_rule, '9,99');
   strictEqual(result, 'C0C0C0C9C9C9C0',  _amountComment());

   result = _runAmount(_rule, '9999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '99');
   strictEqual(result, 'C0C0C9C9C0C0C0',  _amountComment());

   result = _runAmount(_rule, '123');
   strictEqual(result, 'C0C1C2C3C0C0C0',  _amountComment());

   result = _runAmount(_rule, '-1');
   strictEqual(result, 'C0C0C0C1C0C0D0',  _amountComment());

   result = _runAmount(_rule, '-99');
   strictEqual(result, 'C0C0C9C9C0C0D0',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C1C0C0C0',  _amountComment());

   result = _runAmount(_rule, '+99');
   strictEqual(result, 'C0C0C9C9C0C0C0',  _amountComment());

   result = _runAmount(_rule, '+77');
   strictEqual(result, 'C0C0C7C7C0C0C0',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1,111111');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99,999999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '9999,9999');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '99999,99');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0500', function() {
   $.customOptions.allrules['VSPV0500'] = {
         'beforeComma': 5,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999" format.'
      };

   var _rule = ['','VSPV0500'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-11111');
   strictEqual(result, 'C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21112');
   strictEqual(result, 'C2C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31113');
   strictEqual(result, 'C3C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41114');
   strictEqual(result, 'C4C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51115');
   strictEqual(result, 'C5C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61116');
   strictEqual(result, 'C6C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71117');
   strictEqual(result, 'C7C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81118');
   strictEqual(result, 'C8C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());
   
   result = _runAmountwithError(_rule, '123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});


test('VSPV0501', function() {
   $.customOptions.allrules['VSPV0501'] = {
         'beforeComma': 5,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999,9" format.'
      };

   var _rule = ['','VSPV0501'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,9');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,7');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,9');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,7');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00001');
   strictEqual(result, 'C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111,1');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,2');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,3');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,4');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,5');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,6');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,7');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,8');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,9');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());
   
   result = _runAmountwithError(_rule, '123456,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-00000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0502', function() {
   $.customOptions.allrules['VSPV0502'] = {
         'beforeComma': 5,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999,99" format.'
      };

   var _rule = ['','VSPV0502'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00001');
   strictEqual(result, 'C0C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111,11');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,12');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,13');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,14');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,15');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,16');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,17');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,18');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,99');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-00000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});


test('VSPV0600', function() {
   $.customOptions.allrules['VSPV0600'] = {
         'beforeComma': 6,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999" format.'
      };

   var _rule = ['','VSPV0600'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-111111');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211112');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311113');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411114');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511115');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611116');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711117');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811118');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0602', function() {
   $.customOptions.allrules['VSPV0602'] = {
         'beforeComma': 6,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999,99" format.'
      };

   var _rule = ['','VSPV0602'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000001,10');
   strictEqual(result, 'C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0700', function() {
   $.customOptions.allrules['VSPV0700'] = {
         'beforeComma': 7,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999" format.'
      };

   var _rule = ['','VSPV0700'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-1111111');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111112');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111113');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111114');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111115');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111116');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111117');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111118');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());


   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0701', function() {
   $.customOptions.allrules['VSPV0701'] = {
         'beforeComma': 7,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999,9" format.'
      };

   var _rule = ['','VSPV0701'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,1');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,2');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,3');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,4');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,5');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,6');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,7');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,8');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSPV0702', function() {
   $.customOptions.allrules['VSPV0702'] = {
         'beforeComma': 7,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999,99" format.'
      };

   var _rule = ['','VSPV0702'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00100', function() {
   $.customOptions.allrules['VSP00100'] = {
         'beforeComma': 1,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9" format.'
      };

   var _rule = ['','VSP00100'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C1',  _amountComment());

   result = _runAmount(_rule, '9');
   strictEqual(result, 'C9',  _amountComment());

   result = _runAmount(_rule, '7');
   strictEqual(result, 'C7',  _amountComment());

   result = _runAmount(_rule, '-1');
   strictEqual(result, 'D1',  _amountComment());

   result = _runAmount(_rule, '-9');
   strictEqual(result, 'D9',  _amountComment());

   result = _runAmount(_rule, '-7');
   strictEqual(result, 'D7',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C1',  _amountComment());

   result = _runAmount(_rule, '+9');
   strictEqual(result, 'C9',  _amountComment());

   result = _runAmount(_rule, '+7');
   strictEqual(result, 'C7',  _amountComment());

   result = _runAmountwithError(_rule, '12');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00200', function() {
     $.customOptions.allrules['VSP00200'] = {
         'beforeComma': 2,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99" format.'
      };

   var _rule = ['','VSP00200'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmount(_rule, '-10');
   strictEqual(result, 'C1D0',  _amountComment());

   result = _runAmount(_rule, '-11');
   strictEqual(result, 'C1D1',  _amountComment());

   result = _runAmount(_rule, '-12');
   strictEqual(result, 'C1D2',  _amountComment());

   result = _runAmount(_rule, '-13');
   strictEqual(result, 'C1D3',  _amountComment());

   result = _runAmount(_rule, '-14');
   strictEqual(result, 'C1D4',  _amountComment());

   result = _runAmount(_rule, '-15');
   strictEqual(result, 'C1D5',  _amountComment());

   result = _runAmount(_rule, '-16');
   strictEqual(result, 'C1D6',  _amountComment());

   result = _runAmount(_rule, '-17');
   strictEqual(result, 'C1D7',  _amountComment());

   result = _runAmount(_rule, '-18');
   strictEqual(result, 'C1D8',  _amountComment());

   result = _runAmount(_rule, '-99');
   strictEqual(result, 'C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C1',  _amountComment());

   result = _runAmount(_rule, '+99');
   strictEqual(result, 'C9C9',  _amountComment());

   result = _runAmount(_rule, '+77');
   strictEqual(result, 'C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00201', function() {
     $.customOptions.allrules['VSP00201'] = {
         'beforeComma': 2,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99,9" format.'
      };

   var _rule = ['','VSP00201'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99,9');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77,7');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99,9');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77,7');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-01');
   strictEqual(result, 'C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-11,1');
   strictEqual(result, 'C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21,2');
   strictEqual(result, 'C2C1D2',  _amountComment());

   result = _runAmount(_rule, '-31,3');
   strictEqual(result, 'C3C1D3',  _amountComment());

   result = _runAmount(_rule, '-41,4');
   strictEqual(result, 'C4C1D4',  _amountComment());

   result = _runAmount(_rule, '-51,5');
   strictEqual(result, 'C5C1D5',  _amountComment());

   result = _runAmount(_rule, '-61,6');
   strictEqual(result, 'C6C1D6',  _amountComment());

   result = _runAmount(_rule, '-71,7');
   strictEqual(result, 'C7C1D7',  _amountComment());

   result = _runAmount(_rule, '-81,8');
   strictEqual(result, 'C8C1D8',  _amountComment());

   result = _runAmount(_rule, '-99,9');
   strictEqual(result, 'C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00300', function() {
   $.customOptions.allrules['VSP00300'] = {
         'beforeComma': 3,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999" format.'
      };

   var _rule = ['','VSP00300'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-10');
   strictEqual(result, 'C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-111');
   strictEqual(result, 'C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-212');
   strictEqual(result, 'C2C1D2',  _amountComment());

   result = _runAmount(_rule, '-313');
   strictEqual(result, 'C3C1D3',  _amountComment());

   result = _runAmount(_rule, '-414');
   strictEqual(result, 'C4C1D4',  _amountComment());

   result = _runAmount(_rule, '-515');
   strictEqual(result, 'C5C1D5',  _amountComment());

   result = _runAmount(_rule, '-616');
   strictEqual(result, 'C6C1D6',  _amountComment());

   result = _runAmount(_rule, '-717');
   strictEqual(result, 'C7C1D7',  _amountComment());

   result = _runAmount(_rule, '-818');
   strictEqual(result, 'C8C1D8',  _amountComment());

   result = _runAmount(_rule, '-999');
   strictEqual(result, 'C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999');
   strictEqual(result, 'C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777');
   strictEqual(result, 'C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});


test('VSP00302', function() {
    $.customOptions.allrules['VSP00302'] = {
         'beforeComma': 3,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999,99" format.'
      };

   var _rule = ['','VSP00302'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999,99');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777,77');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999,99');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777,77');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0,10');
   strictEqual(result, 'C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-001,10');
   strictEqual(result, 'C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-100,01');
   strictEqual(result, 'C1C0C0C0D1',  _amountComment());

   result = _runAmount(_rule, '-200,02');
   strictEqual(result, 'C2C0C0C0D2',  _amountComment());

   result = _runAmount(_rule, '-300,03');
   strictEqual(result, 'C3C0C0C0D3',  _amountComment());

   result = _runAmount(_rule, '-400,04');
   strictEqual(result, 'C4C0C0C0D4',  _amountComment());

   result = _runAmount(_rule, '-500,05');
   strictEqual(result, 'C5C0C0C0D5',  _amountComment());

   result = _runAmount(_rule, '-600,06');
   strictEqual(result, 'C6C0C0C0D6',  _amountComment());

   result = _runAmount(_rule, '-700,07');
   strictEqual(result, 'C7C0C0C0D7',  _amountComment());

   result = _runAmount(_rule, '-800,08');
   strictEqual(result, 'C8C0C0C0D8',  _amountComment());

   result = _runAmount(_rule, '-999,99');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234,00');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00400', function() {
     $.customOptions.allrules['VSP00400'] = {
         'beforeComma': 4,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999" format.'
      };

   var _rule = ['','VSP00400'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-10');
   strictEqual(result, 'C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111');
   strictEqual(result, 'C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2112');
   strictEqual(result, 'C2C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3113');
   strictEqual(result, 'C3C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4114');
   strictEqual(result, 'C4C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5115');
   strictEqual(result, 'C5C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6116');
   strictEqual(result, 'C6C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7117');
   strictEqual(result, 'C7C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8118');
   strictEqual(result, 'C8C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999');
   strictEqual(result, 'C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999');
   strictEqual(result, 'C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777');
   strictEqual(result, 'C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});


test('VSP00402', function() {
   $.customOptions.allrules['VSP00402'] = {
         'beforeComma': 4,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999,99" format.'
      };

   var _rule = ['','VSP00402'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777,77');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999,99');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777,77');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0001,00');
   strictEqual(result, 'C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-1111,11');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111,12');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111,13');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111,14');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111,15');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111,16');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111,17');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111,18');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999,99');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00500', function() {
   $.customOptions.allrules['VSP00500'] = {
         'beforeComma': 5,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999" format.'
      };

   var _rule = ['','VSP00500'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-11111');
   strictEqual(result, 'C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21112');
   strictEqual(result, 'C2C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31113');
   strictEqual(result, 'C3C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41114');
   strictEqual(result, 'C4C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51115');
   strictEqual(result, 'C5C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61116');
   strictEqual(result, 'C6C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71117');
   strictEqual(result, 'C7C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81118');
   strictEqual(result, 'C8C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999');
   strictEqual(result, 'C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999');
   strictEqual(result, 'C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777');
   strictEqual(result, 'C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00501', function() {
   $.customOptions.allrules['VSP00501'] = {
         'beforeComma': 5,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999,9" format.'
      };

   var _rule = ['','VSP00501'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,9');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,7');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,9');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,7');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00001');
   strictEqual(result, 'C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111,1');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,2');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,3');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,4');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,5');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,6');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,7');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,8');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,9');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-00000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00502', function() {
   $.customOptions.allrules['VSP00502'] = {
         'beforeComma': 5,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999,99" format.'
      };

   var _rule = ['','VSP00502'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00001');
   strictEqual(result, 'C0C0C0C0C1C0D0',  _amountComment());

   result = _runAmount(_rule, '-11111,11');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111,12');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111,13');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111,14');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111,15');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111,16');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111,17');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111,18');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999,99');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-00000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00600', function() {
   $.customOptions.allrules['VSP00600'] = {
         'beforeComma': 6,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999" format.'
      };

   var _rule = ['','VSP00600'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-111111');
   strictEqual(result, 'C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211112');
   strictEqual(result, 'C2C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311113');
   strictEqual(result, 'C3C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411114');
   strictEqual(result, 'C4C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511115');
   strictEqual(result, 'C5C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611116');
   strictEqual(result, 'C6C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711117');
   strictEqual(result, 'C7C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811118');
   strictEqual(result, 'C8C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999');
   strictEqual(result, 'C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999');
   strictEqual(result, 'C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777');
   strictEqual(result, 'C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '1234567');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00601', function() {
   $.customOptions.allrules['VSP00601'] = {
         'beforeComma': 6,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999,9" format.'
      };

   var _rule = ['','VSP00601'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,1');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,2');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,3');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,4');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,5');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,6');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,7');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,8');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,9');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00602', function() {
   $.customOptions.allrules['VSP00602'] = {
         'beforeComma': 6,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999,99" format.'
      };

   var _rule = ['','VSP00602'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000001,10');
   strictEqual(result, 'C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00603', function() {
   $.customOptions.allrules['VSP00603'] = {
         'beforeComma': 6,
         'afterComma':3,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999,999" format.'
      };

   var _rule = ['','VSP00603'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,001');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777,777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000001,110');
   strictEqual(result, 'C0C0C0C0C0C1C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111,111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111,112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111,113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111,114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111,115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111,116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111,117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111,118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999,999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456,0123');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00700', function() {
   $.customOptions.allrules['VSP00700'] = {
         'beforeComma': 7,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999" format.'
      };

   var _rule = ['','VSP00700'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-1111111');
   strictEqual(result, 'C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111112');
   strictEqual(result, 'C2C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111113');
   strictEqual(result, 'C3C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111114');
   strictEqual(result, 'C4C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111115');
   strictEqual(result, 'C5C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111116');
   strictEqual(result, 'C6C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111117');
   strictEqual(result, 'C7C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111118');
   strictEqual(result, 'C8C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999');
   strictEqual(result, 'C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999');
   strictEqual(result, 'C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777');
   strictEqual(result, 'C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00701', function() {
   $.customOptions.allrules['VSP00701'] = {
         'beforeComma': 7,
         'afterComma':1,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999,9" format.'
      };

   var _rule = ['','VSP00701'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,7');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000001');
   strictEqual(result, 'C0C0C0C0C0C0C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,1');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,2');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,3');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,4');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,5');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,6');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,7');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,8');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,9');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00702', function() {
   $.customOptions.allrules['VSP00702'] = {
         'beforeComma': 7,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999,99" format.'
      };

   var _rule = ['','VSP00702'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-0000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-1111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '12345678,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1234567,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00800', function() {
   $.customOptions.allrules['VSP00800'] = {
         'beforeComma': 8,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999999" format.'
      };

   var _rule = ['','VSP00800'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-11111111');
   strictEqual(result, 'C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111112');
   strictEqual(result, 'C2C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111113');
   strictEqual(result, 'C3C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111114');
   strictEqual(result, 'C4C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111115');
   strictEqual(result, 'C5C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111116');
   strictEqual(result, 'C6C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111117');
   strictEqual(result, 'C7C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111118');
   strictEqual(result, 'C8C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '123456789');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});


test('VSP00802', function() {
   $.customOptions.allrules['VSP00802'] = {
         'beforeComma': 8,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "99999999,99" format.'
      };

   var _rule = ['','VSP00802'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '77777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+77777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-00000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-11111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-21111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-31111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-41111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-51111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-61111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-71111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-81111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-99999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '123456789,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '12345678,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP00902', function() {
   $.customOptions.allrules['VSP00902'] = {
         'beforeComma': 9,
         'afterComma':2,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999999,99" format.'
      };

   var _rule = ['','VSP00902'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '+0,01');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+777777777,77');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-000000001,10');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C1C1D0',  _amountComment());

   result = _runAmount(_rule, '-111111111,11');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-211111111,12');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-311111111,13');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-411111111,14');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-511111111,15');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-611111111,16');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-711111111,17');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-811111111,18');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-999999999,99');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmountwithError(_rule, '1234567890,01');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '123456789,012');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-000000');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP01000', function() {
   $.customOptions.allrules['VSP01000'] = {
         'beforeComma': 10,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "9999999999" format.'
      };

   var _rule = ['','VSP01000'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '7777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '-1111111111');
   strictEqual(result, 'C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111112');
   strictEqual(result, 'C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-3111111113');
   strictEqual(result, 'C3C1C1C1C1C1C1C1C1D3',  _amountComment());

   result = _runAmount(_rule, '-4111111114');
   strictEqual(result, 'C4C1C1C1C1C1C1C1C1D4',  _amountComment());

   result = _runAmount(_rule, '-5111111115');
   strictEqual(result, 'C5C1C1C1C1C1C1C1C1D5',  _amountComment());

   result = _runAmount(_rule, '-6111111116');
   strictEqual(result, 'C6C1C1C1C1C1C1C1C1D6',  _amountComment());

   result = _runAmount(_rule, '-7111111117');
   strictEqual(result, 'C7C1C1C1C1C1C1C1C1D7',  _amountComment());

   result = _runAmount(_rule, '-8111111118');
   strictEqual(result, 'C8C1C1C1C1C1C1C1C1D8',  _amountComment());

   result = _runAmount(_rule, '-9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '12345678901');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});

test('VSP01200', function() {
   $.customOptions.allrules['VSP01200'] = {
         'beforeComma': 12,
         'afterComma':0,
         'plus': '+',
         'minus': '-',
         'emptyFormat': ['' ,0, ''],
         'alertText': '* Enter valid amount in "999999999999" format.'
      };

   var _rule = ['','VSP01200'],
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

   result = _runAmount(_rule, '1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '777777777777');
   strictEqual(result, 'C7C7C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmount(_rule, '12345678901');
   strictEqual(result, 'C0C1C2C3C4C5C6C7C8C9C0C1',  _amountComment());

   result = _runAmount(_rule, '-1111111111');
   strictEqual(result, 'C0C0C1C1C1C1C1C1C1C1C1D1',  _amountComment());

   result = _runAmount(_rule, '-2111111112');
   strictEqual(result, 'C0C0C2C1C1C1C1C1C1C1C1D2',  _amountComment());

   result = _runAmount(_rule, '-999999999999');
   strictEqual(result, 'C9C9C9C9C9C9C9C9C9C9C9D9',  _amountComment());

   result = _runAmount(_rule, '+1');
   strictEqual(result, 'C0C0C0C0C0C0C0C0C0C0C0C1',  _amountComment());

   result = _runAmount(_rule, '+9999999999');
   strictEqual(result, 'C0C0C9C9C9C9C9C9C9C9C9C9',  _amountComment());

   result = _runAmount(_rule, '+7777777777');
   strictEqual(result, 'C0C0C7C7C7C7C7C7C7C7C7C7',  _amountComment());

   result = _runAmountwithError(_rule, '-0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '0');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '+');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '-');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '1a');
   strictEqual(result, _alertText,  _amountComment());

   result = _runAmountwithError(_rule, '#(');
   strictEqual(result, _alertText,  _amountComment());

});
