import {deletePost, fetchPosts} from "../api/Posts.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";


const BlogLists = ()=>{
    const navigate = useNavigate();

    const { isLoading, isError, data: posts, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    const queryClient = useQueryClient()
    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })

    const deleteSubmit = (id)=>{
        // console.log(id)
        deleteMutation.mutate(id);
    }

    if (isLoading) return (<h1>Loading...</h1>)
    if (isError) return (<h1>{error.message}</h1>)

    return (
        <>
            {
                posts && posts.map(post =>(
                    <div key={post.id} className="w-[58em] group mb-3 shadow-black shadow-md flex justify-between items-center py-3 px-8 bg-gray-600 text-white mx-auto rounded-lg">
                        <div className="space-y-3 w-[40em]">
                            <h1 className="text-2xl font-bold">{post.title}</h1>
                            <p>{post.details}<a href={`/blog/${post.id}`} className="group-hover:text-blue-500 duration-200">...Seemore</a></p>
                        </div>
                        <div className="space-x-3">
                            <button onClick={()=> navigate(`/blog/${post.id}/edit`)} className="edit-btn py-2 px-6 rounded bg-green-600 hover:bg-green-500 duration-500">Edit</button>
                            <button onClick={()=>deleteSubmit(post.id)} className="delete-btn py-2 px-5 rounded bg-red-600 hover:bg-red-500 duration-500">Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default BlogLists;