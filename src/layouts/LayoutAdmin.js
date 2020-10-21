import React, {Suspense} from "react";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import clsx from "clsx";
import LinearProgress from "@material-ui/core/LinearProgress";
import {renderRoutes} from "react-router-config";
import Page from "../components/Page";

const useStyles = makeStyles((theme) => ({
    root: {}
}), {name: "RuiLayoutAdmin"});
const LayoutAdmin = ({className, route, ...rest}) => {
    const classes = useStyles();
    return (
        <Page title={route.name}  {...rest} className={clsx(classes.root, className)}>
            <Suspense fallback={<LinearProgress/>}>
                {
                    renderRoutes(route.routes)
                }
            </Suspense>
        </Page>
    )
};
LayoutAdmin.propTypes = {
    item: PropTypes.object,
};
export default LayoutAdmin;
