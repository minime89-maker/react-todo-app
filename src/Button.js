import PropTypes from 'prop-types'


const Button = ({onClick}) => {
	return (
		<div>
			<button className='add' onClick={onClick}>+</button>
		</div>
	)
}


Button.propTypes = {
	onClick: PropTypes.func
}

export default Button
