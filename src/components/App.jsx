import React, { useState } from "react";
import "./globalStyles.css"
import { Searchbar } from "./searchbar/Searchbar";
import axios from "axios"
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import { MagnifyingGlass } from 'react-loader-spinner'
import Modal from "./modal/Modal";

const App = () => {

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const searching = event => {
    setIsLoading(true);
    event.preventDefault();
    setPage(1);
    setInput(event.target[1].value)
    axios.get(`https://pixabay.com/api/?q=${event.target[1].value}&page=1&key=29678307-c5737503ea3de173bef225585&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => setResults(response.data.hits))
      .then(() => setIsLoading(false))
    console.log(results)
  }

  const loadMore = async () => {
    setIsLoading(true);
    axios.get(`https://pixabay.com/api/?q=${input}&page=${page + 1}&key=29678307-c5737503ea3de173bef225585&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => setResults(oldResults => oldResults.concat(response.data.hits)))
      .then(() => setIsLoading(false))
    setPage(lastPage => lastPage + 1)
    console.log(isModalOpen)
  }

  return (
    <>
      <Searchbar
        searching={searching} />
      {!isLoading
        ? <ImageGallery
          results={results} />
        : <MagnifyingGlass
          height="800"
          width="800"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='#c0efff'
          color='#e15b64'
        />}
      <Modal />
      <Button
        loadMore={loadMore}
        visible={!!results.length}
      />
    </>
  )
};

export default App;
