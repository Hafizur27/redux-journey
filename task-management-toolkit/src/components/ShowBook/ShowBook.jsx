import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../redux/features/booksSlice/booksSlice";
import { Link } from "react-router-dom";

const ShowBook = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDeleteBtn = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h3 className="text-center pt-5 font-semibold text-2xl">
        Here Showing All Books
      </h3>
      <div className="w-1/4 mx-auto mt-5 p-2">
        <table className="w-full border-collapse border border-slate-400">
          <thead>
            <tr>
              <td className="border border-slate-300">Books Name</td>
              <td className="border border-slate-300">Books Author</td>
              <td className="border border-slate-300">Action</td>
            </tr>
          </thead>
          <tbody>
            {books?.map((b) => (
              <tr key={b.id}>
                <td className="border border-slate-300">{b.book}</td>
                <td className="border border-slate-300">{b.author}</td>
                <td className="border border-slate-300">
                  <div>
                    <Link to="/updatebook" state={b}>
                      <button className="bg-yellow-400 px-2 rounded me-2">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteBtn(b.id)}
                      className="bg-red-400 px-2 rounded "
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBook;
