import React from 'react'
import { ProgressCircle } from '../src'
import FlashIcon from 'mdi-react/FlashIcon'
import MapMarkerRadiusIcon from 'mdi-react/MapMarkerRadiusIcon'
import WalkIcon from 'mdi-react/WalkIcon'
import { Container, Row } from "reactstrap"

export default {
  title: '@dashboard-ui/progress-circle',
  component: ProgressCircle,
};

export const Default = () => 
    <Container>
        <Row>
        <ProgressCircle
        Icon={<FlashIcon style={{ fill: '#f6da6e' }} />} 
        title="Calories burn" 
        subTitle="Goal: 500 kKal"
        value={360}
        unit="kKal"
        color="f6da6e"
      />
      <ProgressCircle
        Icon={<MapMarkerRadiusIcon style={{ fill: '#70bbfd' }} />} 
        title="Distance" 
        subTitle="Goal: 4 km"
        value={3.8}
        unit="km"
        color="70bbfd"
      />
      <ProgressCircle
        Icon={<WalkIcon style={{ fill: '#4ce1b6' }} />} 
        title="Steps" 
        subTitle="Goal: 2000 steps"
        value={1200}
        unit="steps"
        color="4ce1b6"
      />
      </Row>
</Container>
