import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Axios from 'axios'
const  Repos=({ repos_url }) =>{
    const [repos, setrepos] = useState([])
    const fetchRepos = async() => {
        const { data } = await Axios.get(repos_url)
        setrepos(data)
    }
    useEffect(() => {
        fetchRepos()
    }, [repos_url])
    return (
        <ListGroup className="mb-4">
        <h3 className="ms-3">Repo List</h3>
       
            {repos.map((repo) => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">Repo Name: <span className="text-info">{repo.name}</span> </div>
                    <div className="text-primary">Description: <span className="text-info">{repo.description}</span> </div>
                    <div className="text-primary">
                    GitHub Link:  
                    <a href={repo.html_url} target="_blank">
                    <span className="text-success">
                    Link
                    </span></a>
                    </div>
                </ListGroupItem>

            ))}
            
        </ListGroup>
    )
}

export default Repos
