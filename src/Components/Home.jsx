import React, { useRef } from "react";
import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Home() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form onSubmit={handleSave}>
        <label>Enter Message: </label>
        <input type="text" ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
