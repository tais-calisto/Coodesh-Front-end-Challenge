import { courses } from '../../utils/courses';
import style from './Courses.module.css';

const Courses = () => {
  return (
    <section className={style.container}>
      <h2>Más cursos</h2>
      <ul className={style.courses}>
        {courses.map((c) => (
          <li key={c._id}>
            <section className={style.backdrop}>
              <h4>{c.teacher}</h4>
              <p>
                enseña <strong>{c.teaches}</strong>
              </p>
            </section>
          </li>
        ))}
      </ul>
      <></>
    </section>
  );
};

export default Courses;
