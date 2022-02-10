fireworksEnv = fireworks(
    'fireworks-wrapper', 
    settings = {
        'backgroundColor': null,
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
