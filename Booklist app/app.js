// we will creating a book list app using js and classes
// using OOP

// book class: this represent book, like all its properties 
// title,author and isbn

class Book{
    constructor(title ,  author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// class store which deals with storing of
// data in local storage so that it is persistent
// even if the page is refreshed
// local storage works in the form of key, value pairs
// here value is string we can't store objects
class Store{
    static getBooks(){
        var books = JSON.parse(localStorage.getItem('books'));
        return books == null ? [] : books;
    }

    static addBooks(book){
        var books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books' , JSON.stringify(books));
    }

    static removeBooks(isbn){
        var books = Store.getBooks();
        books.forEach((e , index) => {
            if(e.isbn === isbn){
                books.splice(index,1);
                // the below function wont wont as now we have array and not document
                // object
                // books.removeChild(e);
            }
        });
        // after removing that element we need to add the remaing data to our localstorage
        localStorage.setItem('books' , JSON.stringify(books));
    }
}

//ui class: handle ui tasks 
// it displays books,add boks, remove books
// show alert, to avoid initating a class , we use static methods

class UI{
    static displayBooks(){
        // const storedBooks = [
        //     {
        //         title: 'book one',
        //         author: 'john doe',
        //         isbn : '121'
        //     },
        //     {
        //         title : 'book two',
        //         author: 'hank',
        //         isbn : '233'
        //     }
        // ];

        const storedBooks = Store.getBooks();

        const books = storedBooks;

        books.forEach(book => UI.addBookToList(book));


    }

    static addBookToList(book){
        var tbody = document.getElementById('book-list');
        var trtag = document.createElement('tr');
        var valuereturned = this.getTaggedInfo(book.title);
        trtag.appendChild(this.getTaggedInfo(book.title));
        trtag.appendChild(this.getTaggedInfo(book.author));
        trtag.appendChild(this.getTaggedInfo(book.isbn));
        trtag.appendChild(this.addDeleteButton());
        tbody.append(trtag);
        // console.log('we have entered');
        // we need to add the book info in tbody with each info 
        // begin with tag <td> and ends with </td>;
    }

    static deleteBook(target){
        var books = document.getElementById('book-list');
        books.removeChild(target);
        // console.log(target.childNodes[2].innerText);
        // for removing we could also use previousElementSibling.textContent
        // but we already have received parent node of all those child
        // if we have only the parent node of X btn which will be tr then we can 
        // traverse above in document tree and clear the node
        // the below method also works fine
        Store.removeBooks(target.childNodes[2].innerText);
    }
// alert message in bootstrap is follwing
// <div class="alert alert-success">msg</div>
// of
// <div class="alert alert-danger">msg</div>
    static showAlert(message , className){
        // here messge  is for showing alert messge
        // and className is for showing which kind of alert message is this
        // whether it is success or failure
        var div = document.createElement('div');
        var title = document.querySelector('.form-group');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        document.querySelector('#book-form').insertBefore(div , title );
        setTimeout(() => document.querySelector('.alert').remove() , 3000);
        // document.querySelector('#book-form').removeChild(div);
    }

    static getTaggedInfo(ele){
        var tdtag = document.createElement('td');
        var textnode = document.createTextNode(ele);
        tdtag.appendChild(textnode);
        return tdtag;
    }

    static addDeleteButton(){
        var tdtag = document.createElement('td');
        var innerHTML =  '<a href = "#" class = "btn btn-danger btn-sm delete">X</a>';
        tdtag.innerHTML = (innerHTML);
        return tdtag;
    }

}


// UI.displayBooks();
// or
//event : display books
document.addEventListener('DOMContentLoaded' , UI.displayBooks());

//event: add a book
// its always better to add a event listener on form as this will
// help us identify any changes made to form and get its data easily
document.querySelector('#book-form').addEventListener('submit' , addingData);

function addingData(ele){
    var children = ele.target;
    var title = children.querySelector('#title').value;
    var author = children.querySelector('#author').value;
    var isbn = children.querySelector('#isbn').value;
    
    if(title == '' || author == '' || isbn == ''){
        UI.showAlert('please enter all fields ' , 'alert-danger') ;
        return;
    }

    var book = new  Book(title , author, isbn);
    UI.addBookToList(book);
    Store.addBooks(book);
    // we can clear the values here or create separate static methos in UI class
    // which will clear the input
    children.querySelector('#title').value = '';
    children.querySelector('#author').value = '';
    children.querySelector('#isbn').value = '';
    UI.showAlert('Data entered Successfully ' , 'alert-success') ;
}

// event:remove a book
document.querySelector('#book-list').addEventListener('click' , removeBook);

function removeBook(ele){
    // console.log(ele.target.parentNode.parentNode);
    var btn = ele.target;
    // the idea is to get the parent node of the current target
    // and remove it from the booklist but only if the target which is 
    // clicked is btn 
    if(!btn.classList.contains('delete'))return;
    UI.deleteBook(btn.parentNode.parentNode);
    UI.showAlert('Data deleted Successfully ' , 'alert-info') ;
    

}