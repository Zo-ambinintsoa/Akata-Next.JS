import React from 'react';
import { Navbar } from './';

export default function Header() {
    return (
        <div className="container-fluid fixed-top bg-primary px-lg-3 px-0" id="topnav">
            <div className="row collapse show no-gutters d-flex h-100 position-relative sidebar-collapse">
                <div className="col-3 pr-4 w-sidebar navbar-collapse collapse d-none d-lg-flex">
                    <input className="form-control form-control-sm mr-1 border-0 font-weight-light rounded-pill" type="text" placeholder="search..." />
                </div>
                <div className="col">
                    <Navbar parent={this} />
                </div>
            </div>
            
        </div>
    );
}


