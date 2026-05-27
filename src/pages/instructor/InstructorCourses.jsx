import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Play, MoreVertical } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import '../admin/Dashboard.css';

const myCourses = [
  { id: 1, title: 'Advanced React Patterns', status: 'Published', students: 145, rating: 4.8, progress: 100 },
  { id: 2, title: 'Machine Learning 101', status: 'Published', students: 320, rating: 4.9, progress: 100 },
  { id: 3, title: 'UI/UX Principles', status: 'Draft', students: 0, rating: 0, progress: 65 },
];

const InstructorCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>My Courses</h1>
          <p className="text-muted">Manage your course content and materials.</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }} onClick={() => navigate('/instructor/action')}>
          <Plus size={18} /> Create New Course
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {myCourses.map((course) => (
          <Card key={course.id}>
            <div style={{ height: '160px', backgroundColor: 'var(--color-gray-200)', position: 'relative' }}>
              {/* Placeholder for course cover image */}
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <span className={`badge ${course.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>
                  {course.status}
                </span>
              </div>
            </div>
            <CardContent>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{course.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                <span>{course.students} Students</span>
                <span>⭐ {course.rating.toFixed(1)}</span>
              </div>
              
              {course.status === 'Draft' && (
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>
                    <span>Completion</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: 'var(--color-gray-200)', borderRadius: '3px' }}>
                    <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: 'var(--color-warning)', borderRadius: '3px' }}></div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-primary" style={{ flex: 1, padding: '0.5rem', borderRadius: '0.375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} onClick={() => navigate('/instructor/action')}>
                  <Play size={16} /> Edit Content
                </button>
                <button className="icon-btn" style={{ border: '1px solid var(--border-color)', borderRadius: '0.375rem' }} onClick={() => navigate('/instructor/action')}>
                  <MoreVertical size={16} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InstructorCourses;
