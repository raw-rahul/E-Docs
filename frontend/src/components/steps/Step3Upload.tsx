// import React, { useState } from 'react';
// import { ChevronLeft, Zap, Send } from 'lucide-react';
// import UploadZone from '../ui/UploadZone';
// import type { Exam, UploadedFile } from '../../types';

// interface Props {
//   exam: Exam;
//   checkedDocs: Record<string, boolean>;
//   onBack: () => void;
// }

// export default function Step3Upload({ exam, checkedDocs, onBack }: Props) {
//   const [autoCompress, setAutoCompress] = useState(true);
//   const [uploads, setUploads] = useState<Record<string, UploadedFile>>({});
//   const [submitted, setSubmitted] = useState(false);

//   // Build the list of selected doc names
//   const selectedDocs = exam.docSections.flatMap((s, si) =>
//     s.documents
//       .map((d, di) => ({ key: `${si}_${di}`, name: d.name }))
//       .filter(({ key }) => checkedDocs[key])
//   );

//   const uploadedCount = Object.values(uploads).filter(u => u.file).length;
//   const allUploaded = uploadedCount === selectedDocs.length && selectedDocs.length > 0;

//   function handleFileSelect(docName: string, file: File) {
//     setUploads(prev => ({
//       ...prev,
//       [docName]: {
//         docName,
//         file,
//         compressed: autoCompress,
//         originalSizeKB: Math.round(file.size / 1024),
//         compressedSizeKB: autoCompress ? Math.round(file.size / 1024 * 0.4) : undefined,
//       },
//     }));
//   }

//   if (submitted) {
//     return (
//       <div style={{
//         padding: '3rem 2rem',
//         maxWidth: '860px',
//         margin: '0 auto',
//         textAlign: 'center',
//       }}>
//         <div style={{
//           width: '72px',
//           height: '72px',
//           borderRadius: '50%',
//           background: '#DCFCE7',
//           border: '2px solid #166534',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: '0 auto 1.25rem',
//           fontSize: '32px',
//         }}>
//           ✓
//         </div>
//         <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1B4F8A', marginBottom: '10px' }}>
//           Documents Submitted!
//         </h2>
//         <p style={{ fontSize: '15px', color: '#6B7A8D' }}>
//           {uploadedCount} document{uploadedCount !== 1 ? 's' : ''} uploaded for <strong>{exam.name}</strong>.
//           You will receive a confirmation shortly.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: '1.75rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
//       <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1B4F8A', marginBottom: '1rem' }}>
//         Step 3: Upload &amp; Compress
//       </h2>

//       {/* Auto-compress toggle card */}
//       <div style={{
//         background: '#EEF4FF',
//         border: '1px solid #D6E5FA',
//         borderRadius: '12px',
//         padding: '1rem 1.25rem',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '14px',
//         marginBottom: '1.25rem',
//       }}>
//         <div style={{
//           width: '40px',
//           height: '40px',
//           borderRadius: '10px',
//           background: '#1B4F8A',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexShrink: 0,
//         }}>
//           <Zap size={20} color="#fff" />
//         </div>

//         <div style={{ flex: 1 }}>
//           <div style={{ fontSize: '14px', fontWeight: 700, color: '#1B4F8A', marginBottom: '2px' }}>
//             Auto-compress enabled
//           </div>
//           <div style={{ fontSize: '12px', color: '#2563C8' }}>
//             Files will be compressed to meet exam portal size limits (~60% reduction)
//           </div>
//         </div>

//         {/* Toggle */}
//         <button
//           onClick={() => setAutoCompress(v => !v)}
//           style={{
//             width: '44px',
//             height: '24px',
//             borderRadius: '99px',
//             background: autoCompress ? '#1B4F8A' : '#CBD5E1',
//             border: 'none',
//             cursor: 'pointer',
//             position: 'relative',
//             flexShrink: 0,
//             transition: 'background 0.2s',
//           }}
//         >
//           <div style={{
//             position: 'absolute',
//             width: '18px',
//             height: '18px',
//             borderRadius: '50%',
//             background: '#FFFFFF',
//             top: '3px',
//             left: autoCompress ? '23px' : '3px',
//             transition: 'left 0.2s',
//           }} />
//         </button>
//       </div>

//       {/* Upload progress */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: '1rem',
//       }}>
//         <span style={{ fontSize: '13px', color: '#6B7A8D', fontWeight: 500 }}>
//           {uploadedCount} of {selectedDocs.length} documents uploaded
//         </span>
//         {allUploaded && (
//           <span style={{
//             fontSize: '12px',
//             fontWeight: 600,
//             padding: '3px 10px',
//             borderRadius: '99px',
//             background: '#DCFCE7',
//             color: '#166534',
//           }}>
//             All ready
//           </span>
//         )}
//       </div>

//       {/* Upload zones */}
//       {selectedDocs.length === 0 ? (
//         <div style={{
//           background: '#FFFFFF',
//           border: '1px solid #E2E8F2',
//           borderRadius: '12px',
//           padding: '2rem',
//           textAlign: 'center',
//           color: '#9CA8B8',
//           fontSize: '14px',
//         }}>
//           No documents selected. Go back and select documents first.
//         </div>
//       ) : (
//         selectedDocs.map(({ name }) => (
//           <UploadZone
//             key={name}
//             docName={name}
//             uploadedFile={uploads[name]}
//             onFileSelect={handleFileSelect}
//           />
//         ))
//       )}

