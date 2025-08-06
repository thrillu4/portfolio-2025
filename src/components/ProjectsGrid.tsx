import { useState } from 'react'
import { projects } from '../data/projects'
import CustomCursor from './CustomCursor'

const ProjectsGrid = () => {
	const [hovered, setHovered] = useState<number | null>(null)
	return (
		<div
			className={`grid grid-cols-2 gap-y-30 gap-x-10 relative ${
				hovered === null ? 'cursor-default' : 'cursor-none'
			}`}
		>
			<CustomCursor visible={hovered} />
			{projects.map((project, i) => (
				<div
					onMouseEnter={() => setHovered(i)}
					onMouseLeave={() => setHovered(null)}
					style={{
						backgroundColor: hovered === i ? project.color : 'transparent',
					}}
					className={`border-4 border-white  p-10 text-center `}
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
				</div>
			))}
		</div>
	)
}

export default ProjectsGrid
