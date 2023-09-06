import React, { useState, useEffect } from 'react'
import './index.scss'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import LeftArrow from './assets/leftArrow.svg'
import Clock from './assets/clock.svg'
import Person from './assets/person.svg'
import PersonGroup from './assets/personGroup.svg'

import { fetchData } from '../../api/fetchApi'

function Professional() {
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

  const [service, setService] = useState([])

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { serviceId } = useParams()

  const afterClick = e => {
    const userId = e.target.value

    if (userId != null) {
      navigate(`/${serviceId}/${userId}`)
    }
  }

  const backClick = () => {
    navigate(`/`)
  }

  const findAttendantsByService = (array, service) => {
    const attendants = array
      .filter(item => item.service === service)
      .map(item => item.attendant)

    return attendants
  }

  const checkAttendant = (e, attendant) => {
    if (Array.isArray(e)) {
      e.forEach(item => {
        setService(prevState => [
          ...prevState,
          { attendant: attendant, service: item.name }
        ])
      })
    } else {
      console.log('A variável não é um array válido.')
    }
  }

  const removeDuplicates = array => {
    return array.filter((item, index) => array.indexOf(item) === index)
  }

  const attendantsWithService = findAttendantsByService(service, serviceId)

  const attendant = removeDuplicates(attendantsWithService)

  console.log(attendant)

  useEffect(() => {
    if (data) {
      for (let i = 0; i < data.services_data.length; i++) {
        checkAttendant(
          data.services_data[i].service,
          data.services_data[i].attendant
        )
      }
    }
  }, [data])

  // console.log(data.services_data.length)

  return (
    <div className="professional">
      {data ? (
        <div className="container">
          <div className="info">
            <button id="back-btn" onClick={backClick}>
              <img src={LeftArrow} />
              Back
            </button>

            <div>
              <p>BLUNT BARBER SHOP</p>
              <h1>{serviceId}</h1>
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

              {attendant.map(item => (
                <li key={item}>
                  <button onClick={afterClick} value="1">
                    <img src={Person} />
                    <p>{item}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        error
      )}
    </div>
  )
}

export default Professional
