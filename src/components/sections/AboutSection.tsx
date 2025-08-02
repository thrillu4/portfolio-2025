import Button from '../Button'
import { motion, useScroll, useTransform } from 'motion/react'
import cap from '../../images/mess/cap.png'
import cup from '../../images/mess/cup.png'
import flying from '../../images/mess/flying.png'
import nose from '../../images/mess/nose.png'
import smile from '../../images/mess/smile.png'

const AboutSection = () => {
	const { scrollY } = useScroll()
	const aboutOpacity = useTransform(scrollY, [700, 1100], [0, 1])

	return (
		<section className='about container'>
			<div className='mt-40'>
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
	)
}

export default AboutSection
