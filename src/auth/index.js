export const isAuth = () => {
    return getToken() !== undefined
}

export const setToken=(token) =>{
    var exdays = 1;
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(token) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie = "access_token="+c_value+"; path=/";
}

export const getToken=() =>{
    var b = document.cookie.match("(^|;)\\s*access_token\\s*=\\s*([^;]+)");
    return b ? b.pop() : undefined;
}