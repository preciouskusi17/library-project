const myLibrary = [];
let container= document.querySelector('#container')

function Book(title, author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read= read; 
}


function addBookToLibrary(title,author,pages,read){
    newBook= new Book(title, author,pages,read);
    myLibrary.push(newBook);
    showBox(newBook)
}

addBookToLibrary('python data science', 'ama', 78, 'True')
addBookToLibrary(' data science', 'yaa', 478, 'false')
addBookToLibrary('python data science', 'ama', 78, 'true')
    
function createItem(item, content){
    let element= document.createElement(item);
    element.textContent = content;
    return element;
}

function showBox(obj){
    this.div= document.createElement('div')
    div.classList.add('mybooks');
    div.append(
        createItem('p',`Book's Title: ${obj.title}`),
        createItem('p',`Book's Author: ${obj.author}`),
        createItem('p',`Number of Pages: ${obj.pages}`),
        createItem('p',`Read Book: ${obj.read}`) 
    )
    container.appendChild(div)
}


const addButton= document.querySelector('#add');
const submitButton= document.querySelector('#submit');
const dialog= document.querySelector('dialog');

addButton.addEventListener('click', ()=>{
    dialog.showModal();
    
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