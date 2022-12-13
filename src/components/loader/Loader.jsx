import { MagnifyingGlass } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="loader">
            <MagnifyingGlass
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{ width: "800px", height: "800px", margin: "auto" }}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </div>
    );
};


export default Loader;