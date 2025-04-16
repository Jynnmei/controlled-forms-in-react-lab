import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleTitleChange = (event) => {
    setNewBook((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const handleAuthorChange = (event) => {
    setNewBook((prevState) => {
      return { ...prevState, author: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    console.log("You clicked submit.");

    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <div className="row">
          <label className="col-sm-4">Title:</label>
          <input
            className="col-sm-8"
            value={newBook.title}
            onChange={handleTitleChange}
          ></input>
        </div>

        <div className="row">
          <label className="col-sm-4">Author:</label>
          <input
            className="col-sm-8"
            value={newBook.author}
            onChange={handleAuthorChange}
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, idx) => (
          <div key={idx} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
