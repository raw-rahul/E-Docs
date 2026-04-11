import React, { useRef } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';
import type { UploadedFile } from '../../types';

interface Props {
  docName: string;
  uploadedFile: UploadedFile | undefined;
  onFileSelect: (docName: string, file: File) => void;
}

export default function UploadZone({ docName, uploadedFile, onFileSelect }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isUploaded = !!uploadedFile?.file;

  return (
    <div
      onClick={() => !isUploaded && inputRef.current?.click()}
      style={{
        background: isUploaded ? '#F0F7FF' : '#FFFFFF',
        border: `2px dashed ${isUploaded ? '#3B7DD8' : '#CBD5E1'}`,
        borderRadius: '12px',
        padding: '1.25rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        cursor: isUploaded ? 'default' : 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
        marginBottom: '10px',
      }}
      onMouseEnter={e => {
        if (!isUploaded) {
          (e.currentTarget as HTMLDivElement).style.borderColor = '#3B7DD8';
          (e.currentTarget as HTMLDivElement).style.background = '#F8FBFF';
        }
      }}
      onMouseLeave={e => {
        if (!isUploaded) {
          (e.currentTarget as HTMLDivElement).style.borderColor = '#CBD5E1';
          (e.currentTarget as HTMLDivElement).style.background = '#FFFFFF';
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        style={{ display: 'none' }}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) onFileSelect(docName, file);
        }}
      />

      {/* Icon */}
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        background: isUploaded ? '#3B7DD8' : '#EEF4FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {isUploaded
          ? <CheckCircle2 size={22} color="#fff" />
          : <Upload size={20} color="#3B7DD8" />
        }
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 600,
          color: isUploaded ? '#1B4F8A' : '#1A2B45',
          marginBottom: '3px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {docName}
        </div>
        <div style={{ fontSize: '12px', color: '#9CA8B8' }}>
          {isUploaded
            ? `${uploadedFile.file!.name} · Ready to submit`
            : 'Click to upload · PDF or JPG · Max 200 KB'}
        </div>
      </div>

      {/* Status */}
      {isUploaded ? (
        <span style={{
          fontSize: '11px',
          fontWeight: 600,
          padding: '3px 10px',
          borderRadius: '99px',
          background: '#DCFCE7',
          color: '#166534',
          flexShrink: 0,
        }}>
          Ready
        </span>
      ) : (
        <span style={{
          fontSize: '12px',
          color: '#3B7DD8',
          fontWeight: 500,
          flexShrink: 0,
        }}>
          Browse
        </span>
      )}
    </div>
  );
}