import { Outlet } from "react-router-dom"
import NavBar from "../../components/Shared/NavBar/NavBar"


const Main = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Main