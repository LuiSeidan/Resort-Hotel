import React from "react";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../context";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "../components/RoomsFilter";
// import RoomsList from "../components/RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "../components/Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from Rooms RoomsContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
