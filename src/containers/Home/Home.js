import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPathname } from "../../store/actions/Actions";
import Section from "./Section";
import Footer from "../../components/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.setPathname(this.props.location.pathname);
  }
  render() {
    return (
      <div className="page-landing">
        <Section />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pathname: state.getPathname.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPathname: path => {
      dispatch(getPathname(path));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
