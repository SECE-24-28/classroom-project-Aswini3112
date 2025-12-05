// console.log("Hello world again");
// console.log(2+3);

//a=25;
//b="Hello";
//c=50;
//Dont use var unless absolutely necessary as it can be used even 
// before initilization and it can also be reduced.
//var a=10;
//var a=30;
//b=10//not allowed
//let b="H1";
//let b=10;//not allowed
//const c=30.5;
//c=50;
//let a=true;
// console.log(c);

// Array - is a datatype that show multiple elements of the 
// same datatype.
//let a=[12,13,15];
//console.log(a);
// const c=[10,"Hello",30.5,true];//can change or add or
// //remove elements from the arrya even if its constant as we care 
// // not redeclaring the variable and we are not changing its datatype.
// //c=[1,2,3]//not allowed
// c.push(15);
// c.push(60,20,30);//we can insert multiple or on element 
// c[2]=40;//is allowed
// // console.log(c[2]);
// // console.log(c);
// // console.log("Before: ",c);
// c.pop(c);
// //console.log("After: ",c);
// //console.log(c.length);//returns the length.
// c.unshift(70);//unshift element add the element from the start 
//console.log(c);
// c.shift();//shift element remove the element from the start 
// console.log(c);//slipce(startIndex,deleteIndex,item1,item2,item3,...,itemn)//helps us to add ,remove 
// and alter elements in our array.
// c.splice(1,3);//delete
// console.log(c);
// c.splice(2,0,"world");//add 2-startind index,0-nothing to be delete,"world"-add in 2 position.
// console.log(c);
// c.splice(2,1,50);//replace 2-startind index,1-one to be delete,"world"-add in 2 position.
// console.log(c);
// c.splice(-1,1);//last one element delete
// console.log(c);
// c.splice(-1,1,"Hello");//last one element replace 
// console.log(c);
// const arr = [1,2,3,4,5,6];
// console.log("Before Map Function: ",arr);
// const newArr = arr.map(num => num*5);
// console.log("After Map Function: ",newArr);

// Array filter 

// const newArr=arr.filter(num => num%2===0);
// console.log("After filter: ",newArr);
// const course=["MongoDB","Express.Js","Postgress","React.Js","Node.Js"];
// console.log("Courses: ",course);
// const newCourse = course.filter(c=>c!=="Postgress");
// console.log('Update courses ${newCourse}');

//reduce - folds an array into a single value by calling a reducer function 
// for each and every element
// const arr = [1,2,3,4,5];
// const sum = arr.reduce((store, num)=> num+store);
// console.log(`Addition of ${arr} = ${sum}`);
// console.log("Addtion ",sum);

// const user={
//     firstName:"John",
//     lastName:"Doe",
//     company:{
//         salary:10000,
//         position:"Software Developer",
//     }
    
// }
// const user2={}
// // console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user['lastName']);

// user.age = 34;
// console.log(user);
// user['lastName']="Singh";
// delete user.firstName;
// // console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

//spread opreator
// const arr1=[5,6,7];
// const arr2=[1,2,3,4];
// const merge=[...arr1,...arr2];//[5,6,7,1,2,3,4]
// console.log(merge);


// const arr = [1,2,3,4,5];//will work
// //arr = [3,4,5];//will not work
// arr[3]=50;//will work
// console.log(arr);

//function

//function is a block of reusable code that we use so that we can follow rule called do 
// not repeat yourself (dry) principle

// function add(a,b){
//     return a+b;
// }
// console.log(add(5,6));
// function add(a,b){//hoisted function
//     const c=a+b;
//     return c;
// }
// console.log(add(5,6));
// const add = function(a,b){//non hoisted function
//     const c=a+b;
//     return c;
// }

// const user ={
//     add:function(a,b){
//         return a+b;
//     }
// }
// const add = function addition(a,b){
//     const c= a+b;
//     return c;
// }

// const fact=function factorial(num){
//     //return n<=1?1: factorial(num-1);
//     if(num<=1){
//         return 1;
//     }
//     else{
//         return num*factorial(num-1);
//     }
// }
// console.log(fact(5));


// const arr=[12,53,23,76,56];
// function addArr(arr){
//     const sum = arr.reduce((acc,num)=>acc+num);
//     return sum;
// }
// console.log(addArr(arr))

const sum = (a,b)=>{return a+b};
// const subs=(a,b)=>{return a-b};
// console.log(sum(5,7));
// console.log(subs(15,2));

//function 

// function greet(name="Guest"){
//     console.log(`Hello to you,${name}`);
// }
// greet();
// function greet(name="Guest"){
//     console.log(`Hello to you,${name}`);
// }
// greet("John");
// function greet(name="Guest"){
//     console.log(`Hello to you,${name}`);
// }
// greet();

//loops

// for(let i=0;i<10;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }
// let i=1;
// // while(i<=10){
// //     console.log(`5 x ${i} = ${5*i++}`);
// // }
// do{
//      console.log(`5 x ${i} = ${5*i++}`);
// }while(i<=10)

// const arr=[12,54,67,44,88,24];

// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i]);
// }
// for(const item of arr){
//     console.log(item);//12 54 67 44 88 24
// }

// const user={
//     fname:"John",
//     lname:"Doe",
//     age:45,
//     occupation:"Java Developer", 
// }
// for(const key in user){
//     console.log(`${key}:${user[key]}`);
// }

//for-each
const arr=[12,54,67,44,88,24];
arr.forEach(x=>console.log(x));