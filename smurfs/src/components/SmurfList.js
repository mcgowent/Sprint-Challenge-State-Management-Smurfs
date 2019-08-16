import React from 'react'
import { connect } from 'react-redux'

import Loader from 'react-loader-spinner'
import SmurfCard from './SmurfCard.js'

import { getData } from '../actions'

const SmurfList = () => {
    return (
        <div>
            <div>It's working inside of SmurfList</div>
            <SmurfCard />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, { getData })(SmurfList)