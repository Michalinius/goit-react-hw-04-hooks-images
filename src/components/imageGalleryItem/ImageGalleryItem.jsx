import React, { useState } from "react";



const ImageGalleryItem = ({ result }) => {

    const handleClick = () => {
        document.querySelector(`.Overlay img`).src = result.largeImageURL
        document.querySelector(`.Overlay`).style.display = "flex"
    };

    return (
        <>
            <li className="ImageGalleryItem" id={"a" + result.id} onClick={handleClick}>
                <img className="ImageGalleryItem-image" src={result.previewURL} alt="There should be something" />
            </li >
        </>
    )
}

export default ImageGalleryItem
