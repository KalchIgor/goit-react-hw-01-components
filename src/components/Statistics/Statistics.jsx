import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({ title, stats }) => {
    return (<section className='{css.title}'>

        {title && <h2 className={css.title}> {title} </h2>}
 <ul className={css.statList}>
    {stats.map(stat => (
        <li className={css.item} key={stat.id} style={{ backgroundColor: createColor() }}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    ))}    
  </ul>

    </section>)
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };