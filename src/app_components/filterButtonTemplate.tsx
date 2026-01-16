import { Button } from '../ui/button';

export const FilterButtonTemplate = (asChild)=>{
    return (
        <div><Button variant="fourth" children={asChild}/></div>
    )
}