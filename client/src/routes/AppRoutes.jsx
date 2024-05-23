import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Transaction from "../pages/Transaction";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import { useQuery } from "@apollo/client";
import { getAuthUser } from "../graphql/queries/user.query.js";

const AppRoutes = () => {
  const { data, loading, error } = useQuery(getAuthUser);

  if (loading) return null;
  if (error) console.log("Error: " + error.message);
  if (data) console.log("Data: " + data);

  return (
    <>
      <Router>
        <Routes>
          <Route
            element={
              <ProtectedRoutes isAllowed={data?.authUser} loading={loading} />
            }
          >
            {/* Pages w/ Header */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/transaction/:id" element={<Transaction />} />
              <Route path="/users" element={<Users />} />
            </Route>
          </Route>

          {/* Pages w/o Header */}
          <Route
            path="/login"
            element={
              !data?.authUser ? <Login /> : <Navigate replace to={"/"} />
            }
          />
          <Route
            path="/signup"
            element={
              !data?.authUser ? <SignUp /> : <Navigate replace to={"/"} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
