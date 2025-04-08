// import React, { use, useEffect, useState } from "react";
// import "./playVideo.css";
// import video1 from "../../assets/video.mp4";
// import like from "../../assets/like.png";
// import dislike from "../../assets/dislike.png";
// import share from "../../assets/share.png";
// import save from "../../assets/save.png";
// import jack from "../../assets/jack.png";
// import user_profile from "../../assets/user_profile.jpg";
// import { API_KEY, value_converter } from "../../data";
// import moment from "moment";
// const PlayVideo = ({ videoId }) => {
//   const [apiData, setApiData] = useState(null);
//   const [channelData, setChannelData] = useState(null);
// //   const[]=useState

//   const fetchVideoData = async () => {
//     //fetching Videos Data
//     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
//     await fetch(videoDetails_url).then((res) => res.json()).then((data) => setApiData(data.items[0]));
//   };

//   const fetchOtherData = async () => {
//     // fetching channel data
//     const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
//     // await fetch(channelData_url).then(res=>res.json).then(data=>setChannelData(data.items[0]))
//     await fetch(channelData_url)
//       .then((res) => res.json()) // Call json() correctly
//       .then((data) => {
//         if (data.items && data.items.length > 0) {
//           setChannelData(data.items[0]); // Ensure data exists
//         } else {
//           console.error("No channel data found");
//         }
//       })
//       .catch((error) => console.error("Error fetching channel data:", error));
//   };


// //   fetching comment data
//   const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`

//   useEffect(() => {
//     fetchVideoData();
//   }, []);
//   useEffect(() => {
//     fetchOtherData();
//   }, [apiData]);
//   return (
//     <div className="play-video">
//       <iframe
//         src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen
//       ></iframe>
//       {/* <h3>{apiData?apiData.snippet.title:"Title Here"}</h3> */}
//       <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
//       <div className="play-video-info">
//         {/* <p>{apiData?value_converter(apiData.statistics.viewCount):"1m"} views &bull; moment(apiData.snippet.publishedAt).fromNow'()</p> */}
//         <p>
//           {apiData ? value_converter(apiData.statistics.viewCount) : 1525} Views
//           &bull;{" "}
//           {apiData
//             ? moment(apiData.snippet.publishedAt).fromNow()
//             : "2 days ago"}
//         </p>
//         <div>
//           <span>
//             <img src={like} />
//             {apiData ? value_converter(apiData.statistics.likeCount) : "5"}
//           </span>
//           <span>
//             <img src={dislike} />
//             {apiData ? value_converter(apiData.statistics.dislikeCount) : "5"}
//           </span>
//           <span>
//             <img src={share} />
//             share
//           </span>
//           <span>
//             <img src={save} />
//             Save
//           </span>
//         </div>
//       </div>
//       <hr />
//       <div className="publisher">
//         {/* <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
//          */}
//         <img
//           src={channelData ? channelData.snippet.thumbnails.default.url : ""}
//           alt=""
//         />

//         <div>
//           <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
//           <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
//         </div>
//         <button>Suscribe</button>
//       </div>

//       <div className="vid_description">
//         <p>{apiData ? apiData.snippet.description.slice(0, 250) : "desssss"}</p>
//         <hr />
//         <h4>
//           {apiData ? value_converter(apiData.statistics.commentCount) : "100"}
//         </h4>
//         <div className="comment">
//           <img src={user_profile} alt="" />
//           <div>
//             <h3>
//               tanish garg <span>1 day ago</span>
//             </h3>
//             <p>hlo   amigoa kesa</p>
//             <div className="comment-action">
//               <img src={like} alt="" />
//               <span>244</span>
//               <img src={dislike} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="comment">
//           <img src={user_profile} alt="" />
//           <div>
//             <h3>
//               tanish garg <span>1 day ago</span>
//             </h3>
//             <p>A hello mr</p>
//             <div className="comment-action">
//               <img src={like} alt="" />
//               <span>244</span>
//               <img src={dislike} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="comment">
//           <img src={user_profile} alt="" />
//           <div>
//             <h3>
//               tanish garg <span>1 day ago</span>
//             </h3>
//             <p>A sex machine used by women to decrease dependecy over men</p>
//             <div className="comment-action">
//               <img src={like} alt="" />
//               <span>244</span>
//               <img src={dislike} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="comment">
//           <img src={user_profile} alt="" />
//           <div>
//             <h3>
//               tanish garg <span>1 day ago</span>
//             </h3>
//             <p>A sex machine used by women to decrease dependecy over men</p>
//             <div className="comment-action">
//               <img src={like} alt="" />
//               <span>244</span>
//               <img src={dislike} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayVideo;


import React, { useEffect, useState } from 'react'
import './playVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {

        // Fetching Video Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=${videoId}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData = async () => {

        // Fetching Channel Data
        const channelLogo_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelLogo_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

        // Fetching Comment Data
        const videoComment_url = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${API_KEY}&videoId=${videoId}`;
        await fetch(videoComment_url).then(res => res.json()).then(data => setCommentData(data.items));

    }

    useEffect(() => {
        fetchVideoData();
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])

    return (
        <div className="play-video">
            <iframe src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* Best YouTube Channel To Learn Web Development  */}
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : 1525} Views  &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 125}</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? value_converter(channelData.snippet.thumbnails.default.url) : ""} alt="" />
                <div>

                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>

                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
                </div>
                <button type="button">Subscribe</button>
            </div>
            <div className="vid-description">
                {/* Channel that makes learning Easy
                Subscribe GreatStack to Watch More Tutorials on web development */}
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
                <hr />
                {/* 130 Comments */}
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 130} Comments</h4>

                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default PlayVideo
