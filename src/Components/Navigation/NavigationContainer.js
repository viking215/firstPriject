import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebarPage,
    }
}

const NavigationContainer = connect(mapStateToProps) (Navigation);

export default NavigationContainer;