import React, { Component } from 'react';
import axios from 'axios';
import InventoryItemWrapper from '../InventoryItemWrapper/InventoryItemWrapper';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            inventory: []
        }
    }

    componentDidMount(){
        axios.get('/api/getInventory').then(inventory => {
            console.log(inventory);
            this.setState({
                inventory: inventory.data
            })
        })
    }

    render(){
        const inventory = this.state.inventory.map((item, idx) => {
            return (
                <InventoryItemWrapper 
                    key={item.id}
                    item={item}
                />
            )
        })
        return (
            <div>
            {inventory}
            </div>
        )
    }
}