interface Props {
	src: string
	title: string
}

const TechBox = ({ src, title }: Props) => {
	return (
		<div className='border-2 flex items-center text-4xl p-5 rounded-2xl gap-5 justify-center'>
			<img src={src} alt={title} className='w-10' />
			<div>{title}</div>
		</div>
	)
}

export default TechBox
