function Calculator() {
    if (!(this instanceof Calculator)) {
        return new Calculator();
    }
    
    /** 数式文字列 */
    var formula = ""; 
    
    /**
     * 計算機が保持している数式文字列を返す。
     */
    this.getFormula = function() {
        return formula;
    };
    
    this.clear = function() {
        formula = "";
    };
    
    this.clearEntry = function() {
        formula = formula.substring(0, formula.length - 1);
    }
    
    /**
     * 計算機が保持している数式文字列の末尾にcを追加する。 
     */
    this.append = function(c) {
        formula += c;
        return this;
    };
    
    /**
     * 計算機が保持している数式文字列を計算し、結果を数式として保持する。 
     */
    this.calculate = function() {
        var f = formula.split("×").join("*").split("÷").join("/");
        var tree = parse(f);
        var answer = cal(tree);
        formula = answer.toString();
    };
    
    /**
     * オブジェクトが配列かどうかを調べる。 
     */
    function isArray(obj) {
        return obj && typeof obj === 'object' && obj.constructor === Array;
    }
    
    function cal(node) {
        if (!isArray(node)) {
            if (node === "Infinity") {
                return node;
            }
            
            var ans = sao.calc(parseFloat(node));
            return ans;
        }
        
        if (node.length === 2) {
            var ans = sao.calc(parseFloat(node[0] + node[1]));
            return ans;
        }
        
        var left = cal(node[1]);
        var operator = node[0];
        var right = cal(node[2]);
        
        if (operator === '/' && right === 0) {
            return "Infinity";
        }
        
        if (left === "Infinity" || right === "Infinity") {
            return "Infinity";
        }
        
        return sao.calc(left, operator, right);
    }
    
    function parse(formula) {
        
        // 2項演算子とその優先度
        var binaries = {
            '*' : 2,
            '/' : 2,
            '-' : 1,
            '+' : 1
        };
        
        // 単項演算子とその優先度
        var unaries = {
            '-' : 1,
            '+' : 1
        };
        
        var tokens = formula.match(/[-+*/]|[^-+*/\s]+|\s+/g);
        var i = 0;
        var stack = [];
        while (tokens[i] != undefined) {
            
            var expression = (function(){
                var token = tokens[i++];
                if (unaries[token]) {
                    // arguments.calleeプロパティは呼び出された関数自身への参照が保持されている。
                    return [token, arguments.callee()];
                }
                return token;
            })();
            
            var operator = tokens[i++];
            var precedence = (operator === undefined) ? 0 : binaries[operator];
            
            while(stack.length && precedence <= binaries[stack[stack.length - 1]]) {
                expression = [stack.pop(), stack.pop(), expression];
            }
            stack.push(expression, operator);
        }
        
        return expression;
    }
}