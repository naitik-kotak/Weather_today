class UI {
  constructor() {
    this.city = $('#w-city');
    this.region = $('#w-region');
    this.icon = $('#w-icon');
    this.desc = $('#w-desc');
    this.temp_data = $('#temp_data');
    this.feelslike_data = $('#feelslike_data');
    this.humidity_data = $('#humidity_data');
    this.visibility_data = $('#visibility_data');
    this.display_of_info = $('#display_of_info');
    this.error_here = $('#error_here');
    this.input_value = $('#location');
  }

  display(data) {
    this.city.text(data.location.name);
    this.region.text(data.location.region);
    this.icon.attr('src', `${data.current.weather_icons[0]}`);
    this.desc.text(data.current.weather_descriptions[0]);
    this.temp_data.text(data.current.temperature);
    this.feelslike_data.text(data.current.feelslike);
    this.humidity_data.text(data.current.humidity);
    this.visibility_data.text(data.current.visibility);
    this.input_value.val('');
    this.error_here.addClass('info-here-hide');
    this.display_of_info.removeClass('info-here-hide');
  }

  showError() {
    this.error_here.text('ERROR: Try again with valid location');
    this.input_value.val('');
    this.error_here.removeClass('info-here-hide');
    this.display_of_info.addClass('info-here-hide');
  }
}
