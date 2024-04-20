import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();


    console.log(users)

    const handleDelete = id =>{
        console.log('Delete koro', id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    return (
        <div>
            <h2>The users are {users.length}</h2>
            {
                users.map(user => <li key={user._id} >id: {user._id} Name: {user.name} and Email: {user.email} <Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={()=>handleDelete(user._id)}>X</button></li>)
            }
        </div>
    );
};

export default Users;