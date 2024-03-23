const myLibrary = [];

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
addBookToLibrary(' hilda', 'yaa', 478, 'false')
addBookToLibrary(' yvone', 'ama', 878, 'true')
addBookToLibrary('godwon','boy',98, 'yoo')
    
function createItem(item, content){
    let element= document.createElement(item);
    element.textContent = content;
    return element;
}

function deleteBook(index){
    myLibrary.splice(index,1);
    showBox(obj)
}

function showBox(){
    let container= document.querySelector('#container')
    container.textContent='';
    for (let i=0; i<myLibrary.length; i++){
        
    this.obj=myLibrary[i];
    let div= document.createElement('div');
    
    let removeButton=document.createElement('button');
    removeButton.classList.add('remove')
    removeButton.textContent='X';
   
    div.appendChild(removeButton)
    div.classList.add('mybooks');
    // div.innerHTML=(`<p>Book's Title: ${obj.title}</p> <p>Book's Author: ${obj.author}</p> <p>Number of Pages: ${obj.pages}</p> <p>Read Book: ${obj.read}</p>`)
    div.append(
        createItem('p',`Book's Title: ${obj.title}`),
        createItem('p',`Book's Author: ${obj.author}`),
        createItem('p',`Number of Pages: ${obj.pages}`),
        createItem('p',`Read Book: ${obj.read}`) 
    )
    container.appendChild(div)

     removeButton.addEventListener('click',()=>{
    deleteBook(i);
})}
}


const addButton= document.querySelector('#add');
const submitButton= document.querySelector('#submit');
const dialog= document.querySelector('dialog');

addButton.addEventListener('click', ()=>{
    dialog.showModal();
    
})


document.querySelector('#submit').addEventListener('click',(event)=>{
     let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    addBookToLibrary(title,author,pages,read)
    dialog.close()
    event.preventDefault()
})

document.querySelector('#cancel').addEventListener('click',()=>{
    dialog.close()
})