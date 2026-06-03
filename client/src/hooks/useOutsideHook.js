import { useEffect, useRef, useState } from 'react'

export const useOutsideClick = isInitialValue => {
	const [isOpen, setIsOpen] = useState(isInitialValue)
	const ref = useRef(null)

	const handleClick = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsOpen(false)
		}
	}
	useEffect(() => {
		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	})
	return { ref, isOpen, setIsOpen }
}
