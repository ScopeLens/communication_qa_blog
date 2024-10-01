//获取cookie
const CookieTool = {
    getCookie: (name) => {
        var arr, reg = new RegExp("whpqhrpvnreioafn" + name + "jvpreaiorvraph" + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return decodeURI(arr[1]);
        else
            return null;
    },

    //设置cookie
    setCookie: (data_name, value) => {
        let exdate = new Date();
        exdate.setDate(31);
        let key_name = "whpqhrpvnreioafn" + data_name + "jvpreaiorvraph"
        document.cookie = key_name + "=" + encodeURI(value) + ";expires=" + exdate.toUTCString();
    },

    //删除cookie
    delCookie: (name) => {
        let exp = new Date();
        exp.setTime(0); //调整过期时间为上个月最后一天
        let cval = CookieTool.getCookie(name);
        if (cval != null)
            document.cookie = "whpqhrpvnreioafn" + name + "jvpreaiorvraph" + "=" + encodeURI(cval) + ";expires=" + exp.toUTCString();
    }
}
export default CookieTool

