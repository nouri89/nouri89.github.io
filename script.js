// /* 
// “In a language of your choice, using all best practice principles you’re aware of,
//  could you please provide code that iterates in multiples of A until X, then in multiples of A + 1 until 2X,
//   then multiples of A + 2 until 3X. Please state any assumptions you’ve made.

// Please upload to a public Github repository and share the link.”

// /********************************************************************************************************** */
/*
-The user will enter positive numbers.

-The result of multiplications will include the X,2X and 3X.

A front end was created using HTML and CSS files to take the entries from the user.

The approach taken to solve this challenge was to :

1-Create an empty array to save the result of every multiplication.

2-store the initials and the conditions in two separate arrays.

3-Create a call back function to generate the multiplication and store it in the resultArray according to the conditions to avoid repetition.

4-call the function to generate the multiples using a ForEach loop.

5-store the multiplication in the resultArray.

6-Display the result in the screen.

-A refresh button is created to clear the content.

-A sorting buttons is added to sort the result ascendent descendent.

-A remove duplicate button is also added.

Thank you very much.


*/



let showResult = document.getElementById("generate");
let resultDiv=document.getElementById("result");

let spaceA= document.querySelector("#digitA");
let spaceB =document.getElementById("digitX");
let resultArray =[] ;


showResult.addEventListener("click",

function multiples (){
  //  let resultArray =[]     // An array where to store the result of the multiplications
    resultDiv.innerHTML=resultArray;
    let A = parseInt(document.getElementById("digitA").value)
    let X =parseInt(document.getElementById("digitX").value) 
    if(A<=0||X<=0){   // An entry validation to make sure the multiplications does not generate zero
        resultDiv.innerHTML="Please Enter a positive number greater then Zero"
        return;
    }

   

     if(typeof A!="number" ||typeof X!="number"){ 
        resultDiv.innerHTML="Please Enter a valid digit"
        return;
     }
   
   // store the initials and the conditions in an array
   let from =[A,A+1,A+2];
   let to=[X,2*X,3*X];

  
   // Create a function to generate the multiplication  and store it in the resultArray according to the conditions
   function runTheLoop( start, condition){
    for(let i=1;i*start<=condition;i++){       
                resultArray.push(i*start)// store the multiplication in the resultArray
            }
   }
   
   //call the function to generate the multiples using a ForEach loop
   from.forEach((element,index)=>runTheLoop(element,to[index]))

   
  


    

    if(resultArray.length==0){
        
        resultDiv.innerHTML=`There are no Multiples found for digit A=${A} and digit X=${X}`;
    }
    else{
        resultDiv.innerText=resultArray;
    }
    
        
});

let clearResult=document.getElementById("refresh");
refresh.addEventListener("click",function(){
   
    resultArray=[];
    resultDiv.innerHTML="";
    spaceA.value="";
    spaceB.value=""
   document.getElementById("digitA").value="";
   document.getElementById("digitX").value="";

})
let sortAsc=document.getElementById("sortAscend");
sortAsc.addEventListener("click",function(){
    

    resultArray= resultArray.sort((a,b)=>a-b)
    resultDiv.innerText=resultArray;
   
})
let sortDesc=document.getElementById("sortDescend");
sortDesc.addEventListener("click",function(){
    

    resultArray= resultArray.sort((a,b)=>b-a)
    resultDiv.innerText=resultArray;
   
})

// a function which filters the duplicates
let remove=document.getElementById("removeDuplica");
remove.addEventListener("click",function(){
    
    resultArray= resultArray.filter((number,index)=> {return resultArray.indexOf(number)===index})
   resultDiv.innerText=resultArray;
   
})
