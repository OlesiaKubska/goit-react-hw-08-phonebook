import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import NotFound from "./NotFound/NotFound";
import Loader from "./Loader/Loader";
import Navigations from "./Navigations/Navigations";
import { AppContainer } from "./AppContainer/AppContainer";

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const PrivateContacts = lazy(() => import('pages/PrivateContacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Navigations />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<PrivateContacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
};