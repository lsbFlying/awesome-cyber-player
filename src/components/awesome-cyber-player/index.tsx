import * as React from "react";
import { ICSS, AwesomeCyberPlayerProps, AwesomeCyberPlayerState } from "../interface";
import uniqueId from "lodash.uniqueid";
import "./lib/cyberplayer";

/**
 * 封装百度的cyber播放器
 * @class AwesomeCyberPlayer
 * @author liushanbao
 * created by liushanbao
 */
export default class AwesomeCyberPlayer extends React.PureComponent<AwesomeCyberPlayerProps, AwesomeCyberPlayerState> implements ICSS {
  
  state: AwesomeCyberPlayerState = {
    statusId: `${uniqueId("cyberPlayer")}`,
  };
  
  componentDidUpdate(prevProps: Readonly<AwesomeCyberPlayerProps>, prevState: Readonly<AwesomeCyberPlayerState>, snapshot?: any) {
    if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
      const { statusId } = this.state;
      const { url, width, height } = this.props;
      this.initVideoPlayer(statusId, url, width, height);
    }
  }
  
  componentDidMount(): void {
    const { statusId } = this.state;
    const { url, width, height } = this.props;
    this.initVideoPlayer(statusId, url, width, height);
  }

  render() {
    console.log("alpha.1");
    const { className, style, id } = this.props;
    const { statusId } = this.state;
    return (
      <div
        id={id}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          ...style,
        }}
      >
        <div id={statusId}/>
      </div>
    );
  }

  /** 视频播放器 */
  initVideoPlayer = (
    domId: string,
    url: string = "",
    width: number | string = "100%",
    height: number | string = "100%",
  ) => {
    const { token } = this.props;
    if (!url) return;
    const player = window.cyberplayer(`${domId}`).setup({
      width,
      height,
      file: url,
      fallbackfile: url,
      autostart: true,
      stretching: "uniform",
      volume: 100,
      controls: "over",
      controlbar: {
        barLogo: false, // 不显示logo
        barLogoUrl: "http://www.darongshutech.com/",
        canDrag: true,
      },
      rtmp: {
        reconnecttime: 5, // rtmp直播的重连次数
        bufferlength: 1, // 缓冲多少秒之后开始播放 默认1秒
      },
      ak: "26d8fb5253dd492ba9fce986a31fdeae", // 公有云平台注册即可获得accessKey
      tokenEncrypt: token ? "true" : undefined, // 说明使用token加密
    });
    if (token) {
      player.on("beforePlay", (e: any) => {
        setTimeout(() => {
          player.setToken(e.file, token);
        }, 0);
      });
    }
  }
}

export * from "../interface";
