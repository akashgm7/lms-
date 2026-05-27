import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Edit, Trash2, Shield, Mail } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Badge } from '../../components/ui/Table';

const mockUsers = [
  { id: 'U001', name: 'Sarah Jenkins', email: 'sarah.j@lumiere.com', role: 'Instructor', status: 'Active', joined: '12 Jan, 2026' },
  { id: 'U002', name: 'Prof. Davis', email: 'a.davis@lumiere.com', role: 'Instructor', status: 'Active', joined: '05 Feb, 2026' },
  { id: 'U003', name: 'Emma Wilson', email: 'emma.w@student.lumiere.com', role: 'Student', status: 'Active', joined: '10 Mar, 2026' },
  { id: 'U004', name: 'Michael Brown', email: 'michael.b@student.lumiere.com', role: 'Student', status: 'Inactive', joined: '15 Mar, 2026' },
  { id: 'U005', name: 'System Admin', email: 'admin@lumiere.com', role: 'Admin', status: 'Active', joined: '01 Jan, 2026' },
];

const Users = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>User Management</h1>
          <p className="text-muted">Manage instructors, students, and system admins.</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', gap: '0.5rem', alignItems: 'center' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage User', description: 'Update user profile, roles, and permissions.' } })}>
          <Plus size={18} /> Add User
        </button>
      </div>

      <Card>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="topnav-search" style={{ border: '1px solid var(--border-color)' }}>
            <Search size={18} className="text-muted" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="icon-btn" style={{ border: '1px solid var(--border-color)' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage User', description: 'Update user profile, roles, and permissions.' } })}>
            <Filter size={18} />
          </button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>User</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Joined Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader style={{ textAlign: 'right' }}>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="activity-avatar">{user.name.charAt(0)}</div>
                    <div>
                      <p className="font-medium" style={{ margin: 0 }}>{user.name}</p>
                      <span className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Mail size={12}/> {user.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {user.role === 'Admin' && <Shield size={14} className="text-primary" />}
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'Active' ? 'success' : 'default'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button className="icon-btn" style={{ width: '32px', height: '32px' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage User', description: 'Update user profile, roles, and permissions.' } })}><Edit size={16} /></button>
                    <button className="icon-btn" style={{ width: '32px', height: '32px', color: 'var(--color-danger)' }} onClick={() => navigate('/admin/delete')}><Trash2 size={16} /></button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Users;
