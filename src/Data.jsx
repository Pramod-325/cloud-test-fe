import { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL || '';
function Data() {
  const [data, setData] = useState([]);
  const [ips, setIps] = useState(["test IP-1", "test IP-2"]);
  useEffect(()=>{
    const k = async()=>{
        const res = await fetch(`${API_URL}/api/data`);
        const da = await res.json();
        console.log(da.data);
        setIps(ips.concat(da.ips))
        setData(da.data);
    };
    k();
  },[API_URL])

  if(!data || data.length===0){
    return (
      <div className="p-6 bg-white shadow-xl rounded-xl w-full max-w-lg text-center">
        <h2 className="text-xl font-medium text-blue-600 animate-pulse">
          Loading Data...
        </h2>
      </div>
    )
  }
  return (
    <>
        <h1>Found Data</h1>
        {data.map((x, index) => (
          <li className="text-gray-600 bg-gray-50 p-2 rounded-lg transition duration-150 hover:bg-blue-50">
            {x}
          </li>
        ))}
        {ips.map((x, index) => (
          <li className="text-gray-600 bg-gray-50 p-2 rounded-lg transition duration-150 hover:bg-blue-50">
            {x}
          </li>
        ))}

    </>
  )
}

export default Data;