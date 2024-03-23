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

addBookToLibrary('precious', 'ama', 78, 'True')
addBookToLibrary(' hilda', 'yaa', 478, '')
addBookToLibrary(' yvone', 'ama', 878, 'true')
addBookToLibrary('godwon','boy',98, '')
    


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
    bookItem.innerHTML=`<p>Book Title: ${book.title}</p> <p>Book Author: ${book.author}</p>
         <p>Number of Pages: ${book.pages}</p> <p>Read Status: ${book.read?"Read": "Not Read Yet"}</p> 
            <div id="btn">
        <button class="remove" onclick="removeBook(${i})">Remove</button>
        <button onclick= toggleRead(${i})>Change Read Status</button>
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