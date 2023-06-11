var form = document.getElementById('addForm');
form.addEventListener('submit' , runevent);

var items = document.querySelector('#items');
items.addEventListener('click' , removeele);

var filter = document.getElementById('filter');
filter.addEventListener('keyup' , filteritems);
// console.log(inputtext);
function runevent(e){
    e.preventDefault();
    // get entered value
    var inputvalue = document.getElementById('item');
    
    if (!(inputvalue.value === '')){
    console.log(inputvalue.value);
    // create list element add class and the text which we received from inputvalue
    var listele = document.createElement('li');
    listele.className = 'list-group-item';
    listele.appendChild(document.createTextNode(inputvalue.value));
    // create button element and add class name and text node "X"
    var btn = document.createElement('button');
    btn.className = "btn btn-danger btn-sm float-right delete";
    var textinbtn = document.createTextNode("X");
    btn.appendChild(textinbtn);
    //add btn in listele
    listele.appendChild(btn);
    //add listele in listgroup 
    var listgroup = document.querySelector('.list-group');
    listgroup.appendChild(listele);

    // console.log(listele);
    // console.log(document.querySelector('.list-group'));
    
    inputvalue.value='';
    }
}

function removeele(e){
    e.preventDefault();
    // console.log(e.target.classList);
    // if we want to delete when we click on items even though we might
    // not click on x btn
    // console.log(e.target.textContent);
    // console.log(items.children);
    // var nodes = items.children;
    // for(let i = 0;i < nodes.length;i++){
    //     console.log('nodes values are '+nodes[i].textContent);
    //     if(nodes[i].textContent === e.target.textContent){
    //         console.log(nodes[i].value);
    //         nodes[i].hidden = true;
    //     }
    // }
// class list return the class just below the given tag
    if(e.target.classList.contains('delete')){
        console.log('btn clicked '+e.target.parentElement.textContent);
        var textvalue = e.target.parentElement.textContent;
        //the below lines will hide the element from the items
        // console.log(items.children);
        // for(let i = 0;i < items.childElementCount;i++){
        //     if(items.children[i].textContent === textvalue){
        //         items.children[i].hidden = true;
        //     }
        // }

        // to delete or remove the element from items
        var parentli = e.target.parentElement;
        console.log(parentli);
        console.log(items.children);
        items.removeChild(parentli);
    }

}

function filteritems(e){
    e.preventDefault();
    var valueip = e.target.value.toLowerCase();
    // console.log(valueip);
    // get all list elements
    var listele = items.getElementsByTagName('li');
    // but these are html collection we need array
    var arr = Array.from(listele);
    // console.log(arr);

    arr.forEach(function(ele){
        // console.log(ele.textContent);
        // if(!ele.textContent.toLowerCase().startsWith(valueip)){
        //     ele.hidden = true;
        // }
        // else ele.hidden =false;
        // or
        if(ele.textContent.toLowerCase().indexOf(valueip) != -1)ele.style.display = 'block';
        else ele.style.display = 'none';
    });
}

