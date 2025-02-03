
// console.log('Js Test');

// // document.getElementById('heading1').innerHTML="Heading1 is changed!"; //getElementById
// // document.getElementsByClassName('class1')[0].innerHTML = "Para is changed!"; //when you add Element(s) then it becomes array. getElementsbyClassName.

//        //QUERYSELECTOR
// //document.querySelector("#pid").innerHTML = "paragraph is changed";
// //document.querySelector('p').innerHTML = "Para2 is changed";

// // document.querySelector('a').innerHTML="Home link";
// // document.querySelector('li a').innerHTML="Tutorial link name is changed";
// // document.querySelector('.my-div a').innerHTML = "Contact link name is changed";

//                 //QUERYSELECTORALL

// // document.querySelectorAll('p')[0].innerHTML = "para is changed!";  

//                 //EVENTLISTENER/ONCLICK

// // function myMessage(){

// //     alert("You have clicked a button")
// // }    

// // var c1 = document.querySelector('#pid');

// // function click1(){


// //     c1.innerHTML = "You have clicked button 1";


// // }

// // function click2(){

    
// //     c1.innerHTML = "You have clicked button 2";


// // }

// // var x = document.querySelector('#imgid');

// // function img1(){

// //     x.src = "eagleye.jpg";
// // }
// // function img2(){

// //     x.src = "snake.jpg";
// // }

// //TUTORIAL-38

// // var x = document.getElementsByTagName('a')[0];
// // x.innerHTML = "Google";
// // //If you want to change the style property

// // x.style.textDecoration = "none";
// // x.style.color= "green";
// // x.style.fontSize = "1.5rem";
// // x.href = "https://www.google.com";

// // var y = document.getElementsByTagName('h1')[0];
// // y.style.color = "Blue";

// // var heading3 = document.createElement("h1");
// // var text = document.createTextNode("New header is added");
// // heading3.appendChild(text);

// // var myDiv = document.getElementById('my-div');
// // myDiv.appendChild(heading3);

// // var removeh1 = document.getElementsByTagName('h1')[1];
// // myDiv.removeChild(removeh1);

// // var heading0 = document.createElement('h1');
// // var text0 = document.createTextNode("This is heading 0");
// // heading0.appendChild(text0);
// // var heading1 = document.getElementsByTagName('h1')[0];
// // myDiv.insertBefore(heading0,heading1);

// //TUTORIAL-39

// //Traversing DOM

// //TUTORIAL-40 IMAGE_SLIDER

// // var photos = ['eagleye.jpg','snake.jpg','boats.jpg'];
// // var imgselect = document.querySelector('img');
// // var count = 0;

// // function next(){

// //     count ++;
// //     if(count>=photos.length){
// //        count = 0;
// //        imgselect.src = photos[count];
// //     }
// //     else{
// //        imgselect.src = photos[count];
// //     }   





// // }

// // function prev(){

// //        count --;
// //        if(count < 0){

// //               count = photos.length - 1;
// //               imgselect.src = photos[count];

// //        }
// //        else{
// //               imgselect.src = photos[count];
// //        }

       
// // }

// //TUTORIAL-41

// // var myVar = document.querySelector('.paraId');

// // function addStyle(){

       
// //        myVar.classList.add("paraStyle"); //This class name is from style.css file

// // }

// // function removeStyle(){

    
// //        myVar.classList.remove("paraStyle");
// // }

// //TUTORIAL-42  EVENT-LISTENER

// // var myVar = document.querySelector("#h1Id");

// // myVar.addEventListener("mouseover", function(){

// //        myVar.classList.add("h1-style");
// // } );

// // myVar.addEventListener("mouseout", function(){

// //        myVar.classList.remove("h1-style");
// // } );

// //TUTORIAL-43

// // var len = document.querySelectorAll('.myBut').length;

// // for(var i=0; i<len; i++){

// //        document.querySelectorAll(".myBut")[i].addEventListener("click", function(){


// //               var text = this.innerHTML;
// //               document.querySelector("h1").innerHTML = text + " is clicked";


// //        });
// // }

// //TUTORIAL- 44 Audio play in js

// // for( var i=0; i<3; i++){
// //    document.querySelectorAll('.myBut')[i].addEventListener("click", function(){
// //        var text = this.innerHTML;
// //        console.log(text);
// //        audioPlay(text);
// //        playAnimation(text);
       



// //    });
// // }



// //    function audioPlay(text){
// //        switch(text){

// //               case "A": 
// //                   var audio = new Audio("sounds/a.mp3");
// //                   audio.play();
// //                   break;

// //               case "B": 
// //                    var audio = new Audio("sounds/b.mp3");
// //                    audio.play();
// //                    break;
                     
