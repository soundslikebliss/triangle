var Triangle = {
  type: function() {
    if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return 'equilateral';
    } else if ((this.side1 === this.side3) || (this.side1 === this.side2) || (this.side2 === this.side3)) {
      return 'isosceles';
    } else if ((this.side1 !== this.side3) && (this.side1 !== this.side2) && (this.side2 !== this.side3)) {
      return 'scalene';
}
}
};
