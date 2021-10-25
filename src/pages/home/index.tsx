import React, { Component } from 'react'

export default class Hello extends Component <{list?:any},{list:object[]|[], }> {

    constructor(props:any) {
        super(props)
        this.state = {
            list:[],
        }
    }
    componentDidMount(){
        this.setState({
            list: [
                {value: 'x',lable:'1'},
                {value: '2',lable:'2'},
                {value: '3',lable:'3'},
                {value: '4',lable:'4'},
            ]
        })
    }

    render() {
        console.log(this.props);
        const {list} = this.state;
        console.log(list);
        return (
            <div>
                Home
                <select>
                {
                    list.map((it:any) =>{
                         return (
                             <option key={it.value} value={it.value}>{it.lable}</option>
                         )       
                    })
                }
                </select>
            </div>
        )
    }
}
