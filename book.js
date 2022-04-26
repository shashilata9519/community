console.log("welcome to vivan library");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {


}


//add method to display prototype
Display.prototype.add = function (book) {
    console.log("adding ...");
    tableBody = document.getElementById('tableBody');
    let uiString = `
                    <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr> `;
    tableBody.innerHTML += uiString;


}
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}
Display.prototype.validate = function (book) {

    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, showMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message!</strong> ${showMessage}.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
    setTimeout(function () {
        message.innerHTML = " ";
    }, 2000);

}



//add event listener to libraryform

let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', formSubmit);

function formSubmit(e) {

    console.log(" form submit");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let friction = document.getElementById('Friction');
    let programming = document.getElementById('Programming');
    let cooking = document.getElementById('Cooking');
    let type;
    if (friction.checked) {
        type = friction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added");
    }
    else {
        display.show("danger", "sorry you can't add this book");
    }

    e.preventDefault();
}