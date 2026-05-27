import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Clock, Target } from 'lucide-react';
import { Card, CardHeader, CardContent, KpiCard } from '../../components/ui/Card';
import '../admin/Dashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Learning</h1>
        <p className="text-muted">Welcome back! Pick up right where you left off.</p>
      </div>

      <div className="kpi-grid">
        <KpiCard title="Courses in Progress" value="3" icon={BookOpen} />
        <KpiCard title="Completed Courses" value="12" icon={Award} />
        <KpiCard title="Learning Hours" value="48h" icon={Clock} />
        <KpiCard title="Current Streak" value="5 Days" icon={Target} />
      </div>

      <div className="dashboard-main-grid">
        <Card>
          <CardHeader title="Continue Learning" subtitle="Your active courses" />
          <CardContent>
            <div className="activity-list">
              {[
                { name: 'UX Design Fundamentals', progress: 75, next: 'Module 4: Wireframing' },
                { name: 'Introduction to Python', progress: 30, next: 'Variables & Data Types' },
                { name: 'Marketing Analytics', progress: 90, next: 'Final Assessment' }
              ].map((course, i) => (
                <div key={i} className="activity-item" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <p className="font-medium" style={{ margin: 0 }}>{course.name}</p>
                    <span className="text-muted" style={{ fontSize: '0.875rem' }}>{course.progress}%</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--color-gray-200)', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                    <div style={{ height: '100%', width: `${course.progress}%`, backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}></div>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>Up next: {course.next}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Upcoming Deadlines" />
          <CardContent>
            <div className="activity-list">
              {['Python Quiz 2 - Tomorrow', 'UX Case Study - Friday', 'Marketing Peer Review - Sunday'].map((deadline, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-details">
                    <p className="font-medium" style={{ margin: 0 }}>{deadline.split(' - ')[0]}</p>
                    <span className="activity-time" style={{ color: 'var(--color-warning)' }}>Due {deadline.split(' - ')[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
