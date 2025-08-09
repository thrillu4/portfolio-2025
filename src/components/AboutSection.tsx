import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import cap from '../images/mess/cap.png'
import cup from '../images/mess/cup.png'
import flying from '../images/mess/flying.png'
import nose from '../images/mess/nose.png'
import smile from '../images/mess/smile.png'
import Button from './Button'

const AboutSection = () => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'center center'],
	})

	const aboutOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
	const pOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
	const xRight = useTransform(scrollYProgress, [0.3, 1], ['250px', '0px'])
	const xLeft = useTransform(scrollYProgress, [0, 1], ['-250px', '0px'])
	const y = useTransform(scrollYProgress, [0.4, 1], ['-150px', '0px'])

	return (
		<section className='about h-screen overflow-x-hidden mt-50'>
			<div ref={container} className=' relative container'>
				<motion.h2
					style={{ opacity: aboutOpacity }}
					className=' text-9xl bg-gradient-to-b from-[#374242] to-stone-200 text-transparent bg-clip-text text-center font-extrabold'
				>
					ABOUT ME
				</motion.h2>

				<motion.img
					src={nose}
					alt='Right Decoration'
					className='absolute -left-10 w-50 -rotate-8'
					style={{ x: xLeft }}
				/>

				<motion.img
					src={cap}
					alt='Right Decoration'
					className='absolute -right-10 w-50 rotate-6'
					style={{ x: xRight }}
				/>

				<motion.p
					style={{ opacity: pOpacity }}
					className='relative font-medium leading-loose my-15 text-2xl max-w-6xl text-center mx-auto'
				>
					I'm Denys, a frontend developer who takes pride in writing clean,
					thoughtful code and creating user-friendly interfaces. For me,
					development is more than just a job — it's a continuous learning
					journey. I'm genuinely motivated by the process of learning something
					new. Whether it's a new technology, a better workflow, or a deeper
					understanding of a familiar tool — that progress gives me a sense of
					purpose and pushes me to grow every day. I'm always open to new
					challenges and environments where I can learn, improve, and
					contribute. Growth is what drives me — as a developer and as a person.
				</motion.p>
				<motion.img
					src={cup}
					alt='Right Decoration'
					className='absolute left-20 w-50 rotate-6'
					style={{ x: xRight }}
				/>
				<motion.img
					src={smile}
					alt='Right Decoration'
					className='absolute right-10 w-50 rotate-12'
					style={{ x: xLeft }}
				/>
				<div className='relative'>
					<Button to='/about'>EXPLORE MORE</Button>
					<div>
						<motion.img
							src={flying}
							animate={{
								x: [-10, -10],
								rotate: [3, -3],
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
							alt='Right Decoration'
							className='absolute left-1/2 -translate-x-1/2 top-16  w-50 -z-30'
							style={{ y }}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
