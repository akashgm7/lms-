import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, FileText, Search, Filter } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Badge } from '../../components/ui/Table';

const mockAssignments = [
  { id: 'SUB-001', student: 'John Doe', course: 'Advanced React Patterns', assignment: 'Final Project', date: '2 hours ago', status: 'Pending' },
  { id: 'SUB-002', student: 'Alice Smith', course: 'Machine Learning 101', assignment: 'Quiz 3', date: '4 hours ago', status: 'Pending' },
  { id: 'SUB-003', student: 'Bob Johnson', course: 'Advanced React Patterns', assignment: 'Assignment 2', date: '1 day ago', status: 'Graded' },
  { id: 'SUB-004', student: 'Emma Wilson', course: 'UI/UX Principles', assignment: 'Wireframe Submission', date: '2 days ago', status: 'Pending' },
];

const InstructorAssignments = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Assignments & Grading</h1>
        <p className="text-muted">Review student submissions and provide feedback.</p>
      </div>

      <Card>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="topnav-search" style={{ border: '1px solid var(--border-color)' }}>
            <Search size={18} className="text-muted" />
            <input 
              type="text" 
              placeholder="Search by student or assignment..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="icon-btn" style={{ border: '1px solid var(--border-color)' }} onClick={() => navigate('/instructor/action')}>
            <Filter size={18} />
          </button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Student</TableHeader>
              <TableHeader>Course</TableHeader>
              <TableHeader>Assignment</TableHeader>
              <TableHeader>Submitted</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader style={{ textAlign: 'right' }}>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockAssignments.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell><span className="font-medium">{sub.student}</span></TableCell>
                <TableCell>{sub.course}</TableCell>
                <TableCell>{sub.assignment}</TableCell>
                <TableCell><span className="text-muted">{sub.date}</span></TableCell>
                <TableCell>
                  <Badge variant={sub.status === 'Graded' ? 'success' : 'warning'}>
                    {sub.status}
                  </Badge>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  {sub.status === 'Pending' ? (
                    <button className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }} onClick={() => navigate('/instructor/grade')}>
                      <Check size={14} /> Grade
                    </button>
                  ) : (
                    <button className="icon-btn" style={{ display: 'inline-flex', width: '32px', height: '32px' }} onClick={() => navigate('/instructor/action')}>
                      <FileText size={16} />
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default InstructorAssignments;
