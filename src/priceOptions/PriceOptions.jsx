import PriceOption from "../componants/priceoption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "description": "Access to basic gym facilities, including cardio and weight equipment.",
            "price": 29.99,
            "duration": "per month",
            "features": [
                "Unlimited access to cardio area",
                "Access to basic weight training equipment",
                "Locker room access",
                "Discounts on selected merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "description": "Access to premium gym facilities, including sauna, pool, and unlimited group classes.",
            "price": 49.99,
            "duration": "per month",
            "features": [
                "Access to sauna and spa facilities",
                "Use of swimming pool",
                "Unlimited group fitness classes",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Personal Training",
            "description": "Ten one-on-one training sessions with a certified personal trainer.",
            "price": 299.99,
            "duration": "package",
            "features": [
                "Customized workout plans",
                "Nutritional guidance",
                "Progress tracking",
                "Access to Premium Membership facilities during sessions"
            ]
        }
        
    ]


    return (
        <div className="m-12 bg-slate-200">
            <h2 className='text-5xl font-bold'>best prices in the town</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6">

                {

                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)

                }

            </div>



        </div>
    );
};

export default PriceOptions;