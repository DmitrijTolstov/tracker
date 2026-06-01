import { useForm } from 'react-hook-form'
import Layout from '../../Layout'
import Button from '../../../UI/button/Button'
import Field from '../../../UI/field/Field'
import Loader from '../../../UI/loader/Loader'

import styles from './Auth.module.scss'

import { useState } from 'react'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onchange'
	})

	const isLoading = false
	const isAuthLoading = false

	const [type, setType] = useState('auth')

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<>
			<Layout heading='Sign in' bgImage={'./public/auth.jpg'}></Layout>
			<div className='wrapper-inner-page'>
				{isLoading && isAuthLoading && <Loader></Loader>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email...'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'password is required'
						}}
						type='password'
						placeholder='Enter password...'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
