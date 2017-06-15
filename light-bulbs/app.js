function lightBulbing() {
  $('.js-lightbulb').click(
    function(event) {
      if ($(event.currentTarget) !== $('.js-lightbulb')) {
        $('.js-lightbulb').removeClass('bulb-on');
      }
      $(event.currentTarget).addClass('bulb-on');
    }
  );
}

lightBulbing();
