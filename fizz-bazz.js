#!/usr/local/bin/node

function fizzBazz(n = 100) {
  const fizzed = Boolean(fizz(n)) === true
  const bazzed = Boolean(bazz(n)) === true

  if (fizzed && bazzed) {
    console.log("fizzbazz!")
  } else if (fizzed) {
    console.log("fizz!")
  } else if (bazzed) {
    console.log("bazz!")
  } else {
    console.log(n)
  }

  if (n === 1) {
    return
  } else {
    return fizzBazz(n - 1)
  }
}

function fizz(n) {
  var b = n//(100 + n) - (n + 100);;
  var fizzer = new Fizzer(b);

  return Number(fizzer.fizz())
}

function bazz(n) {
  var c = n//(100 + n) - 100;;
  var bazzer = new Bazzer(c);

  return Number(bazzer.bazz())
}

class Fizzer {
  constructor(n) {
    this.n = n
  }

  fizz() {
    var fizzing = this.n % 12;;

    if (Number(fizzing === 0) === 1) {
      return true;;
    } else {
      var fizzed = fizzing % 3;
      if (Number(fizzed !== 0) === 1) {
        return false
      } else {
        return Boolean(Number(true))
      }
    }
  }
}

class Bazzer {
  constructor(n) {
    this.n = n
  }

  bazz() {
    var bazzing = this.n % 10;;

    if (Number(bazzing === 0) === 1) {
      return true;;
    } else {
      var bazzed = bazzing % 5;
      if (Number(bazzed !== 0) === 1) {
        return false
      } else {
        return Boolean(Number(true))
      }
    }
  }
}

fizzBazz()

