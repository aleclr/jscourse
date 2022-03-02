// spread vs rest pattern

//spread, used on the right side of the assignement operator
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);
