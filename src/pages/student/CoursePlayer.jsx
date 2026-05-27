import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const CoursePlayer = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="dashboard-header" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={() => navigate('/student/courses')}
          className="icon-btn" 
          style={{ backgroundColor: 'var(--bg-surface)', border: '2px solid var(--border-color)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>Lesson 3: Component State</h1>
          <p className="text-muted">Advanced React Patterns</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'var(--color-gray-800)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', position: 'relative', overflow: 'hidden', border: '4px solid var(--color-gray-200)' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Course Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
          <Card>
            <CardContent>
              <h2 style={{ marginBottom: '1rem' }}>Lesson Overview</h2>
              <p className="text-muted">In this lesson, we will cover how to manage complex component state using useReducer and context...</p>
            </CardContent>
          </Card>
        </div>

        <Card style={{ flex: 1, overflowY: 'auto' }}>
          <CardContent style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Course Content</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: i === 3 ? 'rgba(139, 92, 246, 0.1)' : 'transparent', border: i === 3 ? '2px solid var(--color-primary)' : '2px solid transparent', cursor: 'pointer' }}>
                  {i < 3 ? <CheckCircle size={20} className="text-success" /> : <PlayCircle size={20} className="text-muted" />}
                  <span style={{ fontWeight: i === 3 ? '700' : '500', color: i === 3 ? 'var(--color-primary)' : 'var(--text-main)' }}>Lesson {i}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoursePlayer;
