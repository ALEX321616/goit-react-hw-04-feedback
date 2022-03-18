import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, dispatch }) => {
  return (
    <>
      <div className={s.containerBtn}>
        {options.map(el => (
          <button
            key={el}
            name={el}
            className={s.button}
            onClick={e => dispatch({ type: `${el}` })}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default FeedbackOptions;
