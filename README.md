##renjson-cli
>Command line utilits for create visual novel
####installation via npm
```batch
npm install vnjson-cli -g
```
####help
```batch
vn help
```

####initialize project in the current directory
```batch
vn init
```

####run project
```batch
vn run
```
####

####build www project
```batch
vn build
```
####build platforms
```batch
vn build win32 linux32 osx32 win64 linux64 osx64
```
####run build
```batch
vn run --win32
```
####

####file structure
```batch
vn tree
```

```batch
game
├── build
│   ├── www
│   ├── win32
│   ├── linux32
│   ├── osx32
│   ├── win64
│   ├── linux64
│   └── osx64
├── plugins
│   ├── scenes.js
│   └── dialog_box.js
├── libs
│   └── paralax.min.js
├── icons
│   └── favicon.ico
├── scenes
│   ├── start
│   │   ├── assets
│   │   │   └── right_ladya.png
│   │   ├── chapter1.yml
│   │   └── chapter2.yml
│   └── lab
│       ├── assets
│       │   ├── backround.png
│       │   └── song4.mp3
│       ├── lab.yml
│       └── labuda.yml
├── style.css
├── layers.html
├── characters.yml
├── package.yml
└── config.yml
```


####Script example
```yaml 
- pr: Привет! Давненько не виделись
- al: Да уж, давненько.
  scene: room_hero
  audio: song1
- pr: Хорош болтать! Погнали в лабараторию
- al: Профессор вы слишком торопитесь. Это еще ни кому не помогало.
- pr: Алиса не тебе меня поучать!
  jump: start/chapter2
```
