class SimpleP5SketchEnv{
    constructor(wrapperID, settings, randomize = true){ 
        this.frameRate = settings.frameRate || 60;
        this.wrapperID = wrapperID;
        this.backgroundColor = settings.backgroundColor || 50; // 0 <= backgroundColor < 256
        this.p = null;
        this.canvas = null;

    }

    // connect p5 instance
    setP5(p){
        this.p = p;
    }

    // connect canvas
    setCanvas(canvas){ this.canvas = canvas }

    // get Canvas width
    getWidth(){ return this.canvas.width }

    // get Canvas height
    getHeight(){ return this.canvas.height }

    // handle resize events (resize canvas to max size)
    resizeCanvas() {
        this.p.resizeCanvas(document.getElementById(this.wrapperID).clientWidth, document.getElementById(this.wrapperID).clientHeight);
    }

}

function simpleP5SketchCanvas(env) {

    // attach new canvas element to wrapper
    document.getElementById(env.wrapperID).innerHTML = '';

    // create p5 instance
    new p5((p)=>{

        // connect to environment
        env.setP5(p);

        // run once
        p.setup = function () {

            // create new canvas - fill wrapper
            canvas = p.createCanvas(
                document.getElementById(env.wrapperID).clientWidth, 
                document.getElementById(env.wrapperID).clientHeight
            );

            // connect to canvas
            env.setCanvas(canvas);
        }

        // run continous (frameRate)
        p.draw = function () {
    
            // set FrameRate
            p.frameRate(env.frameRate);
    
            // draw background
            p.background(env.backgroundColor);

            

        }
    }, env.wrapperID); // attach to DOM

    // handle resizeEvents -> resize canvas to fill wrapper
    document.getElementById(env.wrapperID).onresize = function() {
        canvasManager.resizeCanvas(document.getElementById(env.wrapperID).clientWidth, document.getElementById(env.wrapperID).clientHeight);
    };
    
}