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
        'mode': 'mixed hearts',
    }
);

function launch(){
    fireworksEnv.writeMessage(document.getElementById('launch-text').value);
}

function changeMode(){
    var select = document.getElementById('mode-select');
    var mode = select.options[select.selectedIndex].text;
    fireworksEnv.mode = mode;
}

const modes = ['mixed hearts', 'mixed smileys', 'mixed cash', 'manual', 'auto', 'random', 'hearts', 'smileys', 'cash']

var s = document.getElementById('mode-select');
for (let mode of modes) {
    s.options[s.options.length]= new Option(mode, '1');
}

setTimeout(()=>{
    fireworksEnv.writeMessage("Hey there ♥");
}, 500);