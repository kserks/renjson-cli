

## User scripts src
__`label.yaml`__
```yaml
- print: hello world
- print: It's my simple visual novel
  background: bg1
  audio:
    id: mainTheme
    loop: false
    volume: 0.4
- jump: label2
```
## User scripts dist
```json
{
  "label": [
    {"print": "hello world"},
    {
      "print": "It's my simple visual novel",
      "background": "bg1",
      "audio": {
        "id": "mainTheme",
        "loop": false,
        "volume": 0.4
      }
    },
    {"jump": "label2"}
  ],
  
  "label2": []
}
```


## Game src

```plane_text
src
├── scenes
│   ├── start
│   │   ├── assets
│   │   │     ├── background.png
│   │   │     └── audio.mp3
│   │   ├── label1.yaml
│   │   └── chapter2.yaml
│   └── lab
│       ├── start.yaml
│       └── lab.yaml
├── plugins
│   ├── my-simple-plugin
│   │   ├── screen.html
│   │   ├── style.css
│   │   └── index.js
│   └── plugin
│       └── index.js
├── icons
│   ├── favicon.png    //140kB
│   └── logo32x32.png  //219kb
└── package.yaml
```


## Game dist
```plane_text
public/game
├── assets
│   ├── room_hero.png
│   ├── prof_norm.png
│   └── errors.mp3
├── icons
│   ├── favicon.png    //54kB
│   └── logo32x32.png  //113kb
├── scenes
│   ├── ru-RU
│   │   ├── start.json
│   │   └── lab.json
│   └── en-US
│       ├── start.json
│       └── lab.json
├── style.css
├── plugins.bundle.js
└── screens.html

```

[spec.game-dir-tree](https://github.com/vnjson/spec/blob/master/game-dir-tree.md)

___

### ToDo

- [x] yaml scenes to json
- [ ] png compressor
- [ ] audio sprite
- [ ] audio format converter



