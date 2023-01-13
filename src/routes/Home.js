import React, { useState } from "react";
import { dbService } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [twit, setTwit] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(dbService, "twits"), {
      twit: twit,
      createdAt: Date.now(),
    });
    setTwit("");
  };
  const handleChange = (e) => {
    setTwit(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's your mind?"
          maxLength={120}
          value={twit}
          onChange={handleChange}
        />
        <input type="submit" value="Twit" />
      </form>
    </div>
  );
};

export default Home;
