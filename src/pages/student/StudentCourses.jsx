import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import '../admin/Dashboard.css';

const enrolledCourses = [
  { id: 1, title: 'UX Design Fundamentals', instructor: 'Emma Wilson', progress: 75, status: 'In Progress', lessons: 12, completed: 9, thumbnail: 'var(--color-secondary)' },
  { id: 2, title: 'Introduction to Python', instructor: 'Prof. Davis', progress: 30, status: 'In Progress', lessons: 20, completed: 6, thumbnail: 'var(--color-primary)' },
  { id: 3, title: 'Marketing Analytics', instructor: 'Michael Brown', progress: 100, status: 'Completed', lessons: 8, completed: 8, thumbnail: 'var(--color-success)' },
];

const StudentCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Learning</h1>
        <p className="text-muted">Pick up where you left off and discover new skills.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <div style={{ height: '140px', backgroundColor: course.thumbnail, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <BookOpen size={48} opacity={0.5} />
            </div>
            <CardContent>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>{course.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>By {course.instructor}</p>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{course.completed} / {course.lessons} Lessons</span>
                  <span style={{ fontWeight: '600' }}>{course.progress}%</span>
                </div>
                <div style={{ height: '6px', backgroundColor: 'var(--color-gray-200)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: course.progress === 100 ? 'var(--color-success)' : 'var(--color-primary)', borderRadius: '3px' }}></div>
                </div>
              </div>

              <button className={course.progress === 100 ? 'btn-primary' : 'btn-primary'} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: course.progress === 100 ? 'var(--color-success)' : 'var(--color-primary)' }} onClick={() => navigate('/student/player')}>
                {course.progress === 100 ? <CheckCircle size={16} /> : <Play size={16} />}
                {course.progress === 100 ? 'Review Course' : 'Resume Learning'}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
