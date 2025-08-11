import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navLinks = [
		{ to: '/', label: 'HOME' },
		{ to: '/about', label: 'ABOUT' },
		{ to: '/projects', label: 'PROJECTS' },
		{ to: '/contact', label: 'CONTACT' },
	]

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflowY = 'hidden'
			document.body.style.overflowY = 'hidden'
		} else {
			document.documentElement.style.overflowY = ''
			document.body.style.overflowY = ''
		}
		return () => {
			document.documentElement.style.overflowY = ''
			document.body.style.overflowY = ''
		}
	}, [isOpen])

	return (
		<nav className='container relative z-90'>
			<div className='hidden md:flex items-center justify-between md:text-2xl lg:text-3xl font-bold'>
				{navLinks.map((link) => (
					<NavLink
						key={link.label}
						to={link.to}
						className={({ isActive }) =>
							`${
								isActive
									? 'line-through '
									: 'no-underline hover:border-white hover:scale-105'
							} border-b-2 border-transparent transition-all duration-300  py-4 px-10`
						}
					>
						{link.label}
					</NavLink>
				))}
			</div>

			<div className='md:hidden absolute right-4 z-60  top-4'>
				<button
					type='button'
					aria-label='Navigation bar'
					role='button'
					className='cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}
				>
					{!isOpen && <Menu aria-label='Open menu' size={40} />}
				</button>
			</div>

			{isOpen && (
				<div className='bg-black text-white fixed z-50 h-screen w-full '>
					<button
						className='pt-4 pr-4 cursor-pointer w-screen flex justify-end '
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen && <X size={40} className='text-white' />}
					</button>
					<div className='h-full flex flex-col justify-center tracking-tighter text-5xl font-extrabold '>
						{navLinks.map((link) => (
							<NavLink
								key={link.label}
								to={link.to}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`${
										isActive
											? 'line-through '
											: 'no-underline hover:border-white hover:scale-105'
									} border-b-2 border-transparent transition-all duration-300  py-4 px-10`
								}
							>
								{link.label}
							</NavLink>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}

export default NavBar
