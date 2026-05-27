import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Download, Share2, Award } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const CertificateViewer = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ maxWidth: '800px', width: '100%', position: 'relative' }}>
        <button 
          onClick={() => navigate('/student/certificates')}
          className="icon-btn" 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10, backgroundColor: 'var(--color-gray-100)' }}
        >
          <X size={20} />
        </button>

        <CardContent style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
          
          {/* Certificate Design */}
          <div style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--color-gray-100) 100%)', borderBottom: '2px solid var(--border-color)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <Award size={40} />
            </div>
            
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Certificate of Completion</h4>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '2rem' }}>Marketing Analytics</h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>This certifies that</p>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>Student Name</h2>
            
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>Has successfully completed all requirements and assessments for the Marketing Analytics course.</p>
          </div>

          {/* Action Bar */}
          <div style={{ padding: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', backgroundColor: 'var(--bg-surface)' }}>
            <button className="btn-primary" onClick={() => navigate('/student/certificates')} style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={20} /> Download PDF
            </button>
            <button onClick={() => navigate('/student/certificates')} style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-full)', fontWeight: '700', color: 'var(--text-main)', border: '3px solid var(--border-color)', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Share2 size={20} /> Share on LinkedIn
            </button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateViewer;
