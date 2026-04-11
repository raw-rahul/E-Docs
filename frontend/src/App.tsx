// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import ProcessExam from "./pages/ProcessExam";

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/process/:examName" element={<ProcessExam />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import Navbar from './components/layout/Navbar';
// import StepIndicator from './components/steps/StepIndicator';
// import Step1SelectExam from './components/steps/Step1SelectExam';
// import Step2SelectDocs from './components/steps/Step2SelectDocs';
// import Step3Upload from './components/steps/Step3Upload';
// import type { Exam, Step } from './types';

// export default function App() {
//   const [currentStep, setCurrentStep] = useState<Step>(1);
//   const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

//   // checkedDocs: key = `${sectionIndex}_${docIndex}`, value = boolean
//   const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

//   function handleSelectExam(exam: Exam) {
//     setSelectedExam(exam);
//     // Pre-check all required docs by default
//     const defaults: Record<string, boolean> = {};
//     exam.docSections.forEach((s, si) => {
//       s.documents.forEach((d, di) => {
//         defaults[`${si}_${di}`] = d.required;
//       });
//     });
//     setCheckedDocs(defaults);
//   }

//   function handleToggleDoc(key: string) {
//     setCheckedDocs(prev => ({ ...prev, [key]: !prev[key] }));
//   }

//   return (
//     <div style={{ minHeight: '100vh', background: '#EEF2F8' }}>
//       <Navbar />
//       <StepIndicator currentStep={currentStep} />

//       {currentStep === 1 && (
//         <Step1SelectExam
//           selectedExam={selectedExam}
//           onSelectExam={handleSelectExam}
//           onContinue={() => setCurrentStep(2)}
//         />
//       )}

//       {currentStep === 2 && selectedExam && (
//         <Step2SelectDocs
//           exam={selectedExam}
//           checkedDocs={checkedDocs}
//           onToggleDoc={handleToggleDoc}
//           onBack={() => setCurrentStep(1)}
//           onContinue={() => setCurrentStep(3)}
//         />
//       )}

//       {currentStep === 3 && selectedExam && (
//         <Step3Upload
//           exam={selectedExam}
//           checkedDocs={checkedDocs}
//           onBack={() => setCurrentStep(2)}
//         />
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home'; // Import the new file
import StepIndicator from './components/steps/StepIndicator';
import Step1SelectExam from './components/steps/Step1SelectExam';
import Step2SelectDocs from './components/steps/Step2SelectDocs';
import Step3Upload from './components/steps/Step3Upload';
import type { Exam, Step } from './types';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = Home Page
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  // Reset function to go back to Home
  const handleGoHome = () => {
    setCurrentStep(0);
    setSelectedExam(null);
  };

  function handleSelectExam(exam: Exam) {
    setSelectedExam(exam);
    const defaults: Record<string, boolean> = {};
    exam.docSections.forEach((s, si) => {
      s.documents.forEach((d, di) => {
        defaults[`${si}_${di}`] = d.required;
      });
    });
    setCheckedDocs(defaults);
  }

  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#EEF2F8' }}>
        {/* Pass reset function to Navbar */}
        <Navbar onLogoClick={handleGoHome} />

        {/* Step 0: Home Page */}
        {currentStep === 0 && (
          <Home onStart={() => setCurrentStep(1)} />
        )}

        {/* The Process Flow (Steps 1, 2, 3) */}
        {currentStep > 0 && (
          <>
            <StepIndicator currentStep={currentStep as Step} />
            
            {currentStep === 1 && (
              <Step1SelectExam
                selectedExam={selectedExam}
                onSelectExam={handleSelectExam}
                onContinue={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && selectedExam && (
              <Step2SelectDocs
                exam={selectedExam}
                checkedDocs={checkedDocs}
                onToggleDoc={(key) => setCheckedDocs(prev => ({ ...prev, [key]: !prev[key] }))}
                onBack={() => setCurrentStep(1)}
                onContinue={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && selectedExam && (
              <Step3Upload
                exam={selectedExam}
                checkedDocs={checkedDocs}
                onBack={() => setCurrentStep(2)}
              />
            )}
          </>
        )}
      </div>
    </Router>
  );
}