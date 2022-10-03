// Cookie Class
class Cookie {
  // constructor
  constructor(color) {
    this.color = color
  }

  // method getter
  getColor = () => {
    return this.color
  }

  // method setter
  setColor = (color) => {
    this.color = color
  }
}

// new Instances of Cookie
let cookieOne = new Cookie('blue')
let cookieTwo = new Cookie('green')

// log color
console.log(cookieOne.getColor())
console.log(cookieTwo.getColor())

// set new color
cookieTwo.setColor('pink')

// log changed color
console.log(cookieTwo.getColor());

