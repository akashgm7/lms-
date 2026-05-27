import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const GradingInterface = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="dashboard-header" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={() => navigate('/instructor/assignments')}
          className="icon-btn" 
          style={{ backgroundColor: 'var(--bg-surface)', border: '2px solid var(--border-color)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>Grade Submission</h1>
          <p className="text-muted">Final Project - John Doe</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        <Card style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          <CardContent style={{ padding: '0', flex: 1, backgroundColor: 'var(--color-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="text-muted">Document Viewer Placeholder</p>
          </CardContent>
        </Card>

        <Card style={{ flex: 1 }}>
          <CardContent style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Scoring</h3>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input type="number" placeholder="0" style={{ width: '80px', padding: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)' }} />
                <span className="text-muted" style={{ fontSize: '1.25rem' }}>/ 100</span>
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: '1rem' }}>Feedback</h3>
              <textarea 
                placeholder="Leave constructive feedback here..." 
                style={{ width: '100%', height: 'calc(100% - 2.5rem)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', resize: 'none' }}
              />
            </div>

            <button onClick={() => navigate('/instructor/assignments')} className="btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
              <CheckCircle size={20} /> Submit Grade
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GradingInterface;
