import React from 'react';
import {Link } from 'react-router-dom';


export default function RepoItem({repo, username}){
    
    return (
        <li>
            <Link to = {`${username}/${repo.id.toString()}`}> {repo.full_name} </Link>
        </li>
    )
}