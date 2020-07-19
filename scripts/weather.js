class Weather {
  constructor(city) {
    this.apiKey = config.API_KEY;
    this.city = city;
  }

  getinfo() {
    return new Promise((resolve, reject) => {
      fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`)
        .then((res) => {
          if (res.status === 200) {
            resolve(res.json());
          } else {
            reject('Something went wrong');
          }
        })
        .catch((err) => err);
    });
  }
}
