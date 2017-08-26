import React from 'react';
import {Row, Col} from 'antd';
import 'whatwg-fetch';
import {
    Form,
    Input,
    Button,
    Card,
    notification
} from 'antd';
const FormItem = Form.Item
class CommonConments extends React.Component {
    constructor () {
        super ();
        this.state = {
            comments: ""
        }
    };
    componentDidMount () {
        var myFetchOptions = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		})
    };
    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: "GET"
        };
        var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
    };
    addUserCollection(){
        var myFetchOptions = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
			.then(response=>response.json())
			.then(json=>{
                notification["success"]({message: "news提醒",description:"收藏成功"});
			});
    };
    render () {
        let {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length
            ?
            comments.map((comment,index) =>
                <Card key={index} title={comment.UserName} extra={<a href="#">发表于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            )
            :
            "没有加载到任何评论";
        return (
            <div class="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator("remark")(<Input type="textarea" placeholder="您可以随便写"/>)}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonConments = Form.create({})(CommonConments);
