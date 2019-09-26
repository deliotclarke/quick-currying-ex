// running through an article on currying, a functional programming concept

// definition of currying - a process in functional programming in which we can transform a function with mutliple arguments (greater arity)
// into a a sequence of nested functions (less arity). It returns a new function that expects the next argumen inline.

function fn(a, b) {
    //...
}

function multiply(a, b, c) {
    return a * b * c;
}

// what you're used to seeing above

console.log(multiply(1, 2, 3));

// example of currying below

function multiply2(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log(multiply2(1)(2)(3));

// the above is the same as writing

const mul1 = multiply2(1);
//mul1 gets passed 1;
// multiply2 returns:
//   return (b) => {
//     return (c) =>
//       return a * b *c;
//     }
// }
// mul1 now holds the above function

const mul2 = mul1(2);
// now we pass mul1 the parameter 2 or "b"
// and mul1 returns the third function:
//    return (c) => {
//     return a * b * c;
//  }
// this is stored in mul2

//basically mul2 is:
// mul2 = (c) => {
//     return a * b *c;
// }

const result = mul2(3);
// when mul2 is called with the parameter 3, it does the calculation with the previously passed parameters

console.log(result);

//since it's a nested function mul2 has access to the variable scope of the outer functions, multiply and mul1

// thought the functions have already return garbage collected from memory, it's variables are somehow still kept alive.

console.log(multiply2(1)(9)(2));