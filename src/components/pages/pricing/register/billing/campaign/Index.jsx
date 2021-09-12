import React from 'react'
import CampaignDiscount from './CampaignDiscount'
import CampaignInput from './CampaignInput'

import { Row, Col } from 'react-bootstrap'
import Context from '../../../../../../context/Context'

const Index = () => {
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div id="campaign">
                        <Row>
                            <Col lg={6}>
                                <CampaignInput />
                            </Col>

                            <Col lg={6}>                                
                                {context.state.campaignCodeStatusOfInput === true
                                    ? <CampaignDiscount />   
                                    : null
                                }                                 
                            </Col>
                        </Row>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Index