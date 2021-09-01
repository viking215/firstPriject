import s from './News.module.css'
import React, { useState, useEffect } from 'react';
const News = (props) => {

        const [count, setCount] = useState(0);


        return (
            <div>
                <p>Вы нажали {count} раз</p>
                <button onClick={() => setCount(count + 1)}>
                    Нажми на меня
                </button>
            </div>
        );
}

export default News;