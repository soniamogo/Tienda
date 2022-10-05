import React, { Component } from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Catalogo, CervezaWrapper} from './style';
import {Imagen} from "../../styles/style";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
  }



class Tienda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            page: 1,
            
        }
    }

    componentDidMount = async () => {
        console.log("componentDidMount")
        var page = this.props?.params?.page || 1;
        var result = await axios.get (
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=18`
        );
        setTimeout(() => {
            this.setState({loading: false, data: result.data, page: page})
        }, 500);
        
    }

   
    
    render() {
        const pagina = parseInt(this.state.page);
        console.log("render")
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", justifyContent:"center"}}>
                {this.state.loading && <div>Cargando...</div>}
                {!this.state.loading && pagina !== 1 && (
                    <Link to={`/tienda/${pagina -1}`} onClick={this.forceUpdate}>
                        <button>Anterior</button>
                    </Link>
                )}
                {!this.state.loading && (
                    <Link to={`/tienda/${pagina +1}`} onClick={this.forceUpdate}>
                        <button>Siguiente</button>
                    </Link>
                )}
                <Catalogo>
                    {!this.state.loading &&
                        this.state.data.map((elem,index) => {
                            return (
                                <a href={`/cervezas/${elem.id}`} key={`cerveza${elem.id}`}>
                                    <CervezaWrapper>
                                        <Imagen height="150px" src={elem.image_url}/>
                                        {elem.name}
                                    </CervezaWrapper>
                                </a>
                            );
                        })}
                </Catalogo>
               
            </div>
        )
    }
}

export default withParams(Tienda);