import * as React from "react";
import AwesomeCyberPlayer from "../../components/awesome-cyber-player";

type Props = {
  /** 数据??? */
};
interface State {
  /** 数据??? */
}

/**
 * 类测试组件模板 TestClass
 * created by liushanbao
 * @author liushanbao
 * @class TestClass
 */
export default class TestClass extends React.PureComponent<Props, State> {
  static defaultProps = {};

  state: State = {};
  
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/** demo code */}
        <AwesomeCyberPlayer url={"xxx"}/>
      </div>
    );
  }
}
