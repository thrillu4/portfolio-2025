import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Button from '../components/Button'
import GetInTouch from '../components/GetInTouch'
import ProjectsGrid from '../components/ProjectsGrid'
import blue from '../images/crystals/blue.png'
import blues from '../images/crystals/blues.png'
import orange from '../images/crystals/orange.png'
import pink from '../images/crystals/pink.png'
import pinks from '../images/crystals/pinks.png'
import red from '../images/crystals/red.png'
import reds from '../images/crystals/reds.png'
import github from '../images/links/github.png'
import linkedIn from '../images/links/linkedin.png'
import telegram from '../images/links/telegram.png'

const Projects = () => {
	const container = useRef(null)
	const ref = useRef(null)

	const { scrollY, scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end'],
	})

	const scroll = useScroll({
		target: ref,
	})

	const borderBottomLeftRadius = useTransform(
		scroll.scrollYProgress,
		[0.3, 1],
		['70px', '0px']
	)
	const borderBottomRightRadius = useTransform(
		scroll.scrollYProgress,
		[0.3, 1],
		['70px', '0px']
	)

	const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
	const y = useTransform(scrollY, [0, 3800], ['350px', '0px'])
	const xRight = useTransform(scrollY, [0, 3800], ['350px', '0px'])
	const xLeft = useTransform(scrollY, [0, 3800], ['-350px', '0px'])

	return (
		<div className='bg-white'>
			<motion.div
				style={{ borderBottomLeftRadius, borderBottomRightRadius }}
				className='bg-black '
			>
				<motion.h1
					initial={{ y: '80px', opacity: 0.3 }}
					animate={{ y: '0px', opacity: 1 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className='relative z-20 mt-20 text-9xl tracking-tighter text-center font-extrabold  bg-gradient-to-b from-[#3b4242] to-stone-200 text-transparent bg-clip-text '
				>
					PROJECTS
				</motion.h1>
				<motion.img
					src={pink}
					animate={{
						y: [-50, 240],
						x: [-150, 140],
						rotate: [12, -12],
					}}
					transition={{
						y: {
							duration: 9,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
						x: {
							duration: 19,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
						rotate: {
							duration: 2,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
					}}
					className='w-40 absolute left-1/2 -translate-x-1/2 top-30'
				/>
				<motion.img
					src={blue}
					animate={{
						y: [40, -40],
						x: [-140, 50],
						rotate: [17, -19],
					}}
					transition={{
						y: {
							duration: 7,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
						x: {
							duration: 17,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
						rotate: {
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
					}}
					className='w-40 absolute right-10 top-60 '
				/>
				<motion.img
					src={red}
					animate={{
						y: [60, -40],
						x: [100, -100],
						rotate: [-15, 11],
					}}
					transition={{
						y: {
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
						x: {
							duration: 14,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
						rotate: {
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						},
					}}
					className='w-40 absolute left-20 top-50'
				/>
				<motion.h3
					initial={{ y: '-60px', opacity: 0 }}
					animate={{ y: '0px', opacity: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='mt-10 text-4xl tracking-tight text-center font-bold relative z-30'
				>
					"Here are some of the projects I’ve built using modern web
					technologies."
				</motion.h3>

				<div className='mt-30 px-5'>
					<ProjectsGrid />
				</div>
				<div ref={container}>
					<motion.div
						style={{
							WebkitTextStroke: '1px #fff',
							color: '#000',
							opacity,
						}}
						className=' px-30 relative font-extrabold tracking-tighter text-[200px] leading-45 mt-90 mb-30'
					>
						EVERY DETAIL <br /> COUNTS
						<div className='absolute -top-30  left-50 font-["Mrs_Saint_Delafield"] font-medium text-white  text-[390px] '>
							Approach
						</div>
						<motion.div
							style={{ opacity }}
							className='absolute left-3/4 font-medium text-3xl text-white leading-normal tracking-tighter'
						>
							Great UI is invisible — <br /> great UX is unforgettable.
						</motion.div>
					</motion.div>

					<div className='relative pt-20 pb-30 container '>
						<motion.img
							style={{ y, x: xRight }}
							className='w-40 absolute -bottom-3 -left-13 -rotate-18 '
							src={orange}
						/>
						<motion.img
							style={{ y, x: xRight }}
							className='w-40 absolute -bottom-3 left-20 rotate-15 '
							src={reds}
						/>
						<div>
							<div className='relative'>
								<Button to='/contact'>CONTACT ME</Button>
							</div>
							<div className='flex items-center justify-center gap-10 mt-10 relative'>
								<a href='https://github.com/thrillu4' target='_blank'>
									<img
										className='cursor-pointer hover:scale-110 transition duration-150'
										src={github}
										alt='github'
									/>
								</a>
								<a
									href='https://www.linkedin.com/in/denis-kraevoy/'
									target='_blank'
								>
									<img
										className='cursor-pointer hover:scale-110 transition duration-150'
										src={linkedIn}
										alt='Linked In'
									/>
								</a>
								<a ref={ref} href='https://t.me/real_thrill' target='_blank'>
									<img
										className='cursor-pointer hover:scale-110 transition duration-150'
										src={telegram}
										alt='telegram'
									/>
								</a>
							</div>
						</div>
						<motion.img
							className='w-40 absolute -bottom-2 right-20 -rotate-3 '
							style={{ y, x: xLeft }}
							src={blues}
						/>
						<motion.img
							className='w-40 absolute -bottom-2 -right-10 rotate-2 '
							style={{ y, x: xLeft }}
							src={pinks}
						/>
					</div>
				</div>
			</motion.div>
			<GetInTouch color={'#000'} bg={'#fff'} />
		</div>
	)
}

export default Projects
