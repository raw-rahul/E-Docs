import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to dynamic process page
      navigate(`/process/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>E-Docs</h1>
      <p>Search for your exam and upload required documents.</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter exam name or code"
          style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", background: "#004aad", color: "white" }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
