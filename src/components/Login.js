import { useContext, useEffect, useState } from "react"
import "./Login.scss"
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [loadingAPI, setLoadingAPI] = useState(false);
  const navigate = useNavigate();
  const { loginContext } = useContext(UserContext);
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [])
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("email/Password is required!");
      return;
    }
    setLoadingAPI(true);
    let res = await loginApi(email, password);
    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/");
    } else {
      //error
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingAPI(false);

  }
  const handleGoBack = () => {
    navigate("/")
  }
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
        />
        <i className={isShowPassword === true ? "fa-solid fa-eye" :
          "fa-solid fa-eye-slash"}
          onClick={() => setIsShowPassword(!isShowPassword)}
        ></i>
      </div>

      <button className={email && password ? "active" : ""}
        disabled={email && password || loadingAPI ? false : true}
        onClick={() => handleLogin()}
      >
        {loadingAPI && <i className="fa-solid fa-sync fa-spin"></i>}
        &nbsp;Log in</button>
      <div className="back">
        <i className="fa-solid fa-eye"></i>
        <span onClick={() => handleGoBack()}>&nbsp;Go back</span>
      </div >
    </div >
  )

}
export default Login;