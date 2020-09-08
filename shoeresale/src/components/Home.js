import React from 'react';
import Menu from './ Menu';
import About from './About';
import Banner from './Banner';
import FUT from '../assets/backtofuture.jpg'


const Home = () => {
    return (
        <div>
            <section>
                <div className="container-shop1">
                    <div className="neo-product1">
                        <img src={FUT}></img>
                         <h3>SOLD-OUT</h3>
                    </div>
                </div>
                <div className="container-shop1">
                    <div className="neo-product1">
                    <img src="https://secure.img1-fg.wfcdn.com/im/12745289/resize-h800%5Ecompr-r85/5058/50584170/2+Piece+Lobster+Slipper+Set.jpg"></img>
                    <h3>SOLD-OUT</h3>
                    </div>
                </div>
                <div className="container-shop1">
                    <div className="neo-product1">
                    <img src="https://www.masslive.com/resizer/pUzmtYyp6aeU_yKaHwSwW98CbOM=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/OW4X5OLC25FUVPTQZP4WD7D57Q.png"></img>
                    <h3>SOLD-OUT</h3>
                    </div>
                </div>
                <div className="container-shop1">
                    <div className="neo-product1">
                    <img src="https://dks.scene7.com/is/image/GolfGalaxy/20NIKAKYR6WHTMLT5MNK_White_Blue_Pink?qlt=70&wid=600&fmt=pjpeg"></img>
                    <h3>SOLD-OUT</h3>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;