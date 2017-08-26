import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block'

export default class PCNewsContainer extends React.Component {
    render (){
        const settings = {
            dots: true,
            speed: 500,
            infinite: true,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="src/images/carousel_1.jpg"></img></div>
                                    <div><img src="src/images/carousel_2.jpg"></img></div>
                                    <div><img src="src/images/carousel_3.jpg"></img></div>
                                    <div><img src="src/images/carousel_4.jpg"></img></div>
                                </Carousel>
                                <div>
                                    <PCNewsImageBlock count={6} type="guoji" width="400px" imageWidth="112px" cardTitle="国际头条" />
                                </div>
                            </div>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock type="top" count={21} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count={21} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="娱乐" key="3">
                                <PCNewsBlock type="yule" count={21} width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={16} type="yule" width="100%" imageWidth="119px" cardTitle="娱乐头条" />
                            <PCNewsImageBlock count={8} type="guonei" width="100%" imageWidth="116px" cardTitle="国内头条" />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
