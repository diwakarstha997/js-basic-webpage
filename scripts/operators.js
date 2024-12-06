// Operators Page

// Heading
let pageOperatorHeading = document.getElementById("operator-main-title")
pageOperatorHeading.innerHTML = "Operators in Javascript"

// Operator Arithmetic
let operatorArithmeticHeading = document.getElementById("operator-arithmetic-title")
operatorArithmeticHeading.innerHTML = "Arithmetic Operator" 

let operatorArithmeticAddition = document.getElementById("arithmetic-operator-1")
operatorArithmeticAddition.innerHTML = "<h3>Addition</h3> a = 4 + 3" 

let operatorArithmeticSubstraction = document.getElementById("arithmetic-operator-2")
operatorArithmeticSubstraction.innerHTML = "<h3>Substraction</h3> s = 5 - 2" 

let operatorArithmeticMultiplication = document.getElementById("arithmetic-operator-3")
operatorArithmeticMultiplication.innerHTML = "<h3>Multiplication</h3> m = 4 * 2" 

let operatorArithmeticDivision = document.getElementById("arithmetic-operator-4")
operatorArithmeticDivision.innerHTML = "<h3>Division</h3> d = 6 / 3" 

let operatorArithmeticExponential = document.getElementById("arithmetic-operator-5")
operatorArithmeticExponential.innerHTML = "<h3>Exponential</h3> a = 2 ** 4" 

let operatorArithmeticModulus = document.getElementById("arithmetic-operator-6")
operatorArithmeticModulus.innerHTML = "<h3>Modulus</h3> mod = 6 % 2" 

let operatorArithmeticIncrement = document.getElementById("arithmetic-operator-7")
operatorArithmeticIncrement.innerHTML = "<h3>Increment</h3> inc = 3 <br/> console.log(inc++) // post-increment <br/> console.log(++inc) // pre-increment"

let operatorArithmeticDecrement = document.getElementById("arithmetic-operator-8")
operatorArithmeticDecrement.innerHTML = "<h3>Decrement</h3> dec = 3 <br/> console.log(dec--) // post-decrement <br/> console.log(--dec) // pre-decrement" 
 
// Operator Comparision
let operatorComparisionHeading = document.getElementById("operator-comparision-title")
operatorComparisionHeading.innerHTML = "Comparision Operator"

let operatorEqualTo = document.getElementById("comparision-operator-1")
operatorEqualTo.innerHTML = "<h3>equals to</h3> console.log(2=='2') // true" 

let operatorTwoEqualTo = document.getElementById("comparision-operator-2")
operatorTwoEqualTo.innerHTML = "<h3>equal equal to also looks for data type</h3> console.log(2==='2') // false" 

let operatorGreaterThanEqualTo = document.getElementById("comparision-operator-3")
operatorGreaterThanEqualTo.innerHTML = "<h3>greater than and greater than equal to</h3> console.log(3>2) // true <br/> console.log(3>=2) // true" 

let operatorLessThanEqualTo = document.getElementById("comparision-operator-4")
operatorLessThanEqualTo.innerHTML = "<h3>less than and less than equal to</h3> console.log(3<2) // true <br/> console.log(3<=2) // flase" 

// Operator Logical
let operatorLogicalHeading = document.getElementById("operator-logical-title")
operatorLogicalHeading.innerHTML = "Logical Operator" 

let operatorAND = document.getElementById("logical-operator-1")
operatorAND.innerHTML = "<h3>AND operator</h3> console.log(true && false)" 

let operatorOR = document.getElementById("logical-operator-2")
operatorOR.innerHTML = "<h3>OR operator</h3> console.log(true || false)" 

let operatorNOT = document.getElementById("logical-operator-3")
operatorNOT.innerHTML = "<h3>Not operator</h3> console.log(2!='2'); // false <br/> console.log(2!=='2'); // true" 

let operatorTernary = document.getElementById("logical-operator-4")
operatorTernary.innerHTML = "<h3>Ternary ?:</h3> console.log(3>2? '3 is greater than 2' : '3 is less than 2' )" 