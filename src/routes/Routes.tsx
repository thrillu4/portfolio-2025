import { lazy } from 'react'
import { Route, Routes } from 'react-router'
import Chatty from '../pages/Chatty'
import Dashboard from '../pages/Dashboard'
import Noire from '../pages/Noire'
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Furniro = lazy(() => import('../pages/Furniro'))
const GodOfWar = lazy(() => import('../pages/GodOfWar'))
const Home = lazy(() => import('../pages/Home'))
const LiveProjects = lazy(() => import('../pages/LiveProjects'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Projects = lazy(() => import('../pages/Projects'))
const TaskManager = lazy(() => import('../pages/TaskManager'))

const ProjectRoutes = () => {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/projects/furniro' element={<Furniro />} />
			<Route path='/projects/chatty' element={<Chatty />} />
			<Route path='/projects/task-manager' element={<TaskManager />} />
			<Route path='/projects/godofwar' element={<GodOfWar />} />
			<Route path='/projects/live-projects' element={<LiveProjects />} />
			<Route path='/projects/noire' element={<Noire />} />
			<Route path='/projects/dashboard' element={<Dashboard />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	)
}

export default ProjectRoutes
