module('Datumsregeln');

var field = $('<input></input>'),
	result;
var _dateComment = function () { 
		return 'Input: ' + field.val() + ' , Result: ' + result;
	};
var _runDate = function(_rule, _value) {
		field.val(_value);
		$.methodDate(field, _rule, 0, $.customOptions);
		return $.data(field, 'resultString'); 
	};
var _runDatewithError = function(_rule, _value) {
		field.val(_value);
		$.methodDate(field, _rule, 0, $.customOptions);
		return $.data(field, 'resultErrorText'); 
	};

test('DAT00003', function() {
	$.customOptions.allrules['DAT00003'] = {
		'dateFormat': ['TTMM', 'T.M.'],
		'dateFormatOutput': 'TTMM',
		'alertText': '* Please enter valid date in one of these formats'
	};
	var _rule = ['','DAT00003'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');


    result = _runDate(_rule, '1212');
    strictEqual(result, '1212', _dateComment());

	result = _runDate(_rule, '9.9.');
	strictEqual(result, '0909', _dateComment()); 

	result = _runDate(_rule, '12.9.');
	strictEqual(result, '1209', _dateComment()); 

	result = _runDate(_rule, '2.12.');
	strictEqual(result, '0212', _dateComment()); 

	result = _runDate(_rule, '31.7.');
	strictEqual(result, '3107', _dateComment()); 

	result = _runDate(_rule, '30.6.');
	strictEqual(result, '3006', _dateComment()); 

	result = _runDate(_rule, '1209');
	strictEqual(result, '1209', _dateComment()); 

	result = _runDate(_rule, '0212');
	strictEqual(result, '0212', _dateComment()); 

	result = _runDate(_rule, '3107');
	strictEqual(result, '3107', _dateComment()); 

	result = _runDate(_rule, '3006');
	strictEqual(result, '3006', _dateComment()); 

	result = _runDatewithError(_rule, '2902');
	strictEqual(result, _alertText, _dateComment()); 
         
	result = _runDatewithError(_rule, '3212');
	strictEqual(result, _alertText, _dateComment()); 

	result = _runDatewithError(_rule, '1213');
	strictEqual(result, _alertText, _dateComment()); 

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '29.2.');
	strictEqual(result, _alertText, _dateComment()); 
         
	result = _runDatewithError(_rule, '9.9');
	strictEqual(result, _alertText, _dateComment()); 

	result = _runDatewithError(_rule, '12121');
	strictEqual(result, _alertText, _dateComment()); 

});
test('DAT00004', function() {
	$.customOptions.allrules['DAT00004'] = {
						'dateFormat': ['TTMMJJ', 'T.M.JJ', 'TT.MM.JJ'],
						'dateFormatOutput': 'TTMMJJ',
						'alertText': '* Please enter valid date in correct format'
	};

	var _rule = ['', 'DAT00004'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');

	result = _runDate(_rule, '121212');
	strictEqual(result, '121212', _dateComment());

	result = _runDate(_rule, '9.9.12');
	strictEqual(result, '090912', _dateComment());

	result = _runDate(_rule, '12.12.00');
	strictEqual(result, '121200', _dateComment());

	result = _runDate(_rule, '12.9.12');
	strictEqual(result, '120912', _dateComment());

	result = _runDate(_rule, '2.12.12');
	strictEqual(result, '021212', _dateComment());

	result = _runDate(_rule, '31.7.12');
	strictEqual(result, '310712', _dateComment());

	result = _runDate(_rule, '30.6.12');
	strictEqual(result, '300612', _dateComment());

	result = _runDate(_rule, '29.2.12');
	strictEqual(result, '290212', _dateComment());

	result = _runDate(_rule, '120912');
	strictEqual(result, '120912', _dateComment());

	result = _runDate(_rule, '021212');
	strictEqual(result, '021212', _dateComment());

	result = _runDate(_rule, '310712');
	strictEqual(result, '310712', _dateComment());

	result = _runDate(_rule, '300612');
	strictEqual(result, '300612', _dateComment());

	result = _runDate(_rule, '290212');
	strictEqual(result, '290212', _dateComment());

	result = _runDatewithError(_rule, '9.9.2');
	strictEqual(result, _alertText, _dateComment()); 

	result = _runDatewithError(_rule, '12121');
	strictEqual(result, _alertText, _dateComment());  

	result = _runDatewithError(_rule, '12.12.1');
	strictEqual(result, _alertText, _dateComment());  

	result = _runDatewithError(_rule, '321200');
	strictEqual(result, _alertText, _dateComment());  

	result = _runDatewithError(_rule, '121312');
	strictEqual(result, _alertText, _dateComment());  

	result = _runDatewithError(_rule, '29.2.13');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '290213');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText, _dateComment());
});
test('DAT00005', function() {
	$.customOptions.allrules['DAT00005'] = {
					'dateFormat': ['TTMMJJJJ', 'TTMMJJ', 'T.M.JJ', 'T.M.JJJJ'],
					'dateFormatOutput': 'TTMMJJJJ',
					'alertText': '* Please enter valid date in correct format'
				}

	var _rule = ['', 'DAT00005'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');


	result = _runDate(_rule, '12121212');
	strictEqual(result, '12121212', _dateComment()); 

	result = _runDate(_rule, '111100');
	strictEqual(result, '11112000', _dateComment()); 

	result = _runDate(_rule, '9.9.12');
	strictEqual(result, '09092012', _dateComment()); 

	result = _runDate(_rule, '1.1.1200');
	strictEqual(result, '01011200', _dateComment()); 

	result = _runDate(_rule, '12.9.50');
	strictEqual(result, '12091950', _dateComment()); 

	result = _runDate(_rule, '2.12.50');
	strictEqual(result, '02121950', _dateComment()); 

	result = _runDate(_rule, '31.7.50');
	strictEqual(result, '31071950', _dateComment()); 

	result = _runDate(_rule, '30.6.50');
	strictEqual(result, '30061950', _dateComment()); 

	result = _runDate(_rule, '30.6.99');
	strictEqual(result, '30061999', _dateComment()); 

	result = _runDate(_rule, '30.6.00');
	strictEqual(result, '30062000', _dateComment()); 

	result = _runDate(_rule, '12.9.12');
	strictEqual(result, '12092012', _dateComment()); 

	result = _runDate(_rule, '2.12.12');
	strictEqual(result, '02122012', _dateComment()); 

	result = _runDate(_rule, '31.7.12');
	strictEqual(result, '31072012', _dateComment()); 

	result = _runDate(_rule, '30.6.12');
	strictEqual(result, '30062012', _dateComment()); 

	result = _runDate(_rule, '29.2.12');
	strictEqual(result, '29022012', _dateComment()); 

	result = _runDate(_rule, '120912');
	strictEqual(result, '12092012', _dateComment()); 

	result = _runDate(_rule, '021212');
	strictEqual(result, '02122012', _dateComment()); 

	result = _runDate(_rule, '310712');
	strictEqual(result, '31072012', _dateComment()); 

	result = _runDate(_rule, '300612');
	strictEqual(result, '30062012', _dateComment()); 

	result = _runDate(_rule, '290212');
	strictEqual(result, '29022012', _dateComment()); 

	result = _runDate(_rule, '12091950');
	strictEqual(result, '12091950', _dateComment()); 

	result = _runDate(_rule, '02121950');
	strictEqual(result, '02121950', _dateComment()); 

	result = _runDate(_rule, '31071950');
	strictEqual(result, '31071950', _dateComment()); 

	result = _runDate(_rule, '30061950');
	strictEqual(result, '30061950', _dateComment()); 

	result = _runDate(_rule, '29022012');
	strictEqual(result, '29022012', _dateComment());

	result = _runDatewithError(_rule, '9.9.2');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '12121');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '12.12.1');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '32122000');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '12131200');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '29.2.50');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '29021950');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '290213');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '29.2.13');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText, _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText, _dateComment());
});
test('DAT00006', function() {
	$.customOptions.allrules['DAT00006'] = {
					'dateFormat': ['MMJJ', 'M.JJ'],
					'dateFormatOutput': 'MMJJ',
					'alertText': '* Please enter valid date in correct format'
				};

	var _rule = ['', 'DAT00006'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');


     result = _runDate(_rule, '1212');
     strictEqual(result, '1212', _dateComment());

     result = _runDate(_rule, '9.12');
     strictEqual(result, '0912', _dateComment());

     result = _runDate(_rule, '09.12');
     strictEqual(result, '0912', _dateComment());

     result = _runDate(_rule, '12.01');
     strictEqual(result, '1201', _dateComment());

     result = _runDatewithError(_rule, '112');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '9.200');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '9.1');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '12121');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '1300');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '100');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '1a');
     strictEqual(result, _alertText, _dateComment());

     result = _runDatewithError(_rule, '#(');
     strictEqual(result, _alertText, _dateComment());

});


