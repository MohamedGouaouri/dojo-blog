

export default function SearchBar({searchedArticle, setSearchArticle}){
    return <div>
        <form action="">
            <input type="text" 
                    placeholder="Search an article" 
                    value={searchedArticle}
                    onChange={e => setSearchArticle(e.target.value)}
            />
        </form>
    </div>
}