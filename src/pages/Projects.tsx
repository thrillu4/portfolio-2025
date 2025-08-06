import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import AnimatedCube from '../components/AnimatedCube'
import Button from '../components/Button'
import GetInTouch from '../components/GetInTouch'
import ProjectsGrid from '../components/ProjectsGrid'
import github from '../images/links/github.png'
import linkedIn from '../images/links/linkedin.png'
import telegram from '../images/links/telegram.png'
import pointer from '../images/mess/point.png'

const Projects = () => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
	})

	const borderBottomLeftRadius = useTransform(
		scrollYProgress,
		[0.3, 1],
		['70px', '0px']
	)
	const borderBottomRightRadius = useTransform(
		scrollYProgress,
		[0.3, 1],
		['70px', '0px']
	)
	return (
		<div className='bg-neutral-200'>
			<motion.div
				style={{ borderBottomLeftRadius, borderBottomRightRadius }}
				className='bg-black'
			>
				<h1 className='mt-20 text-9xl tracking-tighter text-center font-extrabold '>
					PROJECTS
				</h1>
				<h3 className='mt-10 text-4xl tracking-tight text-center font-bold '>
					"Here are some of the projects I’ve built using modern web
					technologies."
				</h3>

				<div className='my-30 px-5'>
					<ProjectsGrid />
				</div>
				<div ref={container}>
					<div className='pt-20 pb-30 container flex items-center justify-between '>
						<AnimatedCube />
						<div>
							<div className='mb-5 mx-auto'></div>
							<Button to='/contact'>CONTACT ME</Button>
							<div className='flex items-center justify-center gap-10 mt-10'>
								<a href='https://github.com/thrillu4' target='_blank'>
									<img
										className='cursor-pointer hover:scale-110 transition duration-150'
										src={github}
										alt='github'
									/>
								</a>
								<a
									href='https://www.linkedin.com/in/denis-kraevoy/'
									target='_blank'
								>
									<img
										className='cursor-pointer hover:scale-110 transition duration-150'
										src={linkedIn}
										alt='Linked In'
									/>
								</a>
								<a href='https://t.me/real_thrill' target='_blank'>
									<img
										className='cursor-pointer hover:scale-110 transition duration-150'
										src={telegram}
										alt='telegram'
									/>
								</a>
							</div>
						</div>
						<div>
							<motion.img className='w-40 -rotate-6 ' src={pointer} />
						</div>
					</div>
				</div>
			</motion.div>
			<GetInTouch />
		</div>
	)
}

export default Projects
