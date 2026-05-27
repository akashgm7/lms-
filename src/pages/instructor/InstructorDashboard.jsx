import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Users, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardContent, KpiCard } from '../../components/ui/Card';
import '../admin/Dashboard.css';

const InstructorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Instructor Dashboard</h1>
        <p className="text-muted">Welcome back, Professor! Here's your class overview.</p>
      </div>

      <div className="kpi-grid">
        <KpiCard title="Active Courses" value="4" icon={BookOpen} />
        <KpiCard title="Total Students" value="1,240" icon={Users} trend="up" trendValue="5%" />
        <KpiCard title="Assignments to Grade" value="32" icon={FileText} trend="down" trendValue="10%" />
        <KpiCard title="Unread Messages" value="15" icon={MessageSquare} />
      </div>

      <div className="dashboard-main-grid">
        <Card>
          <CardHeader title="My Courses" subtitle="Quick access to your active courses" />
          <CardContent>
            <div className="activity-list">
              {['Advanced React Patterns', 'Machine Learning 101', 'UI/UX Principles'].map((course, i) => (
                <div key={i} className="activity-item" style={{ alignItems: 'center' }}>
                  <div className="activity-avatar" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <BookOpen size={16} />
                  </div>
                  <div className="activity-details" style={{ flex: 1 }}>
                    <p className="font-medium" style={{ margin: 0 }}>{course}</p>
                    <span className="activity-time">{120 + i * 40} Students Enrolled</span>
                  </div>
                  <button className="view-all-btn" style={{ width: 'auto', padding: '0.25rem 0.75rem' }} onClick={() => navigate('/instructor/action', { state: { title: 'Manage Item', description: 'Update item details.' } })}>Manage</button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Recent Submissions" />
          <CardContent>
            <div className="activity-list">
              {['John Doe - Final Project', 'Alice Smith - Quiz 3', 'Bob Johnson - Assignment 2'].map((sub, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-details">
                    <p className="font-medium" style={{ margin: 0 }}>{sub}</p>
                    <span className="activity-time">{i + 1} hours ago</span>
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

export default InstructorDashboard;
