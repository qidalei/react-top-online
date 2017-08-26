import React from 'react';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';
import {Row,Col,BackTop} from 'antd';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';

export default class PcNewsDetails extends React.Component {
    constructor () {
        super ();
        this.state = {
            newsItem : ""
        }
    };
    createMakeup (){
        return {__html: this.state.newsItem.pagecontent};
    };
    componentDidMount () {
        var myFetchOptions = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		})
    };
    render () {
        return (
            <div>
                <PcHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} class="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMakeup()}></div>
                        <CommonComments uniquekey={this.props.match.params.uniquekey}/>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="125px"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PcFooter />
                <BackTop />
            </div>
        )
    }
}
