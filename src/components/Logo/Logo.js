import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logo.scss'


export default function HomePage() {
    return (
        <div className='logo-container'>
            <Link to={{ pathname: `/` }}>
                <div className='logo'>
                        <div className="word-namber-one">Retention</div>
                        <div className="word-hidden">Retention Doc</div>
                        <div className="word-namber-two">D</div>
                        <div className="triangle"></div>
                        <div className="circle"></div>
                        <div className="square"></div>
                        <div className="word-namber-three">c</div>
                </div>
            </Link>
        </div>
    )
}