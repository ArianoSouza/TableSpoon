// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:3000/user/allTimes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data.avalibleReservations))
      .then()
      .catch((err) => {
        alert('Você não tem acesso');
        console.error(err);
      });
    
  }, []);
 
  console.log(data)

  return (
    <div>
      <h1>Home</h1>
        {data ? data.map((d:any)=>{<button>
            <h1>{d}</h1>
            <p>{data.filter((t:any)=>t===d).length}</p>
        </button>})  : <></>}
    </div>
  );
}