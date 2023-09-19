/* eslint-disable react/prop-types */


const Link = ({route}) => {
    return (
        <li className=" hover:bg-yellow-100" > <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;