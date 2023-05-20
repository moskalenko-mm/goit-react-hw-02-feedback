import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statList}>
      <li className={css.item}>
        <span>Good: {good}</span>
      </li>
      <li className={css.item}>
        <span>Neutral: {neutral}</span>
      </li>
      <li className={css.item}>
        <span>Bad: {bad}</span>
      </li>
      <li className={css.item}>
        <span>Total: {total}</span>
      </li>
      <li className={css.item}>
        <span>Positive feedback: {positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
