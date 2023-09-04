import React, { useState, useEffect } from 'react'
import './index.scss'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import LeftArrow from './assets/leftArrow.svg'
import Clock from './assets/clock.svg'
import Person from './assets/person.svg'
import PersonGroup from './assets/personGroup.svg'

function Professional() {
  const [service, setService] = useState('Olá')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { serviceId } = useParams()
  const serviceValue = Number(serviceId)

  useEffect(() => {
    switch (serviceValue) {
      case 0:
        setService('Barba')
        break
      case 1:
        setService('Cabelo')
        break
      case 2:
        setService('Cabelo e Barba')
        break
      case 3:
        setService('Sobrancelhas')
        break
      default:
        setService('Olá')
    }
  }, [serviceValue])

  const afterClick = e => {
    const userId = e.target.value

    if (userId != null) {
      navigate(`/${serviceId}/${userId}`)
    }
  }

  const backClick = () => {
    navigate(`/`)
  }

  return (
    <div className="professional">
      <div className="container">
        <div className="info">
          <button id="back-btn" onClick={backClick}>
            <img src={LeftArrow} />
            Back
          </button>

          <div>
            <p>BLUNT BARBER SHOP</p>
            <h1>{service}</h1>
          </div>

          <span>
            <img src={Clock} />
            60 min
          </span>
        </div>

        <div className="options">
          <p>Select the professional</p>
          <ul>
            <li>
              <button onClick={afterClick} value="0">
                <img src={PersonGroup} />
                <p>Any person</p>
              </button>
            </li>
            <li>
              <button onClick={afterClick} value="1">
                <img src={Person} />
                <p>José</p>
              </button>
            </li>
            <li>
              <button onClick={afterClick} value="2">
                <img src={Person} />
                <p>Osvaldo</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Professional
