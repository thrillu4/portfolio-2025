import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import js from '../images/certifications/js.jpg'
import mongo from '../images/certifications/mongo.jpg'
import next from '../images/certifications/next.jpg'
import ts from '../images/certifications/ts.jpg'
import here from '../images/about/here.png'

const Certification = () => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1])
	const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
	const x = useTransform(scrollYProgress, [0, 0.7], ['200px', '0px'])
	return (
		<div ref={container} className='bg-neutral-200 pb-30 relative'>
			<div>
				<motion.img
					style={{ x }}
					src={here}
					alt='Decoration'
					className='absolute right-5 -bottom-6 w-70  z-10'
				/>
				<motion.h4
					style={{ WebkitTextStroke: '3px #000', color: '#fff', opacity }}
					className='text-8xl my-30 text-center font-extrabold tracking-tighter '
				>
					CERTIFICATIONS
				</motion.h4>
				<div className=' container grid grid-cols-2 gap-10'>
					<motion.div
						style={{ scale }}
						className=' w-160 hover:scale-105 transition duration-200 mx-auto border-2 border-black rounded-4xl'
					>
						<img
							src={next}
							alt=''
							className=' object-cover h-full rounded-4xl'
						/>
					</motion.div>
					<motion.div
						style={{ scale }}
						className=' w-160 hover:scale-105 transition duration-200 mx-auto border-2 border-black rounded-4xl'
					>
						<img
							src={mongo}
							alt=''
							className=' object-cover h-full rounded-4xl'
						/>
					</motion.div>
					<motion.div
						style={{ scale }}
						className=' w-160 hover:scale-105 transition duration-200 mx-auto border-2 border-black rounded-4xl'
					>
						<img src={js} alt='' className=' object-cover h-full rounded-4xl' />
					</motion.div>
					<motion.div
						style={{ scale }}
						className=' w-160 hover:scale-105 transition duration-200 mx-auto border-2 border-black rounded-4xl '
					>
						<img src={ts} alt='' className=' object-cover h-full rounded-4xl' />
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Certification
