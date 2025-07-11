function StatisticPage({ classes, students }) {
  const top3 = [...students].sort((a, b) => b.score - a.score).slice(0, 3);
  const sortedAsc = [...students].sort((a, b) => a.score - b.score);
  const sortedDesc = [...students].sort((a, b) => b.score - a.score);
  const sortedClasses = [...classes].sort((a, b) => {
    const countA = students.filter((s) => s.classId === a.id).length;
    const countB = students.filter((s) => s.classId === b.id).length;
    return countB - countA;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: 40 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '40px',
        }}
      >
        <h3>Top 3 học sinh điểm cao nhất:</h3>
        <ul>
          {top3.map((s) => (
            <li key={s.id}>
              {s.name} - {s.score} điểm
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '40px',
        }}
      >
        <h3>Sắp xếp điểm giảm dần:</h3>
        <ul>
          {sortedDesc.map((s) => (
            <li key={s.id}>
              {s.name} - {s.score}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '40px',
        }}
      >
        <h3>Sắp xếp điểm tăng dần:</h3>
        <ul>
          {sortedAsc.map((s) => (
            <li key={s.id}>
              {s.name} - {s.score}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '40px',
        }}
      >
        <h3>Sắp xếp lớp theo số lượng học sinh:</h3>
        <ul>
          {sortedClasses.map((c) => {
            const count = students.filter((s) => s.classId === c.id).length;
            return (
              <li key={c.id}>
                {c.name} - {count} học sinh
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default StatisticPage;
