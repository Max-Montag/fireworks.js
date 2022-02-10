function fireworks(wrapperID, settings) {

    var env;

    // create p5 instance
    new p5((p)=>{

        const GRAVITY = p.createVector(0, 9.81);

        class FireworksEnv{
            constructor(wrapperID, settings){
                this.wrapperID = wrapperID;
                this.frameRate = settings.frameRate || 60;
                this.backgroundColor = settings.backgroundColor || 'rgba(0%,0%,0%, 0)'; // 0 <= backgroundColor < 256
                this.canvas = null;

                this.rockets = [];
    
                this.frequency = settings.frequency || 50; // mean rockets per min
                this.size = settings.size || 20; // size of fireworks
                this.minSparkAmount = settings.minSparkAmount || 80; // min amount of sparks per rocket
                this.maxSparkAmount = settings.maxSparkAmount || 20; // min amount of sparks per rocket
                this.minLaunchAcc = settings.minLaunchAcc || 20; // min accelaration at launch
                this.maxLaunchAcc = settings.maxLaunchAcc || 10; // max accelaration at launch

            }
        
            // connect canvas
            setCanvas(canvas){ 
                this.canvas = canvas 
            }
        
            // handle resize events (resize canvas to max size)
            resizeCanvas() {
                p.resizeCanvas(document.getElementById(this.wrapperID).clientWidth, document.getElementById(this.wrapperID).clientHeight);
            }

            launchRocket(){
                this.rockets.push(new Rocket(p.createVector(0, - (this.minLaunchAcc + p.random(this.maxLaunchAcc - this.minLaunchAcc)))));
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
                this.vel.add(GRAVITY);
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
                this.sparks = [];
            }

            explode(){
                let sparkAmount = env.minSparkAmount + p.random(env.maxSparkAmount - env.minSparkAmount);
                for(let i = 0; i < sparkAmount; i++){
                    this.sparks.push(new Spark(p.createVector(this.pos.x + p.random(100), this.pos.y + p.random(100)), this.vel));
                }
            }

            update(){
                this.pos.add(this.vel);

                // if 30% of the screen have been passed -> explode with a chance of 40%
                if(this.pos.x < env.canvas.height / 2 && p.random(1) > 0.4){
                    this.explode();
                }
            }
        
            draw(){

                console.log(this.pos)

                p.point(this.pos.x, this.pos.y);

                // draw sparks
                for(let spark of this.sparks){
                    spark.update();
                    spark.draw();
                }
            }
        
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

            p.strokeWeight(env.size);
        }

        // run continous (frameRate)
        p.draw = function () {

            // add a new rocket every once in a while
            let add = (p.random(100 - env.frequency) < 1) ? true : false;

            if(add == true)
                env.launchRocket();

            p.clear();
    
            // set FrameRate
            p.frameRate(env.frameRate);
    
            // draw background
            p.background(env.backgroundColor);

            for(let rocket of env.rockets){
                rocket.update();
                rocket.draw();
            }

        }
    }, wrapperID); // attach to DOM

    // handle resizeEvents -> resize canvas to fill wrapper
    document.body.onresize = function() {
        env.resizeCanvas(document.getElementById(env.wrapperID).clientWidth, document.getElementById(env.wrapperID).clientHeight);
    };

    return env; 
    
}
