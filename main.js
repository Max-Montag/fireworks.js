fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper',
    imgLoc = 'rocket-images'
);

const modes = ['auto', 'random', 'manual', 'mixed hearts', 'mixed smileys', 'mixed cash', 'mixed symbols', 'hearts', 'smileys', 'cash', 'symbols', 'clock']

var s = document.getElementById('mode-select');
for (let mode of modes) {
    s.options[s.options.length] = new Option(mode, '1');
}

function changeMode() {
    var select = document.getElementById('mode-select');
    var mode = select.options[select.selectedIndex].text;

    if(fireworksEnv.mode != 'clock' && mode == 'clock')
        fireworksEnv.clock(true);
    else
        fireworksEnv.clock(false);

    fireworksEnv.mode = mode;
}

function launch() {
    fireworksEnv.launchMessage(document.getElementById('launch-text').value);
}

// activate event loop
fireworksEnv.activate();

// launch content of textfield
launch();
