class Shape {
  constructor (color) {
    this.color = color;
  }
  get area () {
    throw new Error ();
  }
  toString () {
    return `Color: $(this.color)`;
  }
}

class Square extends Shape {
  constructor (color, side) {
    super (color);
    this.side = side;
  }
  get area () {
    return this.side * this.side;
  }
  toString () {
    return `$ {super.toString()}, Area:${this.area}`;
  }

  // const s_obj = new Square ('red', 6);
  //console.log(s_obj.toString());
}
