import style from './Comments.module.css';
import iconThumbUp from '../../assets/thumbup.svg';
import { comments } from '../../utils/comments';
import iconThumbUpGray from '../../assets/thumbUpGray.svg';
import iconCheckmark from '../../assets/checkmark.svg';

const Comments = () => {
  return (
    <section className={style.container}>
      <h2>Comentarios de los estudiantes</h2>
      <div className={style.total}>
        <img src={iconThumbUp}></img>
        <p>
          <strong>98.7% de valoraciones positivas </strong> / total de 726
          valoraciones
        </p>
      </div>
      <ul>
        {comments.map((c) => (
          <>
            <li key={c._id} className={style.commentContainer}>
              {c.profile ? (
                <img src={c.profile} alt=''></img>
              ) : (
                <div className={style.profile}>
                  <p className={style.profile}>{c.initials}</p>
                </div>
              )}
              <div className={style.comment}>
                <div className={style.commentAuthor}>
                  <h3>{c.name}</h3>
                  <div className={style.commentTime}>
                    <img src={iconThumbUpGray}></img>
                    <p> hace {c.time}</p>
                  </div>
                </div>
                <div>
                  <p className={style.commentContent}>{c.comment}</p>
                  <ul className={style.responseContainer}>
                    {c.response ? (
                      <li>
                        <p className={style.response}>{c.response}</p>
                        <div className={style.responseAuthorContainer}>
                          <img src={iconCheckmark}></img>
                          {c.responseByTeam ? (
                            <p className={style.responseAuthor}>
                              <strong className={style.team}>
                                Equipo Unycos
                              </strong>{' '}
                              - hace {c.responseTime}
                            </p>
                          ) : (
                            <p className={style.responseAuthor}>
                              <strong className={style.author}>
                                {c.responseBy}
                              </strong>{' '}
                              <strong className={style.position}>
                                • {c.position}
                              </strong>
                              - {c.responseTime}
                            </p>
                          )}
                        </div>
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
              </div>
            </li>
            <div className={style.mobile}>
              <p>{c.comment}</p>
              <h3>{c.name}</h3>
            </div>
          </>
        ))}
      </ul>
      <div className={style.btn}>
        <button className='buttonSecondaryWhite'>Ver más</button>
      </div>
    </section>
  );
};

export default Comments;
