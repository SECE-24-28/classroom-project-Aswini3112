// const name="John";
 document.body.style.backgroundColor="pink";
// // //document.body.parentElement.style.backgroundColor="red";//not work
// // document.body.style.fontSize="20px";
// // document.title=`${name}-Dashboard`;
// const cont = document.getElementById('b3');
// cont.style.backgroundColor="black";
// cont.style.color="white";
// cont.style.fontSize="40px";
// const fc=document.getElementById('flexContainer');
// fc.style.display="flex";

// const cont=document.getElementById('container');
// cont.innerHTML='<h1 class="textChange">This is using innerHTML</h1>';
// document.getElementById('textChange').innerText='Hello world';

// const box=document.getElementsByClassName('box');
// console.log(box);
// for(let i=0;i<box.length;i++){
//     box[i].style.height="80px";
//     box[i].style.width="80px";
//     box[i].style.border="5px solid black";
//     box[i].style.backgroundColor="red";
//     box[i].style.color="white";
//     box[i].style.fontSize="30px";
//     box[i].style.margin="10px";
// }
// //box.style.backgroundColor="yellow";

// const cont=document.getElementsByTagName('div');
// cont[3].style.backgroundColor="red";

//querySelector and querySelectorAll
//querySelector-return the first element that it finds.
//querySelectorAll-return us a list of all the element 
// that can be accessed using the index numbers. 

// const cont = document.querySelector("div");
// const cont2 = document.querySelectorAll("div");
// cont[4].style.fontSize="30px";
// [...cont2].forEach(x=>console.log(x));//[1,2,3,4,5]

//classList

// const box1 = document.getElementById('b1');
// box1.classList.add('red');
// //box1.classList.remove('box');
// box1.classList.replace('red','blue');
// box1.classList.toggle('green');
// if(box1.classList.contains('box')){
//     console.log("Box class has been applied");
// }

//creation and deletion of an element using js

// const div = document.createElement('h1');
// div.textContent = "This h1 tag has been made using JS";
// document.body.appendChild(div);
// document.body.removeChild(div);

//event handlers

const btn = document.getElementById('modeChange');
const body=document.body;
btn.addEventListener('click',()=>{
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
});


