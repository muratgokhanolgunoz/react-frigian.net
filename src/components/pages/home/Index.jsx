import React from 'react'
import Context from '../../../context/Context'
import Banner from './Banner'
import Video from './Video'
import Why from './Why'
import Widgets from './Widgets'

const Index = () => {
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div id="home">
                        <Banner />
                        <Widgets />
                        <Why />
                        <Video />
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Index