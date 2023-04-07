class Api {
  constructor ({url})
  {
    this.url = url;
  }

  _getStatus = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getCard = () => {
    return (fetch(`${this.url}`, {
      method: 'GET'
    })
      .then(res => this._getStatus(res))
    ); 
  }
}

const api = new Api (
  {
    url: 'https://randomfox.ca/floof/',
  }
);

export default api