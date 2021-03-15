import style from "./style.scss";
import '../../style/index.scss'
import { Link } from "preact-router/match";
import { h } from "preact";
import {useContext} from "preact/hooks";
import {ResponsiveContext} from "../app";

const Footer = () => {
  const responsive = useContext(ResponsiveContext)
  return (
    <div className={responsive?style.footer_1440:style.footer}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: "2rem",
            fontStyle: "italic",
            letterSpacing: "6px",
            fontWeight: "bold",
            color: "#041b37",
          }}
        >
          LIANHEART
        </div>
        <div style={{ color: "#041b37" }}>
          <div>© 2017 - 2020 UNIONMUSIC ALL RIGHTS RESERVED.</div>
          <div>京ICP备17045054号-10</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".6em",
          marginBottom: "2em",
          flexBasis: "auto",
        }}
      >
        <Link class={style.link} href="/">
          关于我们
        </Link>
        <div class={style.link}>/</div>
        <Link class={style.link} href="/">
          开放资源
        </Link>
        <div class={style.link}>/</div>
        <Link class={style.link} href="/">
          用户协议
        </Link>
        <div class={style.link}>/</div>
        <Link class={style.link} href="/">
          隐私协议
        </Link>
        <div class={style.link}>/</div>
        <Link class={style.link} href="/">
          侵权投诉
        </Link>
      </div>
      <div style={{ marginBottom: "2em", display: "flex", justifyContent: "space-between", alignItems: "center",gap:"2em" }}>
        <svg class="icon" aria-hidden="true" style={{color:"#041b37"}}>
          <use xlinkHref="#unidouyin1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" style={{color:"#041b37"}}>
          <use xlinkHref="#uniweixin1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" style={{color:"#041b37"}}>
          <use xlinkHref="#uniweibo"></use>
        </svg>
        <svg class="icon" aria-hidden="true" style={{color:"#041b37",width:"2.5em",height:"2.5em"}}>
          <use xlinkHref="#unigithub"></use>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
