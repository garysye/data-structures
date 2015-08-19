var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    front: 0,
    max: 100
  };

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[storage.front + someInstance.size()] = value;
  };

  someInstance.dequeue = function(){
    var out = storage[storage.front];
    delete storage[storage.front];
    storage.front++;
    return out;
  };

  someInstance.size = function(){
    var count = -2;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
