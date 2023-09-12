"use client";

// fetch the book and display a list of books

import { GetData } from "@/Utils/GetData";
import Card from "@/components/Card/Card";
import React, { useEffect, useState } from "react";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    GetData()
      .then((response) => {
        setBooks(response);
        console.log("success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
        {books.map((book) => {
          return (
            <Card book={book}/>
          );
        })}
    </>
  );
};

export default GetBooks;
