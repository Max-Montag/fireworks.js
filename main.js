fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper', 
    imgLoc = 'rocket.png',
    settings = {
        'framesToLive': 90,
        'sparkSize': 1.5,
        'sparkSpeed': 1.5,
        'minSparkAmount': 20,
        'maxSparkAmount': 100,
        'mode': 'auto',
        'wordDuration': 1,

    }
);

const modes = ['auto', 'random', 'manual', 'mixed hearts', 'mixed smileys', 'mixed cash', 'mixed symbols', 'hearts', 'smileys', 'cash', 'symbols']

var s = document.getElementById('mode-select');
for (let mode of modes) {
    s.options[s.options.length]= new Option(mode, '1');
}

function changeMode(){
    var select = document.getElementById('mode-select');
    var mode = select.options[select.selectedIndex].text;
    fireworksEnv.mode = mode;
}

function launch(){
    fireworksEnv.writeMessage(document.getElementById('launch-text').value);
}

setTimeout(()=>{
    fireworksEnv.writeMessage(document.getElementById('launch-text').value);
}, 500);