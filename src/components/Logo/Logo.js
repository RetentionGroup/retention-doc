import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/logo.png';
import './logo.scss'


export default function HomePage() {
    return (
        <div className='logo-container'>
            <Link to={{ pathname: `/` }}>
                <Image className='logo' src={Logo} fluid />
            </Link>
        </div>
    )
}