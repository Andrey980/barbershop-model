import React, { useState, useEffect } from 'react'
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import LeftArrow from './assets/leftArrow.svg'
import Clock from './assets/clock.svg'

import useFetch from '../../hooks/useFetch'

function Booking() {
  const navigate = useNavigate()
  const { serviceId } = useParams()
  const { data } = useFetch()

  const backClick = () => {
    navigate(`/${serviceId}`)
  }

  // --------- Calendário -----------
  const [currentYear, setCurrentYear] = useState(2023)

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  moment.updateLocale('pt', {
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
  })

  return (
    <div className="booking">
      {data ? (
        <div className="container">
          <div className="info">
            <button id="back-btn" onClick={backClick}>
              <img src={LeftArrow} alt="Back" />
              Back
            </button>

            <div>
              <p>BLUNT BARBER SHOP</p>
              <h1>{data.services[0]}</h1>
            </div>

            <span>
              <img src={Clock} alt="Clock" />
              60 min
            </span>
          </div>

          <div className="options"></div>
        </div>
      ) : (
        error
      )}
    </div>
  )
}

export default Booking
