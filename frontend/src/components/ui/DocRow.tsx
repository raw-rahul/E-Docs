import React from 'react';
import { Check } from 'lucide-react';
import type { Document } from '../../types';

interface Props {
  doc: Document;
  checked: boolean;
  onToggle: () => void;
}

export default function DocRow({ doc, checked, onToggle }: Props) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '11px 0',
      borderBottom: '1px solid #F1F5FB',
    }}>
      {/* Checkbox */}
      <button
        onClick={onToggle}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '5px',
          border: `2px solid ${checked ? '#3B7DD8' : '#CBD5E1'}`,
          background: checked ? '#3B7DD8' : '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'all 0.15s',
          padding: 0,
        }}
      >
        {checked && <Check size={11} color="#fff" strokeWidth={3} />}
      </button>

      {/* Doc info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#1A2B45',
          marginBottom: '2px',
        }}>
          {doc.name}
        </div>
        <div style={{ fontSize: '12px', color: '#9CA8B8' }}>
          {doc.formats?.join(' / ')} · Max {doc.maxSizeKB ?? 200} KB
        </div>
      </div>

      {/* Badge */}
      <span style={{
        fontSize: '11px',
        fontWeight: 600,
        padding: '3px 10px',
        borderRadius: '99px',
        background: doc.required ? '#FEE2E2' : '#DCFCE7',
        color: doc.required ? '#991B1B' : '#166534',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        {doc.required ? 'Required' : 'Optional'}
      </span>
    </div>
  );
}