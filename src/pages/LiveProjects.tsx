import {
	MoveDirection,
	OutMode,
	type ISourceOptions,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { CircleArrowRight, Github, House, Undo2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import GetInTouch from '../components/GetInTouch'
import { projects } from '../data/projects'

const LiveProjects = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: '#FFBEBE',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: '#000000',
				},
				links: {
					color: '#000000',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	)

	const { color, type, link, gitHub } = projects[3]
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
	})

	const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
	return (
		<div style={{ backgroundColor: color }}>
			<div className='relative z-30  text-black' ref={container}>
				{init && (
					<Particles
						id='tsparticles'
						options={options}
						className='relative -z-60'
					/>
				)}

				<div className='pt-40 pb-120'>
					<motion.h3
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-5xl text-center font-medium'
					>
						{type} - 2025
					</motion.h3>
					<motion.h1
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-[300px] font-[Anton] tracking-tight text-center leading-75'
					>
						HANDLE LIVE <br /> PROJECTS
					</motion.h1>
				</div>
				<div>
					<div className=' relative w-200 mx-auto'>
						<motion.div
							style={{ opacity }}
							className='absolute right-1/2 font-bold tracking-tighter bottom-60 text-5xl w-150'
						>
							Functional web applications, including a To-Do List, Weather App,
							E-Commerce Cart, Expense Tracker, Calculator, and Quiz App.
						</motion.div>
						<motion.div
							style={{ opacity }}
							className='absolute left-2/3 font-bold tracking-tighter bottom-20 text-5xl w-150'
						>
							The site serves as both a learning tool and a demonstration of
							practical frontend development abilities.
						</motion.div>
					</div>
					<div className='text-2xl font-bold justify-center flex items-center gap-10 mt-60'>
						<a
							href={link}
							target='_blank'
							className={`border-4 border-black  p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-slate-800 hover:bg-black hover:text-white`}
						>
							LIVE DEMO <CircleArrowRight size={35} />
						</a>
						<a
							href={gitHub}
							target='_blank'
							className={`border-4 border-black  p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-slate-800 hover:bg-black hover:text-white`}
						>
							REPOSITORY <Github size={35} />
						</a>
					</div>
				</div>
				<div className='flex justify-center items-center mt-15 gap-20 text-2xl'>
					<Link
						to={'/'}
						className='flex items-center gap-2 hover:underline transition duration-200 cursor-pointer'
					>
						<House />
						BACK TO HOME
					</Link>
					<Link
						to={'/projects'}
						className='flex items-center gap-2 hover:underline transition duration-200 cursor-pointer'
					>
						BACK TO PROJECTS <Undo2 />
					</Link>
				</div>
				<GetInTouch bg={color} color='#000' />
			</div>
		</div>
	)
}

export default LiveProjects
