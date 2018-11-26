import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'




export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLikeView: false,
            isBookView: false
        }
    }

    render() {
        const {item} = this.props;
        return (
            <div className="card" style={{width: "100%"}}>
                <img
                    className="card-img-top card-img--height"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                    item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="d-flex justify-content-between">
                        <div className="card-text">Рейтинг: {item.vote_average}</div>

                        <div>
                            <a className="heart-icon mr-1" onClick={()=>this.setState({ isLikeView: !this.state.isLikeView })}>
                                { this.state.isLikeView
                                    ? <FontAwesomeIcon icon={['fas', 'heart']}/>
                                    : <FontAwesomeIcon icon={['far', 'heart']}/>

                                }
                            </a>
                            <a className="heart-icon mr-1" onClick={()=>this.setState({ isBookView: !this.state.isBookView })}>
                                { this.state.isBookView
                                    ? <FontAwesomeIcon icon={['fas', 'bookmark']}/>
                                    : <FontAwesomeIcon icon={['far', 'bookmark']}/>

                                }
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }
