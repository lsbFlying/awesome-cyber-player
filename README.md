## AwesomeCyberPlayer
封装了cyber-player的视频播放组件

## Install
```sh
npm i awesome-cyber-player
```

## Usage
```tsx
import AwesomeCyberPlayer from "awesome-cyber-player";

function App() {
  const url = 'xxx';
  return (
    <AwesomeCyberPlayer
      url={url}
      // 针对需要加密的携带token的视频
      // token={"xxx"}
      // width={"100%"}
      // height={"100%"}
    />
  );
}
```

## License
[MIT License](https://github.com/lsbFlying/awesome-cyber-player/blob/master/LICENSE) (c) [刘善保](https://github.com/lsbFlying)
