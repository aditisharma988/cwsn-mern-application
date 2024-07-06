import { useUserContext } from "../hooks/useUserContext"
const UserDetails=({_user})=>{
    const{dispatch}=useUserContext()

const handleClick =async()=>{
    const response =await fetch('/api/router/' + _user._id,{
        method: 'DELETE'
    })
const json =await response.json()

if(response.ok){
dispatch({type: 'DELETE_USER' ,payload:json})
}}




    if (!_user) {
        return <p>Loading...</p>; // or any other fallback
      }
    return(
        <div className ="user-details">
            <h4>{_user.title}</h4>
            <p><strong>Name :</strong>{_user.name}</p>
            <p><strong>Age (years):</strong>{_user.age}</p>
            <p><strong>Gender :</strong>{_user.gender}</p>
            <p><strong>Disorder :</strong>{_user.disorder}</p>
            <p><strong>Email :</strong>{_user.email}</p>
            <p><strong>Password :</strong>{_user.password}</p>
            <p><strong>ContactNo :</strong>{_user.contactNo}</p>
            <p>{_user.createdAt}</p>

            <span onClick={handleClick}><strong>delete</strong></span>
        </div>
    )
}
export default UserDetails