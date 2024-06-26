import  { useEffect, useState } from 'react'
import { UNSAFE_DataRouterStateContext, useLoaderData } from 'react-router-dom';
function GitHub() {
const data = useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(()=>{
//  fetch("https://api.github.com/users/Praful-bit")
// .then(res => res.json())
// .then(data=>{
//      console.log(data);
//     setData(data)})
//     },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default GitHub

export const githubInfo = async()=>{

const res = await fetch("https://api.github.com/users/Praful-bit")
return res.json()

}