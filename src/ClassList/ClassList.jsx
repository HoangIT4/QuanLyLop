import { useState } from 'react';

function ClassList({ classes, setClasses, students, setStudents }) {
  const [newClass, setNewClass] = useState('');

  const addClass = () => {
    if (newClass.trim() !== '') {
      const newId = classes.length ? classes[classes.length - 1].id + 1 : 1;
      setClasses([...classes, { id: newId, name: newClass }]);
      setNewClass('');
    }
  };

  const deleteClass = (id) => {
    setClasses(classes.filter((c) => c.id !== id));
    setStudents(students.filter((s) => s.classId !== id));
  };

  return (
    <div>
      <h2>Danh sách lớp học</h2>
      <ul>
        {classes.map((c) => (
          <li key={c.id}>
            {c.name} <button onClick={() => deleteClass(c.id)}>Xóa lớp</button>
          </li>
        ))}
      </ul>
      <input
        value={newClass}
        onChange={(e) => setNewClass(e.target.value)}
        placeholder="Tên lớp mới"
      />
      <button onClick={addClass}>Thêm lớp</button>
    </div>
  );
}

export default ClassList;
