import React, { Component } from 'react';
import './InventoryItemWrapper.css';

export default class InventoryItemWrapper extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const item = this.props.item;
        console.log(item)
        return (
            <div className="inventory-item-wrapper">
                <img src={item.pictures} alt={'item' + item.key} />
                <div className="inventory-text">
                   <div className="title margin" >{item.title}</div>
                   <div className="small-header">Description</div>
                   <div className="general-text margin">{item.description}</div>
                   <div className="small-header">Includes</div>
                   <div className="general-text margin">{item.accessories}</div>
                   <div className="button">Request Item</div>
                </div>
            </div>
        )
    }
}