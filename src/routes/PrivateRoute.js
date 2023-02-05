import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
import TableUsers from "../components/TableUsers";

const PrivateRoute = (props) => {
  const user = useSelector(state => state.user.account)
  if (user && !user.auth) {
    return <>
      <Alert variant="danger" className="mt-3">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          You don't have permission to access this route.
        </p>
      </Alert>
    </>
  }
  return (
    <>
      {props.children}
    </>
  )
}
export default PrivateRoute;