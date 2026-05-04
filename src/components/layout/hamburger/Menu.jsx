import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import cn from 'clsx'

const Menu = ({ isOpen }) => {
	const logoutHandler = () => {}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isOpen
			})}
		>
			<ul>
				{menu.map((item, idx) => {
					return <li key={`menu-${idx}`}>{item.title}</li>
				})}
				<li>
					<button onClick={logoutHandler}>logOut</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
