function askQuestions() {


var firstName = prompt('what is your first name?'),
	lastName = prompt('what is your last name?'),
	fullName = firstName + ' ' + lastName;

console.log(fullName);

var age = prompt('how old are you?');
age = parseInt(age);

if (age >= 20) {

	console.log('user is an adult');

} else if (age >= 13) {

		console.log('User is a tween');

} else {
	console.log('user is a child');

} if (firstName ==='General' && lastName !=='Assembly') {
	console.log('hello general, how are the troops?');
}

}

// when the pagr has loaded
$(function() {

	$('img').on('click'), askQuestions);

	// when th user clicks an h3 element. Quote marks calls up from css
	$('h3').on('click', function() {

		// hide the text element. Toggling allows you to hide and reopen h1's etc. 
		$(this).next().slideToggle(900);



	});

});
