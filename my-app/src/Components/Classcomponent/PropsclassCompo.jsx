import React, { Component } from 'react';

class PropsClassCompo extends Component {

    constructor(props){
        super(props)
        this.state = {
            dataList: [],
        };
        fetch('https://dummyjson.com/products')
            .then(StringResult => {return StringResult.json()})
            .then(json => this.setState({ dataList: json.products }))
            .catch((e) => {console.log(e)});
    }

render(){

    return(
        <div >
            {this.state.dataList.length>0?<p><b>we have data</b></p>:<p>Loading ...</p>}
        {
            this.state.dataList.map((object,index)=>{
    
                return <p>{object.id}{object.title}{object.description}</p>
           
            })
        }
        
        
        </div>
    )
}




}
export default PropsClassCompo;