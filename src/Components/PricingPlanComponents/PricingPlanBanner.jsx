

const PricingPlanBanner = () => {
    return (
        <div className="w-full h-80 pt-12" style={{
            backgroundImage: 'url(https://i.ibb.co/Qc7GS8v/Pricing-Page-Banner.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <h1 className="text-5xl text-center font-dancing px-20 pt-20">PRICING PLANS</h1>
            <p className="text-base text-center p-10 font-dancing"
                    style={{
                     
                        color: 'black',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>Elevate Your Beauty with Affordable Plans</p>
        </div>
    );
};

export default PricingPlanBanner;