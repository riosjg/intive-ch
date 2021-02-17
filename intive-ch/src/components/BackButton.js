import {Link} from 'react-router-dom';

const BackButton = () => {
    return (
        <Link to="/" className="fixed z-50">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-1 px-2 border-b-4 border-blue-700 
            hover:border-blue-500 rounded top-0 left-0 mt-1 ml-1 z-50">Users List</button>
        </Link>
    );
}
 
export default BackButton;