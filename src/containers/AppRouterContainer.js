import React, {Fragment} from "react";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import {renderRoutes} from "react-router-config";
import AppSessionContainer from "./AppSessionContainer";

const useStyles = makeStyles((theme) => ({
    root: {}
}), {name: "RuiAppRouterContainer"});
const AppRouterContainer = ({className, routes, ...rest}) => {
    const classes = useStyles();
    return (
        <Fragment>
            {renderRoutes(routes)}
        </Fragment>
    )
};
AppRouterContainer.propTypes = {
    routes: PropTypes.array.isRequired,
};
export default AppRouterContainer;
