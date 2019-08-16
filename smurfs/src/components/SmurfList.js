import React from 'react'
import { connect } from 'react-redux'

import Loader from 'react-loader-spinner'
import SmurfCard from './SmurfCard.js'
import Form from './Form'

import { getData } from '../actions'

const SmurfList = (props) => {
    return (
        <div>
            <Form />
            {props.isLoading ?
                <Loader
                    type="Puff"
                    color="red"
                    height={180}
                    width={180} /> :
                <button onClick={props.getData}>Click this Button to Show Villagers</button>}
            {props.smurfs.map(e => (
                <SmurfCard key={e.id} smurf={e} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}


export default connect(mapStateToProps, { getData })(SmurfList)