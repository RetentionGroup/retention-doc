import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cat_animation.scss';

export default function CatAnimation() {
    return (
        <div class="cat-container" title='Кот, по кличке "Шерсть"'>
            <span class="stand"></span>
            <div class="cat">
                <div class="body"></div>
                <div class="head">
                    <div class="ear"></div>
                    <div class="ear"></div>
                </div>
                <div class="face">
                    <div class="nose"></div>
                    <div class="whisker-container">
                        <div class="whisker"></div>
                        <div class="whisker"></div>
                    </div>
                    <div class="whisker-container">
                        <div class="whisker"></div>
                        <div class="whisker"></div>
                    </div>
                </div>
                <div class="tail-container">
                    <div class="tail">
                        <div class="tail">
                            <div class="tail">
                                <div class="tail">
                                    <div class="tail">
                                        <div class="tail">
                                            <div class="tail"></div>
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