import React from 'react';


const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {{nfts}.map((nft, index) => {
                    return <Card {...nft} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Home;
