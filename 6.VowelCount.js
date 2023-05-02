
function countVowels(name) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name.charAt(i).toLowerCase())) {
      count++;
    }
  }

  return count;
}

let name = "Vikas Kumar";
let numVowels = countVowels(name);
console.log(numVowels);