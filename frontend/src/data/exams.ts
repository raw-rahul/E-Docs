import type { Exam } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// HARDCODED DATA — Replace with:
//   const res = await fetch('/api/exams');
//   const exams: Exam[] = await res.json();
// ─────────────────────────────────────────────────────────────────────────────

export const EXAMS: Exam[] = [
  {
    id: 'upsc',
    name: 'UPSC',
    shortName: 'UPSC',
    description: 'Civil Services Examination',
    emoji: '🏛️',
    iconBg: '#EEF4FF',
    docSections: [
      {
        sectionName: 'Identity & Personal',
        documents: [
          { name: 'Aadhaar Card',        required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'PAN Card',            required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'Passport Size Photo', required: true,  maxSizeKB: 50,  formats: ['JPG', 'PNG'] },
          { name: 'Voter ID',            required: false, maxSizeKB: 200, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'Academic Documents',
        documents: [
          { name: '10th Marksheet',          required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: '12th Marksheet',          required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'Graduation Certificate',  required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'Provisional Certificate', required: false, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'Category Certificates',
        documents: [
          { name: 'SC/ST Certificate',  required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'OBC Certificate',    required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'EWS Certificate',    required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'PWD Certificate',    required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
        ],
      },
    ],
  },
  {
    id: 'ssc',
    name: 'SSC',
    shortName: 'SSC',
    description: 'Staff Selection Commission',
    emoji: '📋',
    iconBg: '#F0FDF4',
    docSections: [
      {
        sectionName: 'Identity Proof',
        documents: [
          { name: 'Aadhaar Card',        required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'Passport Size Photo', required: true,  maxSizeKB: 50,  formats: ['JPG', 'PNG'] },
          { name: 'Signature Scan',      required: true,  maxSizeKB: 30,  formats: ['JPG', 'PNG'] },
        ],
      },
      {
        sectionName: 'Academic Documents',
        documents: [
          { name: '10th Certificate',  required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: '12th Certificate',  required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'Degree Certificate', required: false, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'Category Proof',
        documents: [
          { name: 'Caste Certificate', required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'EWS Certificate',   required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
        ],
      },
    ],
  },
  {
    id: 'railways',
    name: 'Railways',
    shortName: 'Railways',
    description: 'RRB / RRC Recruitment',
    emoji: '🚂',
    iconBg: '#FFFBEB',
    docSections: [
      {
        sectionName: 'Personal Documents',
        documents: [
          { name: 'Aadhaar Card',    required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'Passport Photo',  required: true,  maxSizeKB: 50,  formats: ['JPG', 'PNG'] },
          { name: 'Signature',       required: true,  maxSizeKB: 30,  formats: ['JPG', 'PNG'] },
          { name: 'Birth Certificate',required: true, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'Educational Proof',
        documents: [
          { name: '10th Marksheet',           required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'ITI Certificate',          required: false, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'Diploma Certificate',      required: false, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'Category Documents',
        documents: [
          { name: 'SC/ST/OBC Certificate', required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'Disability Certificate', required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
        ],
      },
    ],
  },
  {
    id: 'banking',
    name: 'Banking',
    shortName: 'Banking',
    description: 'IBPS / SBI / RBI',
    emoji: '🏦',
    iconBg: '#EFF6FF',
    docSections: [
      {
        sectionName: 'ID Proof',
        documents: [
          { name: 'Aadhaar Card',        required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'PAN Card',            required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'Passport Size Photo', required: true,  maxSizeKB: 50,  formats: ['JPG', 'PNG'] },
          { name: 'Signature',           required: true,  maxSizeKB: 30,  formats: ['JPG', 'PNG'] },
        ],
      },
      {
        sectionName: 'Educational Documents',
        documents: [
          { name: 'Graduation Degree',         required: true,  maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'Marksheets (All Semesters)', required: true, maxSizeKB: 1000, formats: ['PDF'] },
          { name: 'HSC / SSC Certificate',     required: false, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'Other Proofs',
        documents: [
          { name: 'Caste Certificate',     required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'Work Experience Letter', required: false, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
        ],
      },
    ],
  },
  {
    id: 'state-psc',
    name: 'State PSC',
    shortName: 'State PSC',
    description: 'State Public Service Commission',
    emoji: '🏢',
    iconBg: '#FDF4FF',
    docSections: [
      {
        sectionName: 'Identity Documents',
        documents: [
          { name: 'Aadhaar Card',         required: true,  maxSizeKB: 200, formats: ['PDF', 'JPG'] },
          { name: 'Domicile Certificate',  required: true,  maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'Passport Photo',        required: true,  maxSizeKB: 50,  formats: ['JPG', 'PNG'] },
        ],
      },
      {
        sectionName: 'Academic Proof',
        documents: [
          { name: '10th Marksheet',        required: true, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: '12th Marksheet',        required: true, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
          { name: 'Graduation Certificate', required: true, maxSizeKB: 500, formats: ['PDF', 'JPG'] },
        ],
      },
      {
        sectionName: 'State-Specific',
        documents: [
          { name: 'State Caste Certificate', required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'EWS Certificate',         required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
          { name: 'Residence Proof',         required: false, maxSizeKB: 300, formats: ['PDF', 'JPG'] },
        ],
      },
    ],
  },
];

export const POPULAR_EXAM_IDS = ['upsc', 'ssc'];