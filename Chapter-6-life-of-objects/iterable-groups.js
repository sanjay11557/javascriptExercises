// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

class Group {
    constructor () {
      this.groups = [];
    }
    
    add(value) {
      if (!this.has(value)) {
        this.groups.push(value);
      }
    }
    
    delete(value) {
      if (this.has(value)) {
            this.groups = this.groups.filter(ele => ele !== value);
      }
    }
    
    has(value) {
        return this.groups.includes(value);
    }
    
    static from(arr) {
      let g = new Group();
      for (let item of arr) {
        g.add(item);
      }
      return g;
    }
    
    [Symbol.iterator]() {
      return new GroupIterator(this);
    };
  }
  
  class GroupIterator {
    constructor(obj) {
      this.i = 0;
      this.group = obj.groups;
    }
    next() {
      if (this.i == this.group.length || this.i > 10) return {done: true};
      let value = this.group[this.i];
      this.i++;
      return {value, done: false};
    }
  }
  
  
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
  