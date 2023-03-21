import {useState} from 'react'

import {Container,Heading,Image,SpeedHeader,Description,ButtonContainer,AccelerateButton,BrakeButton} from './styled'
const Speedometer=()=>{
  const [speed,setSpeed]=useState(0)

  const onAccelerate=()=>{
    if (speed<200){
        setSpeed(prevState=>prevState+10)
    }
  }

  const onApplyBrake=()=>{
    if(speed>0){
        setSpeed(prevState=>prevState-10)
    }
  }

    return(
        <Container>
            <Heading>
                SPEEDOMETER
            </Heading>
            <Image src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer"/>
                <SpeedHeader>Speed is {speed}mph</SpeedHeader>
                <Description>Min Limit is 0mph,Max Limit is 200mph</Description>
                <ButtonContainer>
                    <AccelerateButton onClick={onAccelerate}>Accelerate</AccelerateButton>
                    <BrakeButton onClick={onApplyBrake}>Apply Brake</BrakeButton>
                </ButtonContainer>
        </Container>
    )

    
}

export default Speedometer