import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

export class ProgressBarCmp extends React.Component {
  static propTypes = {
    currentProgress: PropTypes.object.isRequired,
    bars: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
  };

  render() {
    const { bars, limit, currentProgress } = this.props;
    return bars.map((bar, idx) => {
      const currentProgressBarVal = currentProgress[`${idx + 1}`];
      const barValue =
        currentProgressBarVal !== undefined ? currentProgressBarVal : bar;
      return (
        <div key={idx} className="progress-wrapper">
          <ProgressBar
            className="progress-item"
            now={barValue}
            max={limit}
            variant={barValue >= limit ? "danger" : "info"}
            label={`${barValue}%`}
          />
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    currentProgress: state.updateProgressBarReducer.currentProgress
  };
};

export default connect(mapStateToProps, null)(ProgressBarCmp);
