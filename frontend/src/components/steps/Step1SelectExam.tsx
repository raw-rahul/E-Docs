// import React, { useState } from 'react';
// import { Search, ArrowRight } from 'lucide-react';
// import { EXAMS, POPULAR_EXAM_IDS } from '../../data/exams';
// import ExamCard from '../ui/ExamCard';
// import { fetchExam } from "../../api/examApi";
// import type { Exam } from '../../types';

// interface Props {
//   selectedExam: Exam | null;
//   onSelectExam: (exam: Exam) => void;
//   onContinue: () => void;
// }

// export default function Step1SelectExam({ selectedExam, onSelectExam, onContinue }: Props) {
//   const [query, setQuery] = useState('');

//   const filtered = query.trim()
//     ? EXAMS.filter(e =>
//         e.name.toLowerCase().includes(query.toLowerCase()) ||
//         e.description.toLowerCase().includes(query.toLowerCase())
//       )
//     : EXAMS;

//   const popularExams = EXAMS.filter(e => POPULAR_EXAM_IDS.includes(e.id));

//   return (
//     <div>
//       {/* Hero */}
//       <div style={{
//         background: '#FFFFFF',
//         padding: '2.5rem 2rem 2rem',
//         textAlign: 'center',
//         borderBottom: '1px solid #E2E8F2',
//       }}>
//         <h1 style={{
//           fontSize: '26px',
//           fontWeight: 700,
//           color: '#1B4F8A',
//           marginBottom: '10px',
//           letterSpacing: '-0.4px',
//         }}>
//           Get Your Documents Ready for Government Exams
//         </h1>
//         <p style={{ fontSize: '15px', color: '#6B7A8D', marginBottom: '14px' }}>
//           Upload &amp; Automatically Compress Your Docs for Exams Like
//         </p>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
//           {['UPSC', 'SSC', 'Railways', 'Banking', 'State PSC', 'and More'].map(tag => (
//             <span key={tag} style={{
//               fontSize: '13px',
//               fontWeight: 500,
//               padding: '4px 12px',
//               borderRadius: '99px',
//               background: '#EEF4FF',
//               color: '#2563C8',
//               border: '1px solid #D6E5FA',
//             }}>
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div style={{ padding: '1.75rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
//         <h2 style={{
//           fontSize: '18px',
//           fontWeight: 700,
//           color: '#1B4F8A',
//           marginBottom: '1rem',
//         }}>
//           Step 1: Select Your Exam
//         </h2>

//         {/* Search bar */}
//         <div style={{
//           background: '#EEF4FF',
//           border: '2px solid #3B7DD8',
//           borderRadius: '12px',
//           padding: '0.6rem 0.75rem',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '10px',
//           marginBottom: '1rem',
//           boxShadow: '0 2px 8px rgba(59,125,216,0.1)',
//         }}>
//           <Search size={18} color="#9CA8B8" />
//           <input
//             value={query}
//             onChange={e => setQuery(e.target.value)}
//             placeholder="Search and select your exam"
//             style={{
//               flex: 1,
//               border: 'none',
//               outline: 'none',
//               background: 'transparent',
//               fontSize: '15px',
//               color: '#1A2B45',
//             }}
//           />
//           <button
//             onClick={() => selectedExam && onContinue()}
//             style={{
//               width: '34px',
//               height: '34px',
//               borderRadius: '8px',
//               background: '#1B4F8A',
//               border: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               flexShrink: 0,
//             }}
//           >
//             <ArrowRight size={16} color="#fff" />
//           </button>
//         </div>

//         {/* Popular exams */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '10px',
//           marginBottom: '1rem',
//           flexWrap: 'wrap',
//         }}>
//           <span style={{ fontSize: '13px', fontWeight: 600, color: '#6B7A8D' }}>Popular Exams:</span>
//           {popularExams.map(exam => (
//             <button
//               key={exam.id}
//               onClick={() => onSelectExam(exam)}
//               style={{
//                 fontSize: '13px',
//                 fontWeight: 600,
//                 padding: '4px 14px',
//                 borderRadius: '99px',
//                 background: selectedExam?.id === exam.id ? '#3B7DD8' : '#FFFFFF',
//                 color: selectedExam?.id === exam.id ? '#FFFFFF' : '#3B7DD8',
//                 border: `1.5px solid ${selectedExam?.id === exam.id ? '#3B7DD8' : '#D6E5FA'}`,
//                 cursor: 'pointer',
//                 transition: 'all 0.15s',
//               }}
//             >
//               {exam.shortName}
//             </button>
//           ))}
//         </div>

//         {/* Exam grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
//           gap: '12px',
//           marginBottom: '1.5rem',
//         }}>
//           {filtered.map(exam => (
//             <ExamCard
//               key={exam.id}
//               exam={exam}
//               selected={selectedExam?.id === exam.id}
//               onClick={() => onSelectExam(exam)}
//             />
//           ))}
//         </div>

//         {/* Continue */}
//         <button
//           disabled={!selectedExam}
//           onClick={onContinue}
//           style={{
//             background: selectedExam ? '#1B4F8A' : '#E2E8F2',
//             color: selectedExam ? '#FFFFFF' : '#9CA8B8',
//             border: 'none',
//             borderRadius: '10px',
//             padding: '0.7rem 1.6rem',
//             fontSize: '14px',
//             fontWeight: 600,
//             cursor: selectedExam ? 'pointer' : 'not-allowed',
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '8px',
//             transition: 'background 0.15s',
//           }}
//         >
//           Continue
//           <ArrowRight size={15} />
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { EXAMS, POPULAR_EXAM_IDS } from "../../data/exams";
import ExamCard from "../ui/ExamCard";
import { fetchExam } from "../../api/examApi";
import type { Exam } from "../../types";

interface Props {
  selectedExam: Exam | null;
  onSelectExam: (exam: Exam) => void;
  onContinue: () => void;
}

export default function Step1SelectExam({
  selectedExam,
  onSelectExam,
  onContinue,
}: Props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  //  Debounced API search
  useEffect(() => {
    if (!query.trim()) return;

    const delay = setTimeout(async () => {
      try {
        setLoading(true);

        const data = await fetchExam(query);

        const formattedExam: Exam = {
          id: data.exam_code,
          name: data.exam,
          shortName: data.exam_code,
          description: "Government Exam",
          emoji: "📄",
          iconBg: "#EEF4FF",
          docSections: [
            {
              sectionName: "Required Documents",
              documents: data.documents.map((doc: any) => ({
                name: doc.document_type,
                required: true,
                maxSizeKB: doc.max_size_kb,
                formats: doc.allowed_formats.split(","),
              })),
            },
          ],
        };

        onSelectExam(formattedExam);
      } catch (err) {
        console.log("Exam not found");
      } finally {
        setLoading(false);
      }
    }, 500); // ⏱ debounce

    return () => clearTimeout(delay);
  }, [query]);

  const popularExams = EXAMS.filter((e) => POPULAR_EXAM_IDS.includes(e.id));

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "#FFFFFF",
          padding: "2.5rem 2rem 2rem",
          textAlign: "center",
          borderBottom: "1px solid #E2E8F2",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#1B4F8A",
            marginBottom: "10px",
            letterSpacing: "-0.4px",
          }}
        >
          Get Your Documents Ready for Government Exams
        </h1>

        <p style={{ fontSize: "15px", color: "#6B7A8D", marginBottom: "14px" }}>
          Upload & Automatically Compress Your Docs for Exams Like
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {["UPSC", "SSC", "Railways", "Banking", "State PSC", "and More"].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "4px 12px",
                  borderRadius: "99px",
                  background: "#EEF4FF",
                  color: "#2563C8",
                  border: "1px solid #D6E5FA",
                }}
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Content */}
      <div
        style={{ padding: "1.75rem 2rem", maxWidth: "860px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#1B4F8A",
            marginBottom: "1rem",
          }}
        >
          Step 1: Select Your Exam
        </h2>

        {/* Search bar */}
        <div
          style={{
            background: "#EEF4FF",
            border: "2px solid #3B7DD8",
            borderRadius: "12px",
            padding: "0.6rem 0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "1rem",
            boxShadow: "0 2px 8px rgba(59,125,216,0.1)",
          }}
        >
          <Search size={18} color="#9CA8B8" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exam (e.g. UPSC)"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "15px",
              color: "#1A2B45",
            }}
          />

          {loading && (
            <span style={{ fontSize: "12px", color: "#3B7DD8" }}>
              Searching...
            </span>
          )}

          <button
            onClick={() => selectedExam && onContinue()}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "#1B4F8A",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <ArrowRight size={16} color="#fff" />
          </button>
        </div>

        {/* Popular exams */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#6B7A8D" }}>
            Popular Exams:
          </span>

          {popularExams.map((exam) => (
            <button
              key={exam.id}
              onClick={() => onSelectExam(exam)}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                padding: "4px 14px",
                borderRadius: "99px",
                background:
                  selectedExam?.id === exam.id ? "#3B7DD8" : "#FFFFFF",
                color: selectedExam?.id === exam.id ? "#FFFFFF" : "#3B7DD8",
                border: `1.5px solid ${selectedExam?.id === exam.id ? "#3B7DD8" : "#D6E5FA"}`,
                cursor: "pointer",
              }}
            >
              {exam.shortName}
            </button>
          ))}
        </div>

        {/* Selected Exam Card (from backend) */}
        {selectedExam && (
          <div
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <ExamCard exam={selectedExam} selected={true} onClick={() => {}} />
          </div>
        )}

        {/* Continue */}
        <button
          disabled={!selectedExam}
          onClick={onContinue}
          style={{
            background: selectedExam ? "#1B4F8A" : "#E2E8F2",
            color: selectedExam ? "#FFFFFF" : "#9CA8B8",
            border: "none",
            borderRadius: "10px",
            padding: "0.7rem 1.6rem",
            fontSize: "14px",
            fontWeight: 600,
            cursor: selectedExam ? "pointer" : "not-allowed",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Continue
          <ArrowRight size={15} />
        </button>
      </div>

      {/* ================= MARQUEE (ADDED) ================= */}
      <div
        style={{
          marginTop: "2rem",
          overflow: "hidden",
          background: "#F8FAFC",
          borderTop: "1px solid #E2E8F2",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 25s linear infinite",
          }}
        >
          {[...EXAMS, ...EXAMS].map((exam, idx) => (
            <div
              key={idx}
              style={{
                width: "240px",
                margin: "0 10px",
                flexShrink: 0,
              }}
            >
              <ExamCard
                exam={exam}
                selected={selectedExam?.id === exam.id}
                onClick={() => onSelectExam(exam)}
              />
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @media (max-width: 768px) {
              div[style*="width: 240px"] {
                width: 200px !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}