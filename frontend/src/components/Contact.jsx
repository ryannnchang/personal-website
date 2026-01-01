import React, {useState} from 'react';


const Contact = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [inputMessage, setMessageValue] = useState('');
  const [inputName, setName] = useState('');
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChangeMsg = (event) => {
    setMessageValue(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  //Email API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: inputName,
      email: inputValue,
      message: inputMessage
    };

      
    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setInputValue("")
        setName("")
        setMessageValue("")
      } else {
        setName("")
        setMessageValue("Didn't Work")
      }

    } catch (err) {
      console.error(err);
    }
  }

  return(
    <div className='flex items-center justify-center flex-col px-6 pb-12'>
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      
      <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col w-full max-w-5xl'>

        <input
        className="border border-gray-300 outline outline-1 outline-gray-500 mb-4 px-3 py-2 rounded w-full mb-6 mx-auto"
        type="text"
        id="simple-input"
        value={inputName}
        onChange={handleChangeName}
        placeholder="Enter Name Here"
        />
        <input
          className="border border-gray-300 outline outline-1 outline-gray-500 mb-4 px-3 py-2 rounded w-full mb-6 mx-auto"
          type="text"
          id="simple-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Email Here"
        />
        <textarea
          className="border border-gray-300 outline outline-1 outline-gray-500 mb-4 px-3 py-2 rounded w-full mb-3 mx-auto h-32 resize-none"
          id="message-input"
          value={inputMessage}
          onChange={handleChangeMsg}
          placeholder="Enter your message here - I'd love to hear from you!"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition-colors duration-200"
        >
          Send Message
        </button>
      </form>

    </div>
  )
} 

export default Contact;
