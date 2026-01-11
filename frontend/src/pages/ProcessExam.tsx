import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DocumentUpload from "../components/DocumentUpload";
import { fetchExam, processDocuments } from "../api/examApi";

const ProcessExam: React.FC = () => {
  const { examName } = useParams<{ examName: string }>();
  const [constraints, setConstraints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (examName) {
      fetchExam(examName)
        .then((data) => {
          setConstraints(data.documents);
          setLoading(false);
        })
        .catch(() => {
          alert("Exam not found!");
          setConstraints([]);
          setLoading(false);
        });
    }
  }, [examName]);

  const handleSubmit = (files: { [key: string]: File }) => {
    if (examName) {
      processDocuments(examName, files)
        .catch(() => alert("Error processing documents!"));
    }
  };

  if (loading) return <p>Loading exam details...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Process Documents for: {examName}</h2>
      {constraints.length > 0 ? (
        <DocumentUpload constraints={constraints} onSubmit={handleSubmit} />
      ) : (
        <p>No documents required or exam not found.</p>
      )}
    </div>
  );
};

export default ProcessExam;
