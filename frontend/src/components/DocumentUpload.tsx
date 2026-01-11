import React, { useState } from "react";

interface Props {
  constraints: any[]; 
  onSubmit: (files: { [key: string]: File }) => void;
}

const DocumentUpload: React.FC<Props> = ({ constraints, onSubmit }) => {
  const [files, setFiles] = useState<{ [key: string]: File }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [type]: e.target.files[0] });
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {constraints.map((c) => (
        <div key={c.document_type} style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            {c.document_type} ({c.allowed_formats})
          </label>
          <input
            type="file"
            accept={c.allowed_formats.split(",").map((f: string) => "." + f).join(",")}
            onChange={(e) => handleChange(e, c.document_type)}
          />
        </div>
      ))}

      <button
        style={{ padding: "0.5rem 1rem", background: "#004aad", color: "white" }}
        onClick={() => onSubmit(files)}
      >
        Process & Download
      </button>
    </div>
  );
};

export default DocumentUpload;
