import React from "react";

const Searchbar = (props) => {

    return (
        <>
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={event => { props.searching(event) }}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        </>
    )
};

export default Searchbar;
