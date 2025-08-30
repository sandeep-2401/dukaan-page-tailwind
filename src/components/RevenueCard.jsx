export function RevenueCard({title,orderCount,amount}){
    return (
        <div className="grid m-3">
        <div className="bg-blue-400 text-white shadow-sm p-4 rounded-t-xl">
            <div className="text-gray-600 text-md flex">
                <div className="pr-1 text-white">
                    {title}
                </div>
                <div className="flex justify-center flex-col h-5 mt-1 text-white">
                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between pt-2 ">
                <div className="font-semibold text-2xl text-white">
                    $ {amount}
                </div>
                {orderCount ? 
                <div className=" underline cursor-pointer font-medium flex flex-col justify-center" >
                    <div className="flex ">
                        {orderCount} Orders 
                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>

                </div> : null
                }
            </div>
        </div>
        <div className="flex justify-between bg-blue-900 text-white shadow-sm p-2 pl-5 pr-5 rounded-b-xl text-sm">
            <div className="">
                Next Payment Date:
                
            </div>
            <div className="ml-2">
                Today,4.00PM
            </div>
        </div>
    </div>

    );
} 

export function SimpleCard({title,orderCount,amount}){
    return(
        <div className="bg-white shadow-sm p-4 rounded-xl m-3">
            <div className="text-gray-600 text-md flex">
                <div className="pr-1">
                    {title}
                </div>
                <div className="flex justify-center flex-col h-5 mt-1">
                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between pt-2">
                <div className="font-semibold text-2xl">
                    $ {amount}
                </div>
                {orderCount ? 
                <div className=" text-blue-600 underline cursor-pointer font-medium flex flex-col justify-center" >
                    <div className="flex ">
                        {orderCount} Orders 
                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>

                </div> : null
                }
            </div>
        </div>
    )
}
