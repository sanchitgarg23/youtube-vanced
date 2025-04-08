// import React, { useEffect, useState } from "react";
// import "./Feed.css";
// // import thumbnail1 from "../../assets/thumbnail1.png";
// // import thumbnail2 from "../../assets/thumbnail2.png";
// // import thumbnail3 from "../../assets/thumbnail3.png";
// // import thumbnail4 from "../../assets/thumbnail4.png";
// // import thumbnail5 from "../../assets/thumbnail5.png";
// // import thumbnail6 from "../../assets/thumbnail6.png";
// // import thumbnail7 from "../../assets/thumbnail7.png";
// // import thumbnail8 from "../../assets/thumbnail8.png";
// import { Link } from "react-router-dom";
// // import { API_KEY } from "../../data";
// import { API_KEY, value_converter } from '../../data'
// import moment from 'moment'
// const Feed = ({ category }) => { 
//   const [data, setData] = useState([]);
  
//   const fetchData = async () => {
//     const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=India&videoCategoryId=${category}&key=${API_KEY}`
//     await fetch(videoList_url)
//       .then((response) => response.json())
//       .then((data) => setData(data.items));
//   };
//   useEffect(() => {
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed">
//       {data.map((item, index) => {
//         return (
//           <Link
//             key={index}
//             to={`video/${item.snippet.categoryId}/${item.id}`}
//             className="card"
//           >
//             <img src={item.snippet.thumbnails.medium.url} alt="" />
//             <h2>{item.snippet.title}</h2>
//             <h3>{item.snippet.channelTitle}</h3>
//             <p>
//               {value_converter(item.statistics.viewCount)} Views &bull;
//               {" " + moment(item.snippet.publishedAt).fromNow()}
//             </p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Feed;
// import React, { useEffect, useState } from "react";
// import "./Feed.css";
// import { Link } from "react-router-dom";
// import { API_KEY, value_converter } from '../../data'
// import moment from 'moment'

// const Feed = ({ category }) => {  // ✅ Properly destructure props
//   const [data, setData] = useState([]);

//   const fetchData = async () => {

//     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    
//     try {
//       const response = await fetch(videoList_url);
//       const jsonData = await response.json();

//       if (jsonData.items) {
//         setData(jsonData.items);
//       } else {
//         console.error("No items found:", jsonData);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed">
//       {data.map((item, index) => (
//         <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
//           <img src={item.snippet.thumbnails.medium.url} alt="" />
//           <h2>{item.snippet.title}</h2>
//           <h3>{item.snippet.channelTitle}</h3>
//           <p>
//             {value_converter(item.statistics.viewCount)} Views &bull;
//             {" " + moment(item.snippet.publishedAt).fromNow()}
//           </p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Feed;

import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const formatDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (match[1] || '0H').slice(0, -1);
  const minutes = (match[2] || '0M').slice(0, -1);
  const seconds = (match[3] || '0S').slice(0, -1);

  const h = parseInt(hours);
  const m = parseInt(minutes);
  const s = parseInt(seconds);

  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  else return `${m}:${s.toString().padStart(2, '0')}`;
};

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

    try {
      const response = await fetch(videoList_url);
      const jsonData = await response.json();

      if (jsonData.items) {
        setData(jsonData.items);
      } else {
        console.error("No items found:", jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
          <div className="thumbnail-container">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <span className="video-duration">
              {formatDuration(item.contentDetails.duration)}
            </span>
          </div>
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} Views &bull;
            {" " + moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;

