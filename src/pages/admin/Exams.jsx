import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, CheckCircle, XCircle, FileText } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Badge } from '../../components/ui/Table';

const mockExams = [
  { id: 'EX-001', student: 'Emma Wilson', course: 'UX Design Fundamentals', score: 92, status: 'Passed', date: '26 May, 2026' },
  { id: 'EX-002', student: 'Michael Brown', course: 'Marketing Analytics', score: 65, status: 'Needs Review', date: '25 May, 2026' },
  { id: 'EX-003', student: 'Sarah Jenkins', course: 'Advanced React Patterns', score: 45, status: 'Failed', date: '24 May, 2026' },
  { id: 'EX-004', student: 'John Doe', course: 'Machine Learning 101', score: null, status: 'Pending', date: '27 May, 2026' },
  { id: 'EX-005', student: 'Alice Smith', course: 'Introduction to Python', score: 88, status: 'Passed', date: '22 May, 2026' },
];

const Exams = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Exams & Results</h1>
          <p className="text-muted">Review student submissions and manage certifications.</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', gap: '0.5rem', alignItems: 'center' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage Exam', description: 'Configure exam settings and questions.' } })}>
          <Plus size={18} /> Create Exam
        </button>
      </div>

      <Card>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="topnav-search" style={{ border: '1px solid var(--border-color)' }}>
            <Search size={18} className="text-muted" />
            <input 
              type="text" 
              placeholder="Search by student or course..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="icon-btn" style={{ border: '1px solid var(--border-color)' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage Exam', description: 'Configure exam settings and questions.' } })}>
            <Filter size={18} />
          </button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Exam ID</TableHeader>
              <TableHeader>Student</TableHeader>
              <TableHeader>Course</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Score</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader style={{ textAlign: 'right' }}>Review</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockExams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell><span className="text-muted">{exam.id}</span></TableCell>
                <TableCell><span className="font-medium">{exam.student}</span></TableCell>
                <TableCell>{exam.course}</TableCell>
                <TableCell>{exam.date}</TableCell>
                <TableCell>
                  <span style={{ fontWeight: '600' }}>
                    {exam.score !== null ? `${exam.score}%` : '-'}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      exam.status === 'Passed' ? 'success' : 
                      exam.status === 'Failed' ? 'danger' : 
                      exam.status === 'Needs Review' ? 'warning' : 'default'
                    }
                  >
                    {exam.status}
                  </Badge>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    {exam.status === 'Pending' || exam.status === 'Needs Review' ? (
                      <button className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', backgroundColor: 'var(--color-primary)' }} onClick={() => navigate('/instructor/grade')}>
                        Grade
                      </button>
                    ) : (
                      <button className="icon-btn" style={{ width: '32px', height: '32px' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage Exam', description: 'Configure exam settings and questions.' } })}>
                        <FileText size={16} />
                      </button>
                    )}
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

export default Exams;
