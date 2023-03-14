import "../index.css";

import React, { Fragment, useEffect, useState } from "react";

function DogCard() {
  const [catPhoto, setCatPhoto] = useState("");

  useEffect(() => {
    const delay = catPhoto ? 10000 : 0;

    setTimeout(async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        setCatPhoto(data.message);
      } catch (e) {
        console.error("Problem!", e);
      }
    }, delay);
  }, [catPhoto]);

  return (
    <Fragment>
      <div className="h1"></div>

      <img src={catPhoto} alt="" className="imgDog"></img>
    </Fragment>
  );
}

export default DogCard;

// function CatCard() {
//   const [url, setUrl] = useState("");
//   function fetch_data() {
//     fetch("https://api.thecatapi.com/v1/images/search")
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error("request denied");
//       })
//       .then((jsonRes) => {
//         setUrl(jsonRes[0].url);
//       });
//   }
//   return (
//     <div>
//       <img src={url} alt="" />
//       <button onClick={fetch_data} />
//     </div>
//   );
// }
// export default CatCard;
