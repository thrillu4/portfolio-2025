import { CircleArrowRight, Github, House, Undo2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router'
import GetInTouch from '../components/GetInTouch'
import { projects } from '../data/projects'

const Noire = () => {
	const { title, color, type, bg, link, gitHub } = projects.filter(
		(proj) => proj.title === 'Noiré Pearl Shop'
	)[0]
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
	})

	const y = useTransform(scrollYProgress, [0, 0.5], ['-870px', '0px'])
	const scale = useTransform(scrollYProgress, [0, 0.5], [3, 1])
	const rotate = useTransform(scrollYProgress, [0, 0.5], ['0deg', '-5deg'])
	const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
	return (
		<div className='overflow-x-hidden' style={{ backgroundColor: color }}>
			<div className='relative z-30 ' ref={container}>
				<div className='pt-30 md:pb-100 lg:pb-50 pb-180 space-y-3'>
					<motion.h3
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className=' text-2xl md:text-3xl lg:text-5xl text-center font-medium'
					>
						{type} - 2025
					</motion.h3>
					<motion.h1
						style={{
							WebkitTextStroke: '2px #000',
							color: '#fff',
						}}
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-7xl  md:text-[200px] lg:text-[250px] xl:text-[300px] font-[Anton] tracking-tight text-center xl:leading-75'
					>
						Noiré Pearl Shop
					</motion.h1>
				</div>
				<div>
					<div className=' relative lg:w-190 xl:w-200 w-screen  mx-auto'>
						<motion.img
							loading='lazy'
							style={{ y, scale, rotate }}
							src={bg}
							alt={title}
							className='relative -z-10'
						/>
						<motion.div
							style={{ opacity, WebkitTextStroke: '1px #000', color: '#fff' }}
							className='absolute right-1/2 font-bold tracking-tighter bottom-40  lg:text-5xl xl:w-150'
						>
							A modern full-stack e-commerce application built with Next.js,
							Prisma, and Tailwind CSS.
						</motion.div>
						<motion.div
							style={{ opacity, WebkitTextStroke: '1px #000', color: '#fff' }}
							className='absolute left-1/2 font-bold tracking-tighter -bottom-10  lg:text-5xl xl:w-150'
						>
							Explore modern web development practices, combining server-side
							rendering, database management with Prisma, and clean UI design.
						</motion.div>
					</div>
					<div className='md:text-2xl font-bold justify-center flex items-center md:gap-10 gap-3 mt-30'>
						<a
							href={link}
							target='_blank'
							className={`md:border-4 border-2 border-white p-2  md:p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-[#10242B] hover:bg-white`}
						>
							LIVE DEMO <CircleArrowRight className='md:w-[35px] w-5' />
						</a>
						<a
							href={gitHub}
							target='_blank'
							className={`md:border-4 border-2 border-white p-2  md:p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-[#10242B] hover:bg-white`}
						>
							REPOSITORY <Github className='md:w-[35px] w-5' />
						</a>
					</div>
				</div>
				<div className='flex justify-center items-center mt-15 md:gap-20 gap-10 text-xs md:text-2xl'>
					<Link
						to={'/'}
						className='flex items-center gap-2 hover:underline transition duration-200 cursor-pointer'
					>
						<House className='w-4 md:w-auto' />
						BACK TO HOME
					</Link>
					<Link
						to={'/projects'}
						className='flex items-center gap-2 hover:underline transition duration-200 cursor-pointer'
					>
						BACK TO PROJECTS <Undo2 className='w-4 md:w-auto' />
					</Link>
				</div>
				<GetInTouch bg={color} color='#fff' />
			</div>
		</div>
	)
}

export default Noire
