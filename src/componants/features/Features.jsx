import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Features = ({features}) => {
    return (
        <div className=''>
            
<p className='flex items-center'> <AiFillCheckCircle className=' rounded-lg'></AiFillCheckCircle>{features}</p>

        </div>
    );
};


Features.PropTypes = {
    features: PropTypes.string

}


export default Features;