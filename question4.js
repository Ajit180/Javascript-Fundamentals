function extractDateParts(pattern, str) {
    // Create a RegExp object from the pattern with global and global flags
    const regex = new RegExp(pattern);
    // Find the match and capture groups
    const match = regex.exec(str);
    // If there's a match, return the captured groups; otherwise, return null
    return match ? {
        fullMatch: match[0], // The entire match
        day: match[1],      // The captured day
        month: match[2],    // The captured month
        year: match[3]      // The captured year
    } : null;
}

// Test cases
const tests = [
    { pattern: '(\\d{2})/(\\d{2})/(\\d{4})', str: 'The date is 15/08/2024.', expected: { fullMatch: '15/08/2024', day: '15', month: '08', year: '2024' } },
    { pattern: '(\\d{2})-(\\d{2})-(\\d{4})', str: 'My birthday is 25-12-1990.', expected: { fullMatch: '25-12-1990', day: '25', month: '12', year: '1990' } },
    { pattern: '(\\d{1,2})/(\\d{1,2})/(\\d{2,4})', str: 'Event on 7/11/2023', expected: { fullMatch: '7/11/2023', day: '7', month: '11', year: '2023' } },
];

// Running test cases
tests.forEach(function(test) {
    const result = extractDateParts(test.pattern, test.str);
    console.log('Pattern: /' + test.pattern + '/, String: "' + test.str + '", Result: ' + JSON.stringify(result) + ', Expected: ' + JSON.stringify(test.expected));
});
