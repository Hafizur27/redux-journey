import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../redux/features/postsSlice/postsSlice";
import SinglePost from "./SinglePost/SinglePost";


const AllPost = () => {
    const {isLoading,posts,error}= useSelector(state => (state.posts))
    
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchData())
    }, [])
    
  return (
    <div className="p-4">
        <h5 className="text-center pt-5 text-3xl font-bold">All Posts</h5>
        {
            isLoading && <h4 className="text-center font-bold text-2xl">Loading....</h4>
        }
        <div className="grid grid-cols-3 gap-2 ">
        {
            posts?.map((post)=> <SinglePost key={post.id} post={post} />)
        }
        </div>
        {
            error && <p className="text-lg text-center font-bold">{error}</p>
        }
    </div>
  )
}

export default AllPost