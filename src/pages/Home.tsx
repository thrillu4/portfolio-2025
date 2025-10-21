import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'motion/react'
import { useEffect, useRef } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Marquee from '../components/Marquee'
import ScrollingParallaxText from '../components/ScrollingParallaxText'
import { projects } from '../data/projects'

import AboutSection from '../components/AboutSection'
import GetInTouch from '../components/GetInTouch'
import icon from '/face.png'

const Home = () => {
	const { scrollY } = useScroll()

	const projectsOpacity = useTransform(scrollY, [1700, 2200], [0, 1])

	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	//  mouse event
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const offsetX = useTransform(
		mouseX,
		(val) => (val - window.innerWidth / 2) * 0.05
	)
	const offsetY = useTransform(
		mouseY,
		(val) => (val - window.innerHeight / 2) * 0.05
	)

	const springX = useSpring(offsetX, { stiffness: 100, damping: 20 })
	const springY = useSpring(offsetY, { stiffness: 100, damping: 20 })

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [mouseX, mouseY])
	//

	return (
		<>
			<section className='initial xl:container mx-auto relative'>
				<motion.h1
					initial={{ opacity: 0.1, y: '200px' }}
					animate={{ opacity: 1, y: '0px' }}
					transition={{ duration: 0.6, ease: 'easeIn' }}
					className='md:text-8xl md:w-full xl:text-[180px] 2xl:text-[200px] text-6xl pt-20 md:pt-0 md:absolute md:left-1/2 md:-translate-x-1/2  leading-none pointer-events-none font-extrabold text-center bg-gradient-to-b from-[#3b4242] to-stone-200 text-transparent bg-clip-text'
				>
					HI, I'M DENYS
				</motion.h1>
				<div className='flex flex-col xl:flex-row  items-center justify-evenly gap-5 xl:gap-0 mb-40 pt-5 md:pt-30'>
					<motion.p
						initial={{ opacity: 0, x: '-150px' }}
						animate={{ opacity: 1, x: '0px' }}
						transition={{ duration: 0.4, ease: 'easeIn', delay: 0.3 }}
						className=' md:text-2xl grow-1 basis-0 flex justify-center font-medium text-center xl:text-right leading-normal order-2 xl:order-none'
					>
						Frontend Developer in progress. <br />
						Clean code. Smooth UI. Real-world solutions. <br />
						Always learning. Always improving. 🚀
					</motion.p>
					<div className='w-70 md:w-100 xl:w-130  h-auto'>
						<motion.img
							initial={{ opacity: 0, y: '100px' }}
							animate={{ opacity: 1, y: '0px' }}
							transition={{ duration: 0.4, ease: 'easeIn', delay: 0.3 }}
							style={{
								x: springX,
								y: springY,
							}}
							src={icon}
							alt='Moving Image'
							className='w-full h-full order-1 xl:order-none'
							loading='lazy'
						/>
					</div>
					<motion.div
						initial={{ opacity: 0, x: '150px' }}
						animate={{ opacity: 1, x: '0px' }}
						transition={{ duration: 0.4, ease: 'easeIn', delay: 0.3 }}
						className='grow-1 basis-0 order-3 xl:order-none'
					>
						<Button to='/contact'>CONTACT ME</Button>
					</motion.div>
				</div>
			</section>

			<ScrollingParallaxText />

			<AboutSection />

			<section className='projects container '>
				<div className='mt-40'>
					<motion.h2
						style={{ opacity: projectsOpacity }}
						className='text-5xl md:text-7xl xl:text-9xl bg-gradient-to-b from-[#374242] to-stone-200 text-transparent bg-clip-text text-center font-extrabold'
					>
						PROJECTS
					</motion.h2>
				</div>
				<div ref={container} className='mt-20'>
					{projects.map((project, index) => {
						const targetScale = 1 - (projects.length - index) * 0.05
						return (
							<Card
								key={index}
								i={index}
								{...project}
								targetScale={targetScale}
								progress={scrollYProgress}
								range={[(index / projects.length) * 0.8, 1]}
							/>
						)
					})}
				</div>
			</section>

			<Marquee />

			<GetInTouch color={'#000'} bg={'#fff'} />
		</>
	)
}

export default Home
