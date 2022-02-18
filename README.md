# fireworks.js - a simple fireworks engine using p5

## Usage

> include in your html file

```html
  <div id="fireworks-wrapper"></div>

  <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
  <script src="fireworks.js"></script>
```

> include the rocket-images folder

> include css for overlay-like fireworks (click through)
```css
#fireworks-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
    background-color: rgba(0,0,0,0);
}
```

> Create an environment

```js
fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper', 
    imgLoc = '/yourImagefolder/rocket-images', // TODO match location
    settings = {
        'frequency': 0.1, // of new rockets to randomly launch
        'maxRockets': 20,
        'ftl': 60, // frames to live after explosion
        'sparkSize': 1,
        'minSparkAmount': 20,
        'maxSparkAmount': 100,
        'sparkVel': 1.6,
        'letterSparkRandomness': 0.05, // make letter rockets look more natural
        'sparkColorFadeout': 0.05, 
        'pointOfExplosion': 2, // y velocity that triggers explosion
        'wordDuration': 1, // time between words (seconds)
        'meanLetterTimeout': 0.01, // time between letters (seconds)
        'letterDisplayVariation': 0.03, // random mini timeout between letter rockets
        'letterRandomness': 0.02 // random y offset for letter rockets

        /* 
            mode can be:
                - 'random'
                - 'manual'  // don't launch random rockets
                - 'auto'
                - 'hearts'
                - 'smileys'
                - 'cash'
                - 'symbols'
                - 'mixed *' -> * can be any shape like 'hearts', 'smileys' or 'cash'
                - default is 'auto'
        */

        'mode' = 'auto';
    }
);

```

> activate (start) / deactivate (pause) the event loop (deactivated by default)

```js
fireworksEnv.activate();

fireworksEnv.deactivate();
```

> send a message

```js
fireworksEnv.launchMessage('Hello World');
```

> fireworksEnv contains all relevant parameters that can be adjusted at runtime, e. g.

```js
fireworksEnv.mode = 'manual';
```

## Demo

https://max-montag.github.io/fireworks.js/

## Create your own fonts and shapes here

https://editor.p5js.org/Max-Montag/sketches/lZCj6UUaV

## License

This project is licensed under the terms of MIT license. Please see the LICENSE file for details.
