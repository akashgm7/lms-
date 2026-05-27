import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const ActionForm = ({ title = "Manage Item", description = "Fill out the details below.", backPath = -1 }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={() => navigate(backPath)}
          className="icon-btn" 
          style={{ backgroundColor: 'var(--bg-surface)', border: '2px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>{title}</h1>
          <p className="text-muted">{description}</p>
        </div>
      </div>

      <Card style={{ maxWidth: '800px' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem' }}>Name / Title</label>
            <input 
              type="text" 
              placeholder="Enter name or title..." 
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', outline: 'none' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem' }}>Description</label>
            <textarea 
              rows="4"
              placeholder="Enter a detailed description..." 
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-color)', outline: 'none', resize: 'vertical' }} 
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button className="btn-primary" onClick={() => navigate(backPath)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Save size={18} /> Save Changes
            </button>
            <button 
              onClick={() => navigate(backPath)}
              style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', fontWeight: '700', color: 'var(--text-main)', border: '2px solid var(--border-color)', backgroundColor: 'var(--color-gray-100)' }}
            >
              Cancel
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActionForm;
