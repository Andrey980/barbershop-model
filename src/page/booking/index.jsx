import React, { useState, useEffect } from 'react'
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import LeftArrow from './assets/leftArrow.svg'
import Clock from './assets/clock.svg'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import axios from 'axios'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'

import { fetchData } from '../../api/fetchApi'

function Booking() {
  const navigate = useNavigate()
  const { serviceId } = useParams()

  const locales = {
    'en-US': 'date-fns/locale/en-US'
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })

  const backClick = () => {
    navigate(`/${serviceId}`)
  }

  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchData()
        setData(result)
      } catch (error) {
        // Trate os erros, se necessário
        setError(error)
      }
    }

    getData()
  }, [])

  // console.log(data)

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

          <div className="options">
            {/* <Calendar
                  localizer={localizer}
                  events={data}
                  startAccessor="start"
                  endAccessor="end"
                /> */}
          </div>
        </div>
      ) : (
        error
      )}
    </div>
  )
}

export default Booking
