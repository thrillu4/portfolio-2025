import { motion, MotionValue, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import type { IProjects } from '../types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
	type,
	title,
	screenshots,
	color,
}: Props) => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	const scale = useTransform(progress, range, [1, targetScale])
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

	return (
		<div
			ref={container}
			className='h-[50vh] md:h-screen flex items-center justify-center sticky top-0'
		>
			<motion.div
				style={{
					scale,
					backgroundColor: color,
					top: `calc(-10% + ${i * 45}px)`,
				}}
				className='w-11/12  relative rounded-2xl md:rounded-[70px] p-3 md:p-5 lg:p-10 md:border-4 border-2 border-white'
			>
				<div className='flex justify-between items-center md:text-3xl'>
					<div className='flex items-center gap-2 md:gap-8'>
						<div className='font-extrabold md:text-7xl'>{`0${i + 1}`}</div>
						<div className='md:pt-2'>
							<div className='hidden md:block text-[10px] md:text-lg'>
								{type}
							</div>
							<h1 className='font-bold text-[12px] md:text-3xl'>{title}</h1>
						</div>
					</div>
					<button className='text-[10px] md:text-2xl lg:text-3xl border-2 border-white py-1 px-2 md:px-10 lg:px-20 md:py-5  rounded-full cursor-pointer hover:bg-white hover:border-black hover:text-black font-bold transition-all duration-300'>
						SEE MORE
					</button>
				</div>
				<div className='grid lg:grid-cols-6 lg:grid-rows-2 gap-4 mt-10'>
					<div className='xl:h-[500px] overflow-hidden md:col-span-4 md:row-span-2 '>
						<motion.div style={{ scale: imageScale }} className='w-full h-full'>
							<LazyLoadImage
								src={screenshots[0]}
								alt='project preview'
								className='w-full h-full rounded-2xl cover md:rounded-4xl'
							/>
						</motion.div>
					</div>
					<div className='hidden lg:block md:h-[242px] overflow-hidden md:col-span-2 md:col-start-5 '>
						<motion.div style={{ scale: imageScale }} className='w-full h-full'>
							<LazyLoadImage
								src={screenshots[1]}
								alt='project preview'
								className='w-full h-full object-cover rounded-4xl'
							/>
						</motion.div>
					</div>
					<div className='hidden lg:block md:h-[242px] overflow-hidden md:col-span-2 md:col-start-5 md:row-start-2'>
						<motion.div style={{ scale: imageScale }} className='w-full h-full'>
							<LazyLoadImage
								src={screenshots[2]}
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
