import style from './LessonPlan.module.css';
import { lessonPlan } from '../../utils/lessonPlan';
import iconChevronRight from '../../assets/chevron-right.svg';
import Star from '../Star';

const LessonPlan = () => {
  return (
    <section className={style.container}>
      <h2 className={style.mobile}>Destaques del curso</h2>
      <h2 className={style.title}>Lesson Plan</h2>
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
                <div className={style.mobileIcon}>
                  <img src={iconChevronRight}></img>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={style.button}>
          <button className='buttonSecondary'>Ver todos</button>
        </div>
      </div>
      <div className={style.mobileStar}>
        <Star />
      </div>
    </section>
  );
};

export default LessonPlan;
