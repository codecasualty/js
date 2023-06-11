// dom is document object model which is basically tree structure of document (like html tags and other stuffs)

// there are two kind of element selectors
// single element selectors and multiple element selectors

// in browser we have window object which is parent of all objects
// it has alert function and fetch and many other functions thus we don't write
// window.alert() , we write alert()
// console.log(window);

// single element selectors
// we can also write this as document.getElementById('my-form')
// console.log(window.document.getElementById('my-form'));
// we can also use 
// console.log(window.document.querySelector('h1'));
// even if there are more than one headers h1 still it will select the first one


// multiple element selectors
// console.log(document.querySelectorAll('.item'));

// iterating over multiple element selectors

// const items = document.querySelectorAll('.items');

// items.forEach(function(ele){
//     console.log(ele);
// });

// queryselector just returns the first item it matches in this case it returned the first element 
// // 
// let nodelist = document.querySelector('.items');
// // console.log(nodelist);
// nodelist.firstElementChild.textContent = 'hello';
// nodelist.children[0].textContent = 'ew';
// // nodelist.children[0].tagName = 'br';

// const btn = document.querySelector('.btn');
// // event listerner takes two things first one is which tyrpe of event (click , or type(dont know if we call it type))  and second is function
// // what we want to do with this
// let i = 0;
// const value = document.querySelector('.items');
// console.log(value);
// btn.addEventListener('click' , (ele) => {
//     ele.preventDefault();
    
//     console.log('click');
//     if(i%2 == 0){
//         nodelist.hidden = true;
//         // nodelist.remove();
//     }
    
//     else {
//         // nodelist.add(value);
//         nodelist.hidden = false;
//     }
//     i++;
//     console.log(nodelist.hidden);
// });
// // console.log(btn);


const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const ul = document.querySelector('#users');

// submit is form id we can use it here there are various event listerner like onclick , onhover etc
myform.addEventListener('submit' , OnSubmit);
// ul.outerHTML = '<ul class="items">';
function OnSubmit(e){
    e.preventDefault();
    // console.log(msg);
    if(nameInput.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter details';
        setTimeout(() => msg.hidden = true,3000);
        // msg.classList.add('error');
        // msg.innerHTML = 'please enter details';
        msg.hidden = false;
    }
    else{
        const element = document.createElement('li');
        element.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));
        ul.appendChild(element);
        nameInput.value = '';
        email.value = ''
    }

    
}

// function setv(msg){

//     this.msg = msg;
//     this.msg.hidden = true;
//     clearTimeout()
// }