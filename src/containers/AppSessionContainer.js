import {createContainer} from "unstated-next";
import {useSessionStorage} from "react-use";
import {AppSettings} from "../config";
import {useCallback, useMemo} from "react";

const AppSessionContainer = createContainer(() => {
    const [session, setSessionStorage] = useSessionStorage(AppSettings.SessionKey, {})
    const updateSession = useCallback((info = {}, reset) => {
        if (reset) {
            setSessionStorage({})
        } else {
            setSessionStorage({...session, ...info})
        }
    }, [])
    const isLogin = useMemo(() => (session.id || session.code), [session]);
    return {session, updateSession, isLogin}
})
export default AppSessionContainer;
