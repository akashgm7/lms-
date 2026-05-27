import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const DiscussionThread = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={() => navigate('/instructor/discussions')}
          className="icon-btn" 
          style={{ backgroundColor: 'var(--bg-surface)', border: '2px solid var(--border-color)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>Struggling with Custom Hooks</h1>
          <p className="text-muted">Advanced React Patterns</p>
        </div>
      </div>

      <Card style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', height: '600px' }}>
        <CardContent style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-gray-200)', flexShrink: 0 }} />
            <div style={{ backgroundColor: 'var(--color-gray-100)', padding: '1rem', borderRadius: 'var(--radius-xl)', borderTopLeftRadius: '4px' }}>
              <p style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Michael Brown <span className="text-muted" style={{ fontWeight: '400', fontSize: '0.75rem' }}>2 hours ago</span></p>
              <p>I am really confused about when to use useMemo inside a custom hook versus just returning the value directly. Can someone explain?</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>You</div>
            <div style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: 'var(--color-primary-shadow)', padding: '1rem', borderRadius: 'var(--radius-xl)', borderTopRightRadius: '4px' }}>
              <p style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Professor <span style={{ opacity: 0.7, fontWeight: '400', fontSize: '0.75rem' }}>Just now</span></p>
              <p>Great question! useMemo is useful when the computation is expensive, or if the returned value is used in a dependency array elsewhere.</p>
            </div>
          </div>

        </CardContent>
        <div style={{ padding: '1rem 2rem', borderTop: '2px solid var(--border-color)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input type="text" placeholder="Type your reply..." style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-full)', border: '2px solid var(--border-color)', outline: 'none' }} />
          <button onClick={() => navigate('/instructor/discussions')} className="btn-primary" style={{ padding: '1rem', width: '56px', height: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
            <Send size={20} />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default DiscussionThread;
