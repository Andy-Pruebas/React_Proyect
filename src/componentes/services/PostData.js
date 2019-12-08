export function PostData(type, userData){
    let BaseUrl = 'https://proyectoin.herokuapp.com/sistema/Login';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl,{
            method:'POST',
            body: JSON.stringify(userData) 
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    });
}