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
	// text appear
	const { scrollY } = useScroll()

	const projectsOpacity = useTransform(scrollY, [1700, 2200], [0, 1])

	//

	// projects scale
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	//

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
			<section className='initial container relative'>
				<motion.h1
					initial={{ opacity: 0.1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, ease: 'easeIn' }}
					className='md:text-[200px] text-6xl pt-20 md:pt-0 md:absolute left-[8%]  leading-none pointer-events-none font-extrabold text-center bg-gradient-to-b from-[#3b4242] to-stone-200 text-transparent bg-clip-text'
				>
					HI, I'M DENYS
				</motion.h1>
				<div className='flex flex-col md:flex-row  items-center justify-evenly gap-5 md:gap-0 mb-40 pt-5 md:pt-30'>
					<p className=' md:text-2xl grow-1 basis-0 flex justify-center font-medium text-center md:text-right leading-normal order-2 md:order-none'>
						Frontend Developer in progress. <br />
						Clean code. Smooth UI. Real-world solutions. <br />
						Always learning. Always improving. 🚀
					</p>
					<div className='w-70 md:w-130  h-auto'>
						<motion.img
							style={{
								x: springX,
								y: springY,
							}}
							src={icon}
							alt='Moving Image'
							className='w-full h-full order-1 md:order-none'
						/>
					</div>
					<div className='grow-1 basis-0 order-3 md:order-none'>
						<Button to='/contact'>CONTACT ME</Button>
					</div>
				</div>
			</section>

			<ScrollingParallaxText />

			<AboutSection />

			<section className='projects container'>
				<div className='mt-40'>
					<motion.h2
						style={{ opacity: projectsOpacity }}
						className='text-5xl md:text-9xl bg-gradient-to-b from-[#374242] to-stone-200 text-transparent bg-clip-text text-center font-extrabold'
					>
						PROJECTS
					</motion.h2>
				</div>
				<div ref={container} className='md:mt-20'>
					{projects.map((project, index) => {
						const targetScale = 1 - (projects.length - index) * 0.05
						return (
							<Card
								key={index}
								i={index}
								{...project}
								targetScale={targetScale}
								progress={scrollYProgress}
								range={[index * 0.25, 1]}
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
