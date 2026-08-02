import React ,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(0);
  function increasing(){
    setnum(num+1)
  }
  function decreasing(){
    setnum(num-1)
  }

  return (
    <div>
    <h1 className="text-4xl px-7 rounded-full py-7 m-10 w-fit font-bold h-[100px] bg-black text-white"> {num}
</h1>
<button onClick={increasing} className="text-4xl px-7 cursor-pointer rounded-full py-7 m-10 w-fit h-[100px] bg-black text-white">Increase</button>
<button onClick={decreasing}  className="text-4xl px-7 cursor-pointer rounded-full py-7 m-10 w-fit h-[100px] bg-black text-white">Decrease</button>
</div>

  );
};

export default App