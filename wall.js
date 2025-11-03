function wallCollision() {
  for (let i = 0; i < w.length; i++) {
    const wall = w[i];

    const hitVertical = p.y <= wall.y + wall.h && p.y + p.h >= wall.y;
    const hitHorizontal = p.x <= wall.x + wall.w && p.x + p.w >= wall.x;

    // Hit left side of wall
    if (hitVertical && p.x <= wall.x + wall.w && p.x >= wall.x) {
      p.x += 1;
    }

    // Hit right side of wall
    if (hitVertical && p.x + p.w >= wall.x && p.x <= wall.x + wall.w) {
      p.x -= 1;
    }

    // Hit bottom side of wall
    if (hitHorizontal && p.y <= wall.y + wall.h && p.y >= wall.y) {
      p.y += 1;
    }

    // Hit top side of wall
    if (hitHorizontal && p.y + p.h >= wall.y && p.y <= wall.y + wall.h) {
      p.y -= 1;
    }
  }
}
