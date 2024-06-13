

const ProductCategory = () => {
    const categories = [
        {
            "category": "Face",
            "description": "Products for the face including foundation, concealer, powder, and more.",
            "image": "https://i.ibb.co/1v5RFZw/face.png",
            "numberOfProducts": 50,
            "products": [
                {
                    "name": "Foundation",
                    "description": "Provides a smooth, even base for makeup.",
                    "numberOfProducts": 15
                },
                {
                    "name": "Concealer",
                    "description": "Covers blemishes, dark circles, and imperfections.",
                    "numberOfProducts": 10
                },
                {
                    "name": "Powder",
                    "description": "Sets makeup and controls shine.",
                    "numberOfProducts": 8
                },
                {
                    "name": "Blush",
                    "description": "Adds color to the cheeks for a healthy glow.",
                    "numberOfProducts": 7
                },
                {
                    "name": "Highlighter",
                    "description": "Enhances and illuminates facial features.",
                    "numberOfProducts": 5
                },
                {
                    "name": "Primer",
                    "description": "Creates a smooth surface for makeup application.",
                    "numberOfProducts": 5
                }
            ]
        },
        {
            "category": "Eyes",
            "description": "Products for the eyes including eyeshadow, eyeliner, mascara, and more.",
            "image": "https://i.ibb.co/y56Cdz6/eye.png",
            "numberOfProducts": 40,
            "products": [
                {
                    "name": "Eyeshadow",
                    "description": "Adds color and dimension to the eyelids.",
                    "numberOfProducts": 15
                },
                {
                    "name": "Eyeliner",
                    "description": "Defines and accentuates the eyes.",
                    "numberOfProducts": 10
                },
                {
                    "name": "Mascara",
                    "description": "Enhances and lengthens the eyelashes.",
                    "numberOfProducts": 8
                },
                {
                    "name": "Eyebrow Pencil",
                    "description": "Defines and fills in the eyebrows.",
                    "numberOfProducts": 4
                },
                {
                    "name": "Eyeshadow Primer",
                    "description": "Ensures eyeshadow stays in place and looks vibrant.",
                    "numberOfProducts": 3
                }
            ]
        },
        {
            "category": "Lips",
            "description": "Products for the lips including lipstick, lip gloss, lip liner, and more.",
            "image": "https://i.ibb.co/s1xM18g/lipstick.png",
            "numberOfProducts": 30,
            "products": [
                {
                    "name": "Lipstick",
                    "description": "Provides color and texture to the lips.",
                    "numberOfProducts": 12
                },
                {
                    "name": "Lip Gloss",
                    "description": "Adds shine and a hint of color to the lips.",
                    "numberOfProducts": 8
                },
                {
                    "name": "Lip Liner",
                    "description": "Defines and shapes the lips.",
                    "numberOfProducts": 5
                },
                {
                    "name": "Lip Balm",
                    "description": "Moisturizes and protects the lips.",
                    "numberOfProducts": 5
                }
            ]
        },
        {
            "category": "Nails",
            "description": "Products for nail care and color including nail polish, nail treatment, and more.",
            "image": "https://i.ibb.co/yXnrfk4/nail.png",
            "numberOfProducts": 20,
            "products": [
                {
                    "name": "Nail Polish",
                    "description": "Provides color and shine to the nails.",
                    "numberOfProducts": 10
                },
                {
                    "name": "Nail Treatment",
                    "description": "Strengthens and protects the nails.",
                    "numberOfProducts": 5
                },
                {
                    "name": "Nail Polish Remover",
                    "description": "Removes nail polish quickly and effectively.",
                    "numberOfProducts": 3
                },
                {
                    "name": "Nail Art",
                    "description": "Decorative designs and embellishments for the nails.",
                    "numberOfProducts": 2
                }
            ]
        },
        {
            "category": "Tools",
            "description": "Makeup application tools including brushes, sponges, and more.",
            "image": "https://i.ibb.co/Pg426N1/tools.png",
            "numberOfProducts": 25,
            "products": [
                {
                    "name": "Makeup Brushes",
                    "description": "Tools for applying and blending makeup.",
                    "numberOfProducts": 10
                },
                {
                    "name": "Makeup Sponges",
                    "description": "Sponges for applying and blending foundation and concealer.",
                    "numberOfProducts": 5
                },
                {
                    "name": "Eyelash Curler",
                    "description": "Curler for enhancing the appearance of eyelashes.",
                    "numberOfProducts": 3
                },
                {
                    "name": "Tweezers",
                    "description": "Tool for shaping and plucking eyebrows.",
                    "numberOfProducts": 3
                },
                {
                    "name": "Makeup Bag",
                    "description": "Bag for organizing and storing makeup products.",
                    "numberOfProducts": 4
                }
            ]
        }
    ];

    return (
      <div className="w-10/12 mx-auto mt-24">
         <hr className="w-1/3 line" />
            <div className="mt-6 mb-12">
                <h1 className="styleHead">Category</h1>
                <p className="SubHead">Find your products</p>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
                <div key={index} className="relative">
                    <img className="w-full h-full" src={category.image} alt={category.category} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white text-center">
                        <p className="font-bold">{category.category}</p>
                        {/* <p>{category.description}</p> */}
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
};

export default ProductCategory;



{/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
{categories.map((category, index) => (
    <div key={index} > */}
        {/* <h2>{category.category}</h2> */}
        {/* <img className="w-52 h-52" src={category.image} alt={category.category} /> */}
        {/* <p>{category.description}</p>
        <p>Number of Products: {category.numberOfProducts}</p>
        <ul>
            {category.products.map((product, idx) => (
                <li key={idx}>
                    <strong>{product.name}</strong>
                    <p>{product.description}</p>
                    <p>Number of Products: {product.numberOfProducts}</p>
                </li>
            ))}
        </ul> */}
    {/* </div>
))}
</div> */}
