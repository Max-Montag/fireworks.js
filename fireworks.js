function fireworks(wrapperID, settings) {

    var env;

    // create p5 instance
    new p5((p)=>{

        class FireworksEnv{
            constructor(wrapperID, settings){
                this.wrapperID = wrapperID;
                this.frameRate = settings.frameRate || 60;
                this.backgroundColor = settings.backgroundColor || 'rgba(0%,0%,0%, 0)'; // 0 <= backgroundColor < 256
                this.canvas = null;

                this.rockets = [];
    
                this.frequency = settings.frequency || 30; // mean rockets per min
                this.sparkAmount = settings.sparkAmount || 80; // amount of sparks per rocket
                this.sparkAmountSpread = settings.sparkAmountSpread || 20; // amount of sparks that may be added

            }
        
            // connect canvas
            setCanvas(canvas){ 
                this.canvas = canvas 
            }
        
            // handle resize events (resize canvas to max size)
            resizeCanvas() {
                p.resizeCanvas(document.getElementById(this.wrapperID).clientWidth, document.getElementById(this.wrapperID).clientHeight);
            }
                
        }

        // create environment
        env = new FireworksEnv(wrapperID, settings);

        class Spark{
            constructor(vel){
                this.vel = vel;
            }

            applyAcc(){
                
            }

            update(){

            }

            draw(){
        
            }

            destroy(){
        
            }
        }

        class Rocket{
            constructor(){
                this.vel = createVector(0, 0);;
                this.sparks = [];
            }

            update(){

            }
        
            draw(){
        
            }

            explode(){
                for(let i = 0; i < env.sparkAmount + p.random(env.sparkAmountSpread); i++){
                    this.sparks.push(new Spark(this.vel));
                }
            }
        
            destroy(){
        
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
        }

        // run continous (frameRate)
        p.draw = function () {

            p.clear();
    
            // set FrameRate
            p.frameRate(env.frameRate);
    
            // draw background
            p.background(env.backgroundColor);

            // TODO
            p.rect(p.mouseX,p.mouseY,60,60)

        }
    }, wrapperID); // attach to DOM

    // handle resizeEvents -> resize canvas to fill wrapper
    document.body.onresize = function() {
        env.resizeCanvas(document.getElementById(env.wrapperID).clientWidth, document.getElementById(env.wrapperID).clientHeight);
    };

    return env; 
    
}
