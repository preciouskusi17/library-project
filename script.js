const addButton= document.querySelector('#add');
const submitButton= document.querySelector('#submit');
const dialog= document.querySelector('dialog');

let myLibrary = [];

function Book(title, author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read= read; 
}


function addBookToLibrary(title,author,pages,read){
    newBook= new Book(title, author,pages,read);
    myLibrary.push(newBook);
    showBox()
}

addBookToLibrary('Jesus Always', 'Sarah Young', 400, '')
addBookToLibrary(' Woman Evolve', ' Sarah Jakes Roberts', 224, '')
addBookToLibrary('Believe for It', ' CeCe Winans', 256, 'true')
addBookToLibrary('Throne Room',' Cece Winans',144, '')
    


function removeBook(index){
    myLibrary.splice(index,1);
    showBox()
}

function showBox(){
    let container= document.querySelector('#container')
    container.textContent='';
    
    for (let i=0; i<myLibrary.length; i++){  
    let book=myLibrary[i];
   
    let bookItem= document.createElement('div');
     bookItem.classList.add('mybooks');
    bookItem.innerHTML=`<h2>Book Title: ${book.title}</h2> <p>Book Author: ${book.author}</p>
         <p>Number of Pages: ${book.pages}</p> <p>Book Status: ${book.read?"Read": "Not Read Yet"}</p> 
            <div id="btn">
        <button class="remove" onclick="removeBook(${i})">Remove</button>
        <button class="change" onclick= toggleRead(${i})>Change Status</button>
    </div> `;
    
    container.appendChild(bookItem)  
    }}


Book.prototype.toggleRead=function(){
    this.read= !this.read
}
function toggleRead(index){
    myLibrary[index].toggleRead();
    showBox();
}


addButton.addEventListener('click', ()=>{
    dialog.showModal();
        dialog.querySelectorAll('input').forEach(item=>item.value='')

})


document.querySelector('#box-form').addEventListener('submit',(event)=>{
     let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    addBookToLibrary(title,author,pages,read)
    dialog.close()
    event.preventDefault()
})

document.querySelector('#cancel').addEventListener('click',()=>{
    dialog.close();
    
})

