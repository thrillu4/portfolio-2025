import { House } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import notFound from '../images/404/404.png'
import clown from '../images/404/clown.png'
import ghost from '../images/404/ghost.png'
import ghosty from '../images/404/ghosty.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const NotFound = () => {
	return (
		<div className='relative md:h-screen mx-auto overflow-hidden lg:overflow-visible  py-25 md:py-0 lg:mb-20'>
			<motion.div
				animate={{
					y: [-50, 240],
					x: [-150, 140],
					rotate: [12, -12],
				}}
				transition={{
					y: {
						duration: 9,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					},
					x: {
						duration: 19,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					},
					rotate: {
						duration: 2,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					},
				}}
				className='xl:w-50 md:w-35 w-25 absolute left-1/12  top-30'
			>
				<LazyLoadImage src={ghost} alt='ghost' />
			</motion.div>
			<motion.div
				className='md:w-35 xl:w-50 w-25 absolute right-1/12  top-50'
				animate={{
					y: [250, -240],
					x: [150, -240],
					rotate: [14, -14],
				}}
				transition={{
					y: {
						duration: 12,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					},
					x: {
						duration: 15,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					},
					rotate: {
						duration: 2,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					},
				}}
			>
				<LazyLoadImage src={ghosty} alt='ghosty' />
			</motion.div>
			<div className='lg:w-170 w-full md:w-120 mx-auto text-center font-extrabold lg:text-6xl text-4xl'>
				<LazyLoadImage src={notFound} alt='not found!' />
				<motion.div className='mb-10'>Oops! Page not found!</motion.div>
				<Link
					className='mb-20 relative text-xl md:text-3xl inline-flex items-center gap-3 border-2 font-bold border-white rounded-4xl py-3 px-6 hover:text-black hover:bg-white transition duration-100'
					to='/'
				>
					BACK TO HOME <House size={30} />
					<motion.div
						animate={{
							x: [-15, 15],
							rotate: [10, -10],
						}}
						transition={{
							x: {
								duration: 2,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
							},
							rotate: {
								duration: 2,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
							},
						}}
						className='absolute top-14 right-1/2 translate-x-1/2 md:w-35  xl:w-50 w-20'
					>
						<LazyLoadImage src={clown} alt='clown' />
					</motion.div>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
