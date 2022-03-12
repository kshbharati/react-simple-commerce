import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";


interface ProductProps {
    params?: any;
}

const Product = (props:any) => {
    const params = useParams();
    return <WrappedProduct params={params} />;
};

class WrappedProduct extends React.Component<ProductProps>{
    render(): React.ReactNode {
        let invoice=getInvoice(parseInt(this.props.params.productId,10));

        return(
            <main>
                <h2>Total Due: {invoice?.amount}</h2>
                <p>
                    {invoice?.name}: {invoice?.number}
                </p>
                <p>Due Date: {invoice?.due}</p>
            </main>
        );
    }
}

export default Product;