import { Link } from 'preact-router/match';
import { h } from "preact";
import style from './style.module.scss'

const Header = () => (
	<header className={style.header}>
		<span style={{fontSize:"3rem",fontWeight:"bold",lineHeight:"60px",fontStyle:"italic",letterSpacing:"6px"}}>LIANHEART</span>
		<nav>
			<Link href="/">帮助中心</Link>
			<Link href="/contact">联系我们</Link>
			<Link href="/login">登录 →</Link>
		</nav>
	</header>
);

export default Header;
