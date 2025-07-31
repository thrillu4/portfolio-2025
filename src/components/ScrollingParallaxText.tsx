import Lenis from 'lenis'
import { motion, MotionValue, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

import techLogos from '../images/tech-logo'
import type { ITechStack } from '../types'

const techStacks: ITechStack[][] = [
	[
		{ label: 'JavaScript', icon: techLogos.js },
		{ label: 'CSS', icon: techLogos.css },
		{ label: 'HTML', icon: techLogos.html },
		{ label: 'Git', icon: techLogos.git },
		{ label: 'NPM', icon: techLogos.npm },
		{ label: 'SASS', icon: techLogos.sass },
	],
	[
		{ label: 'React', icon: techLogos.react },
		{ label: 'Redux', icon: techLogos.redux },
		{ label: 'Vite', icon: techLogos.vite },
		{ label: 'TypeScript', icon: techLogos.ts },
		{ label: 'Figma', icon: techLogos.figma },
	],
	[
		{ label: 'Node', icon: techLogos.node },
		{ label: 'NextJS', icon: techLogos.next },
		{ label: 'MongoDB', icon: techLogos.mongo },
		{ label: 'Tailwind', icon: techLogos.tailwind },
		{ label: 'Jest', icon: techLogos.jest },
	],
]

const TechRow = ({
	items,
	translateX,
}: {
	items: ITechStack[]
	translateX: MotionValue<number>
}) => (
	<motion.div style={{ x: translateX }} className='flex whitespace-nowrap'>
		<div className='px-5 flex gap-10 items-center'>
			{[...items, ...items].map((tech, idx) => (
				<div key={idx} className='flex items-center gap-5'>
					<span className='w-24 aspect-[4/2] rounded-full '>
						<img src={tech.icon} alt={tech.label} />
					</span>
					<p className='text-8xl font-bold whitespace-nowrap'>{tech.label}</p>
				</div>
			))}
		</div>
	</motion.div>
)

export default function ScrollingParallaxText() {
	useEffect(() => {
		const lenis = new Lenis()
		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const translateX1 = useTransform(scrollYProgress, [0, 1], [-600, -200])
	const translateX2 = useTransform(scrollYProgress, [0, 1], [-100, -350])
	const translateX3 = useTransform(scrollYProgress, [0, 1], [-600, -310])

	return (
		<main className='overflow-hidden'>
			<div className='flex flex-col gap-5' ref={container}>
				<TechRow items={techStacks[0]} translateX={translateX1} />
				<TechRow items={techStacks[1]} translateX={translateX2} />
				<TechRow items={techStacks[2]} translateX={translateX3} />
			</div>
		</main>
	)
}
