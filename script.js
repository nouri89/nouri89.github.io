/*

                     **************** TASK *************************
“In a language of your choice, using all best practice principles you’re aware of,
 could you please provide code that iterates in multiples of A until X, then in multiples of A + 1 until 2X,
  then multiples of A + 2 until 3X. Please state any assumptions you’ve made.
Please upload to a public Github repository and share the link.”

/********************************************************************************************************** */
/*******************************************************************************************************************
                 The approach taken to solve this challenge is to :
1-create an empty array to save the result of every multiplication.
2-Check if A or X are greater then zero if not an error message is thrown.
3-use a for loop to iterate in multiples starting the iteration from 1 and incrementing it by 1 to provide multiples.
4-test the three conditions :
 -multiples of A until X.
 -multiples of A+1 until 2X.
 -multiples of A+2 until 3X.
 and store them accordingly 
**********************************************************************************************************************/


let showResult = document.getElementById("generate");
let resultDiv = document.getElementById("result");

let spaceA = document.querySelector("#digitA");
let spaceB = document.getElementById("digitX");
let resultArray = [];


showResult.addEventListener("click",
	function multiples() {
		//  let resultArray =[]     // An array where to store the result of the multiplications
		resultDiv.innerHTML = resultArray;
		let A = parseInt(document.getElementById("digitA").value)
		let X = parseInt(document.getElementById("digitX").value)
		if (A <= 0 || X <= 0) { // An entry validation to make sure the multiplications does not generate zero
			resultDiv.innerHTML = "Please Enter a positive number greater then Zero"
			return;
		}

		if (typeof A != "number" || typeof X != "number") {
			resultDiv.innerHTML = "Please Enter a valid digit"
			return;
		}

		/*  First iteration using a for loop to generate the first multiples of A until X  the condition to stop the loop is that the multiplication  index*A<=X 
		    Every time an iteration is completed the result is pushed to the array*/
		for (let index = 1; index * A <= X; index++) {
			resultArray.push(index * A)
		}

		/*  Second iteration to generate the second multiples of A + 1 until 2X the condition to stop the loop is index*(A+1)<=2X 
		      Every time an iteration is completed the result is pushed to the array*/
		for (let index = 1; index * (A + 1) <= (2 * X); index++) {
			resultArray.push(index * (A + 1))
		}
		/*  Third  iteration to generate the last multiples of A + 2 until 3X the condition to stop the loop is index*(A+2)<=3X 
		    Every time an iteration is completed the result is pushed to the array*/
		for (let index = 1; index * (A + 2) <= (3 * X); index++) {
			resultArray.push(index * (A + 2))
		}
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

let sortAsc = document.getElementById("sortAscend");
sortAsc.addEventListener("click", function () {
	resultArray = resultArray.sort((a, b) => a - b)
	resultDiv.innerText = resultArray;

})
let sortDesc = document.getElementById("sortDescend");
sortDesc.addEventListener("click", function () {
	resultArray = resultArray.sort((a, b) => b - a)
	resultDiv.innerText = resultArray;
})

// a function which filters the duplicates
let remove = document.getElementById("removeDuplica");
remove.addEventListener("click", function () {

	resultArray = resultArray.filter((number, index) => {
		return resultArray.indexOf(number) === index
	})
	resultDiv.innerText = resultArray;

})
