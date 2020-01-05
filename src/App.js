import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBarAction } from "./redux/actions/getBarAction";
import BarDropDown from "./component/barDropdown";
import ProgressBarCmp from "./component/progressBar";
import ProgressButton from "./component/progressButton";
import loadingIcon from "./assets/images/loading.svg";

export class App extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      bars: PropTypes.array.isRequired,
      buttons: PropTypes.array.isRequired,
      limit: PropTypes.number.isRequired
    }),
    fetchState: PropTypes.string.isRequired,
    getBarAction: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBarAction();
  }

  render() {
    const { data, fetchState } = this.props;
    return (
      <div className="container">
        {fetchState === "loading" && (
          <div className="progress-loading">
            <img src={loadingIcon} alt="loading" />
          </div>
        )}
        {fetchState === "success" && (
          <div>
            <h1>Limited value: {data.limit}</h1>
            <BarDropDown />
            <ProgressBarCmp bars={data.bars} limit={data.limit} />
            <ProgressButton buttons={data.buttons} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.barsInfoReducer.data,
    fetchState: state.barsInfoReducer.fetchState
  };
};

const mapDispatchToProps = {
  getBarAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
