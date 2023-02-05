import { useContext, useEffect, useState } from "react"
import "./Login.scss"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { handleLoginRedux } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux"
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)
  const isLoading = useSelector(state => state.user.isLoading)
  const account = useSelector(state => state.user.account)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("email/Password is required!");
      return;
    }
    dispatch(handleLoginRedux(email, password));

  }
  const handleGoBack = () => {
    navigate("/")
  }
  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  }
  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/")
    }
  }, [account])
  return (

    <div className="login-container  col-12 col-sm-4">
      <div className="title">
        Log in
      </div>
      <div className="text">Email or usename(eve.holt@reqres.in)</div>
      <input
        type="text"
        placeholder="Email or username"
        value={email}
        onChange={(event) => setEmail(event.target.value)}

      />
      <div className="input-2">
        <input
          type={isShowPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => handlePressEnter(event)}
        />
        <i className={isShowPassword === true ? "fa-solid fa-eye" :
          "fa-solid fa-eye-slash"}
          onClick={() => setIsShowPassword(!isShowPassword)}
        ></i>
      </div>

      <button className={email && password ? "active" : ""}
        disabled={email && password || isLoading ? false : true}
        onClick={() => handleLogin()}
      >
        {isLoading && <i className="fa-solid fa-sync fa-spin"></i>}
        &nbsp;Log in</button>
      <div className="back">
        <i className="fa-solid fa-eye"></i>
        <span onClick={() => handleGoBack()}>&nbsp;Go back</span>
      </div >
    </div >
  )

}
export default Login;