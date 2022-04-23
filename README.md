Hello and welcome to my Code:

*There are two  approaches taken to solve this challenge :

 1-Assuming the iteration is a sequence hence:
-create an empty array to save the result of every multiplication.
A nested function is declared with two arguments (start and condition) . the function contain a for loop and increase the value of index which was declared earlier to comply with exercise requirement.
The function is called via a forEach loop iterating the “from” array and passing also  the “to” values .

The for loop start with the value of A which referred as index, check the condition that  (index is less or equal to X in the first iteration store it’s value in the result Array and multiply  it’s value . and so on until the condition is not meet .
The value of A (index )is increased by one to do the second part of the exercise.
Following the same steps but this time the condition is 2*X .
The value of index= A+3 to represent the last iteration and the condition passed is 3*X.
Same steps are followed as well.


2-Assuming the iteration is a not in a sequence hence:

In the second Approach I assumed there is no sequence but instead  after generating the multiples of A until x ,the code will  start  gendering  multiple  of A+1  till 2x from the beginning  and also from A+3 till 3x .
The logic of the code is similar to the first one except that the loop reset itself and start form 1 and the multiplication is done inside the loop .
This will create sometimes a duplicate numbers and un ordered list . I have added a function to remove duplicates and sorting function one ascending and another descending.

 
 Thank you very much.
 
