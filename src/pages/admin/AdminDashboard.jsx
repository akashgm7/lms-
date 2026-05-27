import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, FileText, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, KpiCard } from '../../components/ui/Card';
import { adminKpis, recentActivities, courseData } from '../../data/mockData';
import './Dashboard.css';

const iconMap = {
  Users,
  BookOpen,
  FileText,
  Activity
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Overview</h1>
        <p className="text-muted">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="kpi-grid">
        {adminKpis.map((kpi, index) => {
          const Icon = iconMap[kpi.icon];
          return (
            <KpiCard
              key={index}
              title={kpi.title}
              value={kpi.value}
              icon={Icon}
              trend={kpi.trend}
              trendValue={kpi.trendValue}
            />
          );
        })}
      </div>

      <div className="dashboard-main-grid">
        <Card className="chart-card">
          <CardHeader title="Enrollment Overview" subtitle="Monthly course enrollments" />
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={courseData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="enrollments" stroke="var(--color-primary)" strokeWidth={3} dot={{r: 4, fill: 'var(--color-primary)'}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="activity-card">
          <CardHeader title="Recent Activity" />
          <CardContent>
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-avatar">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="activity-details">
                    <p>
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-muted">{activity.action}</span>{' '}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn mt-4" onClick={() => navigate('/admin/action', { state: { title: 'Activity Logs', description: 'View and manage system activities.' } })}>View All Activity</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
