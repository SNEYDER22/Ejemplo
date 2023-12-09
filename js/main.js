window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var speed = 2;
    var directionX = 1;
    var directionY = 1;

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();

        context.font = '30px Arial';
        context.fillText('Hola Mundo', x-50, y+100);

        if(x + 50 > canvas.width || x - 50 < 0) {
            directionX = -directionX;
        }

        if(y + 50 > canvas.height || y - 50 < 0) {
            directionY = -directionY;
        }

        x += directionX * speed;
        y += directionY * speed;

        requestAnimationFrame(draw);
    }

    draw();
}