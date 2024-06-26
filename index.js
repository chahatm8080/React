// let num1 = 5;
// let num2 = 3;


// let sum = num1 + num2;
// alert(sum); 

// let result = (num1 + num2) /2;
// console.log(result); 


// let count = 5;
// count++;
// console.log(count);
// count--; 
// console.log(count);

/*
if (num1==num2){
  console.log("true");
}
else 
{
  console.log("false");
}*/

// let a=10;
// let adultHoodAge = 18;
// if(a=adultHoodAge){
//   alert('A is minor');
// }
// else if (a=== adultHoodAge){
//   console.log('A is exactly' + adultHoodAge);
// }
// else{
//   console.log('A is an adult');
// }

// let a=10;
// let b='10';

// console.log(a==b); true
// console.log(a===b); false


// let a = 18;
// let adultHoodAge = '18';
// if(a > adultHoodAge) 
// {
// console.log('A is an adult');
// } 
// else if (a === adultHoodAge) 
// {
//   console.log('A is exactly' + adultHoodAge);
// }
// else 
// {
// console.log('A is a minor ');
// }

// let a=10;
// let b=a;
// // console the variable a, a times 

// for(let b=a; b>0; b=b-1)
//   {
//     console.log(a);
//   }
// while(b>0){
//   console.log(a);
//     if(b<2)
//   {
//     break;
//   }
//   b=b-1;
//   console.log(b);
//   }


// let rows = 5;
// let pattern = "";


// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += "*";
//    }

//    pattern += "\n";
// }
// for (let n = rows; n >= 1 ; n--) {
//    for (let num = n; num >= 1; num--) {
//       pattern += "*";
//    }

//    pattern += "\n";
// }
// console.log(pattern);


// function sumOfTwoNumber (number1,number2) {
//   console.log(number1,number2)
//   console.log(number1+number2);
// }

// sumOfTwoNumber(1,2);
// sumOfTwoNumber(10,20);
// let key1=10
// const obj = {
//   [key1]:10,
//   'key1':10,
//   'key2':'abcd',
//   'arrayKey':[],
//   'objectKey':{
//     'abcd':'xyz',
//     'xyz':1234
//   },
// }
// ;
// const array = Array(6)
// console.log(obj[key1]);
// console.log(obj[key1]);

// let var1 = obj.additionOf2Numbers(1,2)

//class is considered as similar objects
//why we use class
//if we want set of data 
//if we want to make the duplicate of existing one then we can use class
class class1{
  constructor(var1Value) {
    this.var1=var1Value;
  }
}
const instance1 = new class1();
const instance2 = new class1();
console.log(instance1.var1);'abcd'
console.log(instance2.var1); 10

const arr1 =[1,2,'abcd'];
const arr2=[false,undefined,null];