import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import CustomCursor from './CustomCursor'
import { motion, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
			className={`grid xl:grid-cols-2 gap-y-10 xl:gap-y-30 gap-x-10 lg:w-11/12 xl:w-full lg:mx-auto relative items-stretch ${
				hovered === null ? 'cursor-default' : 'md:cursor-none'
			}`}
		>
			<CustomCursor visible={hovered} />
			{projects.map((project, i) => (
				<Link
					key={i}
					className='md:cursor-none'
					to={`/projects/${project.route}`}
				>
					<motion.div
						onMouseEnter={() => setHovered(i)}
						onMouseLeave={() => setHovered(null)}
						style={{
							backgroundColor: hovered === i ? project.color : 'transparent',
							opacity,
						}}
						className={`border-4 border-white p-10 text-center h-full w-full`}
					>
						<div className='font-medium md:text-3xl lg:text-4xl'>
							{project.type}
						</div>
						<div className='font-extrabold tracking-tighter text-4xl md:text-7xl 2xl:text-8xl mt-5'>
							{project.title}
						</div>
						<div className='mt-4 text-center w-full  md:h-200 '>
							<LazyLoadImage
								src={project.src}
								className='h-full object-cover mx-auto'
								alt={project.title}
							/>
						</div>

						<div className='flex items-center md:gap-5 gap-2 justify-center mt-10 flex-wrap'>
							{project.techStack.map((tech, i) => (
								<div
									key={i}
									className='border-1 border-zinc-600 flex items-center gap-2 text-[10px] md:text-2xl rounded-2xl py-2 md:px-5 px-2'
								>
									<LazyLoadImage
										className='w-4 md:w-8'
										src={project.logos[i]}
										alt={tech}
									/>
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
