import React from 'react';
import logo from '../../tzauth.png';
import './Home.css';

/*const Card = (props) => {
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
};*/

const nfts = (props) => {
  let liste = [];
  for (let pas = 0; pas < 1; pas++) {
    liste.push(props);
  }
  return(liste);
}

const Home = () => {
    return (
        /*<div>
            { <div className="row row-cols-1 row-cols-md-3 g-4">
                {{nfts}.map((nft, index) => {
                    return <Card {...nft} key={index} />;
                })}
            </div> }
        </div>*/
    <div className="container">
        <div className="grille">
          {
            nfts(logo).map((nft, i) => (
              <div key={i} className="Card">
                <img src={nft} alt="" width="150"/>
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">TezAUTH</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">Infos</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white"></p>
                  <button className="w-full bg-blue-500 text-white font-bold py-2 px-12 rounded" onClick={""}>USE</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
};

export default Home;