test('DAT00007', function() {
	$.customOptions.allrules['DAT00007'] = {
			'dateFormat': ['M/JJ', 'M/JJJJ'],
			'dateFormatOutput': 'MM/JJJJ',
			'dateRange': ['199001:TODAYM'],
			'alertText': '* Please enter valid date in correct format',
			'alertTextRange': ' Please enter valid date range between 01.01.1990 and Today'
		};
	var _rule = ['', 'DAT00007'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or '),
		_alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;


     
	result = _runDate(_rule, '2/12');
	strictEqual(result, '02/2012', _dateComment());

	result = _runDate(_rule, '9/1990');
	strictEqual(result, '09/1990',  _dateComment());

	result = _runDate(_rule, '09/1990');
	strictEqual(result, '09/1990',  _dateComment());

	result = _runDate(_rule, '10/00');
	strictEqual(result, '10/2000',  _dateComment());

	result = _runDate(_rule, '07/13');
	strictEqual(result, '07/2013',  _dateComment());

	result = _runDate(_rule, '10/99');
	strictEqual(result, '10/1999',  _dateComment());

	result = _runDatewithError(_rule, '08/89');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDate(_rule, '10/2000');
	strictEqual(result, '10/2000',  _dateComment());

	result = _runDate(_rule, '07/2013');
	strictEqual(result, '07/2013',  _dateComment());

	result = _runDatewithError(_rule, '08/2013');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '08/1989');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDate(_rule, '10/1999');
	strictEqual(result, '10/1999',  _dateComment());

	result = _runDatewithError(_rule, '10/001');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '9/1212');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '5/2014');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText,  _dateComment());

});
test('DAT00008', function() {
	$.customOptions.allrules['DAT00008'] = {
				'dateFormat': ['MM.JJ', 'MM.JJJJ'],
				'dateFormatOutput': 'MM.JJJJ',
				'alertText': '* Please enter valid date in correct format'
			};

	var _rule = ['', 'DAT00008'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');


	result = _runDate(_rule, '02.12');
	strictEqual(result, '02.2012',  _dateComment()); 

	result = _runDate(_rule, '02.50');
	strictEqual(result, '02.1950',  _dateComment()); 

	result = _runDate(_rule, '02.99');
	strictEqual(result, '02.1999',  _dateComment());

	result = _runDate(_rule, '02.00');
	strictEqual(result, '02.2000',  _dateComment());

	result = _runDate(_rule, '09.1212');
	strictEqual(result, '09.1212',  _dateComment());

	result = _runDate(_rule, '02.1950');
	strictEqual(result, '02.1950',  _dateComment());

	result = _runDate(_rule, '02.1999');
	strictEqual(result, '02.1999',  _dateComment());

	result = _runDate(_rule, '02.2000');
	strictEqual(result, '02.2000',  _dateComment());

	result = _runDatewithError(_rule, '2.12');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '2.50');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '11.2');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '9.200');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '121211');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '13.00');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText,  _dateComment());
});
test('DAT00009', function() {
	$.customOptions.allrules['DAT00009'] = {
			'dateFormat': ['TTMMJJJJ', 'TTMMJJ', 'T.M.JJ', 'T.M.JJJJ'],
			'dateFormatOutput': 'TT.MM.JJJJ',
			'dateRange': ['<=TODAYE'],
			'alertText': '* Please enter valid date in correct format',
			'alertTextRange': ' Please enter valid date <= Today'
		};

	var _rule = ['', 'DAT00009'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or '),
		_alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;



	result = _runDate(_rule, '12121212');
	strictEqual(result, '12.12.1212',  _dateComment());

	result = _runDate(_rule, '111100');
	strictEqual(result, '11.11.2000',  _dateComment());

	result = _runDate(_rule, '9.9.12');
	strictEqual(result, '09.09.2012',  _dateComment());

	result = _runDate(_rule, '1.1.2013');
	strictEqual(result, '01.01.2013',  _dateComment());

	result = _runDate(_rule, '12.9.50');
	strictEqual(result, '12.09.1950',  _dateComment());

	result = _runDate(_rule, '2.12.50');
	strictEqual(result, '02.12.1950',  _dateComment());

	result = _runDate(_rule, '31.7.50');
	strictEqual(result, '31.07.1950',  _dateComment());

	result = _runDate(_rule, '30.6.50');
	strictEqual(result, '30.06.1950',  _dateComment());

	result = _runDate(_rule, '30.6.99');
	strictEqual(result, '30.06.1999',  _dateComment());

	result = _runDate(_rule, '30.6.00');
	strictEqual(result, '30.06.2000',  _dateComment());

	result = _runDate(_rule, '12.9.12');
	strictEqual(result, '12.09.2012',  _dateComment());

	result = _runDate(_rule, '2.12.12');
	strictEqual(result, '02.12.2012',  _dateComment());

	result = _runDate(_rule, '31.7.12');
	strictEqual(result, '31.07.2012',  _dateComment());

	result = _runDate(_rule, '30.6.12');
	strictEqual(result, '30.06.2012',  _dateComment());

	result = _runDate(_rule, '29.2.12');
	strictEqual(result, '29.02.2012',  _dateComment());

	result = _runDate(_rule, '120912');
	strictEqual(result, '12.09.2012',  _dateComment());

	result = _runDate(_rule, '021212');
	strictEqual(result, '02.12.2012',  _dateComment());

	result = _runDate(_rule, '310712');
	strictEqual(result, '31.07.2012',  _dateComment());

	result = _runDate(_rule, '300612');
	strictEqual(result, '30.06.2012',  _dateComment());

	result = _runDate(_rule, '290212');
	strictEqual(result, '29.02.2012',  _dateComment());

	result = _runDate(_rule, '12091950');
	strictEqual(result, '12.09.1950',  _dateComment());

	result = _runDate(_rule, '02121950');
	strictEqual(result, '02.12.1950',  _dateComment());

	result = _runDate(_rule, '31071950');
	strictEqual(result, '31.07.1950',  _dateComment());

	result = _runDate(_rule, '30061950');
	strictEqual(result, '30.06.1950',  _dateComment());

	result = _runDate(_rule, '29022012');
	strictEqual(result, '29.02.2012',  _dateComment());

	result = _runDatewithError(_rule, '9.9.2');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12122014');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '12.12.1');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '32122000');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12131200');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '29.2.50');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '29.2.13');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '290213');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '29021950');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText,  _dateComment());

});

test('DAT00011', function() {
	$.customOptions.allrules['DAT00011'] = {
			'dateFormat': ['TTMMJJJJ', 'TTMMJJ', 'T.M.JJ', 'T.M.JJJJ'],
			'dateFormatOutput': 'TT.MM.JJJJ',
			'dateRange': ['TODAYE:TODAYE+6M'],
			'alertText': '* Please enter valid date in correct format',
			'alertTextRange': ' Please enter valid date range between TODAYE:TODAYE+6M'
		};

	var _rule = ['', 'DAT00011'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or '),
		_alertTextRange = $.customOptions.allrules[_rule[1]].alertTextRange;



	result = _runDate(_rule, '12122013');
	strictEqual(result, '12.12.2013',  _dateComment());

	result = _runDate(_rule, '121213');
	strictEqual(result, '12.12.2013',  _dateComment());

	result = _runDate(_rule, '9.1.14');
	strictEqual(result, '09.01.2014',  _dateComment());

	result = _runDate(_rule, '9.1.2014');
	strictEqual(result, '09.01.2014',  _dateComment());

	result = _runDate(_rule, '12.12.13');
	strictEqual(result, '12.12.2013',  _dateComment());

	result = _runDate(_rule, '31.1.14');
	strictEqual(result, '31.01.2014',  _dateComment());

	result = _runDate(_rule, '120114');
	strictEqual(result, '12.01.2014',  _dateComment());

	result = _runDate(_rule, '021213');
	strictEqual(result, '02.12.2013',  _dateComment());

	result = _runDate(_rule, '12012014');
	strictEqual(result, '12.01.2014',  _dateComment());

	result = _runDate(_rule, '02122013');
	strictEqual(result, '02.12.2013',  _dateComment());

	result = _runDatewithError(_rule, '9.9.2');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12122014');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '12.12.1');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '32122000');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12131200');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12.9.50');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '2.12.14');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '31.7.12');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '30.6.13');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '30.6.14');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '30.6.00');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '29.2.12');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '29.2.13');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '310712');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '300612');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '290213');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '290212');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '31071950');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '30062014');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '29021950');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '29022012');
	strictEqual(result, _alertTextRange,  _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText,  _dateComment());
});


test('DAT00012', function() {
	$.customOptions.allrules['DAT00012'] = {
			'dateFormat': ['TTMMJJJJ', 'T.M.JJJJ', 'TT.MM.JJJJ'],
			'dateFormatOutput': 'TT.MM.JJJJ',
			'alertText': '* Please enter valid date in correct format'
		};

	var _rule = ['', 'DAT00012'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');



	result = _runDate(_rule, '12121212');
	strictEqual(result, '12.12.1212',  _dateComment());

	result = _runDate(_rule, '1.1.1100');
	strictEqual(result, '01.01.1100',  _dateComment());

	result = _runDate(_rule, '1.12.1100');
	strictEqual(result, '01.12.1100',  _dateComment());

	result = _runDate(_rule, '12.1.1100');
	strictEqual(result, '12.01.1100',  _dateComment());

	result = _runDate(_rule, '12.12.1100');
	strictEqual(result, '12.12.1100',  _dateComment());

	result = _runDate(_rule, '01.12.1201');
	strictEqual(result, '01.12.1201',  _dateComment());

	result = _runDate(_rule, '30.6.1201');
	strictEqual(result, '30.06.1201',  _dateComment());

	result = _runDate(_rule, '31.7.1201');
	strictEqual(result, '31.07.1201',  _dateComment());

	result = _runDate(_rule, '29.2.2012');
	strictEqual(result, '29.02.2012',  _dateComment());

	result = _runDatewithError(_rule, '29.2.2013');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '9.9.2');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12121');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12.12.1');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '32.12.2000');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12.13.2000');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText,  _dateComment());
});         
test('DAT00013', function() {
	$.customOptions.allrules['DAT00013'] = {
			'dateFormat': ['TTMM', 'T.M.', 'T.MM.', 'TT.M.'],
			'dateFormatOutput': 'TT.MM.',
			'alertText': '* Please enter valid date in correct format'
		};

	var _rule = ['', 'DAT00013'],
		_alertText = $.customOptions.allrules[_rule[1]].alertText 
					+ ' ' + ($.customOptions.allrules[_rule[1]].dateFormat+'').replace(/,/g, ' or ');


	result = _runDate(_rule, '0212');
	strictEqual(result, '02.12.',  _dateComment());

	result = _runDate(_rule, '9.8.');
	strictEqual(result, '09.08.',  _dateComment());

	result = _runDate(_rule, '09.08.');
	strictEqual(result, '09.08.',  _dateComment());

	result = _runDate(_rule, '9.12.');
	strictEqual(result, '09.12.',  _dateComment());

	result = _runDate(_rule, '30.9.');
	strictEqual(result, '30.09.',  _dateComment());

	result = _runDatewithError(_rule, '0213');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '112');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '7.7');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '5.12');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '12.5');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '3312');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '9.13.');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '32.7.');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '1a');
	strictEqual(result, _alertText,  _dateComment());

	result = _runDatewithError(_rule, '#(');
	strictEqual(result, _alertText,  _dateComment());

});         
