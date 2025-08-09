import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import github from '../images/links/github.png'
import instagram from '../images/links/instagram.png'
import linkedin from '../images/links/linkedin.png'
import telegram from '../images/links/telegram.png'

const Footer = () => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start center'],
	})

	const name = useTransform(scrollYProgress, [0, 1], ['100px', '0px'])
	const surname = useTransform(scrollYProgress, [0, 1], ['-100px', '0px'])
	const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

	return (
		<footer className=' relative z-50'>
			<div ref={container}>
				<div className='container pt-20 pb-10 flex items-center justify-between'>
					<div
						style={{
							WebkitTextStroke: '1px #fff',
							color: '#000',
						}}
						className='font-extrabold text-9xl tracking-tighter'
					>
						<motion.div style={{ x: name, opacity }}>DENYS</motion.div>
						<motion.div style={{ x: surname, opacity }}>KRAIOVYI</motion.div>
					</div>

					<div className='flex gap-50'>
						<div className='flex flex-col items-center gap-4'>
							<div className='text-2xl font-bold'>SOCIAL</div>
							<ul className='flex flex-col gap-3'>
								<li>
									<a
										href='https://t.me/real_thrill'
										target='_blank'
										className='flex items-center gap-1 hover:underline transition duration-300'
									>
										<img className='w-5' src={telegram} alt='telegram' />
										TELEGRAM
									</a>
								</li>
								<li>
									<a
										href='https://www.linkedin.com/in/denis-kraevoy/'
										target='_blank'
										className='flex items-center gap-1 hover:underline transition duration-300'
									>
										<img className='w-5' src={linkedin} alt='linkedIn' />
										LINKEDIN
									</a>
								</li>
								<li>
									<a
										href='https://github.com/thrillu4'
										target='_blank'
										className='flex items-center gap-1 hover:underline transition duration-300'
									>
										<img className='w-5' src={github} alt='github' />
										GITHUB
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/thrillinst'
										target='_blank'
										className='flex items-center gap-1 hover:underline transition duration-300'
									>
										<img className='w-5' src={instagram} alt='instagram' />
										INSTAGRAM
									</a>
								</li>
							</ul>
						</div>
						<div className='flex flex-col items-center gap-4'>
							<div className='text-2xl font-bold'>CONTACT</div>
							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='hover:underline transition duration-300'
										href='mailto:kraya.work@gmail.com
'
									>
										kraya.work@gmail.com
									</a>
								</li>
								<li>
									Shevchenka St, 109 <br /> Nikopol', <br /> Dnipropetrovs'ka
									oblast, <br /> 53200
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='flex items-center  h-70'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M480 210A160 160 0 0 0 210 93.8V0A160 160 0 0 0 93.8 270H0a160 160 0 0 0 270 116.2V480a160 160 0 0 0 116.2-270H480Zm-210 60h-60v-60h60v60Z'
							className='fill-stone-200 hover:fill-purple-700 transition duration-200'
						></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<g className='fill-green-500 '>
							<circle
								cx='120'
								cy='120'
								r='120'
								className=' hover:fill-stone-200 transition duration-200'
							></circle>
							<circle
								className=' hover:fill-stone-200 transition duration-200'
								cx='120'
								cy='360'
								r='120'
							></circle>
							<circle
								className=' hover:fill-stone-200 transition duration-200'
								cx='360'
								cy='120'
								r='120'
							></circle>
							<circle
								className=' hover:fill-stone-200 transition duration-200'
								cx='360'
								cy='360'
								r='120'
							></circle>
						</g>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M356.5 65.3a42 42 0 0 0-35-65.3h-163a42 42 0 0 0-35 65.3c25.5 38.2-20 83.7-58.2 58.2a42 42 0 0 0-65.3 35v163a42 42 0 0 0 65.3 35c38.2-25.5 83.7 20 58.2 58.2a42 42 0 0 0 35 65.3h163a42 42 0 0 0 35-65.3c-25.5-38.2 20-83.7 58.2-58.2a42 42 0 0 0 65.3-35v-163a42 42 0 0 0-65.3-35c-38.2 25.5-83.7-20-58.2-58.2Z'
							className='fill-stone-200 hover:fill-orange-500 transition duration-200'
						></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M480 120 360 0 240 120 120 0 0 120l120 120L0 360l120 120 120-120 120 120 120-120-120-120 120-120z'
							className='fill-purple-700 hover:fill-stone-200 transition duration-200'
						></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M450 210c-26.9 0-36.4-35.6-13.1-49a30 30 0 1 0-30-52c-23.3 13.5-49.3-12.6-36-35.9a30 30 0 0 0-52-30h.1c-13.4 23.3-49 13.8-49-13a30 30 0 1 0-60 0c0 26.8-35.6 36.3-49 13a30 30 0 1 0-52 30c13.5 23.3-12.6 49.4-35.9 36a30 30 0 0 0-30 52c23.3 13.3 13.8 48.9-13 48.9a30 30 0 1 0 0 60c26.8 0 36.3 35.6 13 49a30 30 0 1 0 30 52c23.3-13.5 49.4 12.6 36 35.9a30 30 0 0 0 52 30h-.1c13.4-23.3 49-13.8 49 13a30 30 0 1 0 60 0c0-26.8 35.6-36.3 49-13a30 30 0 1 0 52-30c-13.4-23.3 12.6-49.4 35.9-36a30 30 0 0 0 30-52c-23.3-13.3-13.8-48.9 13.1-48.9a30 30 0 1 0 0-60Zm-210 90a60 60 0 1 1 0-120 60 60 0 0 1 0 120Z'
							className='fill-stone-200 hover:fill-pink-700 transition duration-200'
						></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M320 0v160a160 160 0 1 0-320 0v320h160V320a160 160 0 1 0 320 0V0H320Z'
							className='fill-orange-500 hover:fill-stone-200 transition duration-200'
						></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M480 0A339.4 339.4 0 0 1 0 0a339.4 339.4 0 0 1 0 480 339.4 339.4 0 0 1 480 0 339.4 339.4 0 0 1 0-480Z'
							className='fill-stone-200 hover:fill-green-500 transition duration-200'
						></path>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'>
						<path
							d='M480 0H0l240 240L480 0zM480 240H0l240 240 240-240z'
							className='fill-pink-800 hover:fill-stone-200 transition duration-200'
						></path>
					</svg>
				</div>
			</div>
		</footer>
	)
}

export default Footer