// //               case "C": 
// //                     var audio = new Audio("sounds/c.mp3");
// //                     audio.play();
// //                     break;   
// //        }
// // }
// // function playAnimation(a){

// //     var s= document.querySelector("." + a);
// //     s.classList.add("anim");

// //     setTimeout(function(){

// //         s.classList.remove("anim")
// //     },1000);
// // }

// // document.addEventListener('keypress', function(event){

// //     var k = event.key;
// //     audioPlay(k);
// //     playAnimation(k);
// // });

// // var department = document.querySelector('#department');
// // // console.log(department);
// // department.addEventListener('change',handleDepartment);

// // function handleDepartment(e){
// //        console.log(e.target.value);
// // }

// // var form = document.querySelector('form');
// // var name = form.querySelector('div #name');
// // var email = form.querySelector('div #email');
// // var password = form.querySelector('div #pass');

// // form.addEventListener('submit', formHandler);

// // function formHandler(e){

// //        e.preventDefault(); //It will refresh the form.

// //        const userInfo = {

// //               name : name.value,
// //               email : email.value,
// //               password : pass.value,
// //        }

// //        console.log(userInfo);
// //        name.value = '';
// //        email.value = '';
// //        pass.value = '';
       


// // }

// // vid-49

// // const video = document.querySelector('video');
// // video.addEventListener('canplay', function(){

// //     console.log('canplay');
// // });
// // video.addEventListener('play', function(){

// //     console.log('play');
// // });
// // video.addEventListener('playing', function(){

// //     console.log('playing');
// // });
// // video.addEventListener('pause', function(){

// //     console.log('paused');
// // });
// // video.addEventListener('ended', function(){

// //     console.log('Video ended');
// // });
// // video.addEventListener('volumechange', function(){

// //     console.log('volumechange');
// // });

// // vid-50
// // window.addEventListener('load', function(){
// //     console.log('load');
// // });

// // window.addEventListener('unload', function(){
// //     console.log('unload');
// // });
// // window.addEventListener('scroll', function(){
// //     console.log('scrolling');
// // });
// // window.addEventListener('scroll', function(){
// //     console.log('scrolling');
// // });
// // var divLocation = document.querySelector('.div-location');
// // var p1 = divLocation.children[0];
// // p1.textContent = location.href;

// // var p2 = divLocation.children[1];
// // p2.textContent = location.hostname;

// // var p3 = divLocation.children[2];
// // p3.innerHTML = location.host; //you can use innerHTML or textContent are the same.

// // var p4 = divLocation.children[3];
// // p4.innerHTML = location.pathname;

// //  function welcomeMessage(){

// //        var h1 = document.createElement('h1');
// //        let text;

// //        var name = prompt("Enter your name: ");
// //        if(name==null || name ==''){
// //               text = "name not found!"
// //        }else{
// //               text = "welcome "+ name;
// //        }

// //        var textNode = document.createTextNode(text);
// //        h1.appendChild(textNode);
// //        document.body.appendChild(h1);
// //  }

// //  welcomeMessage();

// // Js Time events: setTimeOut/setInterval

// // setTimeout(() => {

// //        console.log('setTimeout popped up!');

// // },2000);

// // setTimeout(display, 2000);

// // function display(){

// //        console.log('Display function called via setTimeout');
// // }

// var s_btn = document.querySelector('.save-btn');
// var para = document.querySelector('.message');

// // s_btn.addEventListener('click',saveUser);

// // function saveUser(){
// //        para.textContent = "User Registration Successful!";

// //        setTimeout(() => {

// //               para.textContent = "";

// //        },2000);

// // }

// // s_btn.addEventListener('click', displayCount);

// // function displayCount(){
// //        count = 0;
// //        para.textContent = count;

// //        setInterval(() => {

// //               count++;
// //               para.textContent = count;

// //               if(count>5){
// //                      para.textContent = "Terminated";

// //                      setTimeout(()=>{

// //                             para.textContent= '';
// //                      },2000);
// //               }
// //        },1000);
// // }

// s_btn.addEventListener('click', startClock);

// function startClock(){

//        let date = new Date();
//        let hours = date.getHours();
//        let mins = date.getMinutes();
//        let secs = date.getSeconds();

//        mins = formatTime(mins);
//        secs = formatTime(secs);

//        let time = hours + ":" + mins + ":" + secs;

//        para.textContent
//        = time;

//        setInterval(startClock,1000);
// }

// function formatTime(value){

//        if (value<10){
//               value = "0" + value;
//        }
//        return value;
// }

// //        console.log('Display function called via setTimeout');
// // }

