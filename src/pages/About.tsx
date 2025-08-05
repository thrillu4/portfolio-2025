import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'
import TechBox from '../components/TechBox'
import github from '../images/links/github.png'
import linkedIn from '../images/links/linkedin.png'
import telegram from '../images/links/telegram.png'
import swing from '../images/about/swing.png'
import coffee from '../images/about/coffee.png'
import stack from '../images/about/stack.png'
import skills from '../images/about/skills.png'
import books from '../images/about/books.png'
import me from '../images/photos/me.jpg'
import wheel from '../images/photos/wheel.jpg'
import techLogo from '../images/tech-logo'

import { Download } from 'lucide-react'
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
		<div className=' bg-neutral-200'>
			<motion.div
				style={{ borderBottomLeftRadius, borderBottomRightRadius }}
				className='bg-black'
			>
				<div ref={container} className='container relative'>
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
						className=' z-40 relative text-9xl text-center flex justify-center items-center font-extrabold h-screen'
					>
						ABOUT ME
					</motion.h2>

					<motion.img
						style={{ x: x1, rotate: rotateLeft }}
						src={wheel}
						alt='photo'
						className='absolute z-30 top-0 left-1/2 -translate-x-1/2  h-200  rounded-2xl'
					/>
					<motion.img
						style={{ x: x2, rotate: rotateRight }}
						src={me}
						alt='photo'
						className='absolute z-10 top-20 right-1/2 translate-x-1/2  h-200 rounded-2xl'
					/>

					<motion.div
						style={{ opacity: textOpacity }}
						className='text-center flex flex-col gap-6 z-0 text-3xl font-bold mb-20 mt-10 relative'
					>
						<motion.img
							style={{ x: xLeft }}
							src={stack}
							alt='Decoration'
							className='absolute -left-10 top-70 w-70 -z-10 -rotate-5'
						/>
						<motion.img
							style={{ x: xRight }}
							src={coffee}
							alt='Decoration'
							className='absolute -right-10 top-70 w-60 -z-10 rotate-5'
						/>
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
						<motion.img
							style={{ y: yDown }}
							src={swing}
							alt='Decoration'
							className='absolute right-[48%] translate-x-1/2  top-17 w-50'
						/>
					</div>
				</div>
				<div ref={refY} className='container pb-20'>
					<motion.h4
						style={{ y }}
						className='text-8xl mt-50 mb-30 text-center font-extrabold  tracking-tighter'
					>
						Under the Hood
					</motion.h4>
					<div className='mb-30'>
						<div className='text-4xl mb-10 font-bold'>TECHNICAL SKILLS:</div>
						<div className='grid grid-cols-5 gap-5'>
							{techList.map((tech, i) => (
								<TechBox
									key={tech.title}
									src={tech.src}
									title={tech.title}
									index={i}
								/>
							))}
						</div>

						<div className='text-4xl mt-30 mb-10 font-bold relative'>
							SOFT SKILLS:
							<motion.img
								style={{ x: xRightSkills }}
								src={skills}
								alt='Decoration'
								className='absolute right-0 -top-10  w-75'
							/>
						</div>

						<div className='text-3xl font-medium flex flex-col gap-2'>
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
						<motion.img
							style={{ x: xLeftBooks }}
							src={books}
							alt='Decoration'
							className='absolute left-0 -top-15  w-55'
						/>
						<Button to='/'>
							<div className='flex items-center gap-3'>
								DOWNLOAD CV <Download size={30} />
							</div>
						</Button>
						<div className='flex items-center justify-center gap-10 mt-10'>
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
							<a href='https://t.me/real_thrill' target='_blank'>
								<img
									className='cursor-pointer hover:scale-110 transition duration-150'
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
