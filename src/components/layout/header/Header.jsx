import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/Hamburger'
const Header = ({ backLink }) => {
	const { isAuth } = useAuth()
	return (
		<>
			<header className={styles.Header}>
				<button onClick={() => {}}>
					<FiArrowLeft></FiArrowLeft>
				</button>
				{/* User profile */}
				<Hamburger></Hamburger>
			</header>
		</>
	)
}

export default Header
