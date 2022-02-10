fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper', 
    imgLoc = 'rocket.png',
    settings = {
        'frequency': 0.05,
        'maxRockets': 15,
        'framesToLive': 100,
        'sparkSize': 1.5,
        'sparkSpeed': 1,
        'minSparkAmount': 20,
        'maxSparkAmount': 100,
        'minLaunchAcc': 16,
        'maxLaunchAcc': 24,
    }
);

function testBtn1() {
    if(fireworksEnv.sparkSpeed < 3)
        fireworksEnv.sparkSpeed += 0.05;
}

function testBtn2() {
    if(fireworksEnv.sparkSpeed > 0)
        fireworksEnv.sparkSpeed -= 0.05;
}
