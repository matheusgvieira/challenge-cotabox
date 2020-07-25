import React from 'react';

import './Navbar.scss';
import '../../global.scss';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addFirstName, addLastName, addParticipation } from '../../store/actions/inputsAction';

import api from '../../services/api';

function Navbar(props) {
    const { addFirst, addLast, addPart, firstName, lastName, participation  } = props;

    async function addParcitipant(e) {
        e.preventDefault();
        const data = { firstName, lastName, participation };
        console.log(data);

        try {
            const response = await api.post('participant', data);
            console.log(response);
            window.location.reload(false);
        } catch (err) {
            console.log(err)
            alert('Erro ao adicionar participante, tente novamente.');
            
        }
    }
    return (
        <div className="navbar-container">
            <input type="text" placeholder="First name" onChange={e => addFirst(e.target.value)}/>            
            <input type="text" placeholder="Last name"  onChange={e => addLast(e.target.value)}/>            
            <input type="text" placeholder="Participation" onChange={e => addPart(+e.target.value)}/>
            <button type="button" onClick={addParcitipant}>SEND</button>            
        </div>
    )
}

function mapStateToProps(state){
    return {
        firstName: state.inputs.firstName,
        lastName: state.inputs.lastName,
        participation: state.inputs.participation,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addFirst(newFirstName){
            // Action Creator -> Action
            const action = addFirstName(newFirstName);
            dispatch(action);
        },
        addLast(newLastName){
            // Action Creator -> Action
            const action = addLastName(newLastName);
            dispatch(action);
        },
        addPart(newParticipation){
            // Action Creator -> Action
            const action = addParticipation(newParticipation);
            dispatch(action);
        }
    }
}

Navbar.propTypes = {
    addFirst: PropTypes.func.isRequired,
    addLast: PropTypes.func.isRequired,
    addPart: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    participation: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

