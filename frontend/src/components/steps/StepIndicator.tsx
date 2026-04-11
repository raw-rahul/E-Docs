import React from 'react';
import { Check } from 'lucide-react';
import type { Step } from '../../types';

interface Props { currentStep: Step; }

const STEPS = [
  { num: 1 as Step, label: 'Select Exam' },
  { num: 2 as Step, label: 'Select Documents' },
  { num: 3 as Step, label: 'Upload & Compress' },
];

export default function StepIndicator({ currentStep }: Props) {
  return (
    <>
      <style>{`
        .step-label { display: none; }
        @media (min-width: 480px) { .step-label { display: inline; } }
      `}</style>
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F2',
        padding: '0 var(--page-px)',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        width: '100%',
      }}>
        {STEPS.map((step, idx) => {
          const isActive = currentStep === step.num;
          const isDone   = currentStep > step.num;
          return (
            <React.Fragment key={step.num}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  border: `2px solid ${isActive || isDone ? '#3B7DD8' : '#CBD5E1'}`,
                  background: isActive || isDone ? '#3B7DD8' : '#FFFFFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 0.2s',
                }}>
                  {isDone
                    ? <Check size={13} color="#fff" strokeWidth={2.5} />
                    : <span style={{ fontSize: '12px', fontWeight: 600, color: isActive ? '#fff' : '#9CA8B8' }}>{step.num}</span>
                  }
                </div>
                <span className="step-label" style={{
                  fontSize: '13px', fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#1B4F8A' : isDone ? '#3B7DD8' : '#9CA8B8',
                  whiteSpace: 'nowrap', transition: 'color 0.2s',
                }}>
                  {step.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div style={{
                  width: 'clamp(24px, 4vw, 48px)', height: '2px',
                  background: currentStep > step.num ? '#3B7DD8' : '#E2E8F2',
                  margin: '0 8px', borderRadius: '99px', transition: 'background 0.2s',
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}