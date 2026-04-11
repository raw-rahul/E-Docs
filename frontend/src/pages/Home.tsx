// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Home: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query.trim()) {
//       // Navigate to dynamic process page
//       navigate(`/process/${encodeURIComponent(query.trim())}`);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>E-Docs</h1>
//       <p>Search for your exam and upload required documents.</p>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter exam name or code"
//           style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
//         />
//         <button type="submit" style={{ padding: "0.5rem 1rem", background: "#004aad", color: "white" }}>
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';

// interface HomeProps {
//   onStart: () => void;
// }

// export default function Home({ onStart }: HomeProps) {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '60px 20px',
//       textAlign: 'center',
//       maxWidth: '800px',
//       margin: '0 auto'
//     }}>
//       <h1 style={{ 
//         fontSize: '36px', 
//         color: '#1B4F8A', 
//         marginBottom: '16px',
//         fontWeight: 800 
//       }}>
//         Simplify Your Gov Exam Documents
//       </h1>
//       <p style={{ 
//         fontSize: '18px', 
//         color: '#6B7A8D', 
//         marginBottom: '40px',
//         lineHeight: '1.6' 
//       }}>
//         E-Docs helps you identify, organize, and prepare all required documents 
//         for Indian Government Exams in three simple steps.
//       </p>
      
//       <button 
//         onClick={onStart}
//         style={{
//           background: '#1B4F8A',
//           color: 'white',
//           padding: '16px 40px',
//           fontSize: '18px',
//           fontWeight: 600,
//           border: 'none',
//           borderRadius: '12px',
//           cursor: 'pointer',
//           boxShadow: '0 4px 14px 0 rgba(27, 79, 138, 0.39)',
//           transition: 'transform 0.2s ease'
//         }}
//         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//       >
//         Get Started Now
//       </button>

//       <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
//         {[
//           { t: "Select Exam", d: "Choose from 50+ exams" },
//           { t: "Verify Docs", d: "Check required list" },
//           { t: "Ready to Go", d: "Download & Apply" }
//         ].map((item, i) => (
//           <div key={i} style={{ padding: '20px', background: 'white', borderRadius: '12px', border: '1px solid #E2E8F2' }}>
//             <div style={{ fontWeight: 700, color: '#1B4F8A', marginBottom: '8px' }}>{item.t}</div>
//             <div style={{ fontSize: '14px', color: '#6B7A8D' }}>{item.d}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="home-container">
      <style>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .home-title {
          font-size: 28px; /* Mobile size */
          color: #1B4F8A;
          margin-bottom: 16px;
          font-weight: 800;
        }

        .home-subtitle {
          font-size: 16px; /* Mobile size */
          color: #6B7A8D;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .home-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: 1fr; /* Stacked on mobile */
          gap: 20px;
          width: 100%;
        }

        /* Desktop and Tablet Media Query */
        @media (min-width: 768px) {
          .home-title {
            font-size: 36px;
          }
          .home-subtitle {
            font-size: 18px;
          }
          .home-grid {
            grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
          }
        }
      `}</style>

      <h1 className="home-title">
        Simplify Your Gov Exam Documents
      </h1>
      
      <p className="home-subtitle">
        E-Docs helps you identify, organize, and prepare all required documents 
        for Indian Government Exams in three simple steps.
      </p>
      
      <button 
        onClick={onStart}
        style={{
          background: '#1B4F8A',
          color: 'white',
          padding: '16px 40px',
          fontSize: '18px',
          fontWeight: 600,
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 4px 14px 0 rgba(27, 79, 138, 0.39)',
          transition: 'transform 0.2s ease',
          maxWidth: '100%'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Get Started Now
      </button>

      <div className="home-grid">
        {[
          { t: "Select Exam", d: "Choose from 50+ exams" },
          { t: "Verify Docs", d: "Check required list" },
          { t: "Ready to Go", d: "Download & Apply" }
        ].map((item, i) => (
          <div key={i} style={{ 
            padding: '20px', 
            background: 'white', 
            borderRadius: '12px', 
            border: '1px solid #E2E8F2' 
          }}>
            <div style={{ fontWeight: 700, color: '#1B4F8A', marginBottom: '8px' }}>{item.t}</div>
            <div style={{ fontSize: '14px', color: '#6B7A8D' }}>{item.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 