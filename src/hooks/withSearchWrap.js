import LoadingContainer from "../containers/LoadingContainer";

const withSearchWrap = (submit = function () {
    return new Promise()
}, info = "加载中...") => {
    const {loading, setLoading, setLoadingInfo} = LoadingContainer.useContainer();
    return (p) => {
        setLoading(true)
        setLoadingInfo(info)
        return submit(p)
    }
}
export default withSearchWrap;
