export function getAccessToken():string {
    let hashParams = new Map();

    let regEx = /([^&;=]+)=?([^&;]*)/g
    let hash = window.location.hash.substring(1);

    let e = regEx.exec(hash);
    while (e) {
       let key = e[1]
       let value = decodeURIComponent(e[2]);
       hashParams.set(key, value)

       e = regEx.exec(hash);
    }
    return hashParams.get("access_token");
}
