import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()

    navigate("/portfolio/about")
    return
}

export default Home
