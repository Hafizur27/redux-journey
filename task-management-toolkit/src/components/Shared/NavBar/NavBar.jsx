import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="flex gap-5 p-5 bg-yellow-400 font-semibold ">
        <Link className="focus:text-white" to="/">Home</Link>
        <Link to="/showbook">Show Book</Link>
        <Link to="/addbook">Add Book</Link>
    </div>
  )
}

export default NavBar