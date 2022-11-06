import React, { useState } from "react";
import "./Rentalbody.css";
import Rentalbodycard from "../card/Rentalbodycard";



const Rentals = () => {
    const [rentals] = useState([
      {
        id: 1,
        name:"Room Bed Bug Heater for Beds and Couches",price:"$21",
        image:
          "https://m.media-amazon.com/images/I/81gQ8BuV+IL._AC_SL1500_.jpg",},
      {
        id: 2,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/premium-vector/cartoon-drawing-isolated-cockroach_29937-9892.jpg?w=1380",
      },
      {
        id: 3,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 4,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 5,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 6,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 7,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 8,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 9,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 10,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 11,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 12,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 13,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },{
        id: 15,
        name:"Room Bed Bug Heater for Beds and Couches",
        image:
          "https://img.freepik.com/free-vector/pest-control-icons-set_1284-8979.jpg?w=1380&t=st=1665170038~exp=1665170638~hmac=d1c18dd767418b305d439860b6928a7f079cd135f97aee4fc0e8e637632e85f2",
      },
    ]);

  return (
    <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-8 gx-lg-8 row-cols-8 row-cols-md-8 row-cols-xl-8">
        <div className="row">
            {rentals.map((rental) => (
              <Rentalbodycard key={rental.id} rental={rental} />
            ))}
           <h5> Pick Up Location
            69 Woodword Avenue ,Thornhill <br/>
            Call to schedule your pickup time
            <br/>
            Richard 6473346669
            </h5>

          </div>
            
            
            
        </div>
    </div>
</section>
  )
};

export default Rentals;
