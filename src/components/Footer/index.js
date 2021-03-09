import style from "./style.css";
import { Link } from "preact-router/match";

const Footer = () => {
  return (
    <div class={style.footer}>
      <div>
        <div class={style.choose_title_1}>CHOOSE US</div>
        <div class={style.choose_title_2}>NEW DIGITAL RIGHTS MANMGEMENT</div>
        <div style={{ color: "#b3d9ff" }}>
          全新数字版权管理平台，为你提供数字监控平台出品以及版税收益等一切服务
        </div>
        <div style={{ color: "#b3d9ff", marginBottom: "6rem",marginTop:"2rem" }}>
          是一家服务|个人|数据为一体的平台
        </div>
        <Link class={style.join_button} href="/">
          立刻加入
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontSize: "40px",
            fontStyle: "italic",
            letterSpacing: "6px",
            fontWeight: "bold",
            color: "#b3d9ff",
          }}
        >
          LIANHEART
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", paddingTop: "60px" }}>
            <ul style={{ paddingRight: "60px" }}>
              <li>首页</li>
              <li>关于我们</li>
              <li>用户协议</li>
              <li>开放资源</li>
            </ul>
            <ul>
              <li>微博</li>
              <li>公众号</li>
              <li>抖音</li>
            </ul>
          </div>

          <ul>
            <li>隐私协议</li>
            <li>侵权投诉</li>
          </ul>

          <div style={{color:"#b3d9ff",paddingLeft:"40px",marginTop:"100px"}}>
            <div>COPYRIGHT © 2017 - 2020 UNIONMUSIC.ALL RIGHTS RESERVED.ICP </div>
            <div>
              备案：京ICP备17045054号-10联合互娱（北京）文化有限公司 ©版权所有
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
