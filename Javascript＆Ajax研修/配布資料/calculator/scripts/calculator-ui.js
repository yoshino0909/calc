
$(function() {
    
    var calculator = new Calculator();
    
    $("#clearButton").click(function(){
        var val = $("#clearButton").val();
        if (val === 'CE') {
            calculator.clearEntry();
        } else if (val === 'AC') {
            calculator.clear();
        } else {
            throw Error('Unknown clear type : ' + val);
        }
        $("#lcd").val(calculator.getExpression());
    });
    
    var appendToLCD = function(ch) {
        calculator.append(ch);
        $("#lcd").val(calculator.getExpression());
        $("#clearButton").val('CE');
    }
    
    $("#zeroButton").click(function(){
        appendToLCD('0');
    });
    
    $("#oneButton").click(function(){
        appendToLCD('1');
    });
    
    $("#twoButton").click(function(){
        appendToLCD('2');
    });
    
    $("#threeButton").click(function(){
        appendToLCD('3');
    });
    
    $("#fourButton").click(function(){
        appendToLCD('4');
    });
    
    $("#fiveButton").click(function(){
        appendToLCD('5');
    });
    
    $("#sixButton").click(function(){
        appendToLCD('6');
    });
    
    $("#sevenButton").click(function(){
        appendToLCD('7');
    });
    
    $("#eightButton").click(function(){
        appendToLCD('8');
    });
    
    $("#nineButton").click(function(){
        appendToLCD('9');
    });
    
    $("#dotButton").click(function(){
        appendToLCD('.');
    });
    
    $("#plusButton").click(function(){
        appendToLCD('+');
    });
    
    $("#minusButton").click(function(){
        appendToLCD('-');
    });
    
    $("#multiButton").click(function(){
        appendToLCD('×');
    });
    
    $("#divisonButton").click(function(){
        appendToLCD('÷');
    });
    
    $("#equalButton").click(function(){
        calculator.calculate();
        $("#clearButton").val('AC');
        $("#lcd").val(calculator.getExpression());
    });
});
