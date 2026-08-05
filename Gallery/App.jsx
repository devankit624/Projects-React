import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [index, setIndex] = useState(1);
  const [usedata, setUsedata] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUsedata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Picsum Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {usedata.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://picsum.photos/id/${item.id}/300/200`}
                alt={item.author}
                className="w-full h-52 object-cover hover:scale-105 transition duration-300"
              />
            </a>

            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.author}</h2>
              <p className="text-gray-400 text-sm">
                Image ID: {item.id}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 1))}
          className="bg-amber-600 text-black font-bold px-6 py-3 rounded-xl cursor-pointer active:scale-95"
        >
          Prev
        </button>

        <span className="text-2xl font-bold">
          Page {index}
        </span>

        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="bg-amber-600 text-black font-bold px-6 py-3 rounded-xl cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;