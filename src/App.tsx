import Lenis from 'lenis'
import { useEffect } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import ProjectRoutes from './routes/Routes'

function App() {
	// smooth scroll
	useEffect(() => {
		const lenis = new Lenis()
		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])
	//
	return (
		<>
			<ScrollToTop />
			<NavBar />
			<ProjectRoutes />
			<Footer />
		</>
	)
}

export default App
