import React, { Component } from 'react';
import './Cards.scss';

class cards extends Component {
  constructor(props) {
    super(props);
  }

  numberOfLines = (text) => {
    var teste = text.substring(0, 150) + '...';
    return teste;
  }

  render() {
    const { movies } = this.props;
    console.log('cards', movies);
    return (
      <div className="cards">
        {
          movies.map(item => (
            <div className="card">
              <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}></img>
              </div>
              <div className="card-content">
                <div className="card-description">
                  <h1>{item.title}</h1>
                  <h2>{item.release_date}</h2>
                  <p>{this.numberOfLines(item.overview)}</p>
                </div>
                <div className="card-mais">
                  <p>Mais informações</p>
                </div>
              </div>
            </div>
          ))
        }
        {/* <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h1>Titulo</h1>
            <h2>Novembro</h2>
            <p>De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma…</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h1>Titulo</h1>
            <h2>Novembro</h2>
            <p>De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma…</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h1>Titulo</h1>
            <h2>Novembro</h2>
            <p>De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma…</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h1>Titulo</h1>
            <h2>Novembro</h2>
            <p>De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma…</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default cards;
