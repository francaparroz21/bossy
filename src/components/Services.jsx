import { useParams } from "react-router-dom"
import { services } from "../assets/courses/data.json"
import ItemDetail from "./ItemDetail"
import Headers from "./Elements/Headers"
import Card from "./Elements/Card"
import { useEffect, useState } from 'react'

const Services = () => {
  const { servicioId } = useParams()
  const [param, setParam] = useState('')
  const [firstServices, setFirstServices] = useState()
  const [secondServices, setSecondServices] = useState()

  useEffect(() => {
    const FIRSTSERVICECLASS = services.FYC
    const SECONDSERVICECLASS = services.CPYM
    setFirstServices(FIRSTSERVICECLASS)
    setSecondServices(SECONDSERVICECLASS)
    setParam(servicioId)
    console.log(servicioId)
    return () => {
      console.log(servicioId)
    }
  }, [servicioId])

  return (
    <div className='w-full flex flex-col'>
      {param ? (
        <>
          <ItemDetail servicioId={param} />
        </>
      ) : (
        <>
          <Headers title={" Facial y Corporal"}></Headers>
          <div className='w-full grid justify-items-center grid-cols-special xl:grid-cols-4 grid-auto-row gap-3 md:gap-6 lg:gap-10 p-3 md:p-5 bg-palette-ChampagnePink/60 '>
            {firstServices ? firstServices.map((service) => (
              <Card
                img={service.img[0]}
                title={service.title}
                direction={'servicios'}
                key={service.title}
              ></Card>
            )) : <></>}
          </div>
          <Headers title={"Cejas - Pestañas y Maquillaje"}></Headers>
          <div className='w-full grid justify-items-center grid-cols-special xl:grid-cols-4 grid-auto-row gap-3 md:gap-6 lg:gap-10 p-3 md:p-5 bg-palette-ChampagnePink/60 '>
            {secondServices ? secondServices.map((service) => (
              <Card
                img={service.img[0]}
                title={service.title}
                direction={'servicios'}
                key={service.title}
              ></Card>
            )) : <></>}
          </div>
        </>
      )}
    </div>
  )
}

export default Services
