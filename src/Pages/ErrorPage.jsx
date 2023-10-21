import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            
            <Link to='/' ><button className=" text-lg text-white font-dancing w-full py-2" style={{ background: 'linear-gradient(to right, #537451, #A0D7AC)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>Back To Home</button> </Link>
            <img className="rounded-full bottom-2 w-1/2 text-center mx-auto my-12" src="https://i.ibb.co/BZSNXGW/noData1.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;