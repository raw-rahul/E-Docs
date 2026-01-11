import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const ExamSearch: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Search exam by code or name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }}
      />
      <button
        style={{ padding: "0.5rem 1rem", background: "#004aad", color: "white" }}
        onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
};

export default ExamSearch;
