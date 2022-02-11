# fireworks.js - a simple fireworks engine using p5

## Usage

> include in your html file

```html
  <div id="fireworks-wrapper"></div>

  <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/max-montag/fireworks.js/fireworks.min.js"></script>
```

> include rocket.png in your img folder

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

> Create an environment and start the simulation

```js
fireworksEnv = fireworks(
    wrapperID = 'fireworks-wrapper', 
    imgLoc = '/yourImagefolder/rocket.png', // match img folder!
    settings = {
        'frequency': 0.05,
        'maxRockets': 15,
        'framesToLive': 100, // after explosion
        'sparkSize': 1.5, 
        'sparkSpeed': 1, 
        'minSparkAmount': 20,
        'maxSparkAmount': 100,
        'minLaunchAcc': 16,
        'maxLaunchAcc': 24,
        'wordDuration': 4, // time between words in seconds

        /* 
            mode can be:
                - 'manual'
                - 'auto'
                - 'random'
                - 'hearts'
                - 'smileys'
                - 'cash
                - 'mixed *' -> * can be any shape like 'hearts', 'smileys' or 'cash'
                - default ist 'auto'
        */

        'mode' = 'mixed hearts';
    }
);
```

> fireworksEnv contains all relevant parameters that can be adjusted at runtime, e. g.

```js
fireworksEnv.mode = 'manual'; // do not launch random rockets
```

## Demo

https://max-montag.github.io/fireworks.js/

## Create your own fonts and shapes here

https://editor.p5js.org/Max-Montag/sketches/lZCj6UUaV


## License

This project is licensed under the terms of MIT license. Please see the LICENSE file for details.
