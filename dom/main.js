// // // console.dir(document);
// // console.log(document.all);
// // console.log(document.domain);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);


// // GETELEMENTBYID
// var headerTitle = document.getElementById('header-title');
// // console.log(headerTitle.title);
// // this takes into considertation spans
// // headerTitle.textContent = 'hello';
// // this displays only the required value
// headerTitle.innerText = 'goodbye';
// headerTitle.innerHTML = '<h2> hello world </h2>';
// // console.log(headerTitle);

// var mainheader = document.getElementById('main-header');
// mainheader.style.borderBottom = '3px solid #000';
// // console.log(mainheader);

// // GETELEMENTSBYCLASSNAME   
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[0].innerText = 'hello';
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = '#f4f4f4'
// for htmlcollection normal forloop works forEach does not
// // now if we want to apply the same properties to each element then we need to iterate over it
// for(let i = 0;i < items.length;i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENTSBYTAGNAME
// SAME AS ABOVE GETELEMENTSBYCLASSNAME

// QUERYSELECTOR
// mainheader is id
// var head = document.querySelector('#main-header');
// head.style.borderBottom = 'solid 4px #ccc';


// var input = document.querySelector('input');
// // console.log(input);
// input.value = 'hel';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// // set alternate color of items gray

// var items = document.querySelectorAll('.list-group-item');
// console.log(items);
// var i = 0;
// items.forEach(function(ele){
//     if(i++%2 == 0)ele.style.backgroundColor = '#ccc';//dark gray
//     else ele.style.backgroundColor = '#f4f4f4';//light gray
// });


// var itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// parentElement is same as parentNode
// console.log(itemList.parentNode.parentNode);

// for finding children we use 
// .children property we can also use childNodes but it also outputs space (text)

// console.log(itemList.children);
// as the .children property gives htmlcollection we can use [] as array 
// console.log(itemList.children[1]);

// for finding first child we can use .firstChild but it gives spaces 
// to avoid that we use .firstElementChild
//  console.log(itemList.firstElementChild.textContent);

 //for last child we have same method but we use lastElementChild because of same reason as above
//  console.log(itemList.lastElementChild.textContent);

 //for finding siblings we have .nextSibling we use .nextElementSibling
//  console.log(itemList.nextElementSibling);

// for finding previousSibling we can use .previousSibling but we use .previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'black';


// creating new elements to add in document
var newDiv = document.createElement('div');

// set className  and id as div is supposed to have them
newDiv.className = 'newclassname';
newDiv.id = 'newid';

// console.log(newDiv);

// set attribute lets call it as title
newDiv.setAttribute('title' , 'my world');

// now we will add some text content in it

var textInDiv = document.createTextNode('this is text in new div');
//add this textnode in newly created div
// .append() allows you to append string objects also
// whereas .appendChild() allows you to append only Node objects
newDiv.appendChild(textInDiv);
// console.log(newDiv);

// now we will this newdiv in our form

// var container = document.querySelector('.container');
// container.appendChild(newDiv);
// console.log(container);

// we want to add it before ItemListener header
// this means in header i need container
// var container = document.querySelector('header .col-md-6');
// var abovethisnode = document.querySelector('header h1');
// // console.log(container);
// // console.log(abovethisnode);
// // container.appendChild(newDiv);
// // abovethisnode.previousElementSibling = newDiv;

// // insert our newdiv just before this container

// container.insertBefore(newDiv , abovethisnode);
// to add after the abovethisnode
// container.appendChild(newDiv);
// addEventListener takes two parameters 
// one is kind of event which we want to listen to
// another is the what action we want to do after listening to event

// var button = document.getElementById('button').addEventListener(
//     'click' , function(){
//         console.log('button is clicked');
//     })
// ;
// or
// var button = document.getElementById('button').addEventListener(
//     'click' , buttonClicked);


// function buttonClicked(e){
    // document.querySelector('#header-title').textContent = 'new content';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// which element was pressed it will return its complete class info
    // console.log(e.target);
    // // id of element which is pressed
    // console.log(e.target.id);
    // //class name of element which is pressed
    // console.log(e.target.className);
    // //classlist of target element
    // console.log(e.target.classList);

    // var newele = document.createTextNode(e.target+""+e.target.id);
    // var output = document.querySelector('#output');
    // output.appendChild(newele); 

    // we can also use getElementById , getElementByClassName instead of querySelector 
    // they are also good

    // which type of event happened whether it was click or keypress
    // console.log(e.type);

    // to get position of this event which happened from window
    // lets say it was click event which happened then when we use clientX and
    // clinetY it returns the position form window top left , top right

    // console.log(e.clientX);
    // console.log(e.clientY);

    // but lets we dont want the position of event from window 
    // but the evetn itself like if the button is wide
    // so on which position it was pressed

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // to see which key were pressed
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);


// }

var button = document.querySelector('#button');
button.addEventListener('click' , runevent);
var box = document.querySelector('#box');
// enter and leave will only be active for div id box for hello they wont be showing
// any change but if we use mouseover and mouseout we will get to see
// changes when we enter the "Gekk" area
// box.addEventListener('mouseenter' , runevent);
// box.addEventListener('mouseleave' , runevent);
// box.addEventListener('mouseover' , runevent);
// box.addEventListener('mouseout' , runevent);
// box.addEventListener('mousemove' , runevent);
// button.addEventListener('dblclick' , runevent);
// button.addEventListener('mousedown' , runevent);
// button.addEventListener('mouseup' , runevent);

var itemInput = document.querySelector('#item');

var form = document.querySelector('form');
// itemInput.addEventListener('keydown' , runevent);
// itemInput.addEventListener('keyup' , runevent);
// itemInput.addEventListener('keypress' , runevent);
// this will be active when we are inside the search box
// itemInput.addEventListener('focus' , runevent);
// this will be active  when we go out of search box if  we are originally
// out nothing changes
// itemInput.addEventListener('blur' , runevent);
// these will be fired when we cut or paste something
// itemInput.addEventListener('cut' , runevent);
// itemInput.addEventListener('paste' , runevent);
var select = document.querySelector('select');
select.addEventListener('change' , runevent);
form.addEventListener('submit' , runevent);
function runevent(e){
    e.preventDefault();
    console.log('this is '+e.type);
    console.log(e.target.value);
    // var text = document.getElementById('output');
    // for adding element in output div dont use appendChild as it
    // will keep on appending child and the previous ones will not be removed
    // implicitly better is to use innnerHTML it wont append the value just
    // output them as they are
    // text.innerHTML = '<h3>'+e.target.value+'</h3>';
    // output.innerHTML = '<h3>Mousex: '+e.offsetX + ' </h3> <h3> MouseY : '+e.offsetY+' </h3>';
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40 )";
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",0 )";
    
}