// // var s_btn = document.querySelector('.save-btn');
// // var para = document.querySelector('.message');

// // s_btn.addEventListener('click',saveUser);

// // function saveUser(){
// //        para.textContent = "User Registration Successful!";

// //        setTimeout(() => {

// //               para.textContent = "";

// //        },2000);

// // }

// // s_btn.addEventListener('click', displayCount);

// // function displayCount(){
// //        count = 0;
// //        para.textContent = count;

// //        setInterval(() => {

// //               count++;
// //               para.textContent = count;

// //               if(count>5){
// //                      para.textContent = "Terminated";

// //                      setTimeout(()=>{

// //                             para.textContent= '';
// //                      },2000);
// //               }
// //        },1000);
// // }

// // s_btn.addEventListener('click', startClock);

// // function startClock(){

// //        let date = new Date();
// //        let hours = date.getHours();
// //        let mins = date.getMinutes();
// //        let secs = date.getSeconds();

// //        mins = formatTime(mins);
// //        secs = formatTime(secs);

// //        let time = hours + ":" + mins + ":" + secs;

// //        para.textContent
// //        = time;

// //        setInterval(startClock,1000);
// // }

// // function formatTime(value){

// //        if (value<10){
// //               value = "0" + value;
// //        }
// //        return value;
// // }

// //Js Error Handling:

// //try-catch-finally

// // try{
// //        alert("This is try block");
// //        alert(x); // Remember this will cause the error.
// // }catch(e){

// //        console.log("Error caught!");
// //        console.log(e.name);
// // }finally{

// //        alert("This is final block after error is being handled!");
// // }

// // var c = document.getElementById('myCanvas');

// // var ctx = c.getContext('2d');

// // ctx.fillStyle = "green";
// // ctx.fillRect(10,10,370,270);
// // ctx.strokeStyle ='black';
// // ctx.strokeRect(10,10,370,270);
// // ctx.lineWidth = 5;

// // var centerX = c.width/2;
// // var centerY = c.height/2;

// // ctx.beginPath();
// // ctx.arc(centerX,centerY,60,0,360,false);
// // ctx.fillStyle = 'red';
// // ctx.fill();
// // ctx.strokeStyle = 'pink';
// // ctx.stroke();

// //             ES6

// // Use of `` back ticks and ${}
// // For ES6 we use let instead of var/const & for function we use const.

// // let x = 10;
// // let y = 40;

// // let sum = x + y;

// // console.log(`Sum of x and y are: ${sum} in total.`)

// // const add = (x,y) => {

      

// //        let sum = x + y;

// //        console.log(`Sum of x and y are: ${sum} in total.`)
// // }

// // add(10,40);

// // const car = (name) => {

// //        console.log(`Name of your car is: ${name}`);
// // }

// // var n =  prompt("Enter the name of your car: ")

// // car(n);

// // "use strict"    strict mode on

// // Rest Parameter (...variable)

// // function printNumbers(x,y,...z){

// //        console.log(`x = ${x},  y = ${y}, z = ${z}`);
// // }

// // printNumbers(10,20,30,40,50,60);

// // Spread Operator

// // function addNumbers(x,y,z){

// //        return x+y+z;
       
// // }

// // let num = [5,5,5];
// // console.log(addNumbers(...num));

// // let num1 = [1,...num,3,4];
// // console.log(num1);

// // let p1 ={

// //        name : "Abdullah Nafis Chowdhury",
// //        age : 27

// // }
// // let p2 ={

// //        nationality : 'Bangladeshi',
// //        occupation : 'pvt job'
// // }

// // let p = {...p1, ...p2};
// // console.log(p);

// //  OBJECT LITERALS

// // function CarInfo(name, model){

// //       return{

// //        name,
// //        model,
// //         } 
// // }

// // console.log(CarInfo("Allon", 2017));

// // Concise way of implementing a function inside of an object

// // let message = {
// //        HiFunct(){

// //               return 'H!, I am an object function'
// //        }
// // }

// // console.log(message.HiFunct());

// // let Animal = {

// //        bird(){

// //               return 'Birds can fly'
// //        }
// // }
// // console.log(Animal.bird());

// // Using space in function name:

// // let Vehicle = {

// //        'car lover'(){

// //               return 'Hi, Im car lover function'
// //        }
// // }
// // console.log(Vehicle['car lover']());

// //  for...of and for...in

// //  let names = ['n1','n2','n3','n4'];

// //  for(name of names){

// //        console.log(name);
// //  }

// //  let Info = {

// //        name : "Nafis Chowdhury",
// //        age : 27,
// //        Occupation: "job",
// //  }

