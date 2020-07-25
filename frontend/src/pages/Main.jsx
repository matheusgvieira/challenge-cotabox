import React from 'react';

import './Main.scss';
import '../global.scss';

import Navbar from  '../components/Navbar/Navbar';
import Table from  '../components/Table/Table';
import Graph from  '../components/Graph/Graph';

export default function Main() {
    return (
        <div className="main-container">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="title">
                    <h1>DATA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="table">
                    <Table />
                </div>
                <div className="graph">
                    <Graph />
                </div>
            </main>
            
        </div>
    )
}
