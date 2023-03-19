import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';

export default function AuthRoute({ children }) {
  const { activeUser, setActiveUser } = useContext(AuthContext);
  return activeUser && activeUser.name ? (
    children
  ) : (
    <Navigate to="/Login" replace />
  );
}
