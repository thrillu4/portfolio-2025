import { CircleArrowRight, Github, House, Undo2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router'
import GetInTouch from '../components/GetInTouch'
import { projects } from '../data/projects'

const Chatty = () => {
	const { title, color, type, bg, link, gitHub } = projects.filter(
		(proj) => proj.title === 'CHATTY'
	)[0]
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
	})

	const y = useTransform(scrollYProgress, [0, 0.5], ['-770px', '0px'])
	const scale = useTransform(scrollYProgress, [0, 0.5], [4, 1])
	const rotate = useTransform(scrollYProgress, [0, 0.5], ['0deg', '-5deg'])
	const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
	return (
		<div className='overflow-x-hidden' style={{ backgroundColor: color }}>
			<div className='relative z-30 ' ref={container}>
				<div className='pt-30 md:pb-100 lg:pb-50 pb-180'>
					<motion.h3
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-2xl md:text-3xl lg:text-5xl text-center font-medium'
					>
						{type} - 2025
					</motion.h3>
					<motion.h1
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-7xl md:text-[200px] lg:text-[250px] xl:text-[300px] font-[Anton] tracking-tight text-center xl:leading-75'
					>
						MODERN CHATTY WEB APP
					</motion.h1>
				</div>
				<div>
					<div
						style={{
							WebkitTextStroke: '1px #000',
							color: '#fff',
						}}
						className=' relative lg:w-190 xl:w-200 w-screen  mx-auto'
					>
						<motion.img
							loading='lazy'
							style={{ y, scale, rotate }}
							src={bg}
							alt={title}
							className='relative -z-10'
						/>
						<motion.div
							style={{ opacity }}
							className='absolute right-1/2 font-bold tracking-tighter bottom-40  lg:text-5xl xl:w-150'
						>
							Chatty lets you connect with others through instant real-time
							messaging.
						</motion.div>
						<motion.div
							style={{ opacity }}
							className='absolute left-1/2 font-bold tracking-tighter -bottom-10  lg:text-5xl xl:w-150'
						>
							Choose from over 35 DaisyUI themes to match your style. You can
							chat comfortably on both desktop and mobile.
						</motion.div>
					</div>
					<div className='md:text-2xl font-bold justify-center flex items-center md:gap-10 gap-3 mt-30'>
						<a
							href={link}
							target='_blank'
							className={`md:border-4 border-2 border-white p-2  md:p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-blue-950 hover:bg-white`}
						>
							LIVE DEMO <CircleArrowRight className='md:w-[35px] w-5' />
						</a>
						<a
							href={gitHub}
							target='_blank'
							className={`md:border-4 border-2 border-white p-2  md:p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-blue-950 hover:bg-white`}
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

export default Chatty
