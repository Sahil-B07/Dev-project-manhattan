import Cookies from "js-cookie";
import { toast } from "react-toastify";

const AuthFeedback = async (payloadData) => {
    
    const res = await fetch("http://127.0.0.1:8000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadData),
    });

    const data = await res.json();

    if (res.status == 200) {
      toast.success("Login Successfully!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      const token = decodeURIComponent(data.access).replace(/"/g, '')
      Cookies.set('authToken',token)
      
    } else {
      toast.error("Invalid Credentials!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return res
  }

export default AuthFeedback