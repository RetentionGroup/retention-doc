import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cat_animation.scss';

export default function CatAnimation() {
    return (
        <div className='cat-container' title='Кот, по кличке "Шерсть"'>
            <span className='stand'></span>
            <div className='cat'>
                <div className='body'></div>
                <div className='head'>
                    <div className='ear'></div>
                    <div className='ear'></div>
                </div>
                <div className='face'>
                    <div className='nose'></div>
                    <div className='whisker-container'>
                        <div className='whisker'></div>
                        <div className='whisker'></div>
                    </div>
                    <div className='whisker-container'>
                        <div className='whisker'></div>
                        <div className='whisker'></div>
                    </div>
                </div>
                <div className='tail-container'>
                    <div className='tail'>
                        <div className='tail'>
                            <div className='tail'>
                                <div className='tail'>
                                    <div className='tail'>
                                        <div className='tail'>
                                            <div className='tail'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}