import { File } from 'lucide-react';
import { create } from "zustand";
import axios from "axios";

interface Filter {
    filterName: string;
    userId: string;
  
}

interface FiletersState {

    Filters: Filter[];
    addFilters: (filterName: string,userId:string)=> Promise<void>;
    getFilters: (userId: string) => Promise<void>;
}


export const useFilterStore = create<FiletersState>((set)=> ({
    Filters:[],
    
    getFilters: async (userId) => {
        const response = await axios.get(`http://localhost:3000/${userId}/filters`);
        set({ Filters: response.data.filters || [] });
    },

    addFilters: async (filterName,userId)=>{
      console.log("userId in store:", filterName,userId);
        const response =  await axios.post(`http://localhost:3000/${userId}/filters/addFilter`,{
        filterName:filterName,
        userId:userId
    });
    set((state) => ({
      Filters: [...state.Filters, response.data.filter],
    }));
  
  },
}))