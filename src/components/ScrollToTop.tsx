import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.history.scrollRestoration = 'manual'
		const timer = setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'auto' })
		}, 100)

		return () => clearTimeout(timer)
	}, [pathname])

	return null
}

export default ScrollToTop
