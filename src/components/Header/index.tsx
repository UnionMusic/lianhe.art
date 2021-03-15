import { Link } from 'preact-router/match';
import { h } from "preact";
import style from './style.module.scss'
const Header = () => (
	<header class={style.header}>
		<span>LIANHEART</span>
		<nav>
			<Link href="/">帮助中心</Link>
			<Link href="/contact">联系我们</Link>
			<Link href="/login">登录 →</Link>
		</nav>
	</header>
);

export default Header;
