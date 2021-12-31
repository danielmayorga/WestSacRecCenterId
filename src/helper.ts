export const OnlyNumberRegex = /^\d+$/;
export const NumericPatternRegex = "^\\d+$"

export const AppRoutes = {
    Home: '/',
    Create: '/Create',
    IOs: '/IOs',
}

const userInfoKey = "userInfo";

export interface UserInfo{
    name: string;
    id:   string;
}

export function getUserInfo(){
    let json = localStorage.getItem(userInfoKey);
    if (json == null) return null;
    return JSON.parse(json) as UserInfo;
}

export function setUserInfo(info: UserInfo){
    let json = JSON.stringify(info);
    localStorage.setItem(userInfoKey, json);
}

export function logoutLocal(){
    localStorage.removeItem(userInfoKey);
}