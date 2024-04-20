import './App.css'

function App() {

  const handleData = (event) =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;

      const user = {name: name, email: email};
      console.log('the user data is = ', user);

      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
          alert('User added successfully')
        }
      });

  }
  return (

    
    <div>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleData}>
        <input type="text" className="text" name='name' />
        <br />
        <input type="email" className="email" name='email' />
        <br />
        <input type="submit" className="submit" name='submit' />
        <br />
      </form>
    </div>
  )
}

export default App
