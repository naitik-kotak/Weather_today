$('#btn1').click(function (e) {
  const value = $('#location').val();

  const weather = new Weather(value);
  const ui = new UI();

  $('document').ready(getData(weather, ui));

  e.preventDefault();
});

function getData(weather, ui) {
  //fetching data and displaying on DOM
  weather
    .getinfo()
    .then((data) => {
      if (data.success !== false) {
        ui.display(data);
      } else {
        ui.showError();
      }
    })
    .catch((err) => {
      ui.showError(err);
    });
}
