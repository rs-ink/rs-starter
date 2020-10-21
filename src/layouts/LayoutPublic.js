import React, {Suspense} from "react";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import clsx from "clsx";
import LinearProgress from "@material-ui/core/LinearProgress";
import {renderRoutes} from "react-router-config";
import Page from "../components/Page";

const useStyles = makeStyles((theme) => ({
    root: {}
}), {name: "RuiLayoutPublic"});
const LayoutPublic = ({className, route, ...rest}) => {
    const classes = useStyles();
    return (
        <Page  {...rest} className={clsx(classes.root, className)}>
            <Suspense fallback={<LinearProgress/>}>
                {
                    renderRoutes(route.routes)
                }
            </Suspense>
        </Page>
    )
};
LayoutPublic.propTypes = {
    item: PropTypes.object,
};
export default LayoutPublic;
