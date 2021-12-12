function preload() {
    }
    
    function setup() {
    createCanvas(600,600);
    }
    
    
    function preload() {
    
    }
        
        function setup() {
                  canvas = createCanvas(700,700);
    canvas.position(220,225);
    video = createCapture(VIDEO);
    video.hide();    
    tint_color = "";
    }
        
        function draw() {
        image(video, 75,50, 500, 500);
        tint(tint_color);
        fill(51,255,187);
        stroke(51,255,187);
        circle(50,50, 100);
        circle(550,50, 100);
        rect(50, 20, 500, 55);
        circle(50,540, 100);
        rect(50, 521, 500, 55);
        circle(550,540, 100);
        rect(20, 20, 55, 500);
        rect(520, 20, 55, 500);    
    }
    
        function take_snapshot(){
            save('vedant.png');
        }
    
        function filtertint(){
            tint_color = document.getElementById("color_name").value;
        }
