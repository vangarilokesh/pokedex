import React from 'react'
import { Container,Row } from 'react-bootstrap'
import './MainScreen.css';
const MainScreen = ({title,childern}) => {
  return (
    <div className='mainback'>
        <Container>
            <Row>
                <div className="page">
                    {title && (<>
                        <h1 className="heading">{title}</h1>
                    </>)}
                    {childern}
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default MainScreen