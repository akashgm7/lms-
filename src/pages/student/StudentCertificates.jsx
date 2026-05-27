import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Download, Share2 } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const mockCertificates = [
  { id: 'CERT-1029', course: 'Marketing Analytics', issueDate: '15 May, 2026', credentialId: 'LMS-9830-AB', grade: '95%' },
  { id: 'CERT-1030', course: 'UX Design Fundamentals', issueDate: '02 Apr, 2026', credentialId: 'LMS-4421-XY', grade: '92%' },
];

const StudentCertificates = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Certificates</h1>
        <p className="text-muted">View, download, and share your earned credentials.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1.5rem' }}>
        {mockCertificates.map((cert) => (
          <Card key={cert.id} style={{ border: '2px solid var(--color-gray-200)', background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--color-gray-50) 100%)' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Award size={32} />
              </div>
              
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Certificate of Completion</h4>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.5rem' }}>{cert.course}</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', marginBottom: '2rem', textAlign: 'left', backgroundColor: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Issue Date</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{cert.issueDate}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Credential ID</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{cert.credentialId}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Final Grade</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{cert.grade}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <button className="btn-primary" style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} onClick={() => navigate('/student/certificate')}>
                  <Download size={18} /> Download PDF
                </button>
                <button style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)' }} onClick={() => navigate('/student/certificate')}>
                  <Share2 size={18} /> Share
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentCertificates;
