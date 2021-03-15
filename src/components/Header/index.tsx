import { Link } from "preact-router/match";
import { h } from "preact";
import style from "./style.scss";
import {useContext} from "preact/hooks";
import {ResponsiveContext} from "../app";

const Header = () => {
  const responsive = useContext(ResponsiveContext)
  return (
    <header class={responsive?`${style.header_1200}`:`${style.header}`}>
      <span>LIANHEART</span>
      <nav>
        <Link href="/">帮助中心</Link>
        <Link href="/contact">联系我们</Link>
        <Link href="/login">登录 →</Link>
      </nav>
    </header>
  );
};

export default Header;
