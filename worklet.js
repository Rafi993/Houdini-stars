class Stars {
  static get inputProperties() {
    return ['--star-count', '--star-max-size'];
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  paint(ctx, geom, props) {
    const count = parseInt(props.get('--star-count').toString());
    const maxSize = parseInt(props.get('--star-max-size').toString());

    const colorrange = [0, 60, 240];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * geom.width;
      const y = Math.random() * geom.height;

      const radius = maxSize ? this.getRandom(1, maxSize) : Math.random() * 1.2;

      const hue = colorrange[this.getRandom(0, colorrange.length - 1)];
      const sat = this.getRandom(50, 100);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 360);
      ctx.fillStyle = 'hsl(' + hue + ', ' + sat + '%, 88%)';
      ctx.fill();
      ctx.closePath();
    }
  }
}

registerPaint('stars', Stars);
