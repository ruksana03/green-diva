import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

const SkinTypes = () => {
    const skinTypes = [
        {
            type: "Dry",
            description: "Lacks moisture and may feel tight, rough, or flaky.",
            tips: [
                "Use a gentle, hydrating cleanser.",
                "Apply a rich moisturizer twice daily.",
                "Avoid hot showers and harsh exfoliants."
            ],
            products: [
                "Hydrating Cleanser",
                "Rich Moisturizing Cream",
                "Nourishing Face Oil"
            ],
            image: "https://i.ibb.co/ccNQ0vY/dry.png"
        },
        {
            type: "Oily",
            description: "Characterized by excess sebum production, leading to a shiny appearance and potential for acne.",
            tips: [
                "Use a foaming or gel cleanser.",
                "Apply a light, oil-free moisturizer.",
                "Use products with salicylic acid or benzoyl peroxide."
            ],
            products: [
                "Foaming Cleanser",
                "Oil-Free Moisturizer",
                "Salicylic Acid Treatment"
            ],
            image: "https://i.ibb.co/zJhSMFc/oily.png"
        },
        {
            type: "Sensitive",
            description: "Easily irritated by products or environmental factors, prone to redness, itching, or burning.",
            tips: [
                "Use fragrance-free, hypoallergenic products.",
                "Avoid harsh chemicals and exfoliants.",
                "Test new products on a small area first."
            ],
            products: [
                "Gentle Cleanser",
                "Soothing Moisturizer",
                "Calming Serum"
            ],
            image: "https://i.ibb.co/VNQFKf7/Sensitive.png"
        },
        {
            type: "Mature",
            description: "Skin that has aged, often characterized by reduced elasticity, wrinkles, and dryness.",
            tips: [
                "Use anti-aging products with retinoids and peptides.",
                "Apply a rich moisturizer.",
                "Use sunscreen daily to protect against UV damage."
            ],
            products: [
                "Anti-Aging Serum",
                "Rich Night Cream",
                "Broad-Spectrum Sunscreen"
            ],
            image: "https://i.ibb.co/F4qySZ7/Mature.png"
        },
        {
            type: "Combination",
            description: "Features both oily and dry areas, typically oily in the T-zone (forehead, nose, and chin) and dry on the cheeks.",
            tips: [
                "Use a gentle cleanser.",
                "Apply a lightweight moisturizer on oily areas and a richer one on dry areas.",
                "Use mattifying products on the T-zone."
            ],
            products: [
                "Balancing Cleanser",
                "Lightweight Moisturizer",
                "Mattifying Primer"
            ],
            image: "https://i.ibb.co/F4DZmdg/Combination.png"
        },
        {
            type: "Normal",
            description: "Balanced, not too oily or dry, with few imperfections.",
            tips: [
                "Maintain your routine with a gentle cleanser, a light moisturizer, and sunscreen.",
                "Use occasional treatments for skin maintenance."
            ],
            products: [
                "Gentle Cleanser",
                "Daily Moisturizer",
                "SPF 30 Sunscreen"
            ],
            image: "https://i.ibb.co/qpGL1Yx/normal.png"
        }
    ];

    return (
        <div className="w-10/12 mx-auto mt-24">
            <hr className="w-1/3 line" />
            <div className="mt-6 mb-12">
                <h1 className="styleHead">Dear Diva</h1>
                <p className="SubHead">Find your skin type</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skinTypes.map((skinType, index) => (
                    <div key={index} className="mr-12 cursor-pointer">
                        <div className="flex justify-between items-center mr-6">
                            <div className="flex items-center gap-6">
                                <img className="w-20 h-28 rounded-md pb-2" src={skinType.image} alt={`${skinType.type} skin`} />
                                <h2>{skinType.type}</h2>
                            </div>
                            <div>
                                <IoIosArrowDown />
                                {/* <IoIosArrowUp/> */}
                            </div>

                            {/* <p>{skinType.description}</p>
                        <h3>Tips:</h3>
                        <ul>
                            {skinType.tips.map((tip, tipIndex) => (
                                <li key={tipIndex}>{tip}</li>
                            ))}
                        </ul>
                        <h3>Our Products:</h3>
                        <ul>
                            {skinType.products.map((product, productIndex) => (
                                <li key={productIndex}>{product}</li>
                            ))}
                        </ul> */}
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkinTypes;
