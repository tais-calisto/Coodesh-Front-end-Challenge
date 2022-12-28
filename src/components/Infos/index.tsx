import style from './Infos.module.css';

const Infos = () => {
  return (
    <section className={style.container}>
      <h2>Obtén más información</h2>
      <form className={style.form}>
        <input
          type='text'
          placeholder='Nombre completo'
          className={style.name}
        />
        <select className={style.country}>
          <option value='' disabled selected>
            PAÍS / CÓDIGO PAÍS
          </option>
        </select>
        <input
          type='email'
          placeholder='Correo eletrónico'
          className={style.email}
        />
        <input type='tel' placeholder='teléfono' className={style.phone} />
        <div className={style.condicions}>
          <input type='checkbox' name='' id='condicions' />
          <label htmlFor='condicions'>
            Acepto las <a href='#'>condiciones de uso</a> y{' '}
            <a href=''>protección de datos</a>.
          </label>
        </div>
        <div className={style.comunications}>
          <input type='checkbox' name='' id='comunication' />
          <label htmlFor='comunication'>
            Me gustaría recibir información sobre nuevos cursos, ofertas y
            promociones.
          </label>
        </div>
        <div className={style.btn}>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Infos;
