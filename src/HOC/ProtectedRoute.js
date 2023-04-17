import { Navigate } from "react-router-dom";

const Protected = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};
export default Protected;
