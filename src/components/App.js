import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { getCurrentUser } from "redux/authOperations";
import { useAuth } from "hooks";
import NotFound from "./NotFound/NotFound";

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isAuthenticated ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contakcts" component={<Register />} />
        }
        />
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={< Login />} />
        }
        />
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts />} />
        }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};