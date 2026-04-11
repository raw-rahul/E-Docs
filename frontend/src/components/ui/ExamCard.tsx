import React from 'react';
import type { Exam } from '../../types';

interface Props {
  exam: Exam;
  selected: boolean;
  onClick: () => void;
}

export default function ExamCard({ exam, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        background: selected ? '#EEF4FF' : '#FFFFFF',
        border: `${selected ? '2px' : '1.5px'} solid ${selected ? '#3B7DD8' : '#D8E2EF'}`,
        borderRadius: '14px',
        padding: '1.1rem 0.75rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        textAlign: 'center',
        transition: 'border-color 0.15s, background 0.15s, box-shadow 0.15s',
        boxShadow: selected
          ? '0 0 0 3px rgba(59,125,216,0.12)'
          : '0 1px 3px rgba(27,79,138,0.06)',
        width: '100%',
      }}
      onMouseEnter={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#3B7DD8';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(59,125,216,0.13)';
        }
      }}
      onMouseLeave={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#D8E2EF';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 1px 3px rgba(27,79,138,0.06)';
        }
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        background: exam.iconBg,
        border: `1.5px solid ${selected ? '#3B7DD8' : '#D8E2EF'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        flexShrink: 0,
      }}>
        {exam.emoji}
      </div>

      {/* Name */}
      <span style={{
        fontSize: '14px',
        fontWeight: 700,
        color: selected ? '#1B4F8A' : '#1A2B45',
        letterSpacing: '-0.1px',
      }}>
        {exam.shortName}
      </span>

      {/* Description */}
      <span style={{
        fontSize: '11px',
        color: '#6B7A8D',
        lineHeight: 1.4,
      }}>
        {exam.description}
      </span>
    </button>
  );
}