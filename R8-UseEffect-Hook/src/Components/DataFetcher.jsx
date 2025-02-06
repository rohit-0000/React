import React from 'react'
import { useState, useEffect } from 'react'
import './DataFetcher.css'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);//it will run only on first

    return (
        <div id="Fetcher-container">
            <h1>Data Fetcher</h1>
            {
                loading ? (<h1>Loading...</h1>)
                    :
                    (<ul>
                        {
                            data.map(post => (
                                <li key={post.id}>{post.id} : {post.title}</li>
                            ))
                        }
                    </ul>)
            }
        </div>
    )
}

export default DataFetcher