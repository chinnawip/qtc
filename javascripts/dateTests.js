module("Date Validation");
		var rules = new Object(),
             options = new Object(),
             i=0;
         options.allrules = $.validationEngineLanguage.allRules; 
test("Rule : DAT00003", function() {
		var input = $("input")[0];
        var field = $('#date1');
         rules = ["","DAT00003"];
         
         field.val("1212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"1212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"0909","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText")); 
         field.val("12121");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText")); 
         field.val("12.9.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText")); 
         field.val("3212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText")); 
         field.val("1213");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText")); 
});
test("Rule : DAT00004", function() {
		var input = $("input")[0];
        var field = $('#date2');
         rules = ["","DAT00004"];
         
         field.val("121212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"121212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"090912","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("12.12.00");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"121200","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 

         field.val("9.9.2");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText")); 
         field.val("12121");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12.12.1");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("321200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("121312");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});
test("Rule : DAT00005", function() {
		var input = $("input")[0];
        var field = $('#date3');
         rules = ["","DAT00005"];
         
         field.val("12121212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"12121212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("111100");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"11112000","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09092012","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("1.1.1200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"01011200","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 

         field.val("9.9.2");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12121");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12.12.1");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("32122000");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12131200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});

 	test("Rule : DAT00006", function() {
 		var input = $("input")[0];
        var field = $('#date4');
         rules = ["","DAT00006"];
         
         field.val("1212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"1212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"0912","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("112");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("9.200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12121");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("1300");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});
test("Rule : DAT00008", function() {
 		var input = $("input")[0];
        var field = $('#date5');
         rules = ["","DAT00008"];
         
         field.val("02.12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"02.2012","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("09.1212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09.1212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("11.2");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("9.200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("121211");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("13.00");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});


 	test("Rule : DAT00013", function() {
 		var input = $("input")[0];
        var field = $('#date7');
         rules = ["","DAT00013"];
         
         field.val("0212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"02.12.","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.8.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09.08.","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.12.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09.12.","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("30.9.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"30.09.","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("112");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("7.7");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("5.12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12.5");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
		   field.val("3312");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
		   field.val("9.13.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("32.7.");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  

});


 	test("Rule : DAT00007", function() {
 		var input = $("input")[0];
        var field = $('#date10');
         rules = ["","DAT00007"];
         
         field.val("2/12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"02/2012","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9/1990");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09/1990","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("10/00");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("9/1212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertTextRange ,"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("5/2014");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertTextRange ,"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});

 	test("Rule : DAT00009", function() {
 		var input = $("input")[0];
        var field = $('#date8');
         rules = ["","DAT00009"];
         field.val("12121212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"12.12.1212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("111100");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"11.11.2000","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.12");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09.09.2012","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("1.1.2013");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"01.01.2013","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.2");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12122014");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertTextRange,"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12.12.1");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("32122000");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
		   field.val("12131200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});
    test("Rule : DAT00011", function() {
 		var input = $("input")[0];
        var field = $('#date9');
         rules = ["","DAT00011"];
         field.val("12092013");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"12.09.2013","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("120913");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"12.09.2013","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.13");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09.09.2013","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.2013");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"09.09.2013","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.2");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12122014");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertTextRange,"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12.12.1");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("32122000");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
		   field.val("12131200");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
});


 	test("Rule : DAT00012", function() {
 		var input = $("input")[0];
        var field = $('#date6');
         rules = ["","DAT00012"];
         field.val("12121212");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"12.12.1212","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("1.1.1100");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"01.01.1100","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("01.12.1201");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultString"),"01.12.1201","Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultString")); 
         field.val("9.9.2");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12121");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("12.12.1");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         field.val("32.12.2000");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
		   field.val("12.13.2000");
         $.methodDate(field, rules, i, options);
         equal(jQuery.data(input,"resultErrorText"),options.allrules[rules[1]].alertText + ' ' + (options.allrules[rules[1]].dateFormat+'').replace(/,/g," or "),"Input : "+field.val()+ ", Result : "+jQuery.data(input,"resultErrorText"));  
         // alert("d :"+parseInt("-00.99")+ " , "+ "-00");
});

