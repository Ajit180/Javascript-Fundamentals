function outerFunction(param) {
    var outerVar = 'I am a variable inside outerFunction';

    function innerFunction() {
        console.log('Parameter passed to outerFunction: ' + param);
        console.log('Variable declared inside outerFunction: ' + outerVar);
    }

    return innerFunction;
}

// Demonstration of lexical scoping
var innerFunc = outerFunction('Hello, World!');
innerFunc(); // This will access variables in the lexical scope of outerFunction
