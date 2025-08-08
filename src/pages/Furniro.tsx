import { CircleArrowRight, Github, House, Undo2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import GetInTouch from '../components/GetInTouch'
import { projects } from '../data/projects'
import { Link } from 'react-router'

const Furniro = () => {
	const { title, color, type, bg, link, gitHub } = projects[0]
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
	})

	const y = useTransform(scrollYProgress, [0, 0.6], ['-970px', '0px'])
	const scale = useTransform(scrollYProgress, [0, 0.5], [3.2, 1])
	const rotate = useTransform(scrollYProgress, [0, 0.5], ['0deg', '-5deg'])
	const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
	return (
		<div style={{ backgroundColor: color }}>
			<div className='relative z-30 ' ref={container}>
				<div className='pt-30 pb-100'>
					<motion.h3
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-5xl text-center font-medium'
					>
						{type} - 2023
					</motion.h3>
					<motion.h1
						initial={{ y: '60px', opacity: 0 }}
						animate={{ y: '0px', opacity: 1 }}
						transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
						className='text-[300px] font-[Anton] tracking-tight text-center leading-75'
					>
						FURNIRO BEAUTIFUL ROOMS INSPIRATION
					</motion.h1>
				</div>
				<div>
					<div className=' relative w-200 mx-auto'>
						<motion.img
							style={{ y, scale, rotate }}
							src={bg}
							alt={title}
							className='relative -z-10'
						/>
						<motion.div
							style={{ opacity }}
							className='absolute right-1/2 font-bold tracking-tighter bottom-40 text-5xl w-150'
						>
							Browse The Range Where exquisite furnishings await your discerning
							eye
						</motion.div>
						<motion.div
							style={{ opacity }}
							className='absolute left-1/2 font-bold tracking-tighter -bottom-10 text-5xl w-150'
						>
							Unveil a realm of captivating creations, where every piece tells a
							story of grace and allure.
						</motion.div>
					</div>
					<div className='text-2xl font-bold justify-center flex items-center gap-10 mt-30'>
						<a
							href={link}
							target='_blank'
							className={`border-4 border-white  p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-orange-300 hover:bg-white`}
						>
							LIVE DEMO <CircleArrowRight size={35} />
						</a>
						<a
							href={gitHub}
							target='_blank'
							className={`border-4 border-white  p-5 rounded-4xl flex items-center gap-2 cursor-pointer transition duration-200 hover:text-orange-300 hover:bg-white`}
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

export default Furniro
