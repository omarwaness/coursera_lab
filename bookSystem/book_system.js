

// array of book objects
let books = [];

function addBook()
{
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // check if all field where filled
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber))
    {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }
    else
    {
        alert('Please fill in all fields correctly.');
    }
}


// function to display all books
function showbooks() {
    const booksDiv = books.map((book, index) => 
        `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}


// function to clear the fileds
function clearInputs() 
{
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// function to delete book by index
function deletebook(id)
{
    books.splice(id, 1);
    showbooks();
}

// function to edit a book
function editbook(id) {
    // Get the selected book details
    const book = books[id];

    // Populate the input fields with existing values
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    // Change the "Add Book" button to "Update Book"
    const addButton = document.getElementById('addButton');
    addButton.innerText = "Update Book";
    addButton.onclick = function () {
        updateBook(id);
    };
}

// Function to update a book's details
function updateBook(id) {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        books[id] = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Refresh the book list
        showbooks();
        
        // Reset input fields and button text
        clearInputs();
        const addButton = document.getElementById('addButton');
        addButton.innerText = "Add Book";
        addButton.onclick = addBook;
    } else {
        alert('Please fill in all fields correctly.');
    }
}