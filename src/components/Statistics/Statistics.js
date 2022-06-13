import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from './randomColor';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{label} </span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
