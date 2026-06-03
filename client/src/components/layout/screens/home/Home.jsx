import { use, useState } from 'react'
import Layout from '../../Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../../UI/button/Button'
import styles from './Home.module.scss'
import { useAuth } from '../../../../hooks/useAuth'

function Home() {
	const naviagate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<>
			<Layout bgImage={'./public/workout-images-banner.jpg'}>
				<Button
					clickHandler={() => naviagate(isAuth ? '/new-workout' : '/auth')}
				>
					{isAuth ? 'New' : 'Sign in'}
				</Button>
				<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			</Layout>
		</>
	)
}

export default Home
