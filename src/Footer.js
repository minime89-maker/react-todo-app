import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<div className='footer'>
			<span>Crafted with ♡ by
				<Link className='minja' to="https://github.com/minime89-maker" target={'_blank'} rel={'noreferrer noopener'} >Minja</Link>
			</span>
		</div>
	)
}

export default Footer