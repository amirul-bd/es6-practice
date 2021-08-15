const age = [17, 25, 30, 35, 38, 41, 45];
const age2 = [22, 25, 55, 66, 78, 85, 48];
const age3 = [25, 87, 48]
const allAges = age.concat(age2).concat([4]).concat(age3);
const allAges2 = [...age, ...age2 , 5, ...age3]
//console.log(allAges2);

const business = 650;
const minister = 400;
const sochib = 300;
const salary = [650, 400, 350]
// const maximum = Math.max(business,minister,sochib);
const maximum = Math.max(...salary);

console.log(maximum);