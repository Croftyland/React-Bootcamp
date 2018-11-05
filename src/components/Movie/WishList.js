import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class WishList extends Component{
    constructor(props){
        super(props)
        this.state = {
            headerTitle: this.props.title
        }
    }

    static getDerivedStateFromProps(nextProps){
        const count = nextProps.list.filter(function(a) { return a.selected; }).length;
        if(count === 0){
            return {headerTitle: nextProps.title}
        }
        else if(count === 1){
            return {headerTitle: `${count} ${nextProps.titleHelper}`}
        }
        else if(count > 1){
            return {headerTitle: `${count} ${nextProps.titleHelper}s`}
        }
    }



    render(){
        const{list, toggleItem} = this.props;
        const{ headerTitle} = this.state;
        return(
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                </div>
                {<ul className="list-group list-group-flush">
                    {list.map((item) => (
                        <li className="list-group-item" key={item.title} onClick={() => toggleItem(item.id, item.key)}>
                            {item.title} {item.selected && <FontAwesome name="check"/>}
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }

}

export default (WishList);
