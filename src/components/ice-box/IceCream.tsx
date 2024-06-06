import { useState } from "react";
import { cone } from ".";

export default function IceCream() {
    // Declare state variable to keep track of the count for each item
    const [counts, setCounts] = useState(Array(cone.length).fill(0));

    // Function to handle increment of count for an item
    const incrementCount = (index:number) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    // Function to handle decrement of count for an item
    const decrementCount = (index:number) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) {
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    };

    return (
        <div className="max-w-[1440px] mx-auto grid  lg:grid-cols-2 gap-4 p-4">
            {cone.map((item, index) => (
                <div className="w-full h-full py-5" key={index}>
                    <div className={`max-w-full md:max-w-[500px] flex flex-col md:flex-row items-center mt-5 backdrop-blur-[10px] 
                    ${index === 1 ? 'bg-white text-black ' : 'bg-white/30 text-white'} rounded-md`}>
                        
                        {/* Container for the image and text, placing them side by side */}
                        <div className="flex flex-col md:flex-row items-center gap-4 p-4">
                            {/* Image */}
                            <div className="flex-shrink-0">
                                <img src={item.pic} alt={item.name} className="object-cover w-full h-full rounded-md" style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            
                            {/* Text content */}
                            <div className="flex-grow mt-5 md:mt-0 md:ml-4">
                                <p className="text-center md:text-left text-lg font-semibold">{item.name}</p>
                                <p className="text-center md:text-left mt-2">Order Type:</p>
                                
                                {/* Order Type options */}
                                <div className="flex gap-5 mt-3 capitalize justify-center md:justify-start">
                                    <div className={`w-[100px] h-10 backdrop-blur-[10px] bg-transparent flex items-center 
                                    border-[1px] ${index === 1 ? 'border-black' : 'border-white'} justify-center rounded-md`}>
                                        Order
                                    </div>
                                    <div className={`w-[100px] h-10 backdrop-blur-[10px] bg-transparent flex items-center 
                                    border-[1px] ${index === 1 ? 'border-black' : 'border-white'} justify-center rounded-md`}>
                                        Delivery
                                    </div>
                                </div>
                                
                                {/* Price and count increment/decrement */}
                                <div className="flex gap-5 justify-between items-center mt-4">
                                    <p className="text-lg font-semibold">{item.price}</p>
                                    <div className={`flex w-[100px] h-[24px] justify-between border-[1px] rounded-[10px] 
                                    ${index === 1 ? 'border-black' : 'border-white'}`}>
                                        <button onClick={() => decrementCount(index)} className={`w-1/3 h-full border-[1px] 
                                        rounded-l-[10px] ${index === 1 ? 'border-black' : 'border-white'}`}>
                                            -
                                        </button>
                                        <p>{counts[index]}</p>
                                        <button onClick={() => incrementCount(index)} 
                                        className={`w-1/3 h-full border-[1px] rounded-r-[10px] 
                                        ${index === 1 ? 'border-black' : 'border-white'}`}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
