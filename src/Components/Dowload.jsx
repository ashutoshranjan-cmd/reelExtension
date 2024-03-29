import React from "react";
import { useState } from 'react';
import axios from 'axios'
import Logo from '../logo2.png'
import Loader from 'react-js-loader'
import '../App.css'

const Download = () => {
    const data = { name: '' }
    const [url, setURL] = useState('')
    const [load, setLoad] = useState(null)
    const setValue = (e) => {
        // setURL({...data,[e.target.name]:[e.target.value]})
        setURL(e.target.value)


    }
    const pasteButton = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setURL(text); // Assuming setURL is defined elsewhere
            // console.log(text);
        } catch (error) {
            console.error('Error reading text from clipboard:', error);
        }
    };
    const downloadData = async () => {
        setLoad(0)
        const options = {
            method: 'GET',
            url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
            params: {
                url: url
            },
            headers: {
                'X-RapidAPI-Key': 'f86dae485dmsh579efd53b13035ap177bb3jsnf3c6321a2509',
                'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setLoad(response)
            console.log(response.data.media);
            window.open(response.data.media, '_blank')


        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="container">
            <img className="logo" src={Logo} alt="" />
            <div className="box">
                <input type="text" onChange={setValue} name="name" value={url} placeholder="Enter your URL here ..." />
                <div className="button">
                    <button onClick={downloadData}>Download</button>
                    {/* <button onClick={pasteButton}>Paste</button> */}
                </div>
            </div>
            <div className={load == 0 ? 'loader':''}>
            {load === 0 ? <Loader  type="box-rectangular" bgColor={'#FFFFFF'} color={'#FFFFFF'} title={"Loading...."} size={100} />:' '}
            </div>
        </div>
    )
}

export default Download