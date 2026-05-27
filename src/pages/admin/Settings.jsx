import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, User, Bell, Shield, Globe } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Account Settings</h1>
        <p className="text-muted">Manage your preferences and platform configurations.</p>
      </div>

      <div className="dashboard-main-grid" style={{ gridTemplateColumns: '250px 1fr' }}>
        <Card>
          <div style={{ padding: '1rem 0' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '0.75rem 1.5rem', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', borderRight: '3px solid var(--color-primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <User size={18} /> General
              </li>
              <li style={{ padding: '0.75rem 1.5rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <Bell size={18} /> Notifications
              </li>
              <li style={{ padding: '0.75rem 1.5rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <Shield size={18} /> Security
              </li>
              <li style={{ padding: '0.75rem 1.5rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <Globe size={18} /> Localization
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardHeader title="General Settings" subtitle="Update your platform basic information." />
          <CardContent>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Platform Name</label>
                  <input type="text" defaultValue="Lumiere LMS" style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Support Email</label>
                  <input type="email" defaultValue="support@lumiere.com" style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Platform Description</label>
                <textarea rows="4" defaultValue="Premium modern learning management system for top startups." style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', resize: 'vertical' }} />
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.5rem 0' }} />
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button type="button" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }} onClick={() => navigate('/admin/action', { state: { title: 'System Settings', description: 'Configure global platform preferences.' } })}>Cancel</button>
                <button type="button" className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => navigate('/admin/action', { state: { title: 'System Settings', description: 'Configure global platform preferences.' } })}>
                  <Save size={16} /> Save Changes
                </button>
              </div>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
