

const $modal = document
    .querySelector('.modal');

const $bookShelf = document
    .querySelector('.bookshelf-container');

let library = [];


class Book {
    constructor(author, title, description) {

        this.author = "";
        this.title = "";
        this.description = "";

    }
}

function fillShelf(cols, rows){

    const shelf = [];

    let $newBook = document
        .createElement("div");

    let $add = document
        .createElement("div");

    $bookShelf
        .style
        .setProperty('--grid-cols', cols);

    $bookShelf
        .style
        .setProperty('--grid-rows', rows);

    if(library.length == 0){
        shelf.push($newBook);
        
        $bookShelf
            .appendChild($newBook)
            .className="book-container-add";

        $newBook
            .appendChild($add)
            .className="add-button";

        $newBook
            .appendChild($add)
            .innerText="+";

        $newBook
            .appendChild($add)
            .addEventListener('click', () =>{

            $modal
                .style
                .display = "flex";
        })
    
    }
    else{

        library.forEach((book) =>{

            shelf
                .push($newBook);
            
            $bookShelf
                .appendChild($newBook)
                .className="book-container";
                
            $bookShelf
                .appendChild($newBook)
                .innerHTML = book.title;

            console.log(library.length);

            })
           
        }
    }

fillShelf(library.length, 1);

document
    .getElementById("submit")
    .addEventListener('click', addBook); 

document
    .getElementById("delete")
    .addEventListener('click', removeBook);


function addBook(){

    var book = new Book();

    var $title = document
        .getElementById("title")
        .value;

    var $author = document
        .getElementById("author")
        .value;


    if($title && $author != ""){

        library.push(book);

        book.title = $title;
        book.author = $author;

        $modal.style.display = "none";

        fillShelf(library.length+1, 1);
    }

}



function updateLocalStorage(){

}

function checkLocalStorage(){

}









