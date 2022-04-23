// /*
// “In a language of your choice, using all best practice principles you’re aware of,
//  could you please provide code that iterates in multiples of A until X, then in multiples of A + 1 until 2X,
//   then multiples of A + 2 until 3X. Please state any assumptions you’ve made.

// Please upload to a public Github repository and share the link.”

// /********************************************************************************************************** */


/********************************************************************************************************** */
/*There are two  approaches taken to solve this challenge :

 1-Assuming the iteration is a sequence hence:
-create an empty array to save the result of every multiplication.
-use a for loop to iterate in multiples inside a function to avoid the repetition.
-test the three conditions :
 -multiples of A until X.
 -multiples of A+1 until 2X.
 -multiples of A+2 until 3X.
 and store them accordingly 

2-Assuming the iteration is a not in a sequence hence:

Generate multiples of A till X , then multiples of A+1 till 2X then multiples of A+2 till 3X from the start of the iteration

*/


let showResult = document.getElementById("generate");
let resultDiv = document.getElementById("result");

let spaceA = document.querySelector("#digitA");
let spaceB = document.getElementById("digitX");
let resultArray = [];


showResult.addEventListener("click",

	function multiples() {

		resultDiv.innerHTML = resultArray;
		let A = parseInt(document.getElementById("digitA").value)
		let X = parseInt(document.getElementById("digitX").value)
		if (A <= 0 || X <= 0) { // An entry validation to make sure the multiplications does not generate zero
			resultDiv.innerHTML = "Please Enter a positive number greater then Zero"
			return;
		}
		if(A>X){   // An entry validation to make sure that A is equal or less then X
			resultDiv.innerHTML="Please Enter a bigger value for X"
			return;
	        }


		if (typeof A != "number" || typeof X != "number") {
			resultDiv.innerHTML = "Please Enter a valid digit"
			return;
		}


		let from = [A, A + 1, A + 2];
		let to = [X, 2 * X, 3 * X];


		let index = A
		//  Create a function to generate the multiplication  and store it in the resultArray according to the conditions
		function runTheLoop(start, condition) {

			for (index; index <= condition; index += start) {
				resultArray.push(index) // store the multiplication in the resultArray
			}
			index++;
		}
		from.forEach((element, index) => runTheLoop(element, to[index], index))


		if (resultArray.length == 0) {

			resultDiv.innerHTML = `There are no Multiples found for digit A=${A} and digit X=${X}`;
		} else {
			resultDiv.innerText = resultArray;
		}


	});

let clearResult = document.getElementById("refresh");
refresh.addEventListener("click", function () {

	resultArray = [];
	resultDiv.innerHTML = "";
	spaceA.value = "";
	spaceB.value = ""
	document.getElementById("digitA").value = "";
	document.getElementById("digitX").value = "";

})



let showResultNoSq = document.getElementById("generatenoSq");
let resultDivNoSQ = document.getElementById("resultnoSq");
let spaceANoSq = document.querySelector("#digitAnoSq");
let spaceBNoSq = document.getElementById("digitXnoSq");
let resultArrayNoSq = [];


showResultNoSq.addEventListener("click",

	function multiples() {


		resultDivNoSQ.innerHTML = resultArrayNoSq;
		let A = parseInt(document.getElementById("digitAnoSq").value)
		let X = parseInt(document.getElementById("digitXnoSq").value)

		if (A <= 0 || X <= 0) { // An entry validation to make sure the multiplications does not generate zero
			resultDivNoSQ.innerHTML = "Please Enter a positive number greater then Zero"
			return;
		}
		if(A>X){   // An entry validation to make sure that A is equal or less then X
			resultDiv.innerHTML="Please Enter a bigger value for X"
			return;
	        }


		if (typeof A != "number" || typeof X != "number") {
			resultnoSq.innerHTML = "Please Enter a valid digit"
			return;
		}

		// store the initials and the conditions in an array
		let from = [A, A + 1, A + 2];
		let to = [X, 2 * X, 3 * X];


		//  Create a function to generate the multiplication  and store it in the resultArray according to the conditions
		function runTheLoop(start, condition) {
			for (let i = 1; i * start <= condition; i++) {
				resultArrayNoSq.push(i * start) // store the multiplication in the resultArray
			}
		}

		//call the function to generate the multiples using a ForEach loop
		from.forEach((element, index) => runTheLoop(element, to[index]))

		if (resultArrayNoSq.length == 0) {

			resultDivNoSQ.innerHTML = `There are no Multiples found for digit A=${A} and digit X=${X}`;
		} else {
			resultDivNoSQ.innerText = resultArrayNoSq;
		}


	});


refreshnosq.addEventListener("click", function () {

	resultArrayNoSq = [];
	resultDivNoSQ.innerHTML = "";
	spaceANoSq.value = "";
	spaceBNoSq.value = ""
	document.getElementById("digitA").value = "";
	document.getElementById("digitX").value = "";
	console.log("testing")

})





let sortAsc = document.getElementById("sortAscend");
sortAsc.addEventListener("click", function () {


	resultArrayNoSq = resultArrayNoSq.sort((a, b) => a - b)
	resultDivNoSQ.innerText = resultArrayNoSq;

})
let sortDesc = document.getElementById("sortDescend");
sortDesc.addEventListener("click", function () {


	resultArrayNoSq = resultArrayNoSq.sort((a, b) => b - a)
	resultDivNoSQ.innerText = resultArrayNoSq;

})

// a function which filters the duplicates
let remove = document.getElementById("removeDuplica");
remove.addEventListener("click", function () {

	resultArrayNoSq = resultArrayNoSq.filter((number, index) => {
		return resultArrayNoSq.indexOf(number) === index
	})
	resultDivNoSQ.innerText = resultArrayNoSq;

})
