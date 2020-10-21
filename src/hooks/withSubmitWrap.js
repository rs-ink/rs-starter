import LoadingContainer from "../containers/LoadingContainer";

const withSubmitWrap = (submit = function (p) {}, info = "加载中...") => {
    const {loading, setLoading, setLoadingInfo} = LoadingContainer.useContainer();
    return (p) => {
        setLoading(true)
        setLoadingInfo(info)
        return submit(p).then((r)=>{
            console.log(r)
        }).finally(()=>{
            console.log("finally")
            setLoading(false)
        })
    }
}
export default withSubmitWrap;
