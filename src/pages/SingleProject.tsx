import { useParams } from 'react-router'

const SingleProject = () => {
	const params = useParams()
	return <div>{params.id}</div>
}

export default SingleProject
