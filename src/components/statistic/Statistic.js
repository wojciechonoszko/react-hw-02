import React from 'ract';
import PropTypes from 'prop-types';
import {StatisticElem} from './StatisticStyles';

const Statistic = ({options, feedback, total, positivePercentage}) => {
    return (
        <>
            {options.map(option => (
                <StatisticElem key={option}>
                    {option}: {feedback[option]}
                </StatisticElem>
            ))}
        </>
    );
}

Statistic.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    feedback: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistic;