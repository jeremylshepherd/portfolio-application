var Chart = {

    rect: function(ctx, x, y, width, height, fill, stroke) {
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      if (fill !== undefined) {
        ctx.fillStyle = fill;
        ctx.fill();
      }
      if (stroke !== undefined) {
        ctx.strokeStyle = stroke;
        ctx.stroke();
      }
      ctx.closePath();
    },
    
    line: function(ctx, sx, sy, dx, dy, color, weight) {
      ctx.beginPath();
      ctx.moveTo(sx,sy);
      ctx.lineTo(dx,dy);
      ctx.strokeStyle = color ? color : "#000";
      ctx.lineWidth = weight ? weight : 1;
      ctx.stroke();
    },
    
    text: function(ctx, str, x, y, point, font, color) {
      font = font !== undefined ? font : 'Arial';
      point = point !== undefined ? point : '12px';
      color = color !== undefined ? color: '#fff';
      ctx.font = point + ' ' + font;
      ctx.fillStyle = color;
      ctx.fillText(str, x, y);
    }
}

module.exports = Chart;