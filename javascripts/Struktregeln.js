module('Struct');

   var field = $('<input></input>'),
      result;


   var _structComment = function () { 
         return 'Input: ' + field.val() + ' , Result: ' + result;
      };

   var _runStruct = function(_rule, _value) {
         $.data(field, 'resultString', '');
         field.val(_value);
         $.methodStruct(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultString'); 
      };

   var _runStructwithError = function(_rule, _value) {
         $.data(field, 'resultErrorText', '');
         field.val(_value);
         $.methodStruct(field, _rule, 0, $.customOptions);
         return $.data(field, 'resultErrorText'); 
      };

test('STR010', function() {
   $.customOptions.allrules['STR010'] = {
      'structFormat': [  
        ["'32345.'10000:39999"], ["'99.'GG10000:39999AA'77.'12345:47890"], 
       ["GG'55.'10000:39999AA'77.'12345:47890"],  ["6000:6999"], ["KK%AAGG..NNHH"], 
       ["GG%NNAAGG..NNHH"], ["KK%NNGGHH..NNAA"], [".."], [".AAA"], ["KKKKK."], 
       [".GGGGG."], ["NNN"], ["HCCCCH"], ["'33.'"], ["%'33.'"], ["%GGK."]],
      'alertText': '* Please enter valid data in one of these formats'
   };
	var _rule = ['','STR010'],
	   _alertText = $.customOptions.allrules[_rule[1]].alertText;

	result = _runStruct(_rule, '32345.12345');
	strictEqual(result, '32345.12345', _structComment());
	
	result = _runStructwithError(_rule, '32345.123451');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, '99.DS12345ff77.46789');
	strictEqual(result, '99.DS12345ff77.46789', _structComment());

	result = _runStructwithError(_rule, '99.DS12345ff77.467892');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'DS55.12345ff77.46789');
	strictEqual(result, 'DS55.12345ff77.46789', _structComment());

	result = _runStructwithError(_rule, 'DS55.12345ff77.467894');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, '6789');
	strictEqual(result, '6789', _structComment());

	result = _runStructwithError(_rule, '16789');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'fsghfggdfdfdfdfsfs6789BCDFMG120F');
	strictEqual(result, 'fsghfggdfdfdfdfsfs6789BCDFMG120F', _structComment());
	
	result = _runStructwithError(_rule, 'Afsghfggdfdfdfdfsfs6789BCDFMG120F');
	strictEqual(result, _alertText, _structComment());
	
	result = _runStruct(_rule, 'fsBCDFMG120F'); // 0 length for % in ["KK%AAGG..NNHH"]
	strictEqual(result, 'fsBCDFMG120F', _structComment());

	result = _runStructwithError(_rule, 'fsbCDfMg120H'); // 0 length for % in ["KK%AAGG..NNHH"]
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'FGghfggdfdfdfdfsfs6789fdknk12BCDFMG120F');
	strictEqual(result, 'FGghfggdfdfdfdfsfs6789fdknk12BCDFMG120F', _structComment());

	result = _runStructwithError(_rule, '0FGghfggdfdfdfdfsfs6789fdknk12BCDFMG120F');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'fgghfggdfdfdfdfsfs6789fdknk19BC0Fnh12jk');
	strictEqual(result, 'fgghfggdfdfdfdfsfs6789fdknk19BC0Fnh12jk', _structComment()); 

	result = _runStructwithError(_rule, 'fgghfggdfdfdfdfsfs6789fdknk19BC0Fnnh12jk');
	strictEqual(result, _alertText, _structComment()); 

	result = _runStruct(_rule, 'fg');
	strictEqual(result, 'fg', _structComment());

	result = _runStructwithError(_rule, 'fg1');
	strictEqual(result, _alertText, _structComment());
		 
	result = _runStruct(_rule, 'kFgG');
	strictEqual(result, 'kFgG', _structComment());

	result = _runStructwithError(_rule, 'kFgGS');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'fgjkvf');
	strictEqual(result, 'fgjkvf', _structComment());

	result = _runStructwithError(_rule, 'fgjkvf2');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'fGVF');
	strictEqual(result, 'fGVF', _structComment());

	result = _runStructwithError(_rule, '1fGVF');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'GVFG');
	strictEqual(result, 'GVFG', _structComment());

	result = _runStructwithError(_rule, '1GVFG');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'aGVKUFz');
	strictEqual(result, 'aGVKUFz', _structComment());

	result = _runStructwithError(_rule, '1aGVKUFz');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, '012');
	strictEqual(result, '012', _structComment());

	result = _runStructwithError(_rule, '0123');
	strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, 'F0aZ%F');
	strictEqual(result, 'F0aZ%F', _structComment());

	result = _runStructwithError(_rule, 'F0aZ%FF');
	strictEqual(result, _alertText, _structComment());
    
    result = _runStructwithError(_rule, 'f0aZ%F');
    strictEqual(result, _alertText, _structComment());

	result = _runStruct(_rule, '33.');
	strictEqual(result, '33.', _structComment());

	result = _runStructwithError(_rule, '33.3');
	strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, 'flhsdlfsdhlhdf33.');
    strictEqual(result, 'flhsdlfsdhlhdf33.', _structComment());
    
    result = _runStructwithError(_rule, 'flhsdlfsdhlhdf3.');
    strictEqual(result, _alertText, _structComment());    

    result = _runStruct(_rule, 'flhsdlfsdhlhdfABcD');
    strictEqual(result, 'flhsdlfsdhlhdfABcD', _structComment());

    result = _runStructwithError(_rule, 'flhsdlfsdhlhdfABcDe');
    strictEqual(result, _alertText, _structComment());

});

test('STR020', function() {
    $.customOptions.allrules['STR020'] = {
      'structFormat': [  
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
        ["'3333.'GG10000:39999AA12345:47890", ".%K'Nr.'999G-'99.'999"],
        ["'444.'GG10000:39999AA12345:47890", "-%K'Nr.'999G-'99.'999"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR020'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

    result = _runStruct(_rule, '32345.22222');
    strictEqual(result, '32345.22222', _structComment());

    result = _runStructwithError(_rule, '32345.2222');
    strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, '323456.22222');
    strictEqual(result, '323456.22222', _structComment());

    result = _runStructwithError(_rule, '3234.22222');
    strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, '3234567.22222');
    strictEqual(result, '3234567.22222', _structComment());

    result = _runStructwithError(_rule, '3234567.2222');
    strictEqual(result, _alertText, _structComment());    

    result = _runStruct(_rule, '32345678.22222');
    strictEqual(result, '32345678.', _structComment());

    result = _runStructwithError(_rule, '32345678.322222');
    strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, '323456789.22222');
    strictEqual(result, '22222', _structComment());

    result = _runStructwithError(_rule, '323456789.222422');
    strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, '99.BG22222as77.23456');
    strictEqual(result, '99.bg22222as77.23456', _structComment());

    result = _runStructwithError(_rule, '99.BG22222as777.23456');
    strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, '999.BG22222as777.23456');
    strictEqual(result, '999.bG22222As777.23456', _structComment());   

    result = _runStructwithError(_rule, '999.BG22222as777.234567');
    strictEqual(result, _alertText, _structComment()); 

    result = _runStruct(_rule, '9.BG22222as7.23456');
    strictEqual(result, '9.Bg22222AS7.23456', _structComment());   

    result = _runStructwithError(_rule, '9.BG22222as7.234567');
    strictEqual(result, _alertText, _structComment());   

    result = _runStruct(_rule, '77.BG22222as99.23456');
    strictEqual(result, '77.Bg22222AS23456', _structComment());     

    result = _runStructwithError(_rule, '77.BG22222as999.23456');
    strictEqual(result, _alertText, _structComment());   

    result = _runStruct(_rule, '6500');
    strictEqual(result, 'Nr.6500', _structComment());  

    result = _runStructwithError(_rule, '65001');
    strictEqual(result, _alertText, _structComment());  

    result = _runStruct(_rule, '1500');
    strictEqual(result, '99.1500', _structComment());  

    result = _runStructwithError(_rule, '15001');
    strictEqual(result, _alertText, _structComment());  
        
    result = _runStruct(_rule, '7500');
    strictEqual(result, 'Nr.750', _structComment());     

    result = _runStructwithError(_rule, '75001');
    strictEqual(result, _alertText, _structComment()); 

    result = _runStruct(_rule, '8500');
    strictEqual(result, 'Nr.8500', _structComment());     

    result = _runStructwithError(_rule, '85001');
    strictEqual(result, _alertText, _structComment());     

    result = _runStruct(_rule, '150');
    strictEqual(result, '99.1', _structComment());  

    result = _runStructwithError(_rule, '15');
    strictEqual(result, _alertText, _structComment());  

    result = _runStruct(_rule, '350');
    strictEqual(result, '99.350', _structComment());  

    result = _runStructwithError(_rule, '35');
    strictEqual(result, _alertText, _structComment());  

    result = _runStruct(_rule, '9999.BG22222aS7777.23456');
    strictEqual(result, '9999.Bg222AS7777.23456', _structComment()); 

    result = _runStructwithError(_rule, '9999.BG22222aS7777.234561');
    strictEqual(result, _alertText, _structComment()); 

    result = _runStruct(_rule, '99999.BG22222aS77777.23456');
    strictEqual(result, '99999.BgNr.222AS77777.23456', _structComment()); 

    result = _runStructwithError(_rule, '99999.BG22222aS777777.23456');
    strictEqual(result, _alertText, _structComment()); 

    result = _runStruct(_rule, '555.BG22222aS23456');
    strictEqual(result, '555.BgNr.222AS99.23456', _structComment()); 

    result = _runStructwithError(_rule, '555.BG22222aS234567');
    strictEqual(result, _alertText, _structComment()); 

    result = _runStruct(_rule, '5555.BG22222aS23456');
    strictEqual(result, '5555.BgNr.222AS99.234', _structComment());

    result = _runStructwithError(_rule, '5555.BG22222aS234567');
    strictEqual(result, _alertText, _structComment());

    result = _runStruct(_rule, '333.BG22222aS23456');
    strictEqual(result, '333.BgNr.222AS', _structComment());    

    result = _runStructwithError(_rule, '333.BG222223aS23456');
    strictEqual(result, _alertText, _structComment());   

    result = _runStruct(_rule, '3333.BG22222aS23456');
    strictEqual(result, '3333.BgNr.222A99.234', _structComment());    

    result = _runStructwithError(_rule, '3333.BG22222aS234516');
    strictEqual(result, _alertText, _structComment());   

    result = _runStruct(_rule, '444.BG22222aS23456');
    strictEqual(result, 'BgNr.222A99.234', _structComment());    

});

test('STR030', function() {
    $.customOptions.allrules['STR030'] = {
      'structFormat': [  
	  	//["6000:6999", "'Nr.'.."]
       ["NN'.'NNNNNN"],["NN'.'NNNNNNNN"]
	,["NN'.'NNNNNN", "NN'.'NNNNNNNN"]
	,["NN'.'NNNNNNNN", "NN'.'NNNNNNNN"]
	,["NNNNNNNN","NN'.'NNNNNN"]
	,["NNNNNNNNNN","NN'.'NNNNNNNN"]
		
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;

	  //["NN'.'NNNNNNNN", "NN'.'NNNNNNNN"]
	result = _runStruct(_rule, '12.34567890');
    strictEqual(result, '12.34567890', _structComment());
	result = _runStructwithError(_rule, '12.3456789');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '123.34567890');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '12.345678901');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '123456789');
    strictEqual(result, _alertText, _structComment());
	
	//["NNNNNNNNNN","NN'.'NNNNNNNN"]
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12.34567890', _structComment());
	result = _runStructwithError(_rule, '1234567');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '12345678901');
    strictEqual(result, _alertText, _structComment());
	
	//["NNNNNNNN","NN'.'NNNNNN"],
	result = _runStruct(_rule, '12345678');
    strictEqual(result, '12.345678', _structComment());
	result = _runStructwithError(_rule, '1234567');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '123456789');
    strictEqual(result, _alertText, _structComment());
	
	//for rule ["NN'.'NNNNNN"]
	result = _runStruct(_rule, '00.000000');
    strictEqual(result, '00.000000', _structComment());
	result = _runStruct(_rule, '11.111111');
    strictEqual(result, '11.111111', _structComment());
	result = _runStruct(_rule, '22.222222');
    strictEqual(result, '22.222222', _structComment());
	result = _runStruct(_rule, '33.333333');
    strictEqual(result, '33.333333', _structComment());
	result = _runStruct(_rule, '44.444444');
    strictEqual(result, '44.444444', _structComment());
	result = _runStruct(_rule, '55.555555');
    strictEqual(result, '55.555555', _structComment());
	result = _runStruct(_rule, '66.666666');
    strictEqual(result, '66.666666', _structComment());
	result = _runStruct(_rule, '77.777777');
    strictEqual(result, '77.777777', _structComment());
	result = _runStruct(_rule, '88.888888');
    strictEqual(result, '88.888888', _structComment());
	result = _runStruct(_rule, '99.999999');
    strictEqual(result, '99.999999', _structComment());
	result = _runStruct(_rule, '12.345678');
    strictEqual(result, '12.345678', _structComment());
    result = _runStructwithError(_rule, '325.222222');
    strictEqual(result, _alertText, _structComment());
    result = _runStructwithError(_rule, '32.1222222');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '2.222222');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '22.22222');
    strictEqual(result, _alertText, _structComment());

//for rule ["NN'.'NNNNNNNN"]
	result = _runStruct(_rule, '00.00000000');
    strictEqual(result, '00.00000000', _structComment());
	
	result = _runStruct(_rule, '11.11111111');
    strictEqual(result, '11.11111111', _structComment());
	result = _runStruct(_rule, '22.22222222');
    strictEqual(result, '22.22222222', _structComment());
	result = _runStruct(_rule, '33.33333333');
    strictEqual(result, '33.33333333', _structComment());
	result = _runStruct(_rule, '44.44444444');
    strictEqual(result, '44.44444444', _structComment());
	result = _runStruct(_rule, '55.55555555');
    strictEqual(result, '55.55555555', _structComment());
	result = _runStruct(_rule, '66.66666666');
    strictEqual(result, '66.66666666', _structComment());
	result = _runStruct(_rule, '77.77777777');
    strictEqual(result, '77.77777777', _structComment());
	result = _runStruct(_rule, '88.88888888');
    strictEqual(result, '88.88888888', _structComment());
	result = _runStruct(_rule, '99.99999999');
    strictEqual(result, '99.99999999', _structComment());
	result = _runStruct(_rule, '12.34567890');
    strictEqual(result, '12.34567890', _structComment());
    result = _runStructwithError(_rule, '325.22222222');
    strictEqual(result, _alertText, _structComment());
    result = _runStructwithError(_rule, '32.122222234');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '2.22222222');
    strictEqual(result, _alertText, _structComment());
	result = _runStructwithError(_rule, '22.2222267');
    strictEqual(result, _alertText, _structComment());
});


test('STR030_1', function() {
    $.customOptions.allrules['STR030_1'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'.'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_1'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  //["NNNNNNNNNN","NN'.'NNNNNNNN"]
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12.34567890', _structComment());
});

test('STR030_2', function() {
    $.customOptions.allrules['STR030_2'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'@'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_2'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12@34567890', _structComment());
});

test('STR030_3', function() {
    $.customOptions.allrules['STR030_3'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'~'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_3'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12~34567890', _structComment());
});

test('STR030_4', function() {
    $.customOptions.allrules['STR030_4'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'`'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_4'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12`34567890', _structComment());
});

test('STR030_5', function() {
    $.customOptions.allrules['STR030_5'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'+'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_5'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12+34567890', _structComment());
});

test('STR030_6', function() {
    $.customOptions.allrules['STR030_6'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'='NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_6'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12=34567890', _structComment());
});

test('STR030_7', function() {
    $.customOptions.allrules['STR030_7'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'!'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_7'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12!34567890', _structComment());
});

test('STR030_8', function() {
    $.customOptions.allrules['STR030_8'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'#'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_8'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12#34567890', _structComment());
});

test('STR030_9', function() {
    $.customOptions.allrules['STR030_9'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'$'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_9'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12$34567890', _structComment());
});

test('STR030_10', function() {
    $.customOptions.allrules['STR030_10'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'%'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_10'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12%34567890', _structComment());
});

test('STR030_11', function() {
    $.customOptions.allrules['STR030_11'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'^'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_11'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12^34567890', _structComment());
});

test('STR030_12', function() {
    $.customOptions.allrules['STR030_12'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'&'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_12'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12&34567890', _structComment());
});

test('STR030_12', function() {
    $.customOptions.allrules['STR030_12'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'*'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_12'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12*34567890', _structComment());
});

test('STR030_13', function() {
    $.customOptions.allrules['STR030_13'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'-'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_13'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12-34567890', _structComment());
});
test('STR030_14', function() {
    $.customOptions.allrules['STR030_14'] = {
      'structFormat': [  
		["NNNNNNNNNN","NN'_'NNNNNNNN"]
        ],
      'alertText': '* Please enter valid data in one of these formats'
   };
   var _rule = ['','STR030_14'],  
      _alertText = $.customOptions.allrules[_rule[1]].alertText;
	  
	result = _runStruct(_rule, '1234567890');
    strictEqual(result, '12_34567890', _structComment());
});
