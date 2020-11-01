import React,{Component} from 'react';
import Routes from '../app/getRoute';

class MaintPage extends Component{

    render(){
        const {routes} = this.props;
        return(
            <div>
                <div>
                    header
                </div>
                <div>
                    {
                        routes && routes.map((route, key)=>(<Routes key={key} {...route} />))
                    }
                </div>
                <div>
                    footer
                </div>
            </div>
        )
    }
}

export default MaintPage