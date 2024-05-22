import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Transaction from "../pages/Transaction";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <>
      {/* {authUser && <Header />} */}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/transaction/:id' element={<Transaction />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes