export function Transaction(){
    return (
    <div className="grid grid-cols-3 m-3 p-2 pb-0 mb-0">
        <div className="">
            <div className="font-semibold text-lg">
                Transaction | This Month
            </div>
            <div className="mt-3 mb-3">
                <button type="button" className="py-2 px-4 me-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-gray-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Payouts (22)</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Refunds (6)</button>
            </div>
        </div>
    </div>
);
}