class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _checkServerResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}`, {
        method: "GET",
        headers: this._headers,
      })
      .then(this._checkServerResponse);
    }
}

export const api = new Api({
    baseUrl: "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7",
    headers: {
      "Content-Type": "application/json",
    },
  });