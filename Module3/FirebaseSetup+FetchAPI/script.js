const BASE_URL = "https://bookmanagerapp-b8c4a-default-rtdb.asia-southeast1.firebasedatabase.app/books"

const bookList = document.getElementById("bookList");

function fetchBooks(){
    fetch(`${BASE_URL}.json`)
    .then(res => res.json())
    .then(data => {
        bookList.innerHTML="";
        for(let id in data) {
            let book = data[id];
            displayBook(id,book);
        }
    });
}
fetchBooks();

function displayBook(id, book) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <img src ="${book.coverImageURL}">
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>₹${book.price}</p>

    <button onclick="updateAuthor('${id}')">Update Author</button>
    <button onclick="deleteBook('${id}')">Delete</button>
    <button onclick="alert('Title: ${book.title}\\nAuthor: ${book.author}\\nPrice: ₹${book.price}')">Details</button>
    `;
    bookList.append(div);
}
   
function addBook() {
    let newBook= {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: document.getElementById("price").value,
        coverImageURL: document.getElementById("image").value
    };

    fetch(`${BASE_URL}.json`, {
        method: "POST",
        body: JSON.stringify(newBook)
    })
    .then(() => fetchBooks());
}

function deleteBook(id) {
    fetch(`${BASE_URL}/${id}.json`, {
        method: "DELETE"
        }).then(() => fetchBooks());
}

function updateAuthor(id) {
    let newAuthor = prompt("Enter new Author name:");
    if (!newAuthor) return;

    fetch(`${BASE_URL}/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({author:newAuthor})
    }).then(() => fetchBooks());
}
