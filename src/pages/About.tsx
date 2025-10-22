import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'
import TechBox from '../components/TechBox'
import books from '../images/about/books.png'
import coffee from '../images/about/coffee.png'
import skills from '../images/about/skills.png'
import stack from '../images/about/stack.png'
import swing from '../images/about/swing.png'
import github from '../images/links/github.png'
import linkedIn from '../images/links/linkedin.png'
import telegram from '../images/links/telegram.png'
import me from '../images/photos/me.jpg'
import wheel from '../images/photos/wheel.jpg'
import techLogo from '../images/tech-logo'

import { Download } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Certification from '../components/Certification'

const About = () => {
	const container = useRef(null)
	const ref = useRef(null)
	const refY = useRef(null)

	const scroll = useScroll({
		target: ref,
	})

	const scrollN = useScroll({
		target: refY,
	})

	const y = useTransform(scrollN.scrollYProgress, [0, 1], ['0px', '200px'])

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start center', 'end start'],
	})
	const { scrollY } = useScroll({
		target: container,
	})

	const x1 = useTransform(scrollYProgress, [0, 1], [-60, -500])
	const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -20])

	const x2 = useTransform(scrollYProgress, [0, 1], [60, 500])
	const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 20])

	const textOpacity = useTransform(scrollY, [0, 700], [0, 1])

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

	// images
	const xLeft = useTransform(scrollY, [0, 900], ['-250px', '0px'])
	const xRight = useTransform(scrollY, [0, 900], ['250px', '0px'])
	const yDown = useTransform(scrollY, [0, 800], ['150px', '0px'])
	const xRightSkills = useTransform(
		scrollN.scrollY,
		[0, 2000],
		['350px', '0px']
	)
	const xLeftBooks = useTransform(scrollN.scrollY, [0, 2600], ['-350px', '0px'])

	const techList = [
		{ src: techLogo.html, title: 'HTML' },
		{ src: techLogo.css, title: 'CSS' },
		{ src: techLogo.js, title: 'JAVA SCRIPT' },
		{ src: techLogo.git, title: 'GIT' },
		{ src: techLogo.npm, title: 'NPM' },
		{ src: techLogo.sass, title: 'SASS' },
		{ src: techLogo.react, title: 'REACT' },
		{ src: techLogo.redux, title: 'REDUX' },
		{ src: techLogo.figma, title: 'FIGMA' },
		{ src: techLogo.tailwind, title: 'TAILWIND' },
		{ src: techLogo.vite, title: 'VITE' },
		{ src: techLogo.ts, title: 'TYPE SCRIPT' },
		{ src: techLogo.next, title: 'NEXT JS' },
		{ src: techLogo.node, title: 'NODE JS' },
		{ src: techLogo.mongo, title: 'MONGO DB' },
		{ src: techLogo.jest, title: 'JEST' },
		{ src: techLogo.motion, title: 'MOTION' },
		{ src: techLogo.express, title: 'EXPRESS' },
	]

	return (
		<div className=' bg-white overflow-x-hidden'>
			<motion.div
				style={{ borderBottomLeftRadius, borderBottomRightRadius }}
				className='bg-black'
			>
				<div ref={container} className='lg:container mx-auto relative'>
					<motion.h2
						style={{
							WebkitTextStroke: '3px #000',
							color: '#fff',
						}}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut' }}
						onAnimationComplete={() => {
							window.scrollTo({ top: 0, left: 0 })
						}}
						className=' z-40 relative text-6xl md:text-9xl text-center flex justify-center items-center font-extrabold h-screen'
					>
						ABOUT ME
					</motion.h2>

					<motion.div
						style={{ x: x1, rotate: rotateLeft }}
						className='absolute z-30 top-20 xl:top-0 left-20 md:left-40 xl:left-1/2 xl:-translate-x-1/2  w-90 sm:w-120 md:w-130 xl:w-150 2xl:w-170 rounded-2xl'
					>
						<LazyLoadImage
							src={wheel}
							alt='photo'
							className='h-full w-full object-cover'
						/>
					</motion.div>
					<motion.div
						style={{ x: x2, rotate: rotateRight }}
						className='absolute z-10 top-30 xl:top-10 right-30 md:right-50 xl:right-1/2 xl:translate-x-1/2  w-90 sm:w-120 md:w-130 xl:w-150 2xl:w-170  rounded-2xl'
					>
						<LazyLoadImage
							src={me}
							alt='photo'
							className='h-full w-full object-cover'
						/>
					</motion.div>

					<motion.div
						style={{ opacity: textOpacity }}
						className='text-center flex flex-col gap-6 z-0 md:text-2xl lg:text-3xl font-bold mb-20 mt-30   relative px-2 md:px-0'
					>
						<motion.div
							style={{ x: xLeft }}
							className='absolute left-0 md:-left-10 -bottom-30 md:top-70 w-25 md:w-40 xl:w-70 -z-10 -rotate-5'
						>
							<LazyLoadImage src={stack} alt='Decoration' />
						</motion.div>
						<motion.div
							style={{ x: xRight }}
							className='absolute -right-2 md:-right-10 -bottom-35 md:top-70 w-25 md:w-40 xl:w-60 -z-10 rotate-5'
						>
							<LazyLoadImage src={coffee} alt='Decoration' />
						</motion.div>

						<p>
							Hi! I'm Denis, a frontend developer passionate about building
							clean, user-friendly, and responsive web interfaces.
						</p>
						<p>
							I enjoy working with modern technologies like React, TypeScript,
							and Next.js, and I’m always eager to learn and improve my skills.
						</p>
						<p>
							I believe in writing clean, maintainable code and creating digital
							experiences that are both functional and enjoyable.
						</p>
						<p>
							In my free time, I enjoy cooking, learning English, and staying
							active at the gym. I'm also a fan of classical music — it keeps me
							focused while coding.
						</p>
					</motion.div>

					<div className='relative'>
						<Button to='/contact'>CONTACT ME</Button>
						<motion.div
							animate={{
								x: [-10, 10],
								rotate: [2, -2],
							}}
							transition={{
								x: {
									duration: 1,
									repeat: Infinity,
									repeatType: 'reverse',
									ease: 'easeInOut',
								},
								rotate: {
									duration: 1,
									repeat: Infinity,
									repeatType: 'reverse',
									ease: 'easeInOut',
								},
							}}
							className='absolute right-[43%] md:right-[48%] translate-x-1/2 top-11 md:top-14  lg:top-17 md:w-40 xl:w-50 w-25'
							style={{ y: yDown }}
						>
							<LazyLoadImage src={swing} alt='Decoration' />
						</motion.div>
					</div>
				</div>
				<div ref={refY} className='container pb-20'>
					<motion.h4
						style={{ y }}
						className='text-5xl px-2 md:px-0 md:text-6xl lg:text-8xl mt-50 mb-15 md:mb-30 text-center font-extrabold  tracking-tighter'
					>
						Under the Hood
					</motion.h4>
					<div className='mb-15 md:mb-30'>
						<div className='text-2xl md:text-3xl lg:text-4xl mb-10 font-bold'>
							TECHNICAL SKILLS:
						</div>
						<div className='grid grid-cols-2 gap-2 xl:grid-cols-5 md:grid-cols-3 md:gap-5 px-4 xl:px-0'>
							{techList.map((tech, i) => (
								<TechBox
									key={tech.title}
									src={tech.src}
									title={tech.title}
									index={i}
								/>
							))}
						</div>

						<div className='text-2xl md:text-3xl lg:text-4xl mt-20 md:mt-30 mb-10 font-bold relative px-4 xl:px-0'>
							SOFT SKILLS:
							<motion.div
								style={{ x: xRightSkills }}
								className='absolute right-2 md:right-10 lg:right-0 lg:-top-10 -top-18 w-30 md:w-35  xl:w-75'
							>
								<LazyLoadImage src={skills} alt='Decoration' />
							</motion.div>
						</div>

						<div className='lg:text-3xl md:text-2xl font-medium flex flex-col gap-2  px-4 xl:px-0'>
							<div>
								👨‍💻{' '}
								<span className='font-extrabold'>
									Curious and self-motivated
								</span>{' '}
								– I'm always eager to learn and improve
							</div>
							<div>
								🤔{' '}
								<span className='font-extrabold'>Problem-solving mindset</span>{' '}
								– I like breaking down complex problems into manageable steps
							</div>
							<div>
								💪 <span className='font-extrabold'>Strong communication</span>{' '}
								– I can explain technical things simply and clearly
							</div>
							<div>
								⌛ <span className='font-extrabold'>Time management</span> – I
								balance learning, building projects, and personal growth
								effectively
							</div>
							<div>
								⚠️ <span className='font-extrabold'>Attention to detail</span> –
								I care about code quality, readability, and design consistency
							</div>
						</div>
					</div>
					<div ref={ref} className='relative'>
						<motion.div
							style={{ x: xLeftBooks }}
							className='absolute left-3 md:left-0 md:-top-15 bottom-22 w-15 md:w-40  lg:w-55'
						>
							<LazyLoadImage src={books} alt='Decoration' />
						</motion.div>
						<div className='flex justify-center'>
							<a
								href='/cv.pdf'
								download='Denys Kraiovyi Frontend Developer CV.pdf'
								className='text-sm lg:text-2xl flex items-center gap-3 font-semibold border-2 border-violet-950 hover:border-white  hover:-rotate-6  duration-300 transition cursor-pointer   rounded-4xl py-3 px-5 md:px-10 md:py-5 lg:px-15 bg-gradient-to-br from-black  via-purple-700 to-orange-500 hover:to-black hover:via-pink-500  hover:from-orange-500 	'
							>
								DOWNLOAD CV{' '}
								<Download className='md:w-[30px] md:h-[30px] w-5 ' />
							</a>
						</div>
						<div className='flex items-center justify-center gap-10 mt-5 md:mt-10'>
							<a href='https://github.com/thrillu4' target='_blank'>
								<img
									className='cursor-pointer w-8 md:w-full hover:scale-110 transition duration-150'
									src={github}
									alt='github'
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/denis-kraevoy/'
								target='_blank'
							>
								<img
									className='cursor-pointer w-8 md:w-full hover:scale-110 transition duration-150'
									src={linkedIn}
									alt='Linked In'
								/>
							</a>
							<a href='https://t.me/real_thrill' target='_blank'>
								<img
									className='cursor-pointer w-8 md:w-full hover:scale-110 transition duration-150'
									src={telegram}
									alt='telegram'
								/>
							</a>
						</div>
					</div>
				</div>
			</motion.div>
			<Certification />
		</div>
	)
}

export default About
