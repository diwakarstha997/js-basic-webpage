// Set the main page heading
const pageHeading = document.getElementById("data-manipulation-main-title");
pageHeading.textContent = "Data Manipulation Techniques in JavaScript";

// Populate Number Data Manipulation Section
const numberTitle = document.getElementById("number-data-manipulation-title");
numberTitle.textContent = "Number Data Manipulation";

const numberPoint1 = document.getElementById("number-data-manipulation-1");
numberPoint1.textContent = "parseInt: Converts a string to an integer. Example: parseInt('25') => 25";

const numberPoint2 = document.getElementById("number-data-manipulation-2");
numberPoint2.textContent = "parseFloat: Converts a string to a floating-point number. Example: parseFloat('25.234') => 25.234";

const numberPoint3 = document.getElementById("number-data-manipulation-3");
numberPoint3.textContent = "toFixed: Formats a number to a fixed number of decimal places. Example: (20.9876).toFixed(2) => 20.99";

const numberPoint4 = document.getElementById("number-data-manipulation-4");
numberPoint4.textContent = "isNaN: Checks if a value is NaN (Not a Number). Example: isNaN('text') => true";

const numberPoint5 = document.getElementById("number-data-manipulation-5");
numberPoint5.textContent = "isFinite: Checks if a value is a finite number. Example: isFinite(10) => true";

const numberPoint6 = document.getElementById("number-data-manipulation-6");
numberPoint6.textContent = "Math Object: Provides mathematical constants and functions. Example: Math.sqrt(25) => 5";

const numberPoint7 = document.getElementById("number-data-manipulation-7");
numberPoint7.textContent = "Number: Built-in object for numerical operations. Example: Number('25') => 25";

// Populate String Data Manipulation Section
const stringTitle = document.getElementById("string-data-manipulation-title");
stringTitle.textContent = "String Data Manipulation";

const stringPoint1 = document.getElementById("string-data-manipulation-1");
stringPoint1.textContent = "Escape Characters: Use '\\' for special characters. Example: 'Hello \\\"World\\\"'";

const stringPoint2 = document.getElementById("string-data-manipulation-2");
stringPoint2.textContent = "Extract Character: Use charAt() or at() to get characters by position. Example: 'text'.charAt(0) => 't'";

const stringPoint3 = document.getElementById("string-data-manipulation-3");
stringPoint3.textContent = "Extract String Parts: Use slice(), substring(), or substr(). Example: 'text'.slice(1) => 'ext'";

const stringPoint4 = document.getElementById("string-data-manipulation-4");
stringPoint4.textContent = "Change Case: Use toLowerCase() or toUpperCase(). Example: 'TEXT'.toLowerCase() => 'text'";

const stringPoint5 = document.getElementById("string-data-manipulation-5");
stringPoint5.textContent = "Concatenation and Trimming: Use + or trim(). Example: 'text '.trim() => 'text'";

const stringPoint6 = document.getElementById("string-data-manipulation-6");
stringPoint6.textContent = "Repeat and Replace: Use repeat() or replace(). Example: 'text'.repeat(2) => 'texttext'";

const stringPoint7 = document.getElementById("string-data-manipulation-7");
stringPoint7.textContent = "Convert to Array: Use split(). Example: 'text'.split('') => ['t', 'e', 'x', 't']";

const stringPoint8 = document.getElementById("string-data-manipulation-8");
stringPoint8.textContent = "String Search: Use indexOf(), includes(), startsWith(), or endsWith().";

const stringPoint9 = document.getElementById("string-data-manipulation-9");
stringPoint9.textContent = "Regex: Use match() or matchAll() for pattern matching.";

// Populate Array Data Manipulation Section
const arrayTitle = document.getElementById("array-data-manipulation-title");
arrayTitle.textContent = "Array Data Manipulation";

const arrayPoint1 = document.getElementById("array-data-manipulation-1");
arrayPoint1.textContent = "Access Elements: Use index. Example: array[0] => first element.";

const arrayPoint2 = document.getElementById("array-data-manipulation-2");
arrayPoint2.textContent = "Add Elements: Use push() or unshift(). Example: array.push('item')";

const arrayPoint3 = document.getElementById("array-data-manipulation-3");
arrayPoint3.textContent = "Remove Elements: Use pop() or shift(). Example: array.pop()";

const arrayPoint4 = document.getElementById("array-data-manipulation-4");
arrayPoint4.textContent = "Sort and Reverse: Use sort() or reverse(). Example: array.sort()";

const arrayPoint5 = document.getElementById("array-data-manipulation-5");
arrayPoint5.textContent = "Iterate: Use forEach() or map(). Example: array.map(x => x + 1)";

const arrayPoint6 = document.getElementById("array-data-manipulation-6");
arrayPoint6.textContent = "Mapping: Use map(). Example: array.map(x => x * 2)";

const arrayPoint7 = document.getElementById("array-data-manipulation-7");
arrayPoint7.textContent = "Filter: Use filter(). Example: array.filter(x => x > 0)";

const arrayPoint8 = document.getElementById("array-data-manipulation-8");
arrayPoint8.textContent = "Reduce: Use reduce(). Example: array.reduce((a, b) => a + b)";

const arrayPoint9 = document.getElementById("array-data-manipulation-9");
arrayPoint9.textContent = "Search: Use find() or includes(). Example: array.includes('item')";

const arrayPoint10 = document.getElementById("array-data-manipulation-10");
arrayPoint10.textContent = "Flatten: Use flat() or flatMap(). Example: nestedArray.flat()";

// Populate Object Data Manipulation Section
const objectTitle = document.getElementById("object-data-manipulation-title");
objectTitle.textContent = "Object Data Manipulation";

const objectPoint1 = document.getElementById("object-data-manipulation-1");
objectPoint1.textContent = "Object Destructuring: Extract properties. Example: const {x} = obj";

const objectPoint2 = document.getElementById("object-data-manipulation-2");
objectPoint2.textContent = "Add Property: Use dot or bracket notation. Example: obj.newProp = 'value'";

const objectPoint3 = document.getElementById("object-data-manipulation-3");
objectPoint3.textContent = "Spread Operator: Copy or merge objects. Example: {...obj}";

const objectPoint4 = document.getElementById("object-data-manipulation-4");
objectPoint4.textContent = "Delete Property: Use delete keyword. Example: delete obj.prop";

const objectPoint5 = document.getElementById("object-data-manipulation-5");
objectPoint5.textContent = "Convert to Array: Use Object.entries() or Object.keys(). Example: Object.keys(obj)";
