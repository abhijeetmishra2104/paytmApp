

export  function AppBar({name}){
    return <div className="bg-[#021526] border-[#E2E2B6] shadow h-14 flex justify-between">
    <div className="text-[#E2E2B6] flex flex-col justify-center h-full ml-4">
        QuickFunds
    </div>
    <div className="flex">
        <div className="text-[#E2E2B6] flex flex-col justify-center h-full mr-4">
            Hello
        </div>
        <div className="rounded-full h-12 w-12 bg-[#E2E2B6] flex justify-center mt-1 mr-2">
            <div className="text-[#021526] flex flex-col justify-center h-full text-xl">
                {name[0].toUpperCase()}
            </div>
        </div>
    </div>
</div>
}