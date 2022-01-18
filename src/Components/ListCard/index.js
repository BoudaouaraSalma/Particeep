import React, { useState } from 'react'
import '../../App.css'
import ReactPaginate from 'react-paginate';
import Cards from "../Cards";
import {connect} from "react-redux";

import {Container,Row,Col}from 'react-bootstrap'

function ListCard (props) {

    return(
        <Container className="listCard">
            <Row>

                    { props.categoryFilter =="" ?props.List.map(el=> <Col style={{marginBottom:'20px'}}><Cards key={el.id} index={el.id} cards={el}
                        /></Col>)
                        :props.List.filter(({ category }) =>  props.categoryFilter.includes(category))
                        .map(el=> <Col style={{marginBottom:'20px'}}><Cards key={el.id} index={el.id} cards={el}
                    /></Col>)  }

            </Row>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                pageCount={5}
                previousLabel="< previous"
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}/>
        </Container>
          )

}

const mapStateToProps=state=>({
    List:state.reducerFilm,
    categoryFilter:state.reducerSearch,

})

export default connect(mapStateToProps)(ListCard)
