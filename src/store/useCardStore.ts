import { Card } from './../ui/card';
import { create } from "zustand";
import axios from "axios";

interface Card {
    _id: string;
    title: string;
    link: string;
    tag: []
  
}

interface CardsState {

    Cards: Card[];
    RandomLink: string;
    getCards: (UserId:string)=> Promise<void>;
    addCard: (title: string, link: string) => Promise<void>;
    getSharedCards: (randomlink:string)=> Promise<void>;

}

export const useCardsStore = create<CardsState>((set)=> ({
    Cards:[],
    RandomLink:"",
    getCards: async(UserId)=>{
    
    const response = await axios.get(`http://localhost:3000/user/${UserId}/content`)
    set({Cards:response.data.brains})
  },

  getSharedCards: async(randomlink)=>{
    console.log(randomlink)
    const response = await axios.get(`http://localhost:3000/shared/${randomlink}`)
    set({Cards:response.data.brains})},

    getRandomLink: async(UserId)=>{
      const shareableLink = await axios.post(`http://localhost:3000/user/${UserId}/brains/share`,{
        isSharable:true
      })
      set({RandomLink:shareableLink.data.randomLink})
    },

  addCard: async(title,link)=>{
    console.log(title,link)
    const response = await axios.post("http://localhost:3000/content",
        { title: title, link: link},
      { withCredentials: true }
    );
    console.log(response.data)
    set((state) => ({
      Cards: [...state.Cards, response.data],
    }));
  },
  
}
))