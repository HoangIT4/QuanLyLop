import { useState } from 'react';

function StudentsList({ classes, students, setStudents }) {
  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    classId: '',
    score: '',
  });

  const addStudent = () => {
    const { name, age, classId, score } = newStudent;
    if (name && age && classId && score) {
      const newId = students.length ? students[students.length - 1].id + 1 : 1;
      setStudents([...students, { id: newId, name, age: +age, classId: +classId, score: +score }]);
      setNewStudent({ name: '', age: '', classId: '', score: '' });
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div>
      <h2>Danh sách học sinh</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          placeholder="Tên"
        />
        <input
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
          placeholder="Tuổi"
          type="number"
        />
        <select
          value={newStudent.classId}
          onChange={(e) => setNewStudent({ ...newStudent, classId: e.target.value })}
        >
          <option value="">Chọn lớp</option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          value={newStudent.score}
          onChange={(e) => setNewStudent({ ...newStudent, score: e.target.value })}
          placeholder="Điểm"
          type="number"
        />
        <button onClick={addStudent}>Thêm học sinh</button>
      </div>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - Tuổi: {s.age} - Lớp:{' '}
            {classes.find((c) => c.id === s.classId)?.name || 'Đã xóa'} - Điểm: {s.score}
            <button
              style={{ marginLeft: '20px', padding: '5px 10px' }}
              onClick={() => deleteStudent(s.id)}
            >
              Xóa học sinh
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;
