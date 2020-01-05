import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import { selectProgressAction } from "../redux/actions/selectProgressAction";

const customStyles = {
  menu: provided => ({
    ...provided,
    margin: 0
  }),
  menuList: provided => ({
    ...provided,
    padding: 0
  })
};

export class BarDropDown extends React.Component {
  static propTypes = {
    bars: PropTypes.array.isRequired,
    selectProgressAction: PropTypes.func.isRequired
  };

  handleChangeProgress = ({ value }) => {
    this.props.selectProgressAction(value);
  };

  generateProgressBarDropdown = () => {
    const { bars } = this.props;
    return bars.map((bar, idx) => ({
      value: idx + 1,
      label: `Progress ${idx + 1}`
    }));
  };

  render() {
    const options = this.generateProgressBarDropdown();
    return (
      <Select
        className="progress-dropdown"
        options={options}
        isSearchable={false}
        defaultValue={options[0]}
        styles={customStyles}
        onChange={this.handleChangeProgress}
      />
    );
  }
}

const mapDispatchToProps = {
  selectProgressAction
};

const mapStateToProps = state => {
  return {
    bars: state.barsInfoReducer.data.bars
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarDropDown);
