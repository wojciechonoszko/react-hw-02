import React, { Component } from 'react';
import { Statistic, } from './StatisticStyles.js';
import PropTypes from 'prop-types';


class Statistics extends Component {
    render() {
        return(
            // <div>
            //     Test Message
            // </div>
        <>
        <Statistic 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.state.total} 
        positivePercentage={this.state.percentage}
        >
        </Statistic>;
        </>
         );
    }
}

export {Statistics};
