function fizzBuzzer() {
	$("#number-chooser").submit(function(event){
		event.preventDefault();
		let userNumber = $(event.currentTarget).find("#number-choice").val();
		console.log(userNumber);
		for (let i = 1; i < userNumber + 1; i++) {
			$(".js-results").append(`<div class="fizz-buzz-item"><span>${i}</span></div>`)
			

		}
	})
	
}
fizzBuzzer();