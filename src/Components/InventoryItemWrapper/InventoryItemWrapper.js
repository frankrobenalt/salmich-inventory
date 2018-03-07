import React, { Component } from 'react';
import './InventoryItemWrapper.css';

export default class InventoryItemWrapper extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const item = this.props.item;
        return (
            <div className="inventory-item-wrapper">
            {item.title}
            <img src={item.pictures} alt={'item' + item.key} />
            </div>
        )
    }
}