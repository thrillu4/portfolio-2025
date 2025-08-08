import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Furniro from '../pages/Furniro'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import GodOfWar from '../pages/GodOfWar'

const ProjectRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/skills' element={<Skills />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/projects/furniro' element={<Furniro />} />
			<Route path='/projects/godofwar' element={<GodOfWar />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	)
}

export default ProjectRoutes
