import { ProjectionRoomSeatType } from "@/types/ProjectionRoomSeatType";
import { ProjectionRoomType } from "@/types/ProjectionRoomType";
import Seat from "./Seat";

export default function SeatMap({
  projectionRoom,
}: {
  projectionRoom: ProjectionRoomType;
}) {
  const allSeats = projectionRoom.projectionRoomSeats;

  allSeats.sort((a, b) => {
    if (a.seatRow < b.seatRow) return -1;
    if (a.seatRow > b.seatRow) return 1;
    return a.seatNumber - b.seatNumber;
  });

  const allSeatsOrdered: { [key: string]: ProjectionRoomSeatType[] } = {};
  allSeats.forEach((seat) => {
    if (!(seat.seatRow in allSeatsOrdered)) allSeatsOrdered[seat.seatRow] = [];
    allSeatsOrdered[seat.seatRow].push(seat);
  });

  return (
    <table>
      <tbody>
        {Object.keys(allSeatsOrdered).map((seatRow) => (
          <tr key={seatRow}>
            {allSeatsOrdered[seatRow].map(
              (seat: ProjectionRoomSeatType, index) =>
                index === 0 ? (
                  <td key={seat.id}>{seatRow}</td>
                ) : (
                  <td key={seat.id}>
                    <Seat
                      seat={seat}
                      isForRedecedMobilityPerson={seat.forReducedMobility}
                      isNotSelectable={false}
                    />
                  </td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
