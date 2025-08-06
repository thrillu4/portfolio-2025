import { Link } from 'react-router'

interface IProps {
	children: React.ReactNode
	to: string
}

const Button = ({ children, to }: IProps) => {
	return (
		<div className='flex justify-center'>
			<Link
				to={to}
				className='text-2xl font-semibold border-2 border-violet-950 hover:border-white  hover:-rotate-6 duration-300 transition cursor-pointer  rounded-4xl py-5 px-15 bg-gradient-to-br from-black  via-purple-700 to-orange-500 hover:to-black hover:via-pink-500  hover:from-orange-500'
			>
				{children}
			</Link>
		</div>
	)
}

export default Button
