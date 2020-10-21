import {createContainer} from "unstated-next";
import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../theme"
import {createBrowserHistory} from "history";
import {Router} from "react-router";
import {ConfirmProvider} from "material-ui-confirm";
import AxiosContainer from "./AxiosContainer";
import AppRouterContainer from "./AppRouterContainer";
import routes, {authRoutes} from "../routes"
import AppSessionContainer from "./AppSessionContainer";
import {AppSettings} from "../config";
import {LoadingContainerProvider} from "./LoadingContainer";

const AppContainer = createContainer((initialState = AppSettings) => {

    return {theme, appSettings: initialState}
})
export default AppContainer;

const ProviderContainer = ({children}) => {
    const {theme} = AppContainer.useContainer();

    return (
        <ThemeProvider theme={theme}>
            <ConfirmProvider defaultOptions={{
                confirmationText: '确定',
                cancellationText: '取消',
                title: '请确认！',
                confirmationButtonProps: {color: 'secondary', variant: 'outlined'},
                cancellationButtonProps: {variant: 'outlined'},
            }}>
                <AppRouterContainer routes={routes} authRoutes={authRoutes}/>
            </ConfirmProvider>
        </ThemeProvider>
    )
}

export const AppContainerProvider = ({children}) => {
    const history = createBrowserHistory()
    return (
        <Router history={history}>
            <LoadingContainerProvider>
                <AppSessionContainer.Provider>
                    <AxiosContainer.Provider initialState={{}}>
                        <AppContainer.Provider>
                            <ProviderContainer>
                                {children}
                            </ProviderContainer>
                        </AppContainer.Provider>
                    </AxiosContainer.Provider>
                </AppSessionContainer.Provider>
            </LoadingContainerProvider>
        </Router>
    )
}
