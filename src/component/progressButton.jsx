import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProgressBarAction } from "../redux/actions/updateProgressBarAction";

export class ProgressButton extends React.Component {
  static propTypes = {
    selectedProgress: PropTypes.number.isRequired,
    bars: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired,
    updateProgressBarAction: PropTypes.func.isRequired
  };

  handleUpdateProgressBar = value => {
    const { bars, selectedProgress } = this.props;
    const selectedBarValue = bars[selectedProgress - 1];
    this.props.updateProgressBarAction(
      value,
      selectedProgress,
      selectedBarValue
    );
  };

  render() {
    const { buttons } = this.props;
    return (
      <div>
        {buttons.map((button, idx) => (
          <button
            className="progress-button"
            key={idx}
            onClick={() => this.handleUpdateProgressBar(button)}
          >
            {button}
          </button>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateProgressBarAction
};

const mapStateToProps = state => {
  return {
    bars: state.barsInfoReducer.data.bars,
    selectedProgress: state.selectBarReducer.selectedProgress
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressButton);
