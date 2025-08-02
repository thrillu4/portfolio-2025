import { motion, MotionValue, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import type { IProjects } from '../types'

interface Props extends IProjects {
	i: number
	targetScale: number
	progress: MotionValue<number>
	range: number[]
}

const Card = ({
	i,
	targetScale,
	range,
	progress,
	title,
	description,
	link,
	src,
	color,
}: Props) => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	const scale = useTransform(progress, range, [1, targetScale])
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
	const opacity = useTransform(scrollYProgress, [0.8, 1], [0.8, 1])

	return (
		<div
			ref={container}
			className='h-screen flex items-center justify-center sticky top-0'
		>
			<motion.div
				style={{
					opacity,
					scale,
					backgroundColor: color,
					top: `calc(-10% + ${i * 45}px)`,
				}}
				className='w-11/12 h-[80%] relative rounded-[70px] p-10 border-4 border-white'
			>
				<div className='flex justify-between items-center text-3xl'>
					<div className='flex items-center gap-8'>
						<div className='font-extrabold text-7xl'>{`0${i + 1}`}</div>
						<div className='pt-2'>
							<h1 className='font-bold'>{title}</h1>
							<div className='text-lg'>React Redux Tailwind</div>
						</div>
					</div>
					<button className='border-2 border-white px-20 py-5  rounded-full cursor-pointer hover:bg-white hover:border-black hover:text-black font-bold transition-all duration-300'>
						SEE MORE
					</button>
				</div>
				<div className='grid grid-cols-6 grid-rows-2 gap-4 mt-10'>
					<div className='h-[500px] overflow-hidden col-span-4 row-span-2'>
						<motion.div style={{ scale: imageScale }} className='w-full h-full'>
							<img
								src={src}
								alt='project preview'
								className='w-full h-full object-cover rounded-4xl'
							/>
						</motion.div>
					</div>
					<div className='h-[242px] overflow-hidden col-span-2 col-start-5 '>
						<motion.div style={{ scale: imageScale }} className='w-full h-full'>
							<img
								src={src}
								alt='project preview'
								className='w-full h-full object-cover rounded-4xl'
							/>
						</motion.div>
					</div>
					<div className='h-[242px] overflow-hidden col-span-2 col-start-5 row-start-2'>
						<motion.div style={{ scale: imageScale }} className='w-full h-full'>
							<img
								src={src}
								alt='project preview'
								className='w-full h-full object-cover rounded-4xl'
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Card
