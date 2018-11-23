export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "6ddc6aac66ba73b139a6a3f8c609c146";

export const API_KEY_4 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGRjNmFhYzY2YmE3M2IxMzlhNmEzZjhjNjA5YzE0NiIsInN1YiI6IjViZjdiMGY2OTI1MTQxNWNjODBkZTFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rMjyxGg3paAcVDmBqZ-ewXnJGOtvHH36O0hiNKq1hq4";

export const fetchApi = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (response.status < 400) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(response => {
                response.json().then(error => {
                    reject(error);
                });
            });
    });
};
