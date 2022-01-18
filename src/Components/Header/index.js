import React, { useState,useRef } from 'react'
import '../../App.css'
import{Navbar,Container,Button,Form,FormControl,Card} from "react-bootstrap";
import {Multiselect} from "multiselect-react-dropdown";
import FilteredMultiSelect from 'react-filtered-multiselect'
import{searchCard} from'../../actions/Action'
import {connect} from "react-redux";
import {reducerSearch} from "../../reducers/reducerSearch";
function Header(props) {

    const optionsListe = [
        {
            option:'Comedy',id:'1'
        },
        {
            option:'Animation',id:'2'
        },
        {
            option:'Thriller',id:'3'
        },
        {
            option:'Drame',id:'4'
        }
    ];
    const [options]=useState(optionsListe)
    const multiselectRef = useRef();

    const resetSelectField = () => {
       var searchFilm =multiselectRef.current.getSelectedItems() ;
       props.search(searchFilm.map(e=>e.option))
    };
    const resetSelectFie = () => {
        var searchFilms =multiselectRef.current.getSelectedItems() ;
        props.search(searchFilms.map(e=>e.option))


    };
    return(
        <div className="navbarFix">
        <Navbar bg="light" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="#">FILMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{justifyContent:"right"}}>

                    <Multiselect style={{width:"200px"}}
                        options={options} placeholder=" Select category" // Options to display in the dropdown
                       displayValue="option"
                                 ref={multiselectRef}
onSelect={ resetSelectField}
                                 onRemove={resetSelectFie}
                        labelledBy="Select"

                  />

                </Navbar.Collapse>

            </Container>

        </Navbar>
            <Card  className="jumbotron">
                <Card.Title>Movie lists</Card.Title>
                <Card.Text>Choose your best movie!</Card.Text>
            </Card>
        </div>

    )
}

const mapDispatchToProps=dispatch=>{
    return{
        search:(category)=>dispatch(searchCard(category)),

    }

}
export default connect(null,mapDispatchToProps)(Header)
