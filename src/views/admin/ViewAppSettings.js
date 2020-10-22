import React from "react";
import Page from "../../components/Page";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import clsx from "clsx";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {}
}), {name: "RuiViewAppSettings"});
const ViewAppSettings = ({className, ...rest}) => {
    const classes = useStyles();
    const settings = process.env;
    return (
        <Page title={"app设置"} {...rest} className={clsx(classes.root, className)}>
            <Typography>{JSON.stringify(settings)}</Typography>
        </Page>
    );
};
ViewAppSettings.propTypes = {
    className: PropTypes.string,
};
export default ViewAppSettings;
