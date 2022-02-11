fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper', 
    imgLoc = 'rocket.png',
    settings = {
        'frequency': 0.05,
        'framesToLive': 100,
        'sparkSize': 1.5,
        'sparkSpeed': 1,
        'minSparkAmount': 20,
        'maxSparkAmount': 100,
        'minLaunchAcc': 16,
        'maxLaunchAcc': 24,
        'mode': 'auto' 
    }
);

function launch(){
    fireworksEnv.writeMessage(document.getElementById('launch-text').value);
}


setTimeout(()=>{
    fireworksEnv.writeMessage("Hey there");
}, 500);