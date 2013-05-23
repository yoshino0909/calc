function Calculator() {
    if (!(this instanceof Calculator)) {
        return new Calculator();
    }
    
    var formula = "";
    
    this.getFormula = function() {
        return formula;
    };
    
    this.calculate = function() {
        var f = formula.split('×').join('*');
        f = f.split('÷').join('/');
        try {
            formula = eval(f);
        } catch (e){
            formula ="Error!";
        }
    };
    
    this.clear = function() {
        formula = "";
    };
    
    this.clearEntry = function() {
        formula = formula.substring(0, formula.length - 1);
    }
    
    this.append = function(c) {
        formula += c;
        return this;
    };
    
}
