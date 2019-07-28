import React from 'react';
import ListOfCartProduct from './ListOfCartProduct'

export default class Cartproductsal extends React.Component{
    render(){
        const {AllCartProducts} = this.props.AllCartProducts
        console.log(AllCartProducts);

        AllCartProducts.map( (Eachlist)=>{
            return <ListOfCartProduct 
                Eachlist ={Eachlist}
                key={Eachlist.id}
            />
        })
        return(
            <>
                
            </>
        )
    }
}