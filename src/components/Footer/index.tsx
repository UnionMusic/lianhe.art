import style from "./style.module.scss";
import { Link } from "preact-router/match";
import { h } from 'preact'
import douyin from '../../assets/images/douyin.png'
import weixin from '../../assets/images/weixin.png'
import weibo from '../../assets/images/weibo.png'
import github from '../../assets/images/github.png'

const Footer = () => {
  return (
    <div class={style.footer}>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div style={{ color: "#b3d9ff" }}>
          <div>© 2017 - 2020 UNIONMUSIC ALL RIGHTS RESERVED.</div>
          <div>京ICP备17045054号-10</div>
        </div>
      </div>
      <div style={{ marginBottom: "40px"}}>
        <Link class={style.link} href="/">
          关于我们
        </Link>
        <span style={{ margin: "0 20px" }}>/</span>
        <Link class={style.link} href="/">
          开放资源
        </Link>
        <span style={{ margin: "0 20px" }}>/</span>
        <Link class={style.link} href="/">
          用户协议
        </Link>
        <span style={{ margin: "0 20px" }}>/</span>
        <Link class={style.link} href="/">
          隐私协议
        </Link>
        <span style={{ margin: "0 20px" }}>/</span>
        <Link class={style.link} href="/">
          侵权投诉
        </Link>
      </div>
      <div style={{ marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
            <img src={douyin} />
        </div>
        <div style={{margin:"0 20px"}}>
            <img src={weixin} />
        </div>
        <div>
            <img src={weibo} />
        </div>
        <div style={{margin:"0 100px 0 20px"}}>
            <img src={github} style={{height:"48px"}} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
