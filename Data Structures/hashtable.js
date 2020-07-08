class Hashtable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  // We need a hash function which will generate random index and this index will be used to store
  // the keys in keyMap array.

  // Sure there will be collisions(hash will return same index for more than one key)
  // and to handle it there are two methods.

  // 1) Seperate Chaining ([ [],[],[]...])
  // Creating subArrays and storing values in subArray will solve collision.
  // For example key="white" and key="black" has same index 0,
  // Index             0                  1  2
  // [[['white','#fff'],['black','#000']],[],[]]

  // 2) Linear probing
  // Here we find the next null value and store the key.
  // Index  0               1
  // [['white',#fff],['black',#000]]

  hash(value) {
    let total = 0;
    for (let i of value) {
      let charCode = i.charCodeAt(0) - 96;
      total += charCode;
    }
    return Math.abs((total * 7) % this.keyMap.length);
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }
  get(key) {
    let index = this.hash(key);
    let value = this.keyMap[index].map((subArr) => {
      if (subArr[0] == key) return subArr[1];
    });
    return value[0];
  }
  keys() {
    return this.keyMap
      .map((subArr) => {
        return subArr.map((keys) => keys[0]);
      })
      .filter((key) => key)
      .flat();
  }
  values() {
    return this.keyMap
      .map((subArr) => {
        return subArr.map((keys) => keys[1]);
      })
      .filter((key) => key)
      .flat();
  }
}

let ht = new Hashtable();
ht.set("1", "One");
ht.set("black", "#000");
ht.set("white", "#fff");
ht.get("black");
ht.keys();
ht.values();
