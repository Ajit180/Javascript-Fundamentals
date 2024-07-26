function findMatches(pattern, str) {
    // Create a RegExp object from the pattern with global and global flags
    const regex = new RegExp(pattern, 'g');
    // Find all matches in the string
    return str.match(regex) || [];
}

// Test cases
const tests = [
    { pattern: '\\d', str: 'User 123 and 456 are here!', expected: ['1', '2', '3', '4', '5', '6'] }, // Digits
    { pattern: '[A-Z]', str: 'Find all UPPERCASE letters!', expected: ['F', 'U', 'P', 'P', 'C', 'A', 'S', 'E'] }, // Uppercase letters
    { pattern: '[a-z]', str: 'Find all lowercase letters!', expected: ['i', 'n', 'd', 'a', 'l', 'l', 'o', 'w', 'e', 'r', 'c', 'a', 's', 'e', 'l', 'e', 't', 't', 'e', 'r', 's'] }, // Lowercase letters
    { pattern: '[^A-Za-z0-9]', str: 'Special characters: !@#$%^&*()', expected: [' ', ' ', ' ', ':', ' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'] } // Special characters
];

// Running test cases
tests.forEach(function(test) {
    let result = findMatches(test.pattern, test.str);
    console.log('Pattern: /' + test.pattern + '/, String: "' + test.str + '", Matches: ' + JSON.stringify(result) + ', Expected: ' + JSON.stringify(test.expected));
});
