import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button color='green' text='hello'/>
            <Button text='add'/>
        </header>
    )
}
Header.defaultProps={title:'Task Tracker',}
//defining types to catch errors easier
Header.propTypes={title:PropTypes.string.isRequired,}
//CSS in JS
const headingStyle={color:'red',backgroundColor:'blue'}
export default Header