//       {/* Buttons */}
//       <div style={{ display: 'flex', gap: '10px', marginTop: '1.25rem' }}>
//         <button onClick={onBack} style={{
//           background: 'transparent',
//           border: '1.5px solid #D8E2EF',
//           borderRadius: '10px',
//           padding: '0.7rem 1.2rem',
//           fontSize: '14px',
//           fontWeight: 500,
//           color: '#6B7A8D',
//           cursor: 'pointer',
//           display: 'inline-flex',
//           alignItems: 'center',
//           gap: '6px',
//         }}>
//           <ChevronLeft size={15} /> Back
//         </button>

//         <button
//           onClick={() => setSubmitted(true)}
//           disabled={selectedDocs.length === 0}
//           style={{
//             background: selectedDocs.length > 0 ? '#1B4F8A' : '#E2E8F2',
//             color: selectedDocs.length > 0 ? '#FFFFFF' : '#9CA8B8',
//             border: 'none',
//             borderRadius: '10px',
//             padding: '0.7rem 1.6rem',
//             fontSize: '14px',
//             fontWeight: 600,
//             cursor: selectedDocs.length > 0 ? 'pointer' : 'not-allowed',
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '8px',
//           }}
//         >
//           Submit All Documents <Send size={15} />
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ChevronLeft, Zap, Send } from "lucide-react";
import UploadZone from "../ui/UploadZone";
import { processDocuments } from "../../api/examApi";
import type { Exam, UploadedFile } from "../../types";

interface Props {
  exam: Exam;
  checkedDocs: Record<string, boolean>;
  onBack: () => void;
}

export default function Step3Upload({ exam, checkedDocs, onBack }: Props) {
  const [autoCompress, setAutoCompress] = useState(true);
  const [uploads, setUploads] = useState<Record<string, UploadedFile>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Selected docs
  const selectedDocs = exam.docSections.flatMap((s, si) =>
    s.documents
      .map((d, di) => ({ key: `${si}_${di}`, name: d.name }))
      .filter(({ key }) => checkedDocs[key]),
  );

  const uploadedCount = Object.values(uploads).filter((u) => u.file).length;
  const allUploaded =
    uploadedCount === selectedDocs.length && selectedDocs.length > 0;

  function handleFileSelect(docName: string, file: File) {
    setUploads((prev) => ({
      ...prev,
      [docName]: {
        docName,
        file,
        compressed: autoCompress,
        originalSizeKB: Math.round(file.size / 1024),
      },
    }));
  }

  // ✅ MAIN SUBMIT FUNCTION
  async function handleSubmit() {
    try {
      setLoading(true);

      // Map frontend names -> backend expected keys
      const files: { [key: string]: File } = {};

      Object.entries(uploads).forEach(([docName, data]) => {
        if (!data.file) return;

        const name = docName.toUpperCase();

        if (name.includes("PHOTO")) files["PHOTO"] = data.file;
        else if (name.includes("SIGN")) files["SIGNATURE"] = data.file;
        else if (name.includes("MARK")) files["MARKSHEET"] = data.file;
      });

      if (Object.keys(files).length === 0) {
        alert("Upload at least one file");
        return;
      }

      // ✅ API CALL
      await processDocuments(exam.shortName, files);

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Error processing documents");
    } finally {
      setLoading(false);
    }
  }

  // ✅ SUCCESS SCREEN
  if (submitted) {
    return (
      <div
        style={{
          padding: "3rem 2rem",
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "#DCFCE7",
            border: "2px solid #166534",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
            fontSize: "32px",
          }}
        >
          ✓
        </div>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#1B4F8A" }}>
          Documents Processed!
        </h2>
        <p style={{ fontSize: "15px", color: "#6B7A8D" }}>
          Your files are downloaded as ZIP 🎉
        </p>
      </div>
    );
  }

  return (
    <div
      style={{ padding: "1.75rem 2rem", maxWidth: "860px", margin: "0 auto" }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#1B4F8A" }}>
        Step 3: Upload & Compress
      </h2>

      {/* Auto compress */}
      <div
        style={{
          background: "#EEF4FF",
          border: "1px solid #D6E5FA",
          borderRadius: "12px",
          padding: "1rem",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Zap size={18} />
          <span>Auto Compress</span>
        </div>

        <input
          type="checkbox"
          checked={autoCompress}
          onChange={() => setAutoCompress(!autoCompress)}
        />
      </div>

      {/* Upload zones */}
      {selectedDocs.map(({ name }) => (
        <UploadZone
          key={name}
          docName={name}
          uploadedFile={uploads[name]}
          onFileSelect={handleFileSelect}
        />
      ))}

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "1.25rem" }}>
        <button
          onClick={onBack}
          style={{
            background: "transparent",
            border: "1.5px solid #D8E2EF",
            borderRadius: "10px",
            padding: "0.7rem 1.2rem",
            fontSize: "14px",
            fontWeight: 500,
            color: "#6B7A8D",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <ChevronLeft size={15} /> Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={!allUploaded || loading}
          style={{
            background: selectedDocs.length > 0 ? "#1B4F8A" : "#E2E8F2",
            color: selectedDocs.length > 0 ? "#FFFFFF" : "#9CA8B8",
            border: "none",
            borderRadius: "10px",
            padding: "0.7rem 1.6rem",
            fontSize: "14px",
            fontWeight: 600,
            cursor: selectedDocs.length > 0 ? "pointer" : "not-allowed",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {loading ? "Processing..." : "Submit & Download"}
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