// //  for(x in Info){

// //        console.log(`${x} : ${Info[x]}`)
// //  }

// var numbers = [10,20,30,40];

// numbers.forEach(function(x,index,arr){

//        arr[index] = x + 5;
// })

// console.log(numbers);

// //        console.log(`${x} : ${Info[x]}`)
// //  }

// // var numbers = [10,20,30,40];

// // numbers.forEach(function(x,index,arr){

// //        arr[index] = x + 5;
// // })

// // console.log(numbers);

// // forEach, map, filter

// // var num = [1,2,3,4];
// // var sqrNum = [];
// // num.forEach(function(x){

// //        sqrNum.push(x*x);
// // })

// // console.log(sqrNum);

// //      USING MAP


// // var num = [1,2,3,4];
// // var sqrNum = num.map(function(x){

// //        return(x*x);
// // })

// // console.log(sqrNum);

// //      USING FILTER

// var num = [8,55,1,3,4,98,100,123]

// var Hnum = num.filter(function(x){

//        return x>=100
// })

// console.log(Hnum);

// //      USING FILTER

// // var num = [8,55,1,3,4,98,100,123]

// // var Hnum = num.filter(function(x){

// //        return x>=100
// // })

// // console.log(Hnum);

// // Arrow Function

// // function display1(){

// //        console.log('This is display 1 function'); // Traditional Function
// // }

// // const display2 = () => {

// //        console.log('This is display 2 function'); //Arrow Function
// // }

// // display1();
// // display2();

// // const addN = (x,y) => {

// //       return x + y;
// // }

// // console.log(addN(50,50));

// // const StudentInfo = [
// //        {
// //               Name : "Nafis",
// //               Id: 101,
// //               Cgpa: 3.93,
// //        },
// //        {
// //               Name : "Siddik",
// //               Id: 102,
// //               Cgpa: 2.93,
// //        },
// //        {
// //               Name : "Sadi",
// //               Id: 103,
// //               Cgpa: 3.23,
// //        },
// //        {
// //               Name : "Rafsan",
// //               Id: 104,
// //               Cgpa: 2.56,
// //        },
// // ]

// // const StudentPrint = () => StudentInfo.filter((x) => x.Cgpa>3) . map((y) => y.Name);

// // console.log(StudentPrint());

// //    Destructuring

// // let arr = [1,2,3,4,5];
// // let [n1,n2,n3,n4,n5] = arr;
// // console.log(n1);

// let a = 10, b = 20;

// [a,b] = [b,a]

// console.log(a);
// console.log(b);

// console.log("This is Js testing!")

// ES6 Modules & Classes
//  Modules - Export/Import

 // * check in ES6 Module folder

 // Class

//  class Student{
//     // constructor
//     constructor(name,id){

//         this.name = name;
//         this.id = id;
//     }

//     set studentName(name){

//         this.name = name;


//     }

//     get studentInfo(){

//         return this.id+ ' ' + this.name;
//     }

//  }

//  // creating object

//  let s1 = new Student('Nafis',101)

// //  console.log(`Student Name: ${s1.name} and Id: ${s1.id}`);

// // s1.studentName = 'Abdullah';
// // console.log(s1.name);

// console.log(s1.studentInfo);

// Synchronous VS Asynchronous

// In Asynchronous, you just have to add setTimeout function

// const Task1 = () => {

//     console.log("Task-1");
// };

// const DataLoading = () => {

//     console.log("Task-2. Data Loading");
    
// }
// const Task2 = () => {

//     setTimeout(DataLoading,2000);
// };
// const Task3 = () => {

//     console.log("Task-3");
// };
// const Task4 = () => {

//     console.log("Task-4");
// };
// const Task5 = () => {

//     console.log("Task-5");
// };

// Task1();
// Task2();
// Task3();
// Task4();
// Task5();

// Callback and higher order function

// function Square(x) {

//     console.log(`Square of ${x} : ${x*x}`);

// }
// // Square(5);

// function higherOrderFunc(num, callback){

//     callback(num);
// }
// higherOrderFunc(10,Square);

const Task1 = (callback) => {

    console.log("Task-1");
    callback();
};

const Task2 = (callback) => {

    setTimeout(() => {

        console.log('Task-2. Data Loading')
        callback();
    },3000);
    
};
const Task3 = (callback) => {

    console.log("Task-3");
    callback();
};
const Task4 = (callback) => {

    console.log("Task-4");
    callback();
};
const Task5 = (callback) => {

    console.log("Task-5");
    callback();
};

Task1(() => {

    Task2(() => {

        Task3(() => {
            Task4(()=>{

                Task5();
            });
        });
    });
});







 


 




