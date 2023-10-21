import { Link } from "react-router-dom";


const PricingPlansCard = () => {
    return (
        <div className="font-dancing my-20 grid grid-cols-1 mx-8 md:grid-cols-2 md:gap-6 md:mx-16 lg:grid-cols-4 lg:gap-4 lg:mx-20">
            <div className="border-2 border-[#F38590] p-6 rounded-lg hover:bg-[#FEEAE7]">
                <h1 className="text-xl font-semibold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >Glow-Getter Deals </h1>
                <p className="text-xl font-semibold">BDT 4000</p>
                <ol className="ml-4">
                    <li>- Huda Beauty Lipstick</li>
                    <li>- Mini Eye Shadow palette</li>
                    <li>- Mini Green Diva Primer </li>
                    <li>- Mini Green Diva Foundation</li>
                    <li>- Maybelline New York kajal</li>
                    <li>- Mascara</li>
                    <li>- Mini Make Up brash set</li>
                    <li>- Eye Liner</li>
                </ol>
                <Link to='/joinUs'>
                    <button className="btn text-lg text-black font-dancing my-4 w-full" style={{ background: 'linear-gradient(to right,#F38590, #FEEAE7,#F38590)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        GET PLAN
                    </button>
                </Link>
            </div>
            <div className="border-2 border-[#F38590] p-6 rounded-lg hover:bg-[#FEEAE7]">
                <h1 className="text-xl font-semibold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Luxe for Less </h1>
                <p className="text-xl font-semibold">BDT 4000</p>
                <ol>
                    <li>- Huda Beauty Lipstick</li>
                    <li>- Mini Eye Shadow palette</li>
                    <li>- Mini Green Diva Primer </li>
                    <li>- Mini Green Diva Foundation</li>
                    <li>- Maybelline New York kajal</li>
                    <li>- Mascara</li>
                    <li>- Mini Make Up brash set</li>
                    <li>- Eye Liner</li>
                </ol>
                <Link to='/joinUs'>
                    <button className="btn text-lg text-black font-dancing my-4 w-full" style={{ background: 'linear-gradient(to right,#F38590, #FEEAE7,#F38590)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        GET PLAN
                    </button>
                </Link>
            </div>
            <div className="border-2 border-[#F38590] p-6 rounded-lg hover:bg-[#FEEAE7]">
                <h1 className="text-xl font-semibold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Gorgeous Deals </h1>
                <p className="text-xl font-semibold">BDT 4000</p>
                <ol>
                    <li>- Huda Beauty Lipstick</li>
                    <li>- Mini Eye Shadow palette</li>
                    <li>- Mini Green Diva Primer </li>
                    <li>- Mini Green Diva Foundation</li>
                    <li>- Maybelline New York kajal</li>
                    <li>- Mascara</li>
                    <li>- Mini Make Up brash set</li>
                    <li>- Eye Liner</li>
                </ol>
                <Link to='/joinUs'>
                    <button className="btn text-lg text-black font-dancing my-4 w-full" style={{ background: 'linear-gradient(to right,#F38590, #FEEAE7,#F38590)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        GET PLAN
                    </button>
                </Link>
            </div>
            <div className="border-2 border-[#F38590] p-6 rounded-lg hover:bg-[#FEEAE7]">
                <h1 className="text-xl font-semibold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Enchanting Offers </h1>
                <p className="text-xl font-semibold">BDT 4000</p>
                <ol>
                    <li>- Huda Beauty Lipstick</li>
                    <li>- Mini Eye Shadow palette</li>
                    <li>- Mini Green Diva Primer </li>
                    <li>- Mini Green Diva Foundation</li>
                    <li>- Maybelline New York kajal</li>
                    <li>- Mascara</li>
                    <li>- Mini Make Up brash set</li>
                    <li>- Eye Liner</li>
                </ol>
                <Link to='/joinUs'>
                    <button className="btn text-lg text-black font-dancing my-4 w-full" style={{ background: 'linear-gradient(to right,#F38590, #FEEAE7,#F38590)', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                        GET PLAN
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PricingPlansCard;