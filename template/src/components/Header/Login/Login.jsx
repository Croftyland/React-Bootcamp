import React from 'react';
import {API_URL, API_KEY_3} from "../../../api/api";

export default class Login extends React.Component {
    sendPromises = () => {
        //добавить async
        //1
        const getRequestToken = () => {
            return new Promise((resolve, reject) => {
                fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
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
        //2
        const validateWithLogin = body => {
            return new Promise((resolve, reject) => {
                fetch(
                    `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
                    {
                        method: "POST",
                        mode: "cors",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(body)
                    }
                )
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
    };
    render() {
        return (
            <div
                className="btn btn-success"
                type="button"
                onClick={this.sendPromises}>
                Login
            </div>
        );
    }
}

