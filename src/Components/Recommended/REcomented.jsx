// import React from 'react'
// import "./REcomented.css"
// import thumbnail1 from "../../assets/thumbnail1.png"
// import thumbnail2 from "../../assets/thumbnail2.png"
// import thumbnail3 from "../../assets/thumbnail3.png"
// import thumbnail4 from "../../assets/thumbnail4.png"
// import thumbnail5 from "../../assets/thumbnail5.png"
// import thumbnail6 from "../../assets/thumbnail6.png"
// import thumbnail7 from "../../assets/thumbnail7.png"
// import thumbnail8 from "../../assets/thumbnail8.png"

// const REcomented = () => {
//   return (
//     <div className='recommended'>
//         <div className="side-video-list">
//             <img src={thumbnail1} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>

//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail2} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail3} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail4} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail5} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail6} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail7} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

//         <div className="side-video-list">
//             <img src={thumbnail8} alt="" />
//             <div className="vid-info">
//                 <h4>best channel that helps you to learn sex</h4>
//                 <p>sanchit</p>
//                 <p>199k</p>
                
//             </div>

//         </div>

      
//     </div>
//   )
// }

// export default REcomented



// import React, { useEffect, useState } from 'react'
// import "./REcomented.css"
// import { API_KEY, value_converter } from '../../data'
// import { Link } from 'react-router-dom'

// const REcomented = ({ categoryId }) => {

//     const [apiData, setApiData] = useState([]);
//     const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

//     useEffect(() => {
//         fetch(relatedVideo_API).then(res => res.json()).then(data => setApiData(data.items))
//     }, [])
    

//     return (
//         <div className="recommended">
//             {apiData.map((item,index) => {
//                 return (
//                     <div key={index} className="side-video-list">
//                         <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={()=>window.scrollTo(0,0)} className="small-thumbnail">
//                             <img src={item.snippet.thumbnails.medium.url} alt="" /></Link>
//                         <div className="vid-info">
//                             <h4>{item.snippet.title}</h4>
//                             <p>{item.snippet.channelTitle}</p>
//                             <p className='recommended-views'>{value_converter(item.statistics.viewCount)} Views</p>
//                         </div>
//                     </div>)
//         })}
//         </div>
//     )
// }

// export default REcomented



import React, { useEffect, useState } from 'react'
import "./REcomented.css"
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

// Utility function to convert ISO 8601 duration to mm:ss or hh:mm:ss
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

const REcomented = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    useEffect(() => {
        fetch(relatedVideo_API)
            .then(res => res.json())
            .then(data => setApiData(data.items));
    }, [categoryId]); // Make sure to re-fetch when categoryId changes

    return (
        <div className="recommended">
            {apiData.map((item, index) => (
                <div key={index} className="side-video-list">
                    <Link to={`/video/${categoryId}/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="small-thumbnail">
                        <div className="thumbnail-container">
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <span className="video-duration">{formatDuration(item.contentDetails.duration)}</span>
                        </div>
                    </Link>
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p className='recommended-views'>{value_converter(item.statistics.viewCount)} Views</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default REcomented;

