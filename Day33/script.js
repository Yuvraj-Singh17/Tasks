// console.log("Question 1");

// let age = prompt("Enter your age : ")
// if(age === null){
//     console.error("You cancelled to enter the name")
// }else if(age.trim() === ""){
//     console.error("please enter integer")
// }else{
//     age = Number(age)
//     if(isNaN(age)){
//         console.error("Number enter karo");
//     }else{
//         if(age >= 18){
//             console.log("Eligible")
//         }else{
//             console.log("Not Eligible")
//         }
//     }
// }

// console.log("Question 2")

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }


// console.log("Question 3")

// let count = 0;
// for(let i = 1 ; i < 16 ; i++){
//     if(i > 8){
//         count++;
//     }
// }
// console.log(`Number of elements that are greater than 8 are ${count}`)

// Question4 .Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let Hardcoded_Password = prompt("Enter Password")
// if(Hardcoded_Password === prompt("Confirm Password")){
//     console.log("Password Matched");
// }else{
//     console.log("Incorrect Password")
// }


// Question 5 . Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// let password = "virat18"
// let chances = 3;

// while(chances > 0){
//     if(password === prompt("Enter Password")){
//         console.log("User Logged In");
//         break;
//     }
//     --chances;
//     console.warn(`${chances} chances remaining`);
// } 
// if(chances === 0){
//     console.log("Your account is blocked");
// }


// Question 6 . Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".
// let count = 0;
// while(true){
//     let user_input = prompt("Enter yes or stop ay number of times");
//     if(user_input === "yes"){
//         count++;
//     }
//     if(user_input === "stop"){
//         break;
//     }
// }
// console.log(`User entered "yes" ${count} times`);


// Question 7. Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

// for(let i = 1 ; i < 51 ; i++){
//     if(i%7 === 0) console.log(i);
// }

// Question 8. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

// let sum = 0;

// for(let i = 0 ; i <= 30 ; i++){
//     if(i%2 != 0){
//         sum += i;
//     }
// }
// console.log(sum)

//Question 9. Keep asking number until user enters an even number Use while loop. Stop only if input is even.

// while(true){
//     let user_input = +prompt("Enter a Number");
//     if(user_input%2 == 0){
//         console.log("You entered a even number !!")
//         break;
//     }
// }


//Question 10. Print numbers between two user inputs Input start and end using prompt() → print all between.

// let start = Number(prompt("Enter start number"));
// let end = Number(prompt("Enter end number"));

// for(let i = start; i <= end; i++){
//   console.log(i);
// }


//Question 11.  Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.
// let c = 3;
// for(let i = 1 ; i <= 20 ; i++){
//     if(c > 0 && i%2 != 0){
//         console.log(i);
//         c--;
//     }
// }



//Question 12.Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

// let count = 0;
// let inp = 5;
// while(inp > 0){
//     let input = +prompt(`Enter ${inp} more numbers : `);
//     if(input > 0 || count == 0) count++;
//     inp--;
// }
// console.log(count)

//Question 13. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times.If enough balance → deduct
//Else → print “Insufficient balance”

// let withdrawal = 3;
// let balance = 1000;

// while(withdrawal > 0){
//     let ask = +prompt("Enter amount : ");
//     if(ask <= balance){
//         console.log("withdrawl done");
//         balance = balance - ask;
//     }else{
//         console.log("Not sufficient Amount");
//         break;
//     }
//     withdrawal--;
// }