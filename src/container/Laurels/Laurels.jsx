import React from 'react';
import {SubHeading} from '../../components';
import {images, data} from '../../constants';

import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => {
   <div className="app__laurels-awards_card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels-awards_content">
      <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      <p className="p__opensans"> {subtitle} </p>
    </div>
   </div>
}

export default function Laurels() {
  return (
    <div className="app__bg app__wrapper section__padding " id="awards">
      <div className="app__wrapper-info">
        <SubHeading title="Awards & rescognition" />
        <h1 className="headtext-cormorant">Our Laurels</h1>
        <div className="app__laurels-awards">
          {data.awards.map((award) => <AwardCard award = {award} key={award.title}/>)}
        </div>
      </div>
      <div className="app__wrapper-img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  )
}
