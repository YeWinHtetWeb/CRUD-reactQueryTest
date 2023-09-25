import {useQuery} from "@tanstack/react-query";
import {fetchPost} from "../api/Posts.jsx";
import {useParams} from "react-router-dom";

const BlogDetails = ()=>{
    const {id} = useParams();
    const { isLoading, isError, data: post, error } = useQuery({
        queryKey: ['posts', id],
        queryFn: ()=> fetchPost(id),
    });

    if (isLoading) return (<h1>Loading...</h1>)
    if (isError) return (<h1>{error.message}</h1>)

    return (
        <>
            <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
            <p>{post.details}</p>
        </>
    )
}

export default BlogDetails