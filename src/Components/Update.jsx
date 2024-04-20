import { useLoaderData } from "react-router-dom";

const Update = () => {

    const user = useLoaderData();

    console.log(user);


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const update = { name: name, email: email };
        console.log(update)

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json',

                },
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data => console.log(data));


    }
    return (
        <div>
            <h1>The Information of {user.name}</h1>
            <form action="" onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user?.name}/>
                <input type="email" name="email" id="" defaultValue={user?.email}/>
                <input type="submit" name="submit" id="" />
            </form>
        </div>
    );
};

export default Update;