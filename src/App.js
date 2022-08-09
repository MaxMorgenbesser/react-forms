import "./App.css";
import { useState } from "react";
function App() {
  const [formSubmitted,setFormSubmitted] = useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const [title, setTitle] = useState("This is the title");
  const [description, setDescription] = useState("This is the description");
  const [author, setAuthor] = useState("Todd");
  // console.log(title);

  async function formSubmit(e) {
    e.preventDefault();
    console.log("form submitted");

    // const comment= {
    //   title:title,
    //   description:description,
    //   author:author
    // }
    const comment = {
      title,
      description,
      author,
    };

    console.log(comment);
try{
    const results = await fetch("https://sql.bocacode.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    console.log(results);
    const data = await results.json();
    console.log(data);
  }catch (error){
    console.log(error)
  }
  }
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>
        {/* here goes the title */}
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h3>{title}</h3>
        {/* This is the description */}
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <h3>{description}</h3>

        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">Choose One</option>
          <option value="Todd">Todd</option>
          <option value="Lud">Ludwigson</option>
          <option value="Matt">Matt</option>
          <option value="Other">Other</option>
        </select>
        <h3>{author}</h3>

        <button onClick={()=>setFormSubmitted(true)}>Submit form</button>
      </form>
    </div>
  );
}

export default App;
