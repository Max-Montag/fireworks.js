fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper', 
    imgLoc = 'rocket.png',
    settings = {
        'framesToLive': 90,
        'sparkSize': 1.5,
        'sparkSpeed': 1.5,
        'minSparkAmount': 20,
        'maxSparkAmount': 100,
        'mode': 'random',
        'wordDuration': 1,

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

const modes = ['random', 'manual', 'auto', 'mixed hearts', 'mixed smileys', 'mixed cash', 'mixed symbols', 'hearts', 'smileys', 'cash', 'symbols']

var s = document.getElementById('mode-select');
for (let mode of modes) {
    s.options[s.options.length]= new Option(mode, '1');
}

setTimeout(()=>{
    fireworksEnv.writeMessage("Hey There ♥");
}, 500);