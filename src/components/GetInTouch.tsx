import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { toast } from 'react-toastify'
import crow from '../images/mess/crow.png'
import mum from '../images/mess/mum.png'
import spiders from '../images/mess/spiders.png'
import { formSchema, type FormData } from '../types'

interface Props {
	bg: string
	color: string
}

const GetInTouch = ({ bg, color }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	})

	emailjs.init({
		publicKey: import.meta.env.VITE_PUBLIC_KEY,
	})

	const onSubmit = async (data: FormData) => {
		try {
			await emailjs.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				{
					name: data.name,
					email: data.email,
					phone: data.phone || '-',
					message: data.message,
				}
			)
			toast.success('Message sent successfully! 🎉', {
				position: 'bottom-right',
				theme: 'dark',
			})
			reset()
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong. Please try again later.', {
				style: { borderRadius: '8px', background: '#f87171', color: '#fff' },
				position: 'bottom-right',
			})
		}
	}

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
			className='contact w-full bg-white py-20 md:py-10 xl:py-0 md:h-screen overflow-hidden 2xl:overflow-visible'
		>
			<div className='xl:container  md:mx-auto relative flex items-center flex-col md:flex-row text-black h-full md:justify-evenly justify-center md:gap-15 gap-10'>
				<motion.div
					style={{ x: xLeft }}
					className='absolute md:bottom-10 xl:-bottom-5 2xl:bottom-10 -bottom-20 -left-2 2xl:-left-10 md:w-30 xl:w-50 w-20'
				>
					<img loading='lazy' src={crow} alt='Left Decoration' />
				</motion.div>
				<motion.div
					style={{ x: xRight }}
					className='absolute top-10 right-0  xl:-right-10 2xl:-right-0 md:w-30 xl:w-40 w-20 '
				>
					<LazyLoadImage src={mum} alt='Right Decoration' />
				</motion.div>

				<div>
					<motion.h3
						style={{ clipPath: clip, color }}
						className='text-4xl md:text-7xl xl:text-9xl text-center md:text-left  font-extrabold tracking-tighter mb-10'
					>
						LET'S <br /> GET IN <br /> TOUCH
					</motion.h3>
					<motion.a
						style={{ clipPath: clip, color }}
						href='mailto:kraya.work@gmail.com'
						className='text-base md:text-2xl xl:text-4xl underline text-center font-semibold block'
					>
						kraya.work@gmail.com
					</motion.a>
				</div>
				<div className='md:w-1/2 w-10/12'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						style={{ color }}
						className='flex flex-col gap-10'
					>
						<input
							type='text'
							placeholder='Full Name*'
							{...register('name')}
							autoComplete='on'
							className='border-b  text-xs md:text-base border-stone-500   border-dotted p-3 focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
						/>
						{errors.name && (
							<p className='text-red-500 text-xs md:text-base'>
								{errors.name.message}
							</p>
						)}
						<div className='flex items-center w-full gap-10'>
							<input
								type='email'
								placeholder='Email*'
								{...register('email')}
								autoComplete='on'
								className='border-b text-xs md:text-base  border-stone-500  border-dotted p-3 w-1/2 focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
							/>
							{errors.email && (
								<p className='text-red-500 text-xs md:text-base'>
									{errors.email.message}
								</p>
							)}
							<input
								type='tel'
								placeholder='Phone number'
								{...register('phone')}
								autoComplete='on'
								className='border-b  text-xs md:text-base border-stone-500  border-dotted p-3 w-1/2 focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
							/>
							{errors.phone && (
								<p className='text-red-500 text-xs md:text-base'>
									{errors.phone.message}
								</p>
							)}
						</div>
						<textarea
							placeholder='Message'
							{...register('message')}
							className='border-b text-xs md:text-base  border-stone-500  border-dotted px-3 pt-3 pb-10 resize-none focus:outline-2 focus:rounded-2xl focus:outline-purple-800'
						/>
						{errors.message && (
							<p className='text-red-500 text-xs md:text-base'>
								{errors.message.message}
							</p>
						)}
						<button
							type='submit'
							disabled={isSubmitting}
							className='relative text-sx border-3 border-purple-800 rounded-4xl w-full py-1 md:py-3 md:text-base xl:text-2xl text-purple-800 cursor-pointer hover:bg-purple-800 hover:text-white duration-300 font-bold transition '
						>
							{isSubmitting ? 'SENDING...' : 'SEND'}
							<motion.div
								className='absolute md:top-14 top-8 md:right-15 right-3  md:w-30 w-20'
								style={{ y }}
							>
								<LazyLoadImage src={spiders} alt='Right Decoration' />
							</motion.div>
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
