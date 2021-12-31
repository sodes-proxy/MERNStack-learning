import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAddTask}) => { 
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button color={showAddTask ? 'red': 'green'} text={showAddTask ? 'close': 'add'} onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps={title:'Task Tracker',}
//defining types to catch errors easier
Header.propTypes={title:PropTypes.string.isRequired,onAdd:PropTypes.func,showAddTask:PropTypes.bool }
//CSS in JS
const headingStyle={backgroundColor:'lightgray'}
export default Header
