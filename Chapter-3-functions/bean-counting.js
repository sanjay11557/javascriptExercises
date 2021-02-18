// Problem Statement
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.


const countBs = (str) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (String(str[i]) === 'B') {
        res += 1;
      }
    }
    return res;
  }
  
const countChar = (str,chr) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (String(str[i]) === chr) {
        res += 1;
      }
    }
	return res;
}
  
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4