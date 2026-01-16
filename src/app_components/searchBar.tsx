import { useCardsStore } from "@/store/useCardStore";
import {SearchIcon} from "lucide-react"
import {useRef, useState} from "react"

export const SearchBar = (card) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");

    const getFilteredCards = useCardsStore((state) => state.getFilteredCards);
    // const FilteredCards = useCardsStore((state) => state.FilteredCards);

const handleFocus = () =>{
    if(inputRef.current){
        inputRef.current.focus();
        getFilteredCards(query,card);
    }
}
    return(<div>
<div className="border border-gray-300 w-1/4 rounded-md flex items-center mb-10"> <div className="px-2"><SearchIcon onClick={handleFocus} className="cursor-pointer"/></div>
            <input value={query} onChange={(e) => setQuery(e.target.value)}ref={inputRef} className="pl-2 w-full py-2" type="search" name="search" id="" placeholder="Search by title" />
            </div>
    </div>
        
    )
}