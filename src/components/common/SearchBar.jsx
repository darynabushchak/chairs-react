
function SearchBar(props) {
    return (
        <>
            <div className={props.className}>
                <input className={props.searchBarClassName} id={"search-bar"} type="text" />
            </div>
        </>
    )
};

export default SearchBar;