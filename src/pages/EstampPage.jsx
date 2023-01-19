import { TopEstamp } from "../components/Estamp/TopEstamp";
import { MiddleEstamp } from "../components/Estamp/MiddleEstamp";
import { FooterEstamp } from "../components/Estamp/FooterEstamp";
import { useEffect, useState } from "preact/hooks";
import fetch from "../utils/fetchAxios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";


export const EstampPage = () => {
  const { status, user } = useAuth();
  const navigate = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    if (status == 'unauthenticated') {
      console.log('unauthenticated');
      navigate('/login/estamp/'+(token ? token : ""), { replace: true });

    }
  }, [status]);
  return (
    <div className="bg-juicy-100 min-h-screen flex flex-col justify-between scrollbar-thin ">
      <TopEstamp />
      <MiddleEstamp />
      <FooterEstamp />
    </div>
  )
}
