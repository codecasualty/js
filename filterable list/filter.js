// we select id with # and classes with .
var searchKeys = document.querySelector('#filterInput').addEventListener('keyup' , filterList);

function filterList(e){
    // console.log(e.target.value);
    // e.preventDefault();
    var names = document.querySelector('#names').children;
    var searchPattern = e.target.value.toLowerCase();
    // console.log(e.target);
    // console.log('input string;' + searchPattern);
    Array.from(names).forEach(e => {
        if(e.classList.contains('collection-item') ){
            // console.log(e.textContent.toLowerCase());
            // there were some extra spaces to remove them we used trim()
            // its better to convert them into lowercase and then check 
            // as Abe and abe are same in contacts terms
            // we used hidden property this is okay when no more elements 
            // are to be added buts its good to use
            // removeChild() this wil completely remove it in this case its not required
            // or we can use style property which is display 
            // set it to none if it does not match else do nothing
            if(!e.textContent.toLowerCase().trim().startsWith(searchPattern)){
                // e.hidden = true;
                e.style.display = 'none';
            }
            else{
                // e.hidden = false;
                e.style.display = '';
            } 
        }
    });
}