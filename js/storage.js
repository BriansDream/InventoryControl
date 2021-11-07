
const cacheKey = 'CACHE_KEY';


const checkWebStorage = () => {
    return typeof(Storage) != null;
}

const putData = (data) => {
    let dataUser = null;
    if(checkWebStorage()) {

        if(sessionStorage.getItem(cacheKey) == null) {
            dataUser = [];
        } else {
            dataUser = JSON.parse(sessionStorage.getItem(cacheKey));
        }

        dataUser.unshift(data);

      

        sessionStorage.setItem(cacheKey,JSON.stringify(dataUser));

    } else {
        alert("Your browser not support web storage")
    }
}

const showData = () => {
    if(checkWebStorage()) {
    return JSON.parse(sessionStorage.getItem(cacheKey)) || [];
} else {
    return [];
}
}

