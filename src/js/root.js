import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PcIndex from './components/pc_index';
import PcNewsDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_usercenter';

export default class Root extends React.Component{
  render(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PcIndex}></Route>
                    <Route path="/details/:uniquekey" component={PcNewsDetails}></Route>
                    <Route path="/usercenter" component={PCUserCenter}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
