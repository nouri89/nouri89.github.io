

/********************************************************************************************************** */
/*The approach taken to solve this challenge is to :
1-create an empty array to save the result of every multiplication.
-Check if A or X are greater then zero if note an error message is thrown.

2-use a for loop to iterate in multiples starting the iteration from 2 and incrementing it by 2 to provide multiples.
3-test the three conditions :
 -multiples of A until X.
 -multiples of A+1 until 2X.
 -multiples of A+2 until 3X.
 and store them accordingly 
 

*******************************************************************************************************************/




let showResult = document.getElementById("generate");
let resultDiv=document.getElementById("result");


showResult.addEventListener("click",

function multiples (){
    let resultArray =[]     // An array where to store the result of the multiplications
    resultDiv.innerHTML=resultArray;
    let A = parseInt(document.getElementById("digitA").value)
    let X =parseInt(document.getElementById("digitX").value) 
    if(A<=0||X<=0){   // An entry validation to make sure the there are no zero or negative number
        resultDiv.innerHTML="Please Enter a Positive number greater then Zero"
        return;
    }

  
     if(typeof A!="number" ||typeof X!="number"){ 
        resultDiv.innerHTML="Please Enter a valid digit"
        return;
     }
   
    
   /*  First iteration using a for loop to generate the first multiples of A until X  the condition to stop the loop is that the multiplication  index*A<=X 
       Every time an iteration is completed the result is pushed to the array*/
    for(let index=2;index*A<=X;index+=2){       
        resultArray.push(index*A)
    }

 /*  Second iteration to generate the second multiples of A + 1 until 2X the condition to stop the loop is index*(A+1)<=2X 
       Every time an iteration is completed the result is pushed to the array*/
    for(let index=2;index*(A+1)<=(2*X);index+=2){
        resultArray.push(index*(A+1))   
   }
   /*  Third  iteration to generate the last multiples of A + 2 until 3X the condition to stop the loop is index*(A+2)<=3X 
       Every time an iteration is completed the result is pushed to the array*/
    for(let index=2;index*(A+2)<=(3*X);index+=2){
        resultArray.push(index*(A+2))  
    }
  /* Check if there are mutiples genertated  if not desplay a message */
    if(resultArray.length==0){
        resultDiv.innerHTML=`There are no Multiples found for digit A=${A} and digit X=${X}`;
    }
    else{
        resultDiv.innerText=resultArray;
    }
        
});

let clearResult=document.getElementById("refresh");
refresh.addEventListener("click",function(){
    resultDiv.innerHTML="";
   document.getElementById("digitA").value="";
   document.getElementById("digitX").value="";

})
