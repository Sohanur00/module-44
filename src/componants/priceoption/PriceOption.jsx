/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Features from '../features/Features';


const PriceOption = ({ option }) => {

    const { name, price, features } = option;





    return (
        <div className='bg-teal-600 mt-4 p-2 rounded-lg  text-white'>

            <h2 className='text-center'>
                <span className='text-4xl font-bold mb-4 ' >${price}</span>
                <span className='text-2xl'>/mon</span>

            </h2>
            <h4 className='text-3xl text-center'>{name}</h4>

<div className=''>
{
features.map((features,index) => <Features key={index} features={features}>
    
</Features>)

}
</div>
<button className='mt-12 bg-blue-700 w-full py-4 rounded-lg hover:bg-orange-500'>Purcese Now</button>

        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object

}


export default PriceOption;