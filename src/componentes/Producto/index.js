import React, {Component} from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
}

class Producto extends Component {
  constructor(props){
    super(props)
    this.state = {
        data:null,
        loading:true
    }
  }

  componentDidMount = async() =>{
    const id = this.props?.params?.id;
    const result = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
    setTimeout(()=>{
        this.setState({loading:false, data: result.data[0]})
    }, 500)
  }

  render() {
        return(
            <div>
                {this.state.loading && <div>Cargando...</div>}
                {!this.state.loading && 
                    <div>
                        <img style={{height:"300px", width:"auto"}} src={this.state.data.image_url} alt="Imagen de cerveza" />
                        <div>{this.state.data.name}</div>
                    </div>
                }
            </div>
        )
  }
}

export default withParams(Producto)