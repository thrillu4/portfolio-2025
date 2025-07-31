interface IProps {
	children: React.ReactNode
}

const Button: React.FC<IProps> = ({ children }) => {
	return (
		<button className='text-2xl font-semibold border-2 border-violet-950 hover:border-white  hover:-rotate-6 duration-300 transition cursor-pointer  rounded-4xl py-5 px-15 bg-gradient-to-br from-black via-pink-500 via-purple-700 to-orange-500 hover:to-black hover:via-pink-500  hover:from-orange-500  block mx-auto'>
			{children}
		</button>
	)
}

export default Button
