import { Link } from 'preact-router/match';
import style from './style.css'

const Header = () => (
	<header class={style.header}>
		<span style={{fontSize:"3rem",fontWeight:"bold",lineHeight:"60px",fontStyle:"italic",letterSpacing:"6px"}}>LIANHEART</span>
		<nav>
			<Link activeClassName={style.active} href="/">帮助中心</Link>
			<Link activeClassName={style.active} href="/contact">联系我们</Link>
			<Link activeClassName={style.active} href="/login">登录 →</Link>
		</nav>
	</header>
);

export default Header;
