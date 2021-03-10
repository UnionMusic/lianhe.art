import style from "./style.css";
import { Link } from "preact-router/match";

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
          <div>© 2017 - 2020 UNIONMUSIC ALL RIGHTS RESERVED</div>
          <div>京ICP备17045054号-10</div>
        </div>
      </div>
      <div>
        <Link class={style.link} href="/">
          关于我们
        </Link>
        <span style={{ margin: "0 10px" }}>/</span>
        <Link class={style.link} href="/">
          开放资源
        </Link>
        <span style={{ margin: "0 10px" }}>/</span>
        <Link class={style.link} href="/">
          用户协议
        </Link>
        <span style={{ margin: "0 10px" }}>/</span>
        <Link class={style.link} href="/">
          隐私协议
        </Link>
        <span style={{ margin: "0 10px" }}>/</span>
        <Link class={style.link} href="/">
          侵权投诉
        </Link>
      </div>
    </div>
  );
};

export default Footer;
