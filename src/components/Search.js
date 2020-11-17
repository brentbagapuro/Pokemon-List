import React, { useState } from 'react'

export default function Search() {
    const [search, setSearch] = useState("");

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }

    return (
        <div className="Search">
            <input type="text" value={search} onChange={updateSearch} />
            <span><i className="fas fa-search fa-2x"></i></span>
        </div>
    )
}
