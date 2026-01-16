import { Card } from "../ui/card";
import { Share2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AddContentDialog } from "./AddContentDialog";
import { useParams } from "react-router-dom";
import { useCardsStore } from "../store/useCardStore.ts";
import ShareDialog from "./makeShareableLink";
import {SearchBar} from "./searchBar";

interface RightPanelProps {
  Shared?: boolean;
}

export const RightPanel = ({ Shared }: RightPanelProps) => {
  const { UserId } = useParams();
  const { randomLink } = useParams();
  const card = useCardsStore((state) => state.Cards);
  const FilteredCards = useCardsStore((state) => state.FilteredCards);
  console.log("FilteredCards in rightpanel for filter search", FilteredCards);

  const getCards = useCardsStore((state) => state.getCards);
  const getSharedCards = useCardsStore((state) => state.getSharedCards);


  const CardShareHandler = () => {
    console.log("card share clicked");
  };

  const CardDeleteHandler = () => {
    console.log("card delete clicked");
  };
  if (Shared) {
    useEffect(() => {
      if (randomLink) {
        console.log(randomLink);
        getSharedCards(randomLink);
      }
    }, []);
  } else {
    if (!UserId) return;
    useEffect(() => {
      getCards(UserId);
    }, []);
  }
  console.log(card);

  return (
    <div className="py-5 px-10 flex flex-col gap-10 min-h-screen">
      { Shared ? (
        <div>
          <div className="font-bold text-2xl">
            <p>All Contents</p>
          </div>
          <div className="flex flex-wrap mt-10 gap-5">
            {FilteredCards.length > 0 ? (FilteredCards.map((content) => (
              <Card
                title={content.title}
                date="15-12-2025"
                tags={content.tag}
                link={content.link}
              />
            ))):(card.map((content) => (
              <Card
                title={content.title}
                date="15-12-2025"
                tags={content.tag}
                link={content.link}
              />
            )))}
            
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-5 justify-between w-full h-[60px] pr-10">
            <div className="font-bold text-2xl">
              <p>All Contents</p>
            </div>
            

            <div className="flex gap-5">
              <AddContentDialog />
              <ShareDialog />
            </div>
          </div>
          <SearchBar card={card} />
          <div>
            <div className="flex flex-wrap gap-5">
              {FilteredCards.length > 0 ? (FilteredCards.map((content) => (
              <Card
                title={content.title}
                date="15-12-2025"
                tags={content.tag}
                link={content.link}
              />
            ))):(card.map((content) => (
              <Card
                title={content.title}
                date="15-12-2025"
                tags={content.tag}
                link={content.link}
              />
            )))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
