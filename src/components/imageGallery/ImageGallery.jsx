import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem"

const ImageGallery = ({ results }) => {
    return (
        <ul className="ImageGallery">
            {results.map(result =>
                <ImageGalleryItem
                    key={result.id}
                    result={result} />
            )}
        </ul>
    )
}

export default ImageGallery
