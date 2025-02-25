import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'
import '../style.css'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
        <div className='home-container'>
            <section className='home'>
                <div className='left'>
                    <h2>"From Our Kitchen to Your Heart!"</h2>
                    <h5>Food is essential for survival, providing the nutrients and energy needed for growth, health, and well-being. 
                        Nepali Khaja recipes are a delightful part of Nepalese cuisine,
                        known for their rich flavors, diverse ingredients, and cultural significance.</h5>
                    <button onClick={addRecipe}>Share your recipe</button>
                </div>
                <div className='right'>
                    <img src={foodRecipe} width="320px" height="450px"></img>
                </div>
            </section>
            <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D8BFD8" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,48C240,43,300,53,360,90.7C420
            ,128,480,192,540,202.7C600,213,660,171,720,144C780,117,840,107,900,128C960,149,1020,203,1080,229.3C1140,256,1200,256,1260,224C1320,192,1380,128,1410,96L1440,64L1440
            ,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300
            ,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}

            </div>
            <div className='recipe'>
                <RecipeItems />
            </div>
        </>
    )
}

