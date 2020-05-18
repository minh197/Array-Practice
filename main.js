const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//milestone 2
//   let result = inventors.some(name => name.includes('y'))

// let name=inventors.filter(inventors => inventors.startsWith('A') )
// console.log('name is', name);

// let name2=inventors.filter(inventors => inventors.indexOf('n')>-1)
// console.log('name is ', name2)

// let name3=inventors.filter(inventors => inventors.includes('ss', 'nn' , 'tt' , 'oo' , 'mm'))
// console.log('name is', name3)

// name4 = inventors.filter((item) => {
//     let stringArr = item.split("");
//     for (let i = 0; i < stringArr.length; i++) {
//         if (stringArr[i] == stringArr[i + 1])
//             return item;
//     }
// });;
// console.log('name4 is', name4)

// let stringArr = numbers.filter((num) => {
//     return num%2==1;
// })
// console.log("odd number is: " , stringArr);


// let stringArr=numbers.filter((num) => {
//     for(let i=0; i<numbers.length; i++){
//         if(num>10 & num<100){
//             return num
//         }
//     }

// })
// console.log("two digit numbers are: ", stringArr);

// let stringArr=numbers.filter((num) => {
//     for(let i=2; i<numbers.length; i++){
//         if(num%2===0){
//             return false
//         }
//     }return num>2
// })
// console.log("prime number is ", stringArr);

//milestone 3

// name5 = inventors.map((item) => {
//     return item.split(" ",1);
// })
// console.log("first name is: ", name5)

// name6 = inventors.map((item) => {

//     return item.length
// })
// console.log("the length is: " + name6);

// name7 = inventors.map((item) => {
// return item.toUpperCase();
// })
// console.log("inventors name are: ", name7);
// let initials =[];
// name8 = inventors.map((item) => {
//     let eachName = item.split(' ')
//     return eachName.reduce((total,name)=>{
//         console.log("what is total",total)
//         console.log("what is name",name)
//         return total += name.charAt(0)},'')

// })
// console.log("inventors' initials are", name8);

// resultArr = numbers.map((num) => {
//     return num * 100;
// });
// console.log("Numbers are: " , resultArr);

//milestone 4

// Sort all the inventors in alphabetical order, A-Z.
// resultArr=inventors.sort();
// console.log(resultArr)

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
// resultArr = inventors.sort((a,b)=>{
// if(a>b) return -1
// if(a<b) return 1
// if(a=b) return 0
// });

// console.log("reverse array is", resultArr);

//Sort all the inventors by length of name, shortest name first.
// resultArr = inventors.sort((a,b)=>{
// if(a.length>b.length) return 1
// if(a.length<b.length) return -1
// if(a.length=b.length) return 0
// });
// console.log("new array is: ", resultArr);

//Sort all the inventors by length of name, longest name first. Do not use the reverse method.
// resultArr = inventors.sort((a,b)=>{
//     if(a.length>b.length) return -1
//     if(a.length<b.length) return 1
//     if(a.length=b.length) return 0
// })
// console.log("the new array is", resultArr)

//Milestone 5

//Find the sum of all the numbers.
// resultArr= numbers.reduce((total,num)=>{
//     return total+=num
// });
// console.log("total number is: ", resultArr)

//Find the sum of all the even numbers.
// resultArr=numbers.reduce((total,num)=>{
//     if(num%2===0){
//        return total+num;

//     }
//     return total;
// })
// console.log("total: ", resultArr);

//Create a string that has the first name of every inventor.
// resultArr = inventors.reduce((string, item) => {
//     return string + item.split(" ", 1);

// },"");
// console.log("First name is", resultArr)

//Milestone6

//Does any inventor have the letter 'y' in their name?
// resultArr=inventors.some((item)=>{ 
//     return item.search("y")>-1
    
// })
// console.log(resultArr)

//Does every inventor have the letter 'e' in their name?

// resultArr=inventors.every((item)=>{
//     return item.search("e")>-1
// })
// console.log(resultArr)

//Does every inventor have first name that's longer than 4 characters?
// resultArr=inventors.every((item)=>{
//     return item.split(" ")[0].length>4
// })
// console.log(resultArr)

//milestone7 
// Find the inventor that has a middle name.
// resultArr = inventors.find((inv) => {
//     return inv.split(" ").length > 2;
// });
// console.log(resultArr);
//Bonus 
// resultArr = inventors.filter((inv) => {
//     return inv.split(" ").length == 2;
// });
// console.log(resultArr);

//Find the number divisible by 7.
// num = numbers.find((inv)=>{
//     return inv%7==0
// });
// console.log(num)

//Bonus: Return a new array, that only has the numbers that are not divisible by 7.
// num = numbers.filter((inv)=>{
//          return inv%7!==0
//     });
//  console.log(num)

//Rocket 

// var fibonacci_series = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(fibonacci_series(14));
