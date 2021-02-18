// Problem Statement 
// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

const isEven = (num) => {
	if(num<0)
		num=-num;
	if (num === 0) 
      return true;
    else if (num === 1) 
      return false;
	
    return isEven(num-2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(3));
  // → false
  console.log(isEven(-1));
  // → false