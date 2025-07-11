import { useState } from 'react';
import ClassList from '../ClassList/ClassList.jsx';
import StudentsList from '../StudentsList/StudentsList.jsx';
import StatisticPage from '../StatisticPage/StatisticPage.jsx';

function MainPage() {
  const [page, setPage] = useState('class');
  const [classes, setClasses] = useState([
    { id: 1, name: '66IT1' },
    { id: 2, name: '66IT2' },
    { id: 3, name: '66IT3' },
  ]);
  const [students, setStudents] = useState([
    { id: 1, name: 'Nam', age: 15, classId: 1, score: 8 },
    { id: 2, name: 'Lan', age: 16, classId: 1, score: 7 },
    { id: 3, name: 'Hải', age: 17, classId: 2, score: 9 },
    { id: 4, name: 'Tùng', age: 16, classId: 3, score: 6 },
    { id: 5, name: 'Hương', age: 15, classId: 2, score: 10 },
    { id: 6, name: 'Bình', age: 17, classId: 3, score: 8 },
    { id: 7, name: 'Thảo', age: 16, classId: 1, score: 7 },
    { id: 8, name: 'Linh', age: 15, classId: 2, score: 9 },
    { id: 9, name: 'Phúc', age: 16, classId: 3, score: 6 },
    { id: 10, name: 'Quân', age: 17, classId: 1, score: 8 },
  ]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Quản lý trường học</h1>
      <button style={{ margin: 20 }} onClick={() => setPage('class')}>
        Quản lý Lớp học
      </button>
      <button style={{ margin: 20 }} onClick={() => setPage('student')}>
        Quản lý Học sinh
      </button>
      <button style={{ margin: 20 }} onClick={() => setPage('stat')}>
        Báo cáo - Thống kê
      </button>

      <div style={{ marginTop: 30 }}>
        {page === 'class' && (
          <ClassList
            classes={classes}
            setClasses={setClasses}
            students={students}
            setStudents={setStudents}
          />
        )}
        {page === 'student' && (
          <StudentsList classes={classes} students={students} setStudents={setStudents} />
        )}
        {page === 'stat' && <StatisticPage classes={classes} students={students} />}
      </div>
    </div>
  );
}

export default MainPage;
