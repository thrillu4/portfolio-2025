import { NavLink } from 'react-router'

const NavBar = () => {
	return (
		<nav className='container relative z-40'>
			<ul className='flex items-center justify-between text-3xl font-bold'>
				<NavLink
					to={'/'}
					className={({ isActive }) =>
						`${
							isActive
								? 'line-through '
								: 'no-underline hover:border-white hover:scale-105'
						} border-b-2 border-transparent transition-all duration-300  py-4 px-10`
					}
				>
					HOME
				</NavLink>
				<NavLink
					to={'/about'}
					className={({ isActive }) =>
						`${
							isActive
								? 'line-through '
								: 'no-underline hover:border-white hover:scale-105'
						} border-b-2 border-transparent transition-all duration-300  py-4 px-10`
					}
				>
					ABOUT
				</NavLink>
				<NavLink
					to={'/projects'}
					className={({ isActive }) =>
						`${
							isActive
								? 'line-through '
								: 'no-underline hover:border-white hover:scale-105 '
						} border-b-2 border-transparent transition-all duration-300  py-4 px-10`
					}
				>
					PROJECTS
				</NavLink>
				<NavLink
					to={'/contact'}
					className={({ isActive }) =>
						`${
							isActive
								? 'line-through '
								: 'no-underline hover:border-white hover:scale-105'
						} border-b-2 border-transparent transition-all duration-300  py-4 px-10`
					}
				>
					CONTACT
				</NavLink>
			</ul>
		</nav>
	)
}

export default NavBar
