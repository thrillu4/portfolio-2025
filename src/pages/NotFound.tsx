import { House } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import notFound from '../images/404/404.png'
import clown from '../images/404/clown.png'
import ghost from '../images/404/ghost.png'
import ghosty from '../images/404/ghosty.png'

const NotFound = () => {
	return (
		<div className='h-screen container'>
			<motion.img
				className='w-50 absolute left-1/12  top-30'
				src={ghost}
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
			/>
			<motion.img
				src={ghosty}
				className='w-50 absolute right-1/12  top-50'
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
			/>
			<div className='w-170 mx-auto text-center font-extrabold text-6xl'>
				<motion.img src={notFound} alt='not found!' />
				<motion.div className='mb-10'>Oops! Page not found!</motion.div>
				<Link
					className='relative text-3xl inline-flex items-center gap-3 border-2 font-bold border-white rounded-4xl py-3 px-6 hover:text-black hover:bg-white transition duration-100'
					to='/'
				>
					BACK TO HOME <House size={30} />
					<motion.img
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
						src={clown}
						className='absolute top-14 right-1/2 translate-x-1/2 w-50'
					/>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
