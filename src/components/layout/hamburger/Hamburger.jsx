import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import Menu from './Menu'

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div>
				<button onClick={() => setIsOpen(!isOpen)}>
					<CgMenuRight color='white' />
				</button>
				<Menu isOpen={isOpen}></Menu>
			</div>
		</>
	)
}

export default Hamburger
