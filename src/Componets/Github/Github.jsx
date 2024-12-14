import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
  //  const    [Data, setData]   =useState([])

  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(Response=> Response.json())
  //     .then(Data =>{
  //         setData(Data)
  //     })

  // }, [])
const Data = useLoaderData()
  return (
    <div className="p-4 bg-gray-400 text-white text-2xl">
      Github Follwers : {Data.followers}
      <img src={Data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

  
  export const GithubData = async () =>{
    const respons  = await fetch('https://api.github.com/users/hiteshchoudhary')
    return respons.json()
}