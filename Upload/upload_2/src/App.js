import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  const [user, setUser] = useState();

  const send = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", image);
    fetch(`http://localhost:3000/user?name=${user}`, {
      method: "POST",
      body: formData,
    });
  };
  return (
    <div>
      <form>
        <input type="text" onChange={(event) => setUser(event.target.value)} />
        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
        <button onClick={send}>Send</button>
      </form>
    </div>
  );
}

export default App;
