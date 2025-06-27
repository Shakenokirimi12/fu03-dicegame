const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function main(){
	rl.question('What is your name?\n>',(name) => {
		console.log(`Hello, ${name}!`)
		console.log("Rolling dice...")
		const die1 = Math.floor(Math.random() * 6 + 1);
		const die2 = Math.floor(Math.random() * 6 + 1)
		console.log("Die 1: " + die1)
		console.log("Die 2: " + die2)
		console.log("Total value: " + (Number(die1)+Number(die2)))
		rl.close();
	});
	console.log("Rolling dice...")
	const die1 = Math.floor(Math.random() * 6 + 1);
	const die2 = Math.floor(Math.random() * 6 + 1)
	console.log("Die 1: " + die1)
	console.log("Die 2: " + die2)
	console.log("Total value: " + (Number(die1)+Number(die2)))
	if(die1 + die2>7){
		console.log("You won")
	}
	else{
		console.log("You lost")
	}
}

main()
