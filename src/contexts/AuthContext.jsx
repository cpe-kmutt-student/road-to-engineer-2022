import { createContext } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import fetch from "../utils/fetchAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  const extractJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  const login = (email, password) => {
    fetch
      .post("/login/authentication", { email, password })
      .then((response) => {
        if (typeof response.data === "object" && response.data?.length > 0){
          const {
            name,
            email,
            _id,
            token
          } = response.data[0];
          localStorage.setItem("user", token);
          localStorage.setItem("userinfo", btoa(JSON.stringify({ name, email, _id })));
          setUser({ name, email, _id });
          setStatus("authenticated");
        } else {
          setUser(null);
          setStatus("unauthenticated")
        }
      }).catch((error) => {
        console.log(error)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
          icon: 'error',
          title: error.message,
        })
      });

  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userinfo");
    setUser(null);
    setStatus("unauthenticated");
    navigate('/login');
  }

  useEffect(() => {
    try {
      const userToken = localStorage.getItem("user");
      const userInfo = JSON.parse(atob(localStorage.getItem("userinfo") || "") || "{}");
      if (userToken) {
        const jwt = extractJwt(userToken);
        if (jwt.exp < Date.now()) {
          setUser(userInfo);
          setStatus("authenticated");
        } else {
          throw Error("Token expired");
        }
      } else {
        throw Error("No Login Information");
      }
    } catch (e) {
      setUser(null);
      setStatus("unauthenticated");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, status, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
