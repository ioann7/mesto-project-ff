const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-magistr-2/',
    headers: {
        authorization: '50207ec3-1fe4-40ba-a9bc-1d372b7c0f5f',
        'Content-Type': 'application/json',
    },
};

const makeRequest = (url, requestOptions) => {
    if (!(url.startsWith('https://') || url.startsWith('http://'))) {
        url = new URL(url, config.baseUrl);
    }

    if (requestOptions === undefined) {
        requestOptions = {};
    }
    if (requestOptions.headers === undefined) {
        requestOptions.headers = config.headers;
    }
    if (requestOptions.method === undefined) {
        requestOptions.method = 'GET';
    }

    return fetch(url, requestOptions)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => console.error(err));
};

export const getInitialCards = () => {
    return makeRequest('cards');
};

export const createCard = (name, link) => {
    return makeRequest('cards', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            link: link,
        }),
    });
};

export const deleteCard = (cardId) => {
    return makeRequest(`cards/${cardId}`, {
        method: 'DELETE',
    });
};

export const getMyProfile = () => {
    return makeRequest('users/me');
};

export const editMyProfile = (name, about) => {
    return makeRequest('users/me', {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            about: about,
        }),
    });
};
