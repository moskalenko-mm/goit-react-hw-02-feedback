import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statList}>
      <li className={css.item}>
        <span className={css.label}>Good: {good}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Neutral: {neutral}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Bad: {bad}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Total: {total()}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>
          Positive feedback: {positivePercentage()}%
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
