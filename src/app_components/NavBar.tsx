import { Brain, LogOut } from 'lucide-react';
import { AddFilterButton } from './AddFilterButton';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/ui/button';
import { useFilterStore } from '@/store/useFilterStore';
import { useCardsStore } from '@/store/useCardStore.ts';

export const NavBar = ()=>{
    const {UserId} = useParams();
    const Filters = useFilterStore((state)=> state.Filters);
    const card = useCardsStore((state) => state.Cards);
    const getCards = useCardsStore((state) => state.getCards);
    const getFilteredCardsByFilter = useCardsStore((state)=> state.getFilteredCardsByFilter);
    const FilteredCards = useCardsStore((state)=> state.FilteredCards);
  
    const getFilters = useFilterStore((state)=> state.getFilters);
    console.log("Filters: ",Filters);
const handleSearchByFilterClick = (e:any)=>{
    console.log("card:" ,card);
    const filterName = e.target.innerText;
    getFilteredCardsByFilter(filterName,card)
      console.log("FilteredCardsByFilter in NavBar:", FilteredCards);
}

    useEffect(()=>{
        if(UserId) {
            getFilters(UserId);
            getCards(UserId);
        }
    },[UserId, getFilters, getCards])
        return(
            <div className="shadow-lg col-span-2 sticky min-h-screen top-0 overflow-y-auto px-5 py-5">
                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center mb-5'>
                        <Brain size={20} color='#4A44DA'/>
                        <p className='font-bold text-1xl'>BrainStash</p>
                    </div>
                    <div><LogOut className='cursor-pointer' size={20} color='gray'/></div>
                </div>

<div className="mt-5"><AddFilterButton/></div>

<div className='mt-10'>
    <p className='border-b mt-5 border-gray-300'>Filters</p>
                <div className='flex mt-5 flex-col gap-2 font-medium text-gray-400'>{Filters.map((Filter)=><Button key={Filter.filterName} onClick={handleSearchByFilterClick} variant="fourth" children={Filter.filterName}/>)}
                    
                </div>
</div>

            </div>
        )
}