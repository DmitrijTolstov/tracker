import { useOutsideClick } from '../../../hooks/useOutsideHook'
import styles from './Hamburger.module.scss'
import Menu from './Menu'
import { useState } from 'react'

import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

const Hamburger = () => {
	const { ref, isOpen, setIsOpen } = useOutsideClick(false)

	return (
		<>
			<div className={styles.wrapper} ref={ref}>
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<IoClose color='#fff' size={27} />
					) : (
						<CgMenuRight color='#fff' size={27} />
					)}
				</button>
				<Menu isOpen={isOpen}></Menu>
			</div>
		</>
	)
}

export default Hamburger
