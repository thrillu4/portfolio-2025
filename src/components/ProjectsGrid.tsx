import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import CustomCursor from './CustomCursor'
import { motion, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router'

const ProjectsGrid = () => {
	const [hovered, setHovered] = useState<number | null>(null)
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])

	return (
		<div
			ref={container}
			className={`grid grid-cols-2 gap-y-30 gap-x-10 relative items-stretch ${
				hovered === null ? 'cursor-default' : 'cursor-none'
			}`}
		>
			<CustomCursor visible={hovered} />
			{projects.map((project, i) => (
				<Link className='cursor-none' to={`/projects/${project.route}`}>
					<motion.div
						onMouseEnter={() => setHovered(i)}
						onMouseLeave={() => setHovered(null)}
						style={{
							backgroundColor: hovered === i ? project.color : 'transparent',
							opacity,
						}}
						className={`border-4 border-white p-10 text-center h-full`}
					>
						<div className='font-medium text-4xl'>{project.type}</div>
						<div className='font-extrabold tracking-tighter text-9xl mt-5'>
							{project.title}
						</div>
						<div className='mt-4 text-center w-full h-200'>
							<img
								src={project.src}
								className='h-full object-fit mx-auto'
								alt={project.title}
							/>
						</div>

						<div className='flex items-center gap-5 justify-center mt-10'>
							{project.techStack.map((tech, i) => (
								<div className='border-1 border-zinc-600 flex items-center gap-2 text-2xl rounded-2xl py-2 px-5'>
									<img className='w-8' src={project.logos[i]} alt={tech} />
									{tech}
								</div>
							))}
						</div>
					</motion.div>
				</Link>
			))}
		</div>
	)
}

export default ProjectsGrid
