import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:w-5/6 lg:mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;






 const data=  [
    {
      "id": "prod-001",
      "name": "Velvet Rouge Lipstick - Crimson Bloom",
      "shortName": "Velvet Rouge - Crimson",
      "category": "Lipstick",
      "ratingAverage": 4.8,
      "ratingCount": 210,
      "price": 49,
      "compareAtPrice": 99,
      "discountText": "Save 50% right now",
      "currency": "USD",
      "images": {
        "main": "https://i.ibb.co.com/gbppHvRd/28cf4a746213816b287cdffbf7695b00c7a59b7e-1.jpg",
        "thumbnails": [
          "https://i.ibb.co.com/gbppHvRd/28cf4a746213816b287cdffbf7695b00c7a59b7e-1.jpg",
          "https://i.ibb.co.com/0VzjYCbw/cbb7733d111857e03110c157652bb725433d3de0.jpg",
          "https://i.ibb.co.com/6Rc4vZgK/68f5b21272913dbaf8257293dae60b44ca941c4e.jpg",
          "https://i.ibb.co.com/ns9Qk6S0/2ffec0f4708d4f9cd42ba96a156e5a547a32106e.jpg"
        ],
        "zoom": "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Long-lasting velvet finish lipstick with rich pigmentation and hydration.",
      "details": "High-pigment formula with moisturizing emollients for long wear and smooth finish.",
      "theLowdown": [
        "Velvet satin finish",
        "Up to 8 hours wear",
        "Hydrating with Vitamin E",
        "Transfer-resistant"
      ],
      "whatElse": "Cruelty-free & dermatologically tested.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 10,
        "inStock": true
      }
    },
    {
      "id": "prod-002",
      "name": "Matte Kiss Lipstick - Rose Petal",
      "shortName": "Matte Kiss - Rose",
      "category": "Lipstick",
      "ratingAverage": 4.6,
      "ratingCount": 134,
      "price": 29,
      "compareAtPrice": 59,
      "discountText": "Limited offer 50% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Smooth matte lipstick with full coverage and comfortable wear.",
      "details": "Non-drying matte formula enriched with nourishing oils.",
      "theLowdown": [
        "Full pigmentation",
        "Lightweight feel",
        "No flaking",
        "Everyday wearable"
      ],
      "whatElse": "Paraben-free and cruelty-free.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 8,
        "inStock": true
      }
    },
    {
      "id": "prod-003",
      "name": "HydraGlow Moisturizer - Day Cream",
      "shortName": "HydraGlow Day",
      "category": "Moisturizer",
      "ratingAverage": 4.5,
      "ratingCount": 320,
      "price": 24,
      "compareAtPrice": 39,
      "discountText": "20% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Lightweight day moisturizer with SPF and hyaluronic acid.",
      "details": "Provides 24-hour hydration, protects from UV and environmental stress.",
      "theLowdown": [
        "SPF protection",
        "Hyaluronic acid",
        "Non-greasy",
        "Brightening effect"
      ],
      "whatElse": "Suitable for all skin types, non-comedogenic.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 5,
        "inStock": true
      }
    },
    {
      "id": "prod-004",
      "name": "Purify Clay Mask - Deep Clean",
      "shortName": "Purify Clay Mask",
      "category": "Masks",
      "ratingAverage": 4.4,
      "ratingCount": 98,
      "price": 18,
      "compareAtPrice": 30,
      "discountText": "35% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1576675786213-99f0f9d7d6c9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Deep-clean clay mask to absorb excess oil and clear pores.",
      "details": "Kaolin and bentonite blend draws out impurities and refines texture.",
      "theLowdown": [
        "Detoxifies skin",
        "Reduces shine",
        "Minimizes pores",
        "Gentle formula"
      ],
      "whatElse": "Use 1-2 times weekly for best results.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 6,
        "inStock": true
      }
    },
    {
      "id": "prod-005",
      "name": "Brighten Serum - Vitamin C",
      "shortName": "Brighten Serum",
      "category": "Serum",
      "ratingAverage": 4.7,
      "ratingCount": 412,
      "price": 35,
      "compareAtPrice": 59,
      "discountText": "Save 40%",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Stable Vitamin C serum to brighten and even skin tone.",
      "details": "Contains ascorbyl tetraisopalmitate for gentle brightening and antioxidant protection.",
      "theLowdown": [
        "Reduces dark spots",
        "Boosts radiance",
        "Antioxidant-rich",
        "Improves texture"
      ],
      "whatElse": "Pair with sunscreen during day.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 4,
        "inStock": true
      }
    },
    {
      "id": "prod-006",
      "name": "Gentle Foam Cleanser",
      "shortName": "Gentle Foam",
      "category": "Cleansers",
      "ratingAverage": 4.3,
      "ratingCount": 187,
      "price": 15,
      "compareAtPrice": 25,
      "discountText": "Save 40%",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Mild foam cleanser that removes dirt without stripping moisture.",
      "details": "Gentle surfactants and glycerin maintain skin barrier while cleansing.",
      "theLowdown": [
        "Sulfate-free",
        "Balances pH",
        "Suitable for sensitive skin",
        "Removes light makeup"
      ],
      "whatElse": "Use morning and night for clean, fresh skin.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 6,
        "inStock": true
      }
    },
    {
      "id": "prod-007",
      "name": "Overnight Repair Serum - Retinol",
      "shortName": "Overnight Retinol",
      "category": "Serum",
      "ratingAverage": 4.6,
      "ratingCount": 256,
      "price": 42,
      "compareAtPrice": 70,
      "discountText": "Special launch price",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Stable retinol serum for nighttime skin renewal.",
      "details": "Encapsulated retinol minimizes irritation while promoting cell turnover.",
      "theLowdown": [
        "Reduces fine lines",
        "Improves texture",
        "Night-only formula",
        "Use with moisturizer"
      ],
      "whatElse": "Start 2-3 times weekly and build tolerance.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 3,
        "inStock": true
      }
    },
    {
      "id": "prod-008",
      "name": "Calming Sheet Mask - Aloe Vera",
      "shortName": "Aloe Sheet Mask",
      "category": "Masks",
      "ratingAverage": 4.2,
      "ratingCount": 89,
      "price": 6,
      "compareAtPrice": 10,
      "discountText": "Buy 3 get 1 free",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1576675786213-99f0f9d7d6c9?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1576675786213-99f0f9d7d6c9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1576675786213-99f0f9d7d6c9?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Soothing sheet mask infused with aloe and panthenol.",
      "details": "Instant calming and hydration for irritated or sensitive skin.",
      "theLowdown": [
        "Cooling effect",
        "Reduces redness",
        "Hydrating serum",
        "One-use convenience"
      ],
      "whatElse": "Keep refrigerated for extra soothing.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 12,
        "inStock": true
      }
    },
    {
      "id": "prod-009",
      "name": "Oil Control Cleanser - Charcoal",
      "shortName": "Charcoal Cleanser",
      "category": "Cleansers",
      "ratingAverage": 4.1,
      "ratingCount": 143,
      "price": 17,
      "compareAtPrice": 29,
      "discountText": "20% off today",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Deep pore cleansing charcoal formula for oily skin.",
      "details": "Activated charcoal absorbs impurities while gentle cleansers remove oil.",
      "theLowdown": [
        "Deep clean",
        "Controls sebum",
        "Prevents breakouts",
        "Refreshing lather"
      ],
      "whatElse": "Follow with toner to rebalance pH.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 7,
        "inStock": true
      }
    },
    {
      "id": "prod-010",
      "name": "Hydra Boost Moisturizer - Gel",
      "shortName": "Hydra Boost Gel",
      "category": "Moisturizer",
      "ratingAverage": 4.5,
      "ratingCount": 278,
      "price": 22,
      "compareAtPrice": 35,
      "discountText": "Save 30%",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1587613865767-0b2f8b6d1a5b?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1587613865767-0b2f8b6d1a5b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1587613865767-0b2f8b6d1a5b?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Oil-free gel moisturizer with hyaluronic acid for lightweight hydration.",
      "details": "Fast-absorbing gel that plumps skin and reduces shine.",
      "theLowdown": [
        "Hyaluronic acid",
        "Oil-free",
        "Non-greasy",
        "Great under makeup"
      ],
      "whatElse": "Ideal for combination to oily skin.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 6,
        "inStock": true
      }
    },
    {
      "id": "prod-011",
      "name": "Soothing Night Cream - Oat Extract",
      "shortName": "Soothing Night",
      "category": "Moisturizer",
      "ratingAverage": 4.4,
      "ratingCount": 95,
      "price": 27,
      "compareAtPrice": 45,
      "discountText": "Special offer",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Rich night cream to repair and calm skin while sleeping.",
      "details": "Oat extract and ceramides restore barrier and soothe irritation.",
      "theLowdown": [
        "Barrier repair",
        "Reduces redness",
        "Deep nourishment",
        "Non-comedogenic"
      ],
      "whatElse": "Use after serum for best results.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 4,
        "inStock": true
      }
    },
    {
      "id": "prod-012",
      "name": "Glow Boost Serum - Niacinamide",
      "shortName": "Glow Niacinamide",
      "category": "Serum",
      "ratingAverage": 4.6,
      "ratingCount": 301,
      "price": 30,
      "compareAtPrice": 50,
      "discountText": "Bundle discount available",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Niacinamide serum to reduce pores and even skin tone.",
      "details": "2% niacinamide formula to balance oil and improve skin texture.",
      "theLowdown": [
        "Minimizes pores",
        "Controls oil",
        "Brightens skin",
        "Lightweight"
      ],
      "whatElse": "Works well with hyaluronic acid.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 5,
        "inStock": true
      }
    },
    {
      "id": "prod-013",
      "name": "Hydrating Sheet Mask - Hyaluronic",
      "shortName": "Hyaluronic Mask",
      "category": "Masks",
      "ratingAverage": 4.5,
      "ratingCount": 164,
      "price": 7,
      "compareAtPrice": 12,
      "discountText": "2 for $12",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Sheet mask soaked with hyaluronic serum for instant plumpness.",
      "details": "Delivers deep hydration and restores bounce.",
      "theLowdown": [
        "Instant hydration",
        "Plumping effect",
        "Soothing",
        "Easy to use"
      ],
      "whatElse": "Great before events for quick glow.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 20,
        "inStock": true
      }
    },
    {
      "id": "prod-014",
      "name": "Balancing Toner - Witch Hazel",
      "shortName": "Witch Hazel Toner",
      "category": "Cleansers",
      "ratingAverage": 4.0,
      "ratingCount": 76,
      "price": 12,
      "compareAtPrice": 18,
      "discountText": "10% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Alcohol-free witch hazel toner to tighten pores and refresh skin.",
      "details": "Soothes and refreshes while maintaining moisture balance.",
      "theLowdown": [
        "Pore-tightening",
        "Soothing",
        "Alcohol-free",
        "Good for oily skin"
      ],
      "whatElse": "Use after cleansing and before serum.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 10,
        "inStock": true
      }
    },
    {
      "id": "prod-015",
      "name": "Lip Care Balm - Hydrate",
      "shortName": "Lip Balm Hydrate",
      "category": "Lipstick",
      "ratingAverage": 4.4,
      "ratingCount": 205,
      "price": 8,
      "compareAtPrice": 12,
      "discountText": "25% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Nourishing lip balm with shea butter for soft, smooth lips.",
      "details": "Non-sticky formula with long-lasting moisture.",
      "theLowdown": [
        "Shea butter",
        "Long-lasting",
        "Soothes cracks",
        "Everyday essential"
      ],
      "whatElse": "Great as a base under lipstick.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 15,
        "inStock": true
      }
    },
    {
      "id": "prod-016",
      "name": "Brightening Cleanser - Enzyme",
      "shortName": "Enzyme Cleanser",
      "category": "Cleansers",
      "ratingAverage": 4.3,
      "ratingCount": 132,
      "price": 19,
      "compareAtPrice": 29,
      "discountText": "15% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Gentle enzyme cleanser to exfoliate and brighten dull skin.",
      "details": "Papain and mild surfactants remove dead skin without irritation.",
      "theLowdown": [
        "Brightens",
        "Mild exfoliation",
        "Non-abrasive",
        "Smooth finish"
      ],
      "whatElse": "Use 2-3 times weekly.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 6,
        "inStock": true
      }
    },
    {
      "id": "prod-017",
      "name": "Soothing Mist - Rosewater",
      "shortName": "Rosewater Mist",
      "category": "Moisturizer",
      "ratingAverage": 4.2,
      "ratingCount": 58,
      "price": 11,
      "compareAtPrice": 16,
      "discountText": "10% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1495121605193-b116b5b09a11?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1495121605193-b116b5b09a11?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1495121605193-b116b5b09a11?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Refreshing rosewater mist to hydrate and set makeup.",
      "details": "Alcohol-free hydrating mist with soothing botanicals.",
      "theLowdown": [
        "Instant refresh",
        "Good for setting makeup",
        "Soothing",
        "Portable"
      ],
      "whatElse": "Keep in bag for midday refresh.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 20,
        "inStock": true
      }
    },
    {
      "id": "prod-018",
      "name": "Vitamin E Repair Oil",
      "shortName": "Vitamin E Oil",
      "category": "Serum",
      "ratingAverage": 4.5,
      "ratingCount": 92,
      "price": 26,
      "compareAtPrice": 40,
      "discountText": "Free shipping over $50",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Nourishing facial oil with vitamin E for dry and mature skin.",
      "details": "Lightweight oil that absorbs quickly and improves skin elasticity.",
      "theLowdown": [
        "Deep nourishment",
        "Improves elasticity",
        "Reduces flakiness",
        "Antioxidant-rich"
      ],
      "whatElse": "Use a few drops at night under moisturizer.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 4,
        "inStock": true
      }
    },
    {
      "id": "prod-019",
      "name": "Detox Peel Mask - AHA",
      "shortName": "AHA Peel Mask",
      "category": "Masks",
      "ratingAverage": 4.4,
      "ratingCount": 140,
      "price": 20,
      "compareAtPrice": 34,
      "discountText": "15% off first order",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1576675786213-99f0f9d7d6c9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Mild AHA peel mask to resurface and brighten skin.",
      "details": "Lactic and glycolic acids gently exfoliate for smoother texture.",
      "theLowdown": [
        "Brightens",
        "Smooths texture",
        "Gentle peel",
        "Use weekly"
      ],
      "whatElse": "Avoid sun exposure after use and wear SPF.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 6,
        "inStock": true
      }
    },
    {
      "id": "prod-020",
      "name": "Clear Pore Spot Treatment",
      "shortName": "Spot Treatment",
      "category": "Serum",
      "ratingAverage": 4.2,
      "ratingCount": 180,
      "price": 14,
      "compareAtPrice": 22,
      "discountText": "Buy 2 save 10%",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Targeted spot treatment with salicylic acid for fast action.",
      "details": "2% salicylic acid reduces inflammation and clears blocked pores.",
      "theLowdown": [
        "Fast-acting",
        "Reduces redness",
        "Prevents new spots",
        "Non-drying"
      ],
      "whatElse": "Apply directly on blemish; avoid overuse.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 5,
        "inStock": true
      }
    },
    {
      "id": "prod-021",
      "name": "Nourish Night Mask - Overnight",
      "shortName": "Night Mask",
      "category": "Masks",
      "ratingAverage": 4.5,
      "ratingCount": 210,
      "price": 28,
      "compareAtPrice": 45,
      "discountText": "Bundle with cleanser",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1564518098559-7eea2a1b4a14?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Hydrating overnight mask to restore moisture and radiance.",
      "details": "Rich emollients and peptides support skin repair during sleep.",
      "theLowdown": [
        "Deep hydration",
        "Improves radiance",
        "Supports repair",
        "Non-greasy"
      ],
      "whatElse": "Wash off in morning; follow with SPF.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 3,
        "inStock": true
      }
    },
    {
      "id": "prod-022",
      "name": "Clear Foam Cleanser - Acne Control",
      "shortName": "Acne Cleanser",
      "category": "Cleansers",
      "ratingAverage": 4.1,
      "ratingCount": 202,
      "price": 16,
      "compareAtPrice": 28,
      "discountText": "15% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583947582880-5f6e8d8fb8af?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Medicated cleanser with benzoyl peroxide for acne-prone skin.",
      "details": "2.5% benzoyl peroxide effectively clears acne-causing bacteria.",
      "theLowdown": [
        "Clears breakouts",
        "Prevents recurrence",
        "Use as directed",
        "Follow with moisturizer"
      ],
      "whatElse": "May cause dryness; use sparingly.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 4,
        "inStock": true
      }
    },
    {
      "id": "prod-023",
      "name": "Plumping Lip Gloss - Sheer Pink",
      "shortName": "Plumping Gloss",
      "category": "Lipstick",
      "ratingAverage": 4.3,
      "ratingCount": 134,
      "price": 14,
      "compareAtPrice": 22,
      "discountText": "Buy 2 get 10% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Sheer plumping gloss with hydrating peptides.",
      "details": "Gives subtle shine and fullness while conditioning lips.",
      "theLowdown": [
        "Plumps lips",
        "Non-sticky",
        "Hydrating",
        "Glossy finish"
      ],
      "whatElse": "Great over lipstick for shine.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 12,
        "inStock": true
      }
    },
    {
      "id": "prod-024",
      "name": "Deep Hydration Serum - Squalane",
      "shortName": "Squalane Serum",
      "category": "Serum",
      "ratingAverage": 4.7,
      "ratingCount": 260,
      "price": 33,
      "compareAtPrice": 55,
      "discountText": "Free sample with purchase",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Lightweight squalane serum for deep, long-lasting hydration.",
      "details": "Balances oil and restores moisture without heaviness.",
      "theLowdown": [
        "Deep hydration",
        "Non-greasy",
        "Improves elasticity",
        "Great under makeup"
      ],
      "whatElse": "Suitable for sensitive skin.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 6,
        "inStock": true
      }
    },
    {
      "id": "prod-025",
      "name": "Clear Tone Spot Serum - Azelaic",
      "shortName": "Azelaic Serum",
      "category": "Serum",
      "ratingAverage": 4.4,
      "ratingCount": 176,
      "price": 29,
      "compareAtPrice": 48,
      "discountText": "Intro price 20% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Azelaic acid serum to reduce pigmentation and redness.",
      "details": "Helps even skin tone and reduce post-acne marks over time.",
      "theLowdown": [
        "Reduces pigmentation",
        "Anti-inflammatory",
        "Gentle for sensitive skin",
        "Use with sunscreen"
      ],
      "whatElse": "Gradual results; use consistently.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 4,
        "inStock": true
      }
    },
    {
      "id": "prod-026",
      "name": "Bright Lip Tint - Coral",
      "shortName": "Bright Tint Coral",
      "category": "Lipstick",
      "ratingAverage": 4.2,
      "ratingCount": 88,
      "price": 12,
      "compareAtPrice": 18,
      "discountText": "20% off first buy",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Sheer lip tint with buildable color and natural finish.",
      "details": "Comfortable formula for daily wear with subtle shine.",
      "theLowdown": [
        "Buildable color",
        "Lightweight",
        "Hydrating",
        "Natural look"
      ],
      "whatElse": "Perfect for no-makeup days.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 20,
        "inStock": true
      }
    },
    {
      "id": "prod-027",
      "name": "Hydra Essence Mist - Multi-Peptide",
      "shortName": "Peptide Mist",
      "category": "Moisturizer",
      "ratingAverage": 4.6,
      "ratingCount": 144,
      "price": 21,
      "compareAtPrice": 34,
      "discountText": "Gift sample with purchase",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1495121605193-b116b5b09a11?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1495121605193-b116b5b09a11?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1598966731105-6fa9b3e2a5e3?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1495121605193-b116b5b09a11?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Light mist with peptides to boost hydration and firmness.",
      "details": "Quick-absorbing mist to refresh and prep skin for makeup.",
      "theLowdown": [
        "Firming peptides",
        "Instant hydration",
        "Lightweight",
        "Good under makeup"
      ],
      "whatElse": "Spray 2-3 times daily as needed.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 12,
        "inStock": true
      }
    },
    {
      "id": "prod-028",
      "name": "Ultra Gentle Micellar Water",
      "shortName": "Micellar Water",
      "category": "Cleansers",
      "ratingAverage": 4.3,
      "ratingCount": 190,
      "price": 13,
      "compareAtPrice": 20,
      "discountText": "3 for $30",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582719478173-1374a1a3b2ea?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "No-rinse micellar water to remove makeup and impurities.",
      "details": "Gentle cleansing without drying; safe for eyes and lips.",
      "theLowdown": [
        "Removes makeup",
        "No-rinse",
        "Gentle formula",
        "Suitable for sensitive skin"
      ],
      "whatElse": "Use with cotton pad for best results.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 10,
        "inStock": true
      }
    },
    {
      "id": "prod-029",
      "name": "Silk Finish Lipstick - Berry",
      "shortName": "Silk Finish Berry",
      "category": "Lipstick",
      "ratingAverage": 4.5,
      "ratingCount": 121,
      "price": 31,
      "compareAtPrice": 45,
      "discountText": "10% off",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Silky lipstick with luminous finish and medium coverage.",
      "details": "Blend of emollients and color pigments for smooth application.",
      "theLowdown": [
        "Luminous finish",
        "Comfortable wear",
        "Hydrating",
        "Buildable coverage"
      ],
      "whatElse": "Looks great in evening light.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 10,
        "inStock": true
      }
    },
    {
      "id": "prod-030",
      "name": "Barrier Repair Moisturizer - Ceramide",
      "shortName": "Barrier Repair",
      "category": "Moisturizer",
      "ratingAverage": 4.8,
      "ratingCount": 402,
      "price": 38,
      "compareAtPrice": 60,
      "discountText": "Top seller discount",
      "currency": "USD",
      "images": {
        "main": "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=1400&auto=format&fit=crop",
        "thumbnails": [
          "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"
        ],
        "zoom": "https://images.unsplash.com/photo-1588774069151-1bde1b67b937?q=80&w=2000&auto=format&fit=crop"
      },
      "shortDescription": "Rich ceramide moisturizer to restore and protect skin barrier.",
      "details": "Ceramides, cholesterol and fatty acids to repair dry, compromised skin.",
      "theLowdown": [
        "Restores barrier",
        "Long-lasting hydration",
        "Soothes irritation",
        "Dermatologist-recommended"
      ],
      "whatElse": "Great for winter months and dry skin.",
      "uiExtras": {
        "quantityDefault": 1,
        "minQuantity": 1,
        "maxQuantity": 5,
        "inStock": true
      }
    }
  ]
