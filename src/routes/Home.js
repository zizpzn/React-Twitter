import React, { useState } from "react";

const Home = () => {
  const [twit, setTwit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
