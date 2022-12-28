import style from './LessonPlan.module.css';
import { lessonPlan } from '../../utils/lessonPlan';

const LessonPlan = () => {
  return (
    <section className={style.container}>
      <h2>Lesson Plan</h2>
      <div>
        <ul>
          {lessonPlan.map((lp) => (
            <li key={lp._id}>
              <div>
                <h2>{lp.number}</h2>
              </div>
              <div>
                <h3>{lp.title}</h3>
                <p>{lp.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={style.button}>
          <button className='buttonSecondary'>Ver todos</button>
        </div>
      </div>
    </section>
  );
};

export default LessonPlan;
