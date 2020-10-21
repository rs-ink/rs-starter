import {createContainer} from "unstated-next";
import React, {useEffect, useLayoutEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import {useTheme} from "@material-ui/core";

const LoadingContainer = createContainer(() => {
    const [loading, setLoading] = useState(false);
    const [loadingInfo, setLoadingInfo] = useState("");
    // console.log("loading start");
    useLayoutEffect(() => {
        setLoading(false);
    }, [])
    useEffect(() => {
        if (!loading && loadingInfo !== "") {
            setLoadingInfo("")
        }
    }, [loading, loadingInfo])

    return {loading, setLoading, loadingInfo, setLoadingInfo}
})
export default LoadingContainer;

const ProcessDialog = () => {
    const {loading, loadingInfo} = LoadingContainer.useContainer();
    const theme = useTheme();
    return (
        <Backdrop open={loading} style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: "rgba(0,0,0,0.75)",
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
            alignItems: 'center',
            height: '100%'
        }}>
            <Grid item container xs={12} alignItems={'center'} justify={'center'} direction={"column"}
                  style={{height: '100%'}}>
                <CircularProgress style={{color: '#fff', padding: 32}} size={70}/>
                <Typography style={{color: '#fff'}}>{loadingInfo ? loadingInfo : "加载中 ..."}</Typography>
            </Grid>
        </Backdrop>)
}

const LoadingContainerProvider = ({children}) => {
    return (
        <LoadingContainer.Provider>
            {children}
            <ProcessDialog/>
        </LoadingContainer.Provider>
    )
};
export {LoadingContainerProvider};
