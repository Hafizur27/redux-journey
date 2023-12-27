import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { updateBook } from "../../redux/features/booksSlice/booksSlice";


const UpdateBook = () => {
    const location = useLocation().state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
       data.id = location.id;
       dispatch(updateBook(data))
       navigate("/showbook")
        
      };
     

  return (
    <div>
      <h4 className="text-center pt-5 font-semibold text-3xl">Please Update Book</h4>
      <form className="border border-red-300 rounded-l w-1/4 mx-auto mt-5 p-2 " onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-2">
       <label>Book Name</label>
        <input defaultValue={location.book} className="border border-black outline-none ms-3" {...register("book", { required: true })} />
       </div>
       <div>
       <label>Author Name</label>
        <input defaultValue={location.author} className="border border-black outline-none ms-3" {...register("author", { required: true })} />
       </div>
        <input  value="Update" className="bg-yellow-400 px-2 rounded mt-2" type="submit" />
      </form>
    </div>
  )
}

export default UpdateBook