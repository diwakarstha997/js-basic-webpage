// Heading of webpage
let pageHeading = document.getElementById("main-title")
pageHeading.innerHTML = "Basic of Javascript"

// Variable Section

// Variable Declaration
let variableDeclarationHeading = document.getElementById("variable-declaration-title")
variableDeclarationHeading.innerHTML = "Variable Declaration in JavaScript" 

let variableDeclarationMethodFirstInfo = document.getElementById("method-first-variable-name-info")
variableDeclarationMethodFirstInfo.innerHTML =  "(Using variable name, here we just give variable a name and assign a value to it) Eg. x = 2"

let variableDeclarationMethodSecondInfo = document.getElementById("method-second-let-info")
variableDeclarationMethodSecondInfo.innerHTML =  "(Using `let` Keyword, which is usually used to declare local scope variable) Eg. let name = 'Diwakar'"

let variableDeclarationMethodThirdInfo = document.getElementById("method-third-var-info")
variableDeclarationMethodThirdInfo.innerHTML =  "(Using `var` Keyword, which is usually used to declare global scope variable) Eg. var name = 'Diwakar'"

let variableDeclarationMethodFourthInfo = document.getElementById("method-fourth-const-info")
variableDeclarationMethodFourthInfo.innerHTML =  "(Using `const` Keyword, which is used to declare constants like pi) Eg. const pi = 3.14"

// Variable Declaration and Initialization
let variableDeclarationInitialiationHeading = document.getElementById("variable-declaration-initialization-title")
variableDeclarationInitialiationHeading.innerHTML = "Variable Declaration and Initialization" 

let variableDeclarationInitialiationInfo = document.getElementById("variable-declaration-initialization-info")
variableDeclarationInitialiationInfo.innerHTML = "Variables can be declared and initialized at same time. Eg. let num = 1" 

// Variable Declaration and Initialization
let variableAssignmentHeading = document.getElementById("variable-assignment-title")
variableAssignmentHeading.innerHTML = "Variable Assignment" 

let variableAssignmentInfo = document.getElementById("variable-assignment-info")
variableAssignmentInfo.innerHTML = "After the variable is declared we can assign a value to it. <br/> <br/> Eg. let y <br/> <br/> y = 2 " 

// Identifier Rules for Variable Name 
let variableIdentifierRule = document.getElementById("variable-identifier-rule-title")
variableIdentifierRule.innerHTML = "Identifier Rules" 

let variableIdentifierRuleFirst = document.getElementById("rule-first")
variableIdentifierRuleFirst.innerHTML = "<p>keywords (Reserved words in programming language) cannot be used</p>" 

let variableIdentifierRuleSecond = document.getElementById("rule-second")
variableIdentifierRuleSecond.innerHTML = "<p>usually starts with a letter, underscore ( _ ), or dollar sign ( $ ).</p>" 

let variableIdentifierRuleThird = document.getElementById("rule-third")
variableIdentifierRuleThird.innerHTML = "<p>Following characters can also be digits ( 0 – 9 )</p>" 

let variableIdentifierRuleFourth = document.getElementById("rule-fourth")
variableIdentifierRuleFourth.innerHTML = "<p>Identifier in Javascript are case sensative</p>"

let variableIdentifierRuleNote = document.getElementById("rule-note")
variableIdentifierRuleNote.innerHTML = "<p>Identifier must be meaningfull to logics</p>"

// 
// Case sensative
// Must be meaningfull to logics