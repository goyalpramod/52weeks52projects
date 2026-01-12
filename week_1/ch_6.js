// class Vec{
//   constructor (x,y){
//        this.x = x;
//        this.y = y;
//     }

//   plus (newVec){
//       return new Vec(newVec.x + this.x, newVec.y + this.y);
//     }

//   minus (newVec){
//       return new Vec(this.x - newVec.x,this.y - newVec.y);
//     }

//   get length(){
//       return (Math.sqrt(this.x**2 + this.y**2))
//     }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5


// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
//  Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
// delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating 
// whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iterable object as its argument and creates a
// group that contains all the values produced by iterating over it.

class Group {
  constructor(){
    this.group = []
  }

  add(value){
    if (this.has(value) == false){
        this.group.push(value);
    }
  }

  delete(value){
    if (this.has(value) == true){
            const index = this.group.indexOf(value);
            this.group.splice(index,1)
        }
  }

  has(value){
    const index = this.group.indexOf(value);
    return index > -1;
  }

  static from(array){
    let group = new this
    for (let element of array){
        group.add(element);
    }
   return group
  }

    // This tells JS how to create an iterator for Group
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class GroupIterator {
    #count = 0
    constructor(group){
        this.group = group;
    }

    next() {
        if (this.#count >= this.group.group.length){
            return {done: true};
        }
        let value = this.group.group[this.#count];
        this.#count += 1;
        return {value, done:false};
    }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c