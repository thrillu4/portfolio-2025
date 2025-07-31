import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from 'motion/react'
import { useEffect } from 'react'
import Button from '../components/Button'
import ScrollingParallaxText from '../components/ScrollingParallaxText'
import cap from '../images/mess/cap.png'
import cup from '../images/mess/cup.png'
import flying from '../images/mess/flying.png'
import nose from '../images/mess/nose.png'
import smile from '../images/mess/smile.png'
import icon from '/face.png'

const Home = () => {
	// text appear
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (val) => {
		console.log(val)
	})

	const aboutOpacity = useTransform(scrollY, [700, 1100], [0, 1])
	const projectsOpacity = useTransform(scrollY, [1700, 2200], [0, 1])

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
					className='text-[200px] absolute left-[8%] leading-none pointer-events-none font-extrabold text-center bg-gradient-to-b from-[#3b4242] to-stone-200 text-transparent bg-clip-text'
				>
					HI, I'M DENYS
				</motion.h1>
				<div className='flex items-center justify-evenly mb-40 pt-30'>
					<p className=' text-2xl grow-1 basis-0 flex justify-center font-medium text-right leading-normal'>
						Frontend Developer in progress. <br />
						Clean code. Smooth UI. Real-world solutions. <br />
						Always learning. Always improving. 🚀
					</p>
					<motion.img
						style={{
							x: springX,
							y: springY,
						}}
						src={icon}
						alt='Moving Image'
						className='w-130 '
					/>
					<div className='grow-1 basis-0'>
						<Button>CONTACT ME</Button>
					</div>
				</div>
			</section>

			<ScrollingParallaxText />

			<section className='about container'>
				<div className='mt-30'>
					<motion.h2
						style={{ opacity: aboutOpacity }}
						className=' text-9xl bg-gradient-to-b from-[#374242] to-stone-200 text-transparent bg-clip-text text-center font-extrabold'
					>
						ABOUT ME
					</motion.h2>

					<motion.img
						src={nose}
						alt='Right Decoration'
						className='absolute left-20 w-50 -rotate-8'
						initial={{ x: -50, opacity: 0 }}
						whileInView={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, ease: 'easeIn', delay: 1 },
						}}
					/>

					<motion.img
						src={cap}
						alt='Right Decoration'
						className='absolute right-20 w-50 rotate-6'
						initial={{ x: 30, opacity: 0 }}
						whileInView={{
							x: 0,
							opacity: 1,
							transition: { duration: 1, ease: 'easeIn', delay: 1 },
						}}
					/>

					<motion.p
						initial={{ x: -100, opacity: 0 }}
						whileInView={{
							x: 0,
							opacity: 1,
							transition: { duration: 1, ease: 'easeOut' },
						}}
						className='relative font-medium leading-loose my-15 text-2xl max-w-6xl text-center mx-auto'
					>
						I'm Denys, a frontend developer who takes pride in writing clean,
						thoughtful code and creating user-friendly interfaces. For me,
						development is more than just a job — it's a continuous learning
						journey. I'm genuinely motivated by the process of learning
						something new. Whether it's a new technology, a better workflow, or
						a deeper understanding of a familiar tool — that progress gives me a
						sense of purpose and pushes me to grow every day. I'm always open to
						new challenges and environments where I can learn, improve, and
						contribute. Growth is what drives me — as a developer and as a
						person.
					</motion.p>
					<motion.img
						src={cup}
						alt='Right Decoration'
						className='absolute left-50 w-50 rotate-6'
						initial={{ x: -100, y: 100, opacity: 0 }}
						whileInView={{
							x: 0,
							y: 0,
							opacity: 1,
							transition: { duration: 1.5, ease: 'easeIn' },
						}}
					/>
					<motion.img
						src={smile}
						alt='Right Decoration'
						className='absolute right-30 w-50 rotate-12'
						initial={{ y: 150, x: 50, opacity: 0 }}
						whileInView={{
							y: 0,
							x: 0,
							opacity: 1,
							transition: { duration: 1, ease: 'easeIn' },
						}}
					/>
					<div className='relative'>
						<Button>EXPLORE MORE</Button>
						<div>
							<motion.img
								src={flying}
								alt='Right Decoration'
								className='absolute left-1/2 -translate-x-1/2  w-50'
								initial={{ y: 10, opacity: 0 }}
								whileInView={{
									y: -10,
									opacity: 1,
									transition: { duration: 1, ease: 'easeOut' },
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='projects container'>
				<div className='mt-100 mb-1000'>
					<motion.h2
						style={{ opacity: projectsOpacity }}
						className=' text-9xl bg-gradient-to-b from-[#374242] to-stone-200 text-transparent bg-clip-text text-center font-extrabold'
					>
						PROJECTS
					</motion.h2>
				</div>
			</section>
		</>
	)
}

export default Home
