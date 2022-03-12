import React from 'react';
import { Link, Outlet,useParams } from 'react-router-dom';
import { getInvoices,getInvoice } from '../data';
import { useEffect } from 'react';

const invoices = getInvoices();

export default class Products extends React.Component{

    render(): React.ReactNode {
        return (
            <main>
                <h2> Products</h2>
                <nav>
                    {invoices.map((invoice) => (
                        <Link
                            to={"/products/" + invoice.number}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </Link>
                    ))}
                </nav>

                <Outlet />
            </main>
        );
    };
}