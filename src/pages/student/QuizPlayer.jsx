import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';

const QuizPlayer = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [
    "A) Context API",
    "B) Redux",
    "C) useReducer hook",
    "D) All of the above"
  ];

  return (
    <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ maxWidth: '600px', width: '100%', position: 'relative' }}>
        <button 
          onClick={() => navigate('/student/quizzes')}
          className="icon-btn" 
          style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--color-gray-100)' }}
        >
          <X size={20} />
        </button>

        <CardContent style={{ padding: '3rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>Question 1 of 10</span>
            <h2 style={{ fontSize: '1.5rem' }}>Which of the following can be used to manage global state in a React application?</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {options.map((opt, i) => (
              <button 
                key={i}
                onClick={() => setSelected(i)}
                style={{ 
                  padding: '1.25rem', 
                  borderRadius: 'var(--radius-xl)', 
                  border: selected === i ? '3px solid var(--color-primary)' : '3px solid var(--border-color)',
                  backgroundColor: selected === i ? 'rgba(139, 92, 246, 0.1)' : 'var(--bg-surface)',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: selected === i ? 'var(--color-primary)' : 'var(--text-main)',
                  transition: 'all 0.2s',
                  transform: selected === i ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary" disabled={selected === null} style={{ opacity: selected === null ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}>
              Next Question <Check size={20} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizPlayer;
