import React, { useState } from "react";
import "./globalStyles.css"
import { Searchbar } from "./searchbar/Searchbar";
import axios from "axios"
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Loader from "./loader/Loader"
import Modal from "./modal/Modal";

const App = () => {

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const searching = event => {
    setIsLoading(true);
    event.preventDefault();
    setPage(1);
    setInput(event.target[1].value)
    axios.get(`https://pixabay.com/api/?q=${event.target[1].value}&page=1&key=29678307-c5737503ea3de173bef225585&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => setResults(response.data.hits))
      .then(() => setIsLoading(false))
  }

  const loadMore = async () => {
    setIsLoading(true);
    axios.get(`https://pixabay.com/api/?q=${input}&page=${page + 1}&key=29678307-c5737503ea3de173bef225585&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => setResults(oldResults => oldResults.concat(response.data.hits)))
      .then(() => setIsLoading(false))
    setPage(lastPage => lastPage + 1)
  }

  return (
    <>
      <Searchbar
        searching={searching} />
      {!isLoading
        ? <ImageGallery
          results={results} />
        : <Loader />}
      <Modal />
      <Button
        loadMore={loadMore}
        visible={!!results.length}
      />
    </>
  )
};

export default App;
