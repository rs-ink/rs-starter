import React from "react";
import Page from "../../components/Page";
import PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/styles"
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import withSubmitWrap from "../../hooks/withSubmitWrap";
import AppSessionContainer from "../../containers/AppSessionContainer";
import useRouter from "../../hooks/useRouter";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        "& .MuiCardActions-root": {
            justifyContent: "center"
        }
    }
}), {name: "RuiViewLogin"});
const ViewLogin = ({className, ...rest}) => {
    const classes = useStyles();
    const {updateSession} = AppSessionContainer.useContainer()
    const {history} = useRouter();
    const bindLogin = withSubmitWrap(() => {
        return new Promise(resolve => {
            console.log("history.push")
            updateSession({id: 1, role: {admin: true}, name: "系统管理员"});
            history.push("/admin")
            return "afadsfasd";
        })
    })

    return (
        <Page  {...rest} className={clsx(classes.root, className)}>
            <Card>
                <CardContent>
                    <FormGroup>
                        <TextField label={"用户名"} name={'userName'}/>
                        <TextField label={"密码"} name={'usePwd'}/>
                    </FormGroup>
                </CardContent>
                <CardActions>
                    <Button onClick={bindLogin}>登陆</Button>
                </CardActions>
            </Card>
        </Page>
    )
};
ViewLogin.propTypes = {
    item: PropTypes.object,
};
export default ViewLogin;
