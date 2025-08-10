import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import here from '../images/about/here.png'
import js from '../images/certifications/js.jpg'
import mongo from '../images/certifications/mongo.jpg'
import next from '../images/certifications/next.jpg'
import ts from '../images/certifications/ts.jpg'

const Certification = () => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const certifications = [next, mongo, js, ts]

	const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1])
	const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
	const x = useTransform(scrollYProgress, [0, 0.7], ['200px', '0px'])
	return (
		<div ref={container} className='bg-white overflow-hidden pb-30 relative'>
			<div>
				<motion.img
					style={{ x }}
					src={here}
					alt='Decoration'
					className='absolute md:right-5 md:-bottom-6 -bottom-3 right-0 md:w-70 w-35 z-10 '
				/>
				<motion.h4
					style={{ WebkitTextStroke: '3px #000', color: '#fff', opacity }}
					className='text-4xl md:text-8xl mt-30 mb-14 md:mb-30  text-center font-extrabold md:tracking-tighter '
				>
					CERTIFICATIONS
				</motion.h4>
				<div className=' md:container mx-auto px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10'>
					{certifications.map((cert) => (
						<motion.div
							style={{ scale }}
							className=' md:w-160 w-full md:hover:scale-105 transition duration-200 mx-auto border-2 border-black rounded-4xl'
						>
							<img
								src={cert}
								alt='certificate'
								className=' object-cover h-full rounded-4xl'
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Certification
