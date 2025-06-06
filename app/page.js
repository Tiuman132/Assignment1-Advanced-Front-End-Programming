"use client";
import { useState } from "react";
import Form from './form/page';
import Footer from './components/footer';
import "./style.css";


export default function Home() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [submittedInput, setSubmittedInput] = useState("");
  const [submittedAge, setSubmittedAge] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);


  // Update name input as user types
  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.trim() && count >= 0) {
      setSubmittedInput(input);
      setSubmittedAge(count);
      setIsSubmitted(true);
      router.push(`/class?input=${encodeURIComponent(input)}&age=${count}&isSubmitted=true`);
    } else {
      alert("Oops! Please fill in the input field.");
    }
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>


      <div className="main_page">
        <h2>Welcome to Adv. Front-End Programming</h2>
        <h2>Register Form</h2>
        <h4>Enter your Name</h4>
        <input
          type="text"
          onChange={handleInputChange}
          value={input}
          placeholder="Enter Your Name"
        />
        <h4>Enter Your Age</h4>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <br />
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        {/* Display Form with current state for local feedback */}
        <Form input={input} age={count} isSubmitted={isSubmitted} />
      </div>

      <footer className="footer">
        <p>© 2025 My Website</p>
      </footer>
    </>
  );
}