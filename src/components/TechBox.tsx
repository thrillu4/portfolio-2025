import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

interface Props {
	src: string
	title: string
	index: number
}

const TechBox = ({ src, title, index }: Props) => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
	})

	const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])
	const x = useTransform(scrollYProgress, [0, 1], ['0px', '10px'])

	return (
		<motion.div
			ref={ref}
			style={{ opacity, x }}
			transition={{
				duration: 1,
				delay: index * 0.3,
				ease: 'easeIn',
			}}
			className='border-2 hover:scale-105 transition duration-200 flex items-center text-sm md:text-4xl md:p-5 p-2 rounded-2xl gap-3 md:gap-5 justify-center '
		>
			<img src={src} alt={title} className='md:w-10 w-4' />
			<div>{title}</div>
		</motion.div>
	)
}

export default TechBox
