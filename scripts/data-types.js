// Operators Page

// Heading
let pageDataTypeHeading = document.getElementById("data-types-main-title")
pageDataTypeHeading.innerHTML = "Data Types in Javascript"

// Primitive Data Types
let dataTypePrimitiveHeading = document.getElementById("primitive-data-types-title")
dataTypePrimitiveHeading.innerHTML = "Primitive Data Types" 

let dataTypePrimitiveNumber = document.getElementById("primitive-data-types-1")
dataTypePrimitiveNumber.innerHTML = "<strong>number</strong> for numbers of any kind: integer or floating-point, integers are limited by ±(253-1)." 

let dataTypePrimitiveBigInt = document.getElementById("primitive-data-types-2")
dataTypePrimitiveBigInt.innerHTML = "<strong>bigint</strong> for integer numbers of arbitrary length." 

let dataTypePrimitiveString = document.getElementById("primitive-data-types-3")
dataTypePrimitiveString.innerHTML = "<strong>string</strong> for strings. A string may have zero or more characters, there’s no separate single-character type." 

let dataTypePrimitiveBoolean = document.getElementById("primitive-data-types-4")
dataTypePrimitiveBoolean.innerHTML = "<strong>boolean</strong> for true/false." 

let dataTypePrimitiveNull = document.getElementById("primitive-data-types-5")
dataTypePrimitiveNull.innerHTML = "<strong>null</strong> for unknown values – a standalone type that has a single value null" 

let dataTypePrimitiveUndefined = document.getElementById("primitive-data-types-6")
dataTypePrimitiveUndefined.innerHTML = "<strong>undefined</strong> for unassigned values – a standalone type that has a single value undefined" 

let dataTypePrimitiveSymbol = document.getElementById("primitive-data-types-7")
dataTypePrimitiveSymbol.innerHTML = "<strong>symbol</strong> for unique identifiers."

// Reference Data Types
let dataTypeNonPrimitiveHeading = document.getElementById("non-primitive-data-types-title")
dataTypeNonPrimitiveHeading.innerHTML = "Non-Primitive Data Types"

let dataTypeNonPrimitiveObject = document.getElementById("non-primitive-data-type")
dataTypeNonPrimitiveObject.innerHTML = "<strong>object</strong> for more complex data structures."

// Memory Management Animation
 let memoryManagementAnimationHeading = document.getElementById("memory-management-gif-heading")
 memoryManagementAnimationHeading.innerText = "Memory Management Animation"