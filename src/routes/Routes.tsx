import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Furniro from '../pages/Furniro'
import GodOfWar from '../pages/GodOfWar'
import Home from '../pages/Home'
import LiveProjects from '../pages/LiveProjects'
import NotFound from '../pages/NotFound'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import TaskManager from '../pages/TaskManager'

const ProjectRoutes = () => {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/skills' element={<Skills />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/projects/furniro' element={<Furniro />} />
			<Route path='/projects/task-manager' element={<TaskManager />} />
			<Route path='/projects/godofwar' element={<GodOfWar />} />
			<Route path='/projects/live-projects' element={<LiveProjects />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	)
}

export default ProjectRoutes
