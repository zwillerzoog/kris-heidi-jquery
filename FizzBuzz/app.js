function fizzBuzzer() {
	$("#number-chooser").submit(function(event){
		event.preventDefault();
		let userNumber = $(event.currentTarget).find("#number-choice").val();
		for (let i = 1; i <= userNumber; i++) {
			if (i % 5 === 0) {
				$(".js-results").append(`<div class="fizz-buzz-item buzz"><span>${i}</span></div>`);
			} 
			else if (i % 3 === 0) {
				$(".js-results").append(`<div class="fizz-buzz-item fizz"><span>${i}</span></div>`);
			}
			else if (i % 15 === 0) {
				$(".js-results").append(`<div class="fizz-buzz-item fizzbuzz"><span>${i}</span></div>`);
			}
			else {
				$(".js-results").append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
			}
		}
	})
}

fizzBuzzer();