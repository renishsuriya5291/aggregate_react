import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate("/login");
        }else{
            navigate('/workerhome')
        }
    }, []);
  return (
    <div>Index</div>
  )
}

export default Index