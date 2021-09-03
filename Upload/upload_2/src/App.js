
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  const [user, setUser] = useState();
  const [userspeople, setUserspeople] = useState()

  useEffect(() => {
    handleChange();
  }, [])
  const send = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    fetch(`http://localhost:3000/user?name=${user}`, {
      method: "POST",
      body: formData,

    });
  };
  const handleChange = () => {
    fetch('http://localhost:3000/user/userspeople', {
      method: "GET",
    })
      .then(response => response.json())
      .then(result => setUserspeople(result));

  }
  console.log(userspeople);

  return (
    <div className="block">
      <div>
        <ul>
          {/* integration de la liste  */}
          <il onchange={handleChange}>{userspeople}</il>
        </ul>
      </div>
      <form>
        <input type="text" onChange={(event) => setUser(event.target.value)} />
        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
        <button onClick={send}>Send</button>
      </form>
    </div>
  );
}

const Styles = StyleSheet.creat({
  


});




export default App;

