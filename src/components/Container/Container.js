import { useReducer } from 'react';
import { sum, round } from 'lodash';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

const ButtonList = { good: 0, neutral: 0, bad: 0 };
const ButtonListKeys = Object.keys(ButtonList);

function reducer(state, action) {
  return {
    ...state,
    [action.type]: state[action.type] + 1,
  };
}

const Container = () => {
  const [state, dispatch] = useReducer(reducer, ButtonList);
  const totalFeedback = sum(Object.values(state));

  const { good, neutral, bad } = state;
  const countPositiveFeedbackPercentage = round((good / totalFeedback) * 100);

  return (
    <>
      <Section
        title={'Please leave feedback'}
        children={
          <FeedbackOptions dispatch={dispatch} options={ButtonListKeys} />
        }
      ></Section>

      <Section
        title={'Statistics'}
        children={
          totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <p>"There is no feedback"</p>
          )
        }
      ></Section>
    </>
  );
};

export default Container;
