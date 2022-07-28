



$bookShelf = document.querySelector('.bookshelf-container');
$modal = document.querySelector('.modal');

$add = document.querySelector(".add-button");
$add.addEventListener('click', () => {

    $modal.style.display = "flex";
})

document.getElementById("submit").addEventListener('click', addBook); 

const library = JSON.parse(localStorage.getItem("library")) || [];

class Book {
    constructor(author, title) {

        this.author = author;
        this.title = title;
        this.description = "";

    }
}

function fillShelf(){

    library.forEach( function (book){
        
        let $newBook = document.createElement("div");
        $newBook.className = "book-container";
        
        let $delete = document.createElement("button");
        $delete.className = "button";
        $delete.innerHTML = "Delete";

        let title = document.createElement("h3");
        title.innerHTML = 'Title: ' + book.title;

        let author = document.createElement("h4");
        author.innerHTML = 'Author: ' + book.author;
        
        $bookShelf.appendChild($newBook);
        $newBook.appendChild(title);
        $newBook.appendChild(author);
        $newBook.appendChild($delete);

        $delete.addEventListener('click', ()=>{

            $bookShelf.removeChild($newBook);
            library.splice($newBook, 1);
            localStorage.setItem("library", JSON.stringify(library));
        });

    })
}

function addBook(){

        let $newBook = document.createElement("div");
        $newBook.className = "book-container";


        const $title = document.getElementById("title").value;
        let title = document.createElement("h3");
        title.innerHTML = 'Title: ' + $title;


        const $author = document.getElementById("author").value;
        let author = document.createElement("h4");
        author.innerHTML = 'Author: ' + $author;

        let $delete = document.createElement("button");
        $delete.className = "button";
        $delete.innerHTML = "Delete";

        const book = new Book($author, $title);
        
        library.push(book);
        localStorage.setItem("library", JSON.stringify(library));
        $bookShelf.appendChild($newBook);

        $newBook.appendChild(title);
        $newBook.appendChild(author);
        $newBook.appendChild($delete);
        
        $delete.addEventListener('click', ()=>{

            $bookShelf.removeChild($newBook);
            library.splice($newBook, 1);
            localStorage.setItem("library", JSON.stringify(library));
    })

        
    $modal.style.display = "none";
}


window.addEventListener("load", fillShelf);














