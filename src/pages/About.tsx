import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'
import TechBox from '../components/TechBox'
import me from '../images/photos/me.jpg'
import wheel from '../images/photos/wheel.jpg'
import techLogo from '../images/tech-logo'

import Certification from '../components/Certification'

const About = () => {
	const container = useRef(null)
	const ref = useRef(null)

	const scroll = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

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
		[0, 1],
		['50px', '0px']
	)
	const borderBottomRightRadius = useTransform(
		scroll.scrollYProgress,
		[0, 1],
		['50px', '0px']
	)

	return (
		<div className=' bg-neutral-200'>
			<div className='bg-black'>
				<div ref={container} className='container relative'>
					<motion.h2
						style={{
							WebkitTextStroke: '3px #000',
							color: '#fff',
						}}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut' }}
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
						className='text-center flex flex-col gap-6 text-3xl font-bold mb-20 mt-10'
					>
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

					<Button>CONTACT ME</Button>
				</div>
				<div className='container pb-20'>
					<h4 className='text-8xl mt-40 mb-30 text-center font-extrabold  tracking-tighter'>
						Under the Hood
					</h4>
					<div className=''>
						<div className='text-4xl mb-10 font-bold'>TECHNICAL SKILLS:</div>
						<div className='grid grid-cols-5 gap-5'>
							<TechBox src={techLogo.html} title='HTML' />
							<TechBox src={techLogo.css} title='CSS' />
							<TechBox src={techLogo.js} title='JAVA SCRIPT' />
							<TechBox src={techLogo.git} title='GIT' />
							<TechBox src={techLogo.npm} title='NPM' />
							<TechBox src={techLogo.sass} title='SASS' />
							<TechBox src={techLogo.react} title='REACT' />
							<TechBox src={techLogo.redux} title='REDUX' />
							<TechBox src={techLogo.figma} title='FIGMA' />
							<TechBox src={techLogo.tailwind} title='TAILWIND' />
							<TechBox src={techLogo.vite} title='VITE' />
							<TechBox src={techLogo.ts} title='TYPE SCRIPT' />
							<TechBox src={techLogo.next} title='NEXT JS' />
							<TechBox src={techLogo.node} title='NODE JS' />
							<TechBox src={techLogo.mongo} title='MONGO DB' />
							<TechBox src={techLogo.jest} title='JEST' />
							<TechBox src={techLogo.motion} title='MOTION' />
							<TechBox src={techLogo.express} title='EXPRESS' />
						</div>

						<div ref={ref} className='text-4xl mt-30 mb-10 font-bold'>
							SOFT SKILLS:
						</div>
						<motion.div
							style={{ borderBottomLeftRadius, borderBottomRightRadius }}
							className='text-3xl font-medium flex flex-col gap-2'
						>
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
						</motion.div>
					</div>
				</div>
			</div>
			<Certification />
		</div>
	)
}

export default About
