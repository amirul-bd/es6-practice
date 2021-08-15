const person = {name : "Sakib", age : 17, gfName: "apu", friends: ["shawon","bappy","jasim" ]};

// const personName = person.name;
// const {friends, age, gfName} = person;

// console.log(friends[1], age);
// console.log(friends, gfName, age);


const friends = ["sakib", "salman", "Amir", "sahrukh", "arman", "imraan"];

const [smallF, nextF , ...remainingF] = friends;

// console.log(smallF, nextF);
// console.log(remainingF);


const complexObject = {
    name : 'sakib',
    info : {
        address: "dhaka",
        post: "noapara"
    }
}

const {post} = complexObject.info;
console.log(post);