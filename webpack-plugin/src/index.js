import React from "react";
import ReactDom from "react-dom";

function App() {
  return (
    <div>
      <h3>웹팩 플러그인 테스트</h3>
      <p>html-webpack-plugin 플러그인을 사용</p>
      <p>{`앱 버전은 ${APP_VERSION}`}</p>
      <p>{`10 * 10 = ${TEN * TEN}`}</p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
