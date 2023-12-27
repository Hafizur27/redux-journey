import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addBook } from "../../redux/features/booksSlice/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const id = uuidv4();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    data.id = id;
    dispatch(addBook(data));
    navigate('/showbook')
  };
 

  return (
    <div>
      <h4 className="text-center pt-5 font-semibold text-3xl">Please Add Book</h4>
      <form className="border border-red-300 rounded-l w-1/4 mx-auto mt-5 p-2 " onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-2">
       <label>Book Name</label>
        <input className="border border-black outline-none ms-3" {...register("book", { required: true })} />
       </div>
       <div>
       <label>Author Name</label>
        <input className="border border-black outline-none ms-3" {...register("author", { required: true })} />
       </div>
        <input className="bg-yellow-400 px-2 rounded mt-2" type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
