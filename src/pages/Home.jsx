import BlogLists from "../components/BlogLists.jsx";
import {BsPlusCircleFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <section className="w-full p-8 px-48">
                <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
                <button onClick={()=> navigate('/blog/create')} className="py-2 px-3 my-4 hover:bg-blue-500 bg-blue-600 flex justify-center items-center rounded-lg gap-2 text-white"><BsPlusCircleFill/>Create Blog</button>
                <BlogLists/>
            </section>
        </>
    )
}

export default Home