test('construct', function(){
    var n = new Calculator();
    ok(n instanceof Calculator, "コンストラクタ呼び出しをするとCalculatorのインスタンスを返す。");
    
    var f = Calculator();
    ok(f instanceof Calculator, "関数呼び出しでもCalculatorのインスタンスを返す。");
});

test('getFormula', function(){
    var c = new Calculator();
    equal(c.getFormula(), "", "インスタンス生成直後にgetFormulaメソッドを呼ぶと空文字列を返す。");
});

test('append', function(){
    var c = new Calculator();
    c.append("1");
    equal(c.getFormula(), "1", "初期状態で'1'を渡してappendメソッドを呼ぶとformulaは'1'になる。")
    c.append("+");
    equal(c.getFormula(), "1+", "続けて'+'を渡してappendメソッドを呼ぶとformulaは'1+'になる。")
});

test('clear', function(){
    var c = new Calculator();
    c.append("1");
    c.clear();
    equal(c.getFormula(), "", "clearメソッドを呼び出すとformulaは空文字列になる。");
});

test('clearEntry', function(){
    var c = new Calculator();
    c.append('1').append('2');
    c.clearEntry();
    equal(c.getFormula(), '1', 'formulaが"12"の時にclearEntryメソッドを呼び出すとformulaは"1"になる。');
});

test('calculation', function() {
    verifyCalculate("1+1", "2");
    verifyCalculate("1-1", "0");
    verifyCalculate("1×1", "1");
    verifyCalculate("1÷1", "1");
    
    verifyCalculate("0.1+0.2", "0.3"); // It will be fail.
});

function verifyCalculate(formula, expected) {
    var calc = new Calculator();
    for (var i = 0 ; i < formula.length ; i++) {
        calc.append(formula.charAt(i));
    }
    calc.calculate();
    equal(calc.getFormula(), expected, formula + "  =  "+ expected);
}