import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const inputRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*+=-?~";

    for (let i = 0; i < range; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [range, isNumberAllowed, isCharAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    inputRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [range, isNumberAllowed, isCharAllowed]);

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-1/3 h-[300px] p-5 mt-10 bg-slate-400 rounded-md">
      <h1 className="text-white font-semibold text-2xl">Password Generator</h1>
      <div className="flex gap-5">
        <input
          className="outline-none rounded-md w-full px-10"
          type="text"
          value={password}
          readOnly
          ref={inputRef}
        />
        <button
          className=" bg-blue-500 text-white py-3 px-8 rounded-md"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="flex justify-center items-center gap-3 text-white text-lg">
        <input
          type="range"
          min={6}
          max={20}
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className=" cursor-pointer"
        />
        <label htmlFor="range">{range}</label>
        <input
          type="checkbox"
          checked={isNumberAllowed}
          onChange={() => {
            setIsNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="number">Number</label>
        <input
          type="checkbox"
          checked={isCharAllowed}
          onChange={() => {
            setIsCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="char">Character</label>
      </div>
    </div>
  );
}

export default App;
