import React from "react";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import clsx from "clsx";
import Helmet from "react-helmet";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }
}), {name: "RuiPage"});
const Page = ({className, title, children, ...rest}) => {
    const classes = useStyles();
    return (
        <div
            className={clsx(classes.root, className)}>
            {title && <Helmet>
                <title>{title}</title>
            </Helmet>}
            {children}
        </div>
    )
};
Page.propTypes = {
    item: PropTypes.object,
};
export default Page;
