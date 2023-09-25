import BlogForm from "../components/BlogForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchPost, updatePost} from "../api/Posts.jsx";

const EditBlog = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const {id} = useParams();
    const { isLoading, isError, data: prevPost, error } = useQuery({
        queryKey: ['posts', id],
        queryFn: ()=> fetchPost(id),
    });

    console.log(prevPost)

    const updateMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })

    const updateSubmit = (updatedPost)=>{
        updateMutation.mutate({
            id, ...updatedPost
        })
        return navigate('/');
    }

    if (isLoading) return (<h1>Loading...</h1>)
    if (isError) return (<h1>{error.message}</h1>)

    return (
        <>
            <BlogForm updateSubmit={updateSubmit} prevPost={prevPost} />
        </>
    )
}

export default EditBlog;