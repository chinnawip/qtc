module('Strukt');

   var field = $('<input></input>'),
      result;


   var _struktComment = function () { 
         return 'Input: ' + field.val() + ' , Result: ' + result;
      };

   var _runStrukt = function(_rule, _value) {
         $.data(field, 'resultString', '');
         field.val(_value);
         $.methodStrukt(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultString'); 
      };

   var _runStruktwithError = function(_rule, _value) {
         $.data(field, 'resultErrorText', '');
         field.val(_value);
         $.methodStrukt(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultErrorText'); 
      };

test('STR010', function() {
   $.customOptions.allrules['STR010'] = {
      'struktFormat': [  
        ["'32345.'10000:39999"], ["'99.'GG10000:39999AA'77.'12345:47890"], 
       ["GG'55.'10000:39999AA'77.'12345:47890"],  ["6000:6999"], ["KK%AAGG..NNHH"], 
       ["GG%NNAAGG..NNHH"], ["KK%NNGGHH..NNAA"], [".."], [".AAA"], ["KKKKK."], 
       [".GGGGG."], ["NNN"], ["HCCCCH"], ["'33.'"]],
      'alertText': '* Please enter valid data in one of these formats'
   };
	var _rule = ['','STR010'],
	   _alertText = $.customOptions.allrules[_rule[1]].alertText;

	result = _runStrukt(_rule, '32345.12345');
	strictEqual(result, '32345.12345', _struktComment());
	
	result = _runStruktwithError(_rule, '32345.123451');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, '99.DS12345ff77.46789');
	strictEqual(result, '99.DS12345ff77.46789', _struktComment());

	result = _runStruktwithError(_rule, '99.DS12345ff77.467892');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'DS55.12345ff77.46789');
	strictEqual(result, 'DS55.12345ff77.46789', _struktComment());

	result = _runStruktwithError(_rule, 'DS55.12345ff77.467894');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, '6789');
	strictEqual(result, '6789', _struktComment());

	result = _runStruktwithError(_rule, '16789');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'fsghfggdfdfdfdfsfs6789BCDFMG120F');
	strictEqual(result, 'fsghfggdfdfdfdfsfs6789BCDFMG120F', _struktComment());
	
	result = _runStruktwithError(_rule, 'Afsghfggdfdfdfdfsfs6789BCDFMG120F');
	strictEqual(result, _alertText, _struktComment());
	
	result = _runStrukt(_rule, 'fsBCDFMG120F'); // 0 length for % in ["KK%AAGG..NNHH"]
	strictEqual(result, 'fsBCDFMG120F', _struktComment());

	result = _runStruktwithError(_rule, 'fsbCDfMg120H'); // 0 length for % in ["KK%AAGG..NNHH"]
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'FGghfggdfdfdfdfsfs6789fdknk12BCDFMG120F');
	strictEqual(result, 'FGghfggdfdfdfdfsfs6789fdknk12BCDFMG120F', _struktComment());

	result = _runStruktwithError(_rule, '0FGghfggdfdfdfdfsfs6789fdknk12BCDFMG120F');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'fgghfggdfdfdfdfsfs6789fdknk19BC0Fnh12jk');
	strictEqual(result, 'fgghfggdfdfdfdfsfs6789fdknk19BC0Fnh12jk', _struktComment()); 

	result = _runStruktwithError(_rule, 'fgghfggdfdfdfdfsfs6789fdknk19BC0Fnnh12jk');
	strictEqual(result, _alertText, _struktComment()); 

	result = _runStrukt(_rule, 'fg');
	strictEqual(result, 'fg', _struktComment());

	result = _runStruktwithError(_rule, 'fg1');
	strictEqual(result, _alertText, _struktComment());
		 
	result = _runStrukt(_rule, 'kFgG');
	strictEqual(result, 'kFgG', _struktComment());

	result = _runStruktwithError(_rule, 'kFgGS');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'fgjkvf');
	strictEqual(result, 'fgjkvf', _struktComment());

	result = _runStruktwithError(_rule, 'fgjkvf2');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'fGVF');
	strictEqual(result, 'fGVF', _struktComment());

	result = _runStruktwithError(_rule, '1fGVF');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'GVFG');
	strictEqual(result, 'GVFG', _struktComment());

	result = _runStruktwithError(_rule, '1GVFG');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'aGVKUFz');
	strictEqual(result, 'aGVKUFz', _struktComment());

	result = _runStruktwithError(_rule, '1aGVKUFz');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, '012');
	strictEqual(result, '012', _struktComment());

	result = _runStruktwithError(_rule, '0123');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, 'F0aZ%F');
	strictEqual(result, 'F0aZ%F', _struktComment());

	result = _runStruktwithError(_rule, 'F0aZ%FF');
	strictEqual(result, _alertText, _struktComment());

	result = _runStrukt(_rule, '33.');
	strictEqual(result, '33.', _struktComment());

	result = _runStruktwithError(_rule, '33.3');
	strictEqual(result, _alertText, _struktComment());
});

test('STR020', function() {
    $.customOptions.allrules['STR020'] = {
      'struktFormat': [  
        ["'32345.'10000:39999", "%."],
        ["'323456.'10000:39999", ".."], 
        ["'3234567.'10000:39999", ".%"], ["'32345678.'10000:39999", ".-"],
        ["'323456789.'10000:39999", "-."],
        ["'99.'GG10000:39999AA'77.'12345:47890", ".KK.KK%."], ["'999.'GG10000:39999AA'777.'12345:47890", ".KG.GK%."],
        ["'9.'GG10000:39999AA'7.'12345:47890", ".%K.GG.."], ["'77.'GG10000:39999AA'99.'12345:47890", ".%K.GG-."],
        ["6000:6999", "'Nr.'.."], ["1000:2000", "'99.'.."], ["7000:7999", "'Nr.'999"],
        ["8000:8999", "'Nr.'9999"], ["100:200", "'99.'9."],
        ["300:400", "'99.'.9"],
        ["'9999.'GG10000:39999AA'7777.'12345:47890", ".%K999GG.."],
        ["'99999.'GG10000:39999AA'77777.'12345:47890", ".%K'Nr.'999GG.."],
        ["'555.'GG10000:39999AA12345:47890", ".%K'Nr.'999GG'99.'."],
        ["'5555.'GG10000:39999AA12345:47890", ".%K'Nr.'999GG'99.'999"],
        ["'333.'GG10000:39999AA12345:47890", ".%K'Nr.'999GG-"],
        ["'3333.'GG10000:39999AA12345:47890", ".%K'Nr.'999G-'99.'999"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR020'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;


    result = _runStrukt(_rule, '32345.22222');
    strictEqual(result, '32345.22222', _struktComment());

    result = _runStruktwithError(_rule, '32345.2222');
    strictEqual(result, _alertText, _struktComment());

    result = _runStrukt(_rule, '323456.22222');
    strictEqual(result, '323456.22222', _struktComment());

    result = _runStruktwithError(_rule, '3234.22222');
    strictEqual(result, _alertText, _struktComment());

    result = _runStrukt(_rule, '3234567.22222');
    strictEqual(result, '3234567.22222', _struktComment());

    result = _runStruktwithError(_rule, '3234567.2222');
    strictEqual(result, _alertText, _struktComment());    

    result = _runStrukt(_rule, '32345678.22222');
    strictEqual(result, '32345678.', _struktComment());

    result = _runStruktwithError(_rule, '32345678.322222');
    strictEqual(result, _alertText, _struktComment());

    result = _runStrukt(_rule, '323456789.22222');
    strictEqual(result, '22222', _struktComment());

    result = _runStruktwithError(_rule, '323456789.222422');
    strictEqual(result, _alertText, _struktComment());

    result = _runStrukt(_rule, '99.BG22222as77.23456');
    strictEqual(result, '99.bg22222as77.23456', _struktComment());

    result = _runStruktwithError(_rule, '99.BG22222as777.23456');
    strictEqual(result, _alertText, _struktComment());

    result = _runStrukt(_rule, '999.BG22222as777.23456');
    strictEqual(result, '999.bG22222As777.23456', _struktComment());   

    result = _runStruktwithError(_rule, '999.BG22222as777.234567');
    strictEqual(result, _alertText, _struktComment()); 

    result = _runStrukt(_rule, '9.BG22222as7.23456');
    strictEqual(result, '9.Bg22222AS7.23456', _struktComment());   

    result = _runStruktwithError(_rule, '9.BG22222as7.234567');
    strictEqual(result, _alertText, _struktComment());   

    result = _runStrukt(_rule, '77.BG22222as99.23456');
    strictEqual(result, '77.Bg22222AS23456', _struktComment());     

    result = _runStruktwithError(_rule, '77.BG22222as999.23456');
    strictEqual(result, _alertText, _struktComment());   

    result = _runStrukt(_rule, '6500');
    strictEqual(result, 'Nr.6500', _struktComment());  

    result = _runStruktwithError(_rule, '65001');
    strictEqual(result, _alertText, _struktComment());  

    result = _runStrukt(_rule, '1500');
    strictEqual(result, '99.1500', _struktComment());  

    result = _runStruktwithError(_rule, '15001');
    strictEqual(result, _alertText, _struktComment());  
        
    result = _runStrukt(_rule, '7500');
    strictEqual(result, 'Nr.750', _struktComment());     

    result = _runStruktwithError(_rule, '75001');
    strictEqual(result, _alertText, _struktComment()); 

    result = _runStrukt(_rule, '8500');
    strictEqual(result, 'Nr.8500', _struktComment());     

    result = _runStruktwithError(_rule, '85001');
    strictEqual(result, _alertText, _struktComment());     

    result = _runStrukt(_rule, '150');
    strictEqual(result, '99.1', _struktComment());  

    result = _runStruktwithError(_rule, '15');
    strictEqual(result, _alertText, _struktComment());  

    result = _runStrukt(_rule, '350');
    strictEqual(result, '99.350', _struktComment());  

    result = _runStruktwithError(_rule, '35');
    strictEqual(result, _alertText, _struktComment());  

    result = _runStrukt(_rule, '9999.BG22222aS7777.23456');
    strictEqual(result, '9999.Bg222AS7777.23456', _struktComment()); 

    result = _runStruktwithError(_rule, '9999.BG22222aS7777.234561');
    strictEqual(result, _alertText, _struktComment()); 

    result = _runStrukt(_rule, '99999.BG22222aS77777.23456');
    strictEqual(result, '99999.BgNr.222AS77777.23456', _struktComment()); 

    result = _runStruktwithError(_rule, '99999.BG22222aS777777.23456');
    strictEqual(result, _alertText, _struktComment()); 

    result = _runStrukt(_rule, '555.BG22222aS23456');
    strictEqual(result, '555.BgNr.222AS99.23456', _struktComment()); 

    result = _runStruktwithError(_rule, '555.BG22222aS234567');
    strictEqual(result, _alertText, _struktComment()); 

    result = _runStrukt(_rule, '5555.BG22222aS23456');
    strictEqual(result, '5555.BgNr.222AS99.234', _struktComment());

    result = _runStruktwithError(_rule, '5555.BG22222aS234567');
    strictEqual(result, _alertText, _struktComment());

    result = _runStrukt(_rule, '333.BG22222aS23456');
    strictEqual(result, '333.BgNr.222AS', _struktComment());    

    result = _runStruktwithError(_rule, '333.BG222223aS23456');
    strictEqual(result, _alertText, _struktComment());   

    result = _runStrukt(_rule, '3333.BG22222aS23456');
    strictEqual(result, '3333.BgNr.222A99.234', _struktComment());    

    result = _runStruktwithError(_rule, '3333.BG22222aS234516');
    strictEqual(result, _alertText, _struktComment());   
});
