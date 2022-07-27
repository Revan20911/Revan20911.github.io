const addForm = document.querySelector('[class="modal"]');

const modal = document.querySelector('[class="modal"]');

const bookShelf = document.querySelector('[class="bookshelf-container"]');

let library = [];

window.onload = () =>{

    document.querySelector('[class="submit"]').addEventListener('click', addBook()); 

}


class Book {
    constructor() {

        this.author = "";
        this.title = "";

    }
}


function addBook(){

    var book = new Book();

    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;


    if(title && author != ""){

        book.title = title;
        book.author = author;
        library.push(book);

        fillShelf();

        modal.style.display = "none";

    }
    else{

        document.getElementById("error").style.display = "flex";
    }

}

function fillShelf(){

    let newBook = document.createElement("div");

    if(library.length < 2){
        bookShelf.appendChild(newBook).className="book-container";
    }
    else{

        for(let i = 0; i < library.length +1; i++){

            bookShelf.appendChild(newBook).className="book-container";
            bookShelf.appendChild(newBook).innerHTML = library[i].title;

            if(i > library.length){

                bookShelf.appendChild(newBook).className="book-container-add";
            } 
        }
    }
}

fillShelf();









