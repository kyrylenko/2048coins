let _prog = 0;

class Tile {

  constructor(position, value) {
    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;
    this.previousPosition = null;
    this.mergedFrom = null; // Tracks tiles that merged together
    this.prog = _prog++;
  }

  savePosition() {
    this.previousPosition = { x: this.x, y: this.y };
  };

  updatePosition(position) {
    this.x = position.x;
    this.y = position.y;
  };
  
  serialize() {
    return {
      position: {
        x: this.x,
        y: this.y
      },
      value: this.value
    };
  };
}

export default Tile
