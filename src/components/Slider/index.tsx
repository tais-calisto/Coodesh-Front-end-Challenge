import { useEffect, useState } from 'react';
import style from './Slider.module.css';

interface Data {
  _id: string;
  description: string;
  image: string;
  order: number;
  title: string;
}

const Slider = () => {
  const [data, setData] = useState<Array<Data> | []>([]);
  const [isFeatured, setIsFeatured] = useState<Data>({
    _id: '',
    description: '',
    image: '',
    order: 1,
    title: '',
  });

  useEffect(() => {
    fetch('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
      method: 'GET',
      headers: {
        'x-mejor-key': 'unycos',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.spotlights);
        setIsFeatured(data.spotlights[0]);
      });
  }, []);

  const handleClick = (slide: Data) => {
    setIsFeatured(slide);
  };

  return (
    <section className={style.container}>
      <div className={style.featured}>
        <img src={isFeatured.image} alt={isFeatured.title}></img>
        <div>
          <h2>{isFeatured.title}</h2>
          <p>{isFeatured.description}</p>
          <ul>
            {data.map((d) =>
              d._id !== isFeatured._id ? (
                <li
                  key={d._id}
                  className={style.options}
                  onClick={() => handleClick(d)}
                >
                  <img src={d.image} alt={d.title}></img>
                  <div>
                    <p>{d.title}</p>
                  </div>
                </li>
              ) : (
                <></>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
