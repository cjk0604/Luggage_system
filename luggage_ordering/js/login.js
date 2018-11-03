
<!--//
/*This Script allows people to enter by using a form that asks for a UserID and Password*/
var objectPeople = [
	{
		username: "rick@gmail.com",
		password: "123456"

	},
	{
		username: "alex@gmail.com",
		password: "123456"

	},
	{
		username: "felix@gmail.com",
		password: "123456"
	},
	{
		username: "stephanie@gmail.com",
		password: "123456"
	},
	{
		username: "tristan@gmail.com",
		password: "123456"
	}
]

function getInfo(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	for(var i = 0; i < objectPeople.length; i++){
		if(username == objectPeople[i].username && password == objectPeople[i].password){
			console.log("Welcome to Cathay Pacific");
			window.location = "home.html";
		}
	}
	alert("Wrong Username or Password");

}










