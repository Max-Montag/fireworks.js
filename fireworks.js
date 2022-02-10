function fireworks(wrapperID, settings) {

    var env;

    // create p5 instance
    new p5((p)=>{

        const GRAVITY = p.createVector(0, 0.3);
        const SPARK_GRAVITY = p.createVector(0, 0.05);

        class FireworksEnv{
            constructor(wrapperID, settings){
                this.wrapperID = wrapperID;
                this.frameRate = settings.frameRate || 60;
                this.backgroundColor = settings.backgroundColor || 'rgba(0%,0%,0%, 0)'; // 0 <= backgroundColor < 256
                this.canvas = null;

                this.rockets = [];
    
                this.frequency = settings.frequency || 0.05; // chance for a new rocket to be born in this frame
                this.maxRockets = settings.maxRockets || 15; // max amoutn of rocketsmaxRockets 
                this.ftl = settings.framesToLive || 100; // frames to live
                this.sparkSize = settings.sparkSize || 1.5; // size of sparks
                this.sparkSpeed = settings.sparkSpeed || 1; // speed of sparks
                this.minSparkAmount = settings.minSparkAmount || 20; // min amount of sparks per rocket
                this.maxSparkAmount = settings.maxSparkAmount || 100; // max amount of sparks per rocket
                this.minLaunchAcc = settings.minLaunchAcc || 16; // min accelaration at launch
                this.maxLaunchAcc = settings.maxLaunchAcc || 24; // max accelaration at launch

            }
        
            // connect canvas
            setCanvas(canvas){ 
                this.canvas = canvas;
            }
        
            // handle resize events (resize canvas to max size)
            resizeCanvas() {
                p.resizeCanvas(document.getElementById(this.wrapperID).clientWidth, document.getElementById(this.wrapperID).clientHeight);
            }

            launchRocket(){
                this.rockets.push(new Rocket(p.createVector(p.random(2) - 1, - ((this.minLaunchAcc + p.random(this.maxLaunchAcc - this.minLaunchAcc) * this.canvas.height / 700)))));

                // pop one rocket, if rockets > 10
                if(this.rockets.length >= this.maxRockets)
                    this.rockets.splice(0,1);
            }
                
        }

        // create environment
        env = new FireworksEnv(wrapperID, settings);

        class Spark{
            constructor(pos, vel){
                this.pos = pos;
                this.vel = vel;
            }

            accelerate(acc){
                this.vel.add(acc);
            }

            update(){
                this.vel.add(SPARK_GRAVITY);
                this.pos.add(this.vel);
            }

            draw(){
                p.point(this.pos.x, this.pos.y);
            }

        }

        class Rocket{
            constructor(acc = null){
                this.pos = p.createVector(p.random(env.canvas.width), env.canvas.height + 100) ; // below ground
                this.vel = acc || p.createVector(0, 0);
                this.color = p.color(p.random(255), p.random(1), 1, 1);
                this.sparks = [];
                this.ftl = null; // frames to live (after explosion)
            }

            explode(){

                this.ftl = env.ftl;

                let sparkAmount = env.minSparkAmount + p.random(env.maxSparkAmount - env.minSparkAmount);
                for(let i = 0; i < sparkAmount; i++){
                    this.sparks.push(new Spark(p.createVector(this.pos.x, this.pos.y), p.createVector(p.random(env.sparkSpeed * 2) - env.sparkSpeed, p.random(env.sparkSpeed * 2) - env.sparkSpeed), this.color));
                }
            }

            update(){
                this.vel.add(GRAVITY);
                this.pos.add(this.vel);

                // explode when turning arround
                if(this.vel.y >= 0 && this.sparks.length < 1){
                    this.explode();
                }
            }
        
            draw(rocket){

                if(this.sparks.length > 10){

                    // draw sparks
                    if(this.ftl >= 0){

                        this.color.setAlpha(1 - ( 1 / (env.ftl - this.ftl)));

                        p.stroke(this.color);
                        p.strokeWeight(env.sparkSize);

                        this.ftl = this.ftl - 1; // shorten ttl
                        for(let spark of this.sparks){
                            spark.update();
                            spark.draw();
                        }
                    }else{
                        this.sparks = []; // destroy sparks
                    }
                }else{
                    p.rotate(p.PI / 180 * this.vel.x * 4);
                    p.image(rocket, this.pos.x, this.pos.y);
                    p.rotate(-p.PI / 180 * this.vel.x * 4);
                }
            }
        }

        p.preload = function() {
            rocketImg = p.loadImage('rocket.png');
        }
    

        // run once
        p.setup = function () {

            // create new canvas - fill wrapper
            canvas = p.createCanvas(
                document.getElementById(env.wrapperID).clientWidth, 
                document.getElementById(env.wrapperID).clientHeight
            );

            // connect to canvas
            env.setCanvas(canvas);

            p.colorMode(p.HSB, 255, 1, 1, 1);
        }

        // run continous (frameRate)
        p.draw = function () {

            // add a new rocket every once in a while
            let add = (p.random(1) < env.frequency) ? true : false;

            if(add == true)
                env.launchRocket();

            p.clear();
    
            // set FrameRate
            p.frameRate(env.frameRate);
    
            // draw background
            p.background(env.backgroundColor);

            for(let rocket of env.rockets){
                rocket.update();
                rocket.draw(rocketImg);
            }

        }
    }, wrapperID); // attach to DOM

    // handle resizeEvents -> resize canvas to fill wrapper
    document.body.onresize = function() {
        env.resizeCanvas(document.getElementById(env.wrapperID).clientWidth, document.getElementById(env.wrapperID).clientHeight);
    };

    return env; 
    
}
