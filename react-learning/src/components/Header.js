const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
/* destructure example
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}*/
Header.defaultProps={title:'Task Tracker',}
export default Header
