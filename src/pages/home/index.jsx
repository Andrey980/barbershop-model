import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from './assets/logo-example.png'
import RightArrow from './assets/right-arrow.svg'
import useFetch from '../../hooks/useFetch'


function Home() {
  const navigate = useNavigate();
  const { data } = useFetch();

  const afterClick = e => {
    const serviceId = e.target.value

    if (serviceId != null) {
      navigate(`/${serviceId}`)
    }

    console.log(serviceId)
  }

  const checkValue = e => {
    switch (e) {
      case 'barba':
        return '1'
        break
      case 'cabelo':
        return '2'
        break

      default:
        return null
    }
  }

  return (
    <div className="home">
      {data ? (
        <div>
          <img src={Logo} alt="" />
          <div className="container">
            <ul>
              {data.services.map(result => (
                <li className="itens" key={result}>
                  <button onClick={afterClick} value={result}>
                    {result}
                    <span>
                      60 min
                      <img src={RightArrow} alt="" />
                    </span>
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

export default Home

{
  /* <result>
              <div className="container">
                <ul>
                  <li className="itens">
                    <button onClick={afterClick} value="0">
                      Barba
                      <span>
                        60 min
                        <img src={RightArrow} alt="" />
                      </span>
                    </button>
                  </li>

                  <li className="itens">
                    <button onClick={afterClick} value="1">
                      Cabelo
                      <span>
                        60 min
                        <img src={RightArrow} alt="" />
                      </span>
                    </button>
                  </li>

                  <li className="itens">
                    <button onClick={afterClick} value="2">
                      Cabelo e Barba
                      <span>
                        60 min
                        <img src={RightArrow} alt="" />
                      </span>
                    </button>
                  </li>

                  <li className="itens">
                    <button onClick={afterClick} value="3">
                      Sobrancelhas
                      <span>
                        15 min
                        <img src={RightArrow} alt="" />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </result> */
}
