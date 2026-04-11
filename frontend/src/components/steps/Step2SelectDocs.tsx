import React from 'react';
import { ArrowRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import DocRow from '../ui/DocRow';
import type { Exam } from '../../types';

interface Props {
  exam: Exam;
  checkedDocs: Record<string, boolean>;
  onToggleDoc: (key: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function Step2SelectDocs({
  exam,
  checkedDocs,
  onToggleDoc,
  onBack,
  onContinue,
}: Props) {
  const totalRequired = exam.docSections
    .flatMap(s => s.documents)
    .filter(d => d.required).length;

  const checkedRequired = exam.docSections
    .flatMap((s, si) => s.documents.map((d, di) => ({ key: `${si}_${di}`, doc: d })))
    .filter(({ key, doc }) => doc.required && checkedDocs[key]).length;

  return (
    <div style={{ padding: '1.75rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1B4F8A', marginBottom: '1rem' }}>
        Step 2: Select Documents
      </h2>

      {/* Selected exam badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: '#EEF4FF',
        border: '1px solid #D6E5FA',
        borderRadius: '99px',
        padding: '5px 14px',
        marginBottom: '1.25rem',
      }}>
        <CheckCircle2 size={14} color="#3B7DD8" />
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1B4F8A' }}>
          {exam.name} — {exam.description}
        </span>
      </div>

      {/* Progress summary */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F2',
        borderRadius: '10px',
        padding: '0.875rem 1.25rem',
        marginBottom: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', color: '#6B7A8D', marginBottom: '6px' }}>
            Required documents: {checkedRequired} / {totalRequired} selected
          </div>
          <div style={{ height: '4px', background: '#E2E8F2', borderRadius: '99px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${totalRequired > 0 ? (checkedRequired / totalRequired) * 100 : 0}%`,
              background: '#3B7DD8',
              borderRadius: '99px',
              transition: 'width 0.25s',
            }} />
          </div>
        </div>
        <span style={{
          fontSize: '13px',
          fontWeight: 700,
          color: checkedRequired === totalRequired ? '#166534' : '#1B4F8A',
        }}>
          {totalRequired > 0 ? Math.round((checkedRequired / totalRequired) * 100) : 0}%
        </span>
      </div>

      {/* Doc sections */}
      {exam.docSections.map((section, si) => (
        <div key={section.sectionName} style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F2',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          boxShadow: '0 1px 3px rgba(27,79,138,0.05)',
        }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#6B7A8D',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            {section.sectionName}
          </div>

          {section.documents.map((doc, di) => {
            const key = `${si}_${di}`;
            return (
              <DocRow
                key={key}
                doc={doc}
                checked={checkedDocs[key] ?? false}
                onToggle={() => onToggleDoc(key)}
              />
            );
          })}
        </div>
      ))}

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '0.5rem' }}>
        <button onClick={onBack} style={{
          background: 'transparent',
          border: '1.5px solid #D8E2EF',
          borderRadius: '10px',
          padding: '0.7rem 1.2rem',
          fontSize: '14px',
          fontWeight: 500,
          color: '#6B7A8D',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <ChevronLeft size={15} /> Back
        </button>

        <button onClick={onContinue} style={{
          background: '#1B4F8A',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '10px',
          padding: '0.7rem 1.6rem',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          Continue to Upload <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}