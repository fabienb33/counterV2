import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
library.add(faStopwatch);

const Header = (props) => {
    return (
        <div className="header">
            <FontAwesomeIcon icon="stopwatch" className="stopwatch"/>
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default Header;