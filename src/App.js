import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({});

  const [title, setTitle] = useState("");
  // console.log(title);

  useEffect(() => {
    //fetch stuff
    if (form?.title?.length>3 && form?.description?.length>10) {
      setValidForm(true);
    }
  }, [form]);

  async function formSubmit(e) {
    e.preventDefault();
    if (!validForm) {
      setErrorMessage("Not a valid Form");
      return;
    }

    console.log("form submitted");

    // const comment= {
    //   title:title,
    //   description:description,
    //   author:author
    // }
    

    ;
    try {
      const results = await fetch("https://sql.bocacode.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log(results);
      const data = await results.json();
      console.log(data);
      setFormSubmitted(true);
      setErrorMessage();
      // alert()
    } catch (error) {
      console.log(error);
      setErrorMessage(
        "There was an error submitting your comment" + error.toString()
      );
    }
  }{console.log(form)}

const updateForm = (event) =>{
 // setForm({[event.target.name]: event.target.value})
 setForm({...form,[event.target.name]: event.target.value})
}


  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>

        {/* here goes the title */}
        <label>Title</label>
        <input
          name="title"
          //required
          type="text"
          //value={form}
          onChange={updateForm}
          
        />
        <h3>{title}</h3>
        {/* This is the description */}
        <label>Description</label>
        <textarea
          required
          name='description'
          value={form.description}
          onChange={updateForm}
        ></textarea>
        <h3>{form.description}</h3>

        <label>Author</label>
        <select name='Author' value={form.Author} onChange={updateForm}>
          <option value="">Choose One</option>
          <option value="Todd">Todd</option>
          <option value="Lud">Ludwigson</option>
          <option value="Matt">Matt</option>
          <option value="Other">Other</option>
        </select>
        <h3>{form.Author}</h3>

        {!formSubmitted && <button >Submit form</button>}
        {errorMessage && <h1>There was an error: {errorMessage}</h1>}
      </form>
    </div>
  );
}

export default App;
