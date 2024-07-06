import React, { useEffect } from 'react';
import { useUserContext } from "../hooks/useUserContext";




const About=()=>{
  
    const{ user,dispatch}=useUserContext()
    
useEffect(() => 
{
    console.log('Fetching users..');
  
  
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/router/getUsers');
  
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
  
        const json = await response.json();
        console.log('Fetched users:', json);
        dispatch({ type: 'SET_USER', payload: json });
      } catch (error) {
        console.error('Error fetching data:', error.message);}};
  
  
  
     fetchUsers();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
     

    
const handleClick =async()=>{
    try{
    const response =await fetch('/api/router/' + user[0]._id,{
        method: 'DELETE'
    })
const json =await response.json()

if(response.ok){
dispatch({type: 'DELETE_USER' ,payload:json})
}else{
    
        console.error('Error deleting user:', json);
      }
    } catch (error) {
      console.error('Error in handleClick:', error.message);
    }
  };


    if (!user  ) {
        return <p>Loading...</p>; // or any other fallback
      }
      console.log('User after rendering:', user);
    return(
        <div>
        {user.map((user) => (
             <div key={user._id} className="about-us">
      <h2>About Us</h2>
  

            <h4>{user.title}</h4>
            <p><strong>Name :</strong>{user.name}</p>
            <p><strong>Age (years):</strong>{user.age}</p>
            <p><strong>Gender :</strong>{user.gender}</p>
            <p><strong>Disorder :</strong>{user.disorder}</p>
            <p><strong>Email :</strong>{user.email}</p>
            <p><strong>Password :</strong>{user.password}</p>
            <p><strong>ContactNo :</strong>{user.contactNo}</p>
            <p>{user.createdAt}</p>
            <span onClick={() => handleClick(user._id)}><strong>Delete</strong></span>
            {/* <span onClick={handleClick}><strong>delete</strong></span> */}
        </div>
    ))
}
</div>)}
export default About ;


