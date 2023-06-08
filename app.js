let pronoun = ['the', 'our'];
let adjective = ['great', 'big'];
let noun = ['bat', 'ball'];

const merge = (a, b, c) => {
	for (let i = 0; i<a.length; i++) {
		console.log(a[i] + b[i] + c[i] + '.com');
		for (let i = 0; i<b.length; i++) {
			console.log(a[i] + b[i] + c[i] + '.com');
			for (let i = 0; i<c.length; i++) {
				console.log(a[i] + b[i] + c[i] + '.com');
			}
		}
	}
}
merge(pronoun, adjective, noun);
