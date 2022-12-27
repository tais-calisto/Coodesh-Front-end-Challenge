import { useEffect, useState } from 'react';
import style from './Slides.module.css';

interface Data {
  _id: string;
  description: string;
  image: string;
  order: number;
  title: string;
}

const Slides = () => {
  const [data, setData] = useState<Array<Data> | []>([]);

  useEffect(() => {
    fetch('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
      method: 'GET',
      headers: {
        'x-mejor-key': 'unycos',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.spotlights));
  }, []);

  console.log(data);

  return <section className={style.container}>{data.map((d) => '')}</section>;
};

export default Slides;
