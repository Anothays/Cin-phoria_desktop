import { ProjectionRoomSeatType } from "@/types/ProjectionRoomSeatType";
import { createContext, useContext, useState } from "react";

interface SeatMapProps {
  selectedSeats?: ProjectionRoomSeatType[];
  setSelectedSeats?: React.Dispatch<
    React.SetStateAction<ProjectionRoomSeatType[]>
  >;
}
const SeatMapContext = createContext<SeatMapProps>({});

export const useSeatMapContext = () => {
  return useContext(SeatMapContext);
};

export const SeatMapContextProvider = ({ children }: any) => {
  const [selectedSeats, setSelectedSeats] = useState<ProjectionRoomSeatType[]>(
    []
  );
  const value = {
    selectedSeats,
    setSelectedSeats,
  };

  return (
    <SeatMapContext.Provider value={value}>{children}</SeatMapContext.Provider>
  );
};
