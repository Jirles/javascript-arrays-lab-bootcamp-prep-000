const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  //adds kitten to end, returns new array
  var newArray = kittens.push(name)
  return newArray
}

function prependKitten(name){
  //adds kitten to beginning, returns new array
  var newArray = kittens.unshift(name)
  return newArray
}

function removeLastKitten(){
  //removes last kitten, returns new array
  
}

function removeFirstKitten(){
  //removes first kitten, returns new array 
}