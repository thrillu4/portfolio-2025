import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import crow from '../images/mess/crow.png'
import mum from '../images/mess/mum.png'
import spiders from '../images/mess/spiders.png'

interface Props {
	bg: string
	color: string
}

const GetInTouch = ({ bg, color }: Props) => {
	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'center center'],
	})

	const clip = useTransform(
		scrollYProgress,
		[0, 0.9],
		['inset(0 100% 0 0%)', 'inset(0 0% 0 0%)']
	)

	const xRight = useTransform(scrollYProgress, [0.3, 1], ['350px', '0px'])
	const xLeft = useTransform(scrollYProgress, [0, 1], ['-250px', '0px'])
	const y = useTransform(scrollYProgress, [0.5, 1], ['100px', '0px'])

	return (
		<section
			style={{ backgroundColor: bg, color }}
			ref={container}
			className='contact w-full bg-white py-20 md:py-0 md:h-screen overflow-hidden'
		>
			<div className='md:container md:mx-auto relative flex items-center flex-col md:flex-row text-black h-full md:justify-evenly justify-center md:gap-15 gap-10'>
				<motion.img
					src={mum}
					style={{ x: xRight }}
					alt='Right Decoration'
					className='absolute top-10 right-0  md:-right-10 md:w-40 w-20 '
				/>
				<motion.img
					src={crow}
					alt='Left Decoration'
					className='absolute md:bottom-10 -bottom-20 -left-2 md:-left-[7%] md:w-50 w-20'
					style={{ x: xLeft }}
				/>
				<div>
					<motion.h3
						style={{ clipPath: clip, color }}
						className='text-4xl md:text-9xl text-center md:text-left  font-extrabold tracking-tighter mb-10'
					>
						LET'S <br /> GET IN <br /> TOUCH
					</motion.h3>
					<motion.a
						style={{ clipPath: clip, color }}
						href='mailto:kraya.work@gmail.com'
						className='text-base md:text-4xl underline text-center font-semibold block'
					>
						kraya.work@gmail.com
					</motion.a>
				</div>
				<div className='md:w-1/2 w-10/12'>
					<form style={{ color }} className='flex flex-col gap-10'>
						<input
							type='text'
							name='name'
							placeholder='Full Name*'
							required
							autoComplete='on'
							className='border-b  text-xs md:text-base border-stone-500   border-dotted p-3 focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
						/>
						<div className='flex items-center w-full gap-10'>
							<input
								type='email'
								name='email'
								placeholder='Email*'
								required
								autoComplete='on'
								className='border-b text-xs md:text-base  border-stone-500  border-dotted p-3 w-1/2 focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
							/>
							<input
								type='tel'
								name='phone'
								placeholder='Phone number'
								autoComplete='on'
								className='border-b  text-xs md:text-base border-stone-500  border-dotted p-3 w-1/2 focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
							/>
						</div>
						<textarea
							name='message'
							placeholder='Message'
							className='border-b text-xs md:text-base  border-stone-500  border-dotted px-3 pt-3 pb-10 resize-none focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
						/>
						<button
							type='submit'
							className='relative text-sx border-3 border-purple-800 rounded-4xl w-full py-1 md:py-3 md:text-2xl text-purple-800 cursor-pointer hover:bg-purple-800 hover:text-white duration-300 font-bold transition '
						>
							SEND
							<motion.img
								src={spiders}
								alt='Right Decoration'
								className='absolute md:top-14 top-8 md:right-15 right-3  md:w-30 w-20'
								style={{ y }}
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
