import PropTypes from 'prop-types';
export const Header = ({title}) => {

    return (
        <div>
            <h1> {title}</h1>
        </div>
    )
}

Header.defaultProps ={
    title : "Task Tracker"
}

Header.propTypes ={
    title : PropTypes.string.isRequired
}

// const headingStyle ={
//     color:'red', 
//     backgroundColor:'black'
// }

export default Header