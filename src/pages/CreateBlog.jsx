import BlogForm from "../components/BlogForm.jsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "../api/Posts.jsx";
import {useNavigate} from "react-router-dom";

const CreateBlog = ()=>{
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const createMutation = useMutation({
        mutationFn: createPost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })

    const createSubmit = (post)=>{
        createMutation.mutate({
            ...post
        })
        return navigate('/');
    }

    return (
        <>
            <BlogForm createSubmit={createSubmit} />
        </>
    )
}

export default CreateBlog;