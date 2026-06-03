import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

import { FiArrowLeft } from 'react-icons/fi'
import { IoMdArrowBack } from 'react-icons/io'
import { TfiUser } from 'react-icons/tfi'

const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<>
			<header className={styles.header}>
				{location.pathname !== '/' ? (
					<button
						onClick={() => {
							navigate(backLink)
						}}
					>
						<FiArrowLeft fill='#fff' size={27}></FiArrowLeft>
					</button>
				) : (
					<>
						<button onClick={() => navigate('/profile')}>
							<TfiUser fill='#fff' size={27}></TfiUser>
						</button>
					</>
				)}
				<Hamburger></Hamburger>
			</header>
		</>
	)
}

export default Header
