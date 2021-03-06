import React from 'react';
import './fire_animation.scss';

export default function FireAnimation() {
    return (
        <div class="fire">
            <div class="fire-left">
                <div class="main-fire"></div>
                <div class="particle-fire"></div>
            </div>
            <div class="fire-main">
                <div class="main-fire"></div>
                <div class="particle-fire"></div>
            </div>
            <div class="fire-right">
                <div class="main-fire"></div>
                <div class="particle-fire"></div>
            </div>
            <div class="fire-bottom">
                <div class="main-fire"></div>
            </div>
        </div>
    )
}