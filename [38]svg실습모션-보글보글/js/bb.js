window.onload = function () {
    (function () {

        var stage = 'fullbg';
        var canva = 'bb';
        var r = 255;
        var g = 255;
        var b = 255;

        var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

        // 메인
        document.body.style.overflowX = 'hidden';
        initHeader();
        addListeners();

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = {
                x: 0,
                y: height
            };

            largeHeader = document.getElementById(stage);
            largeHeader.style.height = height + 'px';

            canvas = document.getElementById(canva);
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            // 공기방울 만들기
            circles = [];
            for (var x = 0; x < width * 0.5; x++) {
                var c = new Circle();
                circles.push(c);
            }
            animate();
        }

        // 이벤트 제어(Event handling)
        function addListeners() {
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function scrollCheck() {
            if (document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (var i in circles) {
                    circles[i].draw();
                }
            }
            requestAnimationFrame(animate);
        }

        // 캔버스(Canvas) 조정(manipulation) - 공기방울 제어
        function Circle() {
            var _this = this;

            // constructor
            (function () {
                _this.pos = {};
                init();
                console.log(_this);
            })();

            function init() {
                _this.pos.x = Math.random() * width;
                _this.pos.y = height + Math.random() * 100;
                // _this.pos.y = Math.random() * 100;
                _this.alpha = 0.1 + Math.random() * 0.3;
                _this.scale = 0.1 + Math.random() * 0.3;
                _this.velocity = Math.random();
            }

            this.draw = function () {
                if (_this.alpha <= 0) {
                    init();
                }
                _this.pos.y -= _this.velocity;
                // _this.pos.y += _this.velocity;
                _this.alpha -= 0.0005;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + _this.alpha + ')';
                ctx.fill();
            };
        }

    })();
};