import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./characterinfo.css"
import { Link } from 'react-router-dom'

export default function CharacterInfo() {
    const {characterid} = useParams()
    const [char, setChar] = useState([])
    const [origin, setOrigin] = useState([])
    const [location, setLocation] = useState([])



    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterid}`).then(res => res.json())
        .then (data => {setChar(data);  setOrigin(data.origin); setLocation(data.location);})
      }, [])

      console.log(char)
      console.log(origin)
  return (
    <>
    <section className='chacarterinfo'>
        <div className="Info">
            <h2>{char.name}</h2>
            <hr className='nameDiv' />
            <div className='Info__detail'>
                <img src={char.image} alt={char.name} />
                <ul>
                    <li>
                        <span>Status:</span>
                        <p>{char.status}</p>
                    </li>
                    <li>
                        <span>Species:</span>
                        <p>{char.species}</p>
                    </li>
                    <li>
                        <span>Gender:</span>
                        <p>{char.gender}</p>
                    </li>
                    <li>
                        <span>Origin:</span>
                        <p>{origin.name}</p>
                    </li>
                    <li>
                        <span>Location:</span>
                        <p>{location.name}</p>
                    </li>
                </ul>
            </div>
        </div>
        <Link className='back' to={"/"}>Back</Link>
    </section>
    </>
  )
}
