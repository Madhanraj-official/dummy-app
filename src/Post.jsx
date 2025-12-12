import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {GetPostById} from "./api/post.js";

export const Post = () => {
    const [post,setPost] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    useEffect(() => {
        GetPostById(id).then(d => {
            if (d.success) {
                setPost(d.data)
            }
            setLoading(false)
        })
    }, [id])
    if (loading){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1> {post.id} -- {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
