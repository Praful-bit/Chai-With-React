import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
    e.preventDefault()
    setUser({userName,password})
    }
  return (
    <div>
      <h1 className='pb-5'>Login Page</h1>
      <input className='flex' type="text" placeholder="UserName" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
      <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button className='ml-4' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login