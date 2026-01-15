import { Brain,File, Tag, Link, LogOut } from 'lucide-react';

export const NavBar = ()=>{
        return(
            <div className="shadow-lg col-span-2 sticky min-h-screen top-0 overflow-y-auto px-5 py-5">
                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center mb-5'>
                        <Brain size={20} color='#4A44DA'/>
                        <p className='font-bold text-1xl'>Brainly</p>
                    </div>
                    <div><LogOut className='cursor-pointer' size={20} color='gray'/></div>
                </div>

                <div className='flex flex-col gap-2 font-medium text-gray-400'>
                    <div className='flex items-center gap-2 hover:bg-[#E7E7E7] transition duration-300 ease-in-out  px-1 py-2 rounded-md cursor-pointer'>
                        <Link size={20} color='gray'/>
                        <p className='text-sm'>Links</p>
                    </div>
                    <div className='flex items-center gap-2 hover:bg-[#E7E7E7] transition duration-100 px-1 py-2 rounded-md cursor-pointer'>
                        <File size={20} color='gray'/>
                        <p className='text-sm'>Documents</p>
                    </div>
                    <div className='flex items-center gap-2 hover:bg-[#E7E7E7] transition duration-100 px-1 py-2 rounded-md cursor-pointer'>
                        <Tag size={20} color='gray'/>
                        <p className='text-sm'>Tags</p>
                    </div>
                </div>
            </div>
        )
}