import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Badge } from '../../components/ui/Table';

const mockQuizzes = [
  { id: 'Q-01', title: 'Python Basics Quiz', course: 'Introduction to Python', score: null, total: 100, status: 'Pending', due: 'Tomorrow' },
  { id: 'Q-02', title: 'React Hooks Assessment', course: 'Advanced React Patterns', score: 85, total: 100, status: 'Passed', due: '-' },
  { id: 'Q-03', title: 'UX Research Methods', course: 'UX Design Fundamentals', score: 92, total: 100, status: 'Passed', due: '-' },
  { id: 'Q-04', title: 'Data Structures Check', course: 'Introduction to Python', score: 55, total: 100, status: 'Failed', due: '-' },
];

const StudentQuizzes = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Quizzes & Assessments</h1>
        <p className="text-muted">Test your knowledge and track your scores.</p>
      </div>

      <Card>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.125rem', margin: 0 }}>My Assessments</h2>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Quiz Title</TableHeader>
              <TableHeader>Course</TableHeader>
              <TableHeader>Score</TableHeader>
              <TableHeader>Due Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader style={{ textAlign: 'right' }}>Action</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockQuizzes.map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HelpCircle size={16} className="text-muted" />
                    <span className="font-medium">{quiz.title}</span>
                  </div>
                </TableCell>
                <TableCell>{quiz.course}</TableCell>
                <TableCell>
                  <span style={{ fontWeight: '600' }}>
                    {quiz.score !== null ? `${quiz.score} / ${quiz.total}` : '-'}
                  </span>
                </TableCell>
                <TableCell>
                  <span style={{ color: quiz.status === 'Pending' ? 'var(--color-warning)' : 'var(--text-muted)' }}>
                    {quiz.due}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      quiz.status === 'Passed' ? 'success' : 
                      quiz.status === 'Failed' ? 'danger' : 'warning'
                    }
                  >
                    {quiz.status}
                  </Badge>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  {quiz.status === 'Pending' ? (
                    <button className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={() => navigate('/student/quiz')}>
                      Start Quiz
                    </button>
                  ) : (
                    <button className="icon-btn" style={{ display: 'inline-flex', width: '32px', height: '32px' }} onClick={() => navigate('/student/quiz')}>
                      <CheckCircle size={16} className={quiz.status === 'Passed' ? 'text-success' : 'text-danger'} />
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

export default StudentQuizzes;
