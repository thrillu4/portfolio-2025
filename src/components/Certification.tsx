import js from '../images/certifications/js.jpg'
import mongo from '../images/certifications/mongo.jpg'
import next from '../images/certifications/next.jpg'
import web from '../images/certifications/web-dev.jpg'

const Certification = () => {
	return (
		<div className='bg-neutral-200'>
			<div>
				<h4 className='text-8xl my-40 text-center font-extrabold tracking-tighter'>
					CERTIFICATIONS
				</h4>
				<div className='grid grid-cols-2 gap-10'>
					<img src={next} alt='' className='w-180 mx-auto rounded-4xl' />
					<img src={mongo} alt='' className='w-180 mx-auto rounded-4xl' />
					<img src={js} alt='' className='w-180 mx-auto rounded-4xl' />
					<img src={web} alt='' className='w-180 mx-auto rounded-4xl' />
				</div>
			</div>
		</div>
	)
}

export default Certification
