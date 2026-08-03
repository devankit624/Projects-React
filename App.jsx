import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    // Prevent empty notes
    if (title.trim() === "" || details.trim() === "") {
      alert("Please fill in both fields!");
      return;
    }

    const newTask = {
      title,
      details,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="bg-black min-h-screen flex justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-16 text-white text-2xl font-bold rounded-3xl border-2 p-4 mb-6 placeholder:text-gray-400"
          />

          <textarea
            placeholder="Write Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full h-40 text-white text-xl rounded-3xl border-2 p-4 mb-6 placeholder:text-gray-400 resize-none"
          />

          <button className="w-full h-16 bg-white text-black text-2xl font-bold rounded-2xl hover:bg-gray-300 transition cursor-pointer">
            Add Note
          </button>
        </form>

        {/* Notes */}
        <h1 className="text-white text-4xl font-bold mt-10 mb-5">
          Recent Notes
        </h1>

        {tasks.length === 0 ? (
          <p className="text-gray-400 text-xl">No notes added yet.</p>
        ) : (
          <div className="grid gap-5">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-black">
                  {task.title}
                </h2>

                <hr className="my-3 border-gray-400" />

                <p className="text-lg text-gray-700 whitespace-pre-wrap">
                  {task.details}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;