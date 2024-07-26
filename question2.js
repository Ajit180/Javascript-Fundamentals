function isMatch(pattern, str) {
    // Create a RegExp object from the pattern
    const regex = new RegExp(pattern);
    // Test the string against the regex pattern
    return regex.test(str);
}

let tests = [
    { pattern: '\\d+', str: '123 apples', expected: true },    // Match: numbers
    { pattern: '[A-Za-z]+', str: 'Hello World', expected: true }, // Match: letters
    { pattern: '^Hello', str: 'Hello there!', expected: true }, // Match: start of string
    { pattern: 'there!$', str: 'Hello there!', expected: true }, // Match: end of string
    { pattern: 'foo', str: 'Hello World', expected: false },    // No match
];

// Running test cases
tests.forEach(function(test) {
    let result = isMatch(test.pattern, test.str);
    console.log('Pattern: /' + test.pattern + '/, String: "' + test.str + '", Match: ' + result + ', Expected: ' + test.expected);
});
