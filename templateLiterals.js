// let name = 'bob';
// console.log(`hi ${name}`)

function getReasonCount(){ return 3;}

let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason': 'a few reasons'} to try this.`

console.log(interpolation)