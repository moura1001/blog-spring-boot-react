import React, { Component } from "react";
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

class Inicial extends Component {
  state = {
    postagens: []
  };

  componentDidMount() {
    axios
      .get("/Postagens")
      .then(resultado => {
        this.setState({ postagens: resultado.data });
      });
  }

  render() {
    return (
      <List>
        {this.state.postagens.map(postagem => (
          <ListItem
            key={postagem.id}
            button component={Link} to={`/DetalhesPostagem/${postagem.id}`}
          >
            <ListItemText
              primary={postagem.titulo}
              secondary={postagem.autor}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default Inicial;