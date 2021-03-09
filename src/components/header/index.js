import { h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/logo.png'
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<img src={logo} />
		<nav>
			<Link activeClassName={style.active} href="/">帮助中心</Link>
			<Link activeClassName={style.active} href="/contact">联系我们</Link>
			<Link activeClassName={style.active} href="/login">登录 →</Link>
		</nav>
	</header>
);

export default Header;
