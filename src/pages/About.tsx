import { motion } from 'framer-motion'
import Button from '../components/Button'
import c from '../images/mess/flyingmini.png'
import b from '../images/mess/mum.png'
const About = () => {
	return (
		<div className=' h-[11000px] container '>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
				className=' text-9xl text-center mt-30'
			>
				ABOUT ME
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
				}}
				className='px-40'
			>
				I'm Denys, a frontend developer who takes pride in writing clean,
				thoughtful code and creating user-friendly interfaces. For me,
				development is more than just a job — it's a continuous learning
				journey. I'm genuinely motivated by the process of learning something
				new. Whether it's a new technology, a better workflow, or a deeper
				understanding of a familiar tool — that progress gives me a sense of
				purpose and pushes me to grow every day. Outside of work, I lead an
				active lifestyle and believe that balance is key — staying physically
				and mentally sharp helps me stay focused and productive in my work. I'm
				always open to new challenges and environments where I can learn,
				improve, and contribute. Growth is what drives me — as a developer and
				as a person.
			</motion.p>
			<Button>CONTACT ME</Button>
			<motion.img
				src={c}
				alt='Right Decoration'
				className='absolute top-40  left-0 w-40'
				initial={{ x: 0, opacity: 0 }}
				animate={{ x: 40, opacity: 1 }}
				transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
			/>
			<motion.img
				src={b}
				alt='Right Decoration'
				className='absolute top-40 right-0 w-40'
				initial={{ x: 0, opacity: 0 }}
				animate={{ x: -40, opacity: 1 }}
				transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
			/>
		</div>
	)
}

export default About
