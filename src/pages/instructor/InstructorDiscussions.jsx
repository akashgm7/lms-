import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, MoreVertical, CornerDownRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';

const mockDiscussions = [
  { 
    id: 1, 
    course: 'Advanced React Patterns', 
    topic: 'Struggling with Custom Hooks', 
    student: 'Michael Brown', 
    date: '2 hours ago',
    replies: 4,
    status: 'Unread'
  },
  { 
    id: 2, 
    course: 'Machine Learning 101', 
    topic: 'Difference between Ridge and Lasso?', 
    student: 'Alice Smith', 
    date: '1 day ago',
    replies: 12,
    status: 'Read'
  },
  { 
    id: 3, 
    course: 'Advanced React Patterns', 
    topic: 'How to test Context API providers?', 
    student: 'Emma Wilson', 
    date: '2 days ago',
    replies: 2,
    status: 'Read'
  }
];

const InstructorDiscussions = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Course Discussions</h1>
        <p className="text-muted">Engage with your students and answer their questions.</p>
      </div>

      <Card>
        <CardHeader title="Recent Questions" subtitle="Prioritize unread and unanswered questions." />
        <CardContent>
          <div className="activity-list">
            {mockDiscussions.map((disc) => (
              <div key={disc.id} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: disc.status === 'Unread' ? 'var(--color-primary)' : 'var(--color-gray-200)', color: disc.status === 'Unread' ? 'white' : 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageSquare size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0, color: 'var(--text-main)' }}>{disc.topic}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{disc.date}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{disc.student}</span> in <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{disc.course}</span>
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)' }}>
                      <CornerDownRight size={14} /> {disc.replies} Replies
                    </span>
                    <button style={{ color: 'var(--color-primary)', fontWeight: '500', fontSize: '0.875rem' }} onClick={() => navigate('/instructor/thread')}>Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstructorDiscussions;
