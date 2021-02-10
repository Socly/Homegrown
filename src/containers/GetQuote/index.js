/**
 * Created by InspireUI on 19/02/2017.
 *
 * @format
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View,Text } from "react-native";
import { connect } from "react-redux";
import { Constants, withTheme } from "@common";
import styles from "./styles";

class GetQuote extends PureComponent {
  static propTypes = {
    fetchAllCountries: PropTypes.func.isRequired,
    layoutHome: PropTypes.any,
    onViewProductScreen: PropTypes.func,
    onShowAll: PropTypes.func,
    showCategoriesScreen: PropTypes.func,
  };

  componentDidMount() {

  }

  render() {
   
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
          <Text>this is the form</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ products, countries, netInfo, language }) => ({
  layoutHome: products.layoutHome,
  countries,
  isConnected: netInfo.isConnected,
  language,
});

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  const CountryRedux = require("@redux/CountryRedux");
  const { actions } = require("@redux/CategoryRedux");

  return {
    ...ownProps,
    ...stateProps,
    fetchCategories: () => actions.fetchCategories(dispatch),
    fetchAllCountries: () => CountryRedux.actions.fetchAllCountries(dispatch),
  };
}

export default withTheme(
  connect(
    mapStateToProps,
    undefined,
    mergeProps
  )(Home)
);
