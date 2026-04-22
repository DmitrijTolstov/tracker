import cn from 'clsx'
import { menu } from './menu.data'
import styles from './Menu.module.scss'

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
					;<li key={`menu-${idx}`}>{item.title}</li>
				})}
				<li>
					<button onClick={logoutHandler}>logOut</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
