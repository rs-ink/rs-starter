import React from "react";
import Page from "../../components/Page";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import clsx from "clsx";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {}
}), {name: "RuiViewAdminSettings"});
const ViewAdminSettings = ({className, ...rest}) => {
    const classes = useStyles();
    return (
        <Page title={'管理员设置'} {...rest} className={clsx(classes.root, className)}>
            <Typography>管理元设置菜单</Typography>
        </Page>
    )
};
ViewAdminSettings.propTypes = {
    item: PropTypes.object,
};
export default ViewAdminSettings;
