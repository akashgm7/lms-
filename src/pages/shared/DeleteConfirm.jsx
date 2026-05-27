import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const DeleteConfirm = ({ itemType = "Item", backPath = -1 }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ maxWidth: '400px', width: '100%', textAlign: 'center', borderColor: 'var(--color-danger)' }}>
        <CardContent style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={40} />
          </div>
          
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Delete {itemType}?</h2>
            <p className="text-muted">This action cannot be undone. All data associated with this {itemType.toLowerCase()} will be permanently removed.</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', width: '100%', marginTop: '1rem' }}>
            <button 
              onClick={() => navigate(backPath)}
              style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-full)', fontWeight: '700', color: 'var(--text-main)', border: '2px solid var(--border-color)', backgroundColor: 'var(--color-gray-100)' }}
            >
              Cancel
            </button>
            <button 
              onClick={() => navigate(backPath)}
              className="btn-primary" 
              style={{ flex: 1, backgroundColor: 'var(--color-danger)', boxShadow: '0 4px 0 #B91C1C' }}
            >
              Delete
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeleteConfirm;
