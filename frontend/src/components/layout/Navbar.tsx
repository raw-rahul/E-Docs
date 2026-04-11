// import React from 'react';
// import { UserCircle2, Menu } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <>
//       <style>{`
//         .nav-desktop { display: none !important; }
//         .nav-mobile  { display: flex !important; }
//         @media (min-width: 540px) {
//           .nav-desktop { display: flex !important; }
//           .nav-mobile  { display: none !important; }
//         }
//         .nav-tag-text { display: none; }
//         @media (min-width: 400px) { .nav-tag-text { display: inline; } }
//       `}</style>
//       <nav style={{
//         background: '#FFFFFF',
//         borderBottom: '1px solid #E2E8F2',
//         height: '60px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '0 var(--page-px)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 100,
//         width: '100%',
//       }}>
//         {/* Logo */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
//           <div style={{
//             width: '36px', height: '36px', borderRadius: '50%',
//             border: '2px solid #1B4F8A', overflow: 'hidden',
//             display: 'flex', flexDirection: 'column', flexShrink: 0,
//           }}>
//             <div style={{ flex: 1, background: '#FF9933' }} />
//             <div style={{ flex: 1, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #000080' }} />
//             </div>
//             <div style={{ flex: 1, background: '#138808' }} />
//           </div>
//           <span style={{ fontWeight: 700, fontSize: '18px', color: '#1B4F8A' }}>E-Docs</span>
//           <span className="nav-tag-text" style={{ fontWeight: 400, fontSize: '14px', color: '#6B7A8D' }}>
//             (Gov Exam Assistant)
//           </span>
//         </div>

//         {/* Desktop nav */}
//         <div className="nav-desktop" style={{ alignItems: 'center', gap: '28px' }}>
//           <button style={{ background: 'none', border: 'none', fontSize: '14px', color: '#4A5568', fontWeight: 500 }}>Instructions</button>
//           <button style={{ background: 'none', border: 'none', fontSize: '14px', color: '#4A5568', fontWeight: 500 }}>Support</button>
//           <div style={{ width: '1px', height: '20px', background: '#E2E8F2' }} />
//           <button style={{ background: 'none', border: 'none', color: '#6B7A8D', display: 'flex', alignItems: 'center' }}>
//             <UserCircle2 size={24} />
//           </button>
//         </div>

//         {/* Mobile nav */}
//         <button className="nav-mobile" style={{ background: 'none', border: 'none', color: '#6B7A8D', alignItems: 'center' }}>
//           <Menu size={22} />
//         </button>
//       </nav>
//     </>
//   );
// }

import React from 'react';
import { UserCircle2, Menu } from 'lucide-react';
import flagImg from '../../assets/flag.png'; 

interface NavbarProps {
  onLogoClick: () => void;
}

export default function Navbar({ onLogoClick }: NavbarProps) {
  return (
    <>
      <style>{`
        .nav-desktop { display: none !important; }
        .nav-mobile  { display: flex !important; }
        @media (min-width: 540px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile  { display: none !important; }
        }
        .nav-tag-text { display: none; }
        @media (min-width: 400px) { .nav-tag-text { display: inline; } }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .logo-container:hover {
          opacity: 0.8;
        }
      `}</style>
      <nav style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F2',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--page-px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
      }}>
        {/* Logo Section - Now clickable to return Home */}
        <div className="logo-container" onClick={onLogoClick}>
          <img 
            src={flagImg} 
            alt="E-Docs Logo" 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid #E2E8F2'
            }} 
          />
          <span style={{ fontWeight: 700, fontSize: '18px', color: '#1B4F8A' }}>E-Docs</span>
          <span className="nav-tag-text" style={{ fontWeight: 400, fontSize: '14px', color: '#6B7A8D' }}>
            (Gov Exam Assistant)
          </span>
        </div>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: '28px' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '14px', color: '#4A5568', fontWeight: 500, cursor: 'pointer' }}>Instructions</button>
          <button style={{ background: 'none', border: 'none', fontSize: '14px', color: '#4A5568', fontWeight: 500, cursor: 'pointer' }}>Support</button>
          <div style={{ width: '1px', height: '20px', background: '#E2E8F2' }} />
          <button style={{ background: 'none', border: 'none', color: '#6B7A8D', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <UserCircle2 size={24} />
          </button>
        </div>

        {/* Mobile nav */}
        <button className="nav-mobile" style={{ background: 'none', border: 'none', color: '#6B7A8D', alignItems: 'center', cursor: 'pointer' }}>
          <Menu size={22} />
        </button>
      </nav>
    </>
  );
}