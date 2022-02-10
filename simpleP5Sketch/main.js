 // create environment
const simpleP5ketchEnv = new SimpleP5SketchEnv(
    wrapperID = 'simpleP5Sketch-wrapper', 
    settings = {
        'backgroundColor': 50,
    }
)


// create canvas and attach to DOM
simpleP5SketchCanvas(simpleP5ketchEnv);
