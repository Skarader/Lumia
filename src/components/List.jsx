import ListItems from "./ListItems.jsx";
import { useState } from "react";

export default function List() {
  const lampor = [
    {
      name: "Vit taklampa",
      id: 14,
      description: "Mått Ø 25 cm, höjd 20 cm.",
      cost: 2500,
      image:
        "https://royaldesign.se/image/1/watt-veke-ellipse-65-pendel-1?w=480&quality=80",
      keywords: ["stor", "20-tal"],
    },
    {
      name: "Bordslampa i guld",
      id: 9,
      description: "Mått Ø 55 cm, höjd 30 cm.",
      cost: 6900,
      image:
        "https://res.cloudinary.com/sleepo/image/fetch/f_auto,c_fill,q_auto:good,w_720,h_720/https%3a%2f%2fsleepo.cdn.storm.io%2f0f88afc0-ca22-4ecf-a1b2-0fb8441a6eca%3f%26w%3d720%26h%3d720%26scale%3dupscalecanvas%26mode%3dpan",
      keywords: ["läslampa", "80-tal"],
    },
    {
      name: "Vit golvlampa",
      id: 21,
      description: "Mått Ø 15 cm, höjd 200 cm.",
      cost: 1780,
      image:
        "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&w=670&h=447&dpr=2",
      keywords: ["läslampa"],
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="search here"
        onChange={(e) => {setSearchInput(e.target.value);}}
      />
      <div className="product clearfix">
        
          {lampor.filter((lampa) => {
            return searchInput.toLowerCase() === "" ?
            lampa : lampa.name.toLowerCase().includes(searchInput)
          })
          .map((lampa) => (
            <ListItems  key={lampa.id} lampa={lampa}/>
          ))}
        
      </div>

      
    </>
  );
}
