import {useCookie} from "react-use";

const useAuth = ({cookieName = "sid"}) => {
    const [cookie] = useCookie(cookieName)
    return cookie === ""
}
