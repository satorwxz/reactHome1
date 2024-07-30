import React from 'react';

import Star from "./Components/Star";
import Icon from "./Components/Icon";
import Img from "./Components/Img";
import Title from "./Components/Title";

import Laptop from "./Components/Laptop";
import Price from "./Components/Price";
import PLaptop from "./Components/PLaptop";
import IconInfo from "./Components/IconInfo";
import Like from "./Components/Like";
import NewCart from "./Components/NewCart";
import Info from "./Components/Info";
import Comp from "./Components/Comp";

const App =() => {
  return (
      <div>
          <div className={'con'}>
              <div className={'first'}>
                  <Img/>
                  <Icon/>
              </div>
              <div className={'second'}>
                  <Title/>
                  <Star/>
              </div>
          </div>
          <div className={'laptop-wrapper'}>
              <div className={'laptop-wrap'}>
                  <Laptop/>
                  <div className={'information'}>
                      <Price/>
                      <PLaptop/>
                      <Info/>
                      <div className={'icons'}>
                          <NewCart/>
                          <Like/>
                          <Comp/>
                          <IconInfo/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}
export default App;