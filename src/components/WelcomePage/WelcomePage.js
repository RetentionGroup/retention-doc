import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatAnimation from '../CatAnimation/CatAnimation'
import Cat from '../../audio/cat_song.mp3';
import './welcome_page.scss';


class WelcomePage extends Component {
    constructor() {
        super();
        this.state = { selectedSound: 'playCat' };
    }
    playSound = () => {
        if (this.state.selectedSound === 'playCat') {
            this.playCat.play();
        };
    }
    render() {
        return (
            <div className='welcome-page-container'>
                    <audio src={Cat} ref={(playCat) => { this.playCat = playCat; }}></audio>
                    <span onClick={this.playSound}><CatAnimation /></span>
                    <p>
                        <span className='bold-coral'>Привет, дорогой коллега!</span><br /> Ты попал на очень интересную страничку, которая потребует от тебя максимальной
                    внимательности <span className='italic-after'>(Ей позавидует любой часовщик.)</span>, нечеловеческой находчивости и фантазии
                    <span className='italic-after'> (Любой писатель-фантаст закурит, от волнения тряся руками.)</span>, незаурядного ума
                    <span className='italic-after'> (От восторга Стивен Хокинг, переписал бы на тебя свое кресло-каталку. Если бы был жив конечно.)</span>,
                    стальных как прутья нервов <span className='italic-after'>(По сравнению с тобой, Далай-лама выглядит как истеричная девочка.)</span>
                    ну и литрушку белого нефильтрованного <span className='italic-after'>(Без пузыря тут явно, просто так, не разобратся.)</span>.<br />
                        <span className='italic-cherry'>“Куда же я попал?”</span> - спросишь ты.<br /> А я, не шутя отвечу - <span className='italic-coral'>“Ты опять попал в "школу", бро.”</span><br />
                    Эта страница была оформлена как вопросник, шпаргалка или же обучалка. Называйте ее как угодно. Главное что здесь, будет
                    находиться концентрированный источник информации, которая касается работы ретеншн отдела, и  даст ответы на вопросы, как
                    правило, которые задаются до неприличия постоянно. В ней также, будет находиться некоторая обучающая информация, способствующая
                    интеллектуальному обогащению, касательно работы в ретеншн доках, и стоит заметить, не требует применения специальных веществ и техник.
                    Количество информации не конечно. Контент может добавляться в зависимости от количества вопросов.<br />
                    Что же тебе посоветовать, дорогой друг? Внимательно читай доку, не расстраивайся сильно если ничего не понял (просто прочитай
                    еще раз, главное не зацикливайся). Если все понимаешь и запоминаешь - то ты красавчик, и апгрейд идет по плану без сбоев.<br />
                        <span className='bold-coral'>PS.</span> <span>Ретеншн отдел, не несет ответственность за психическое состояния пользователя. Но мы работаем на опережение. Поэтому, слева
                    лежащая и мурчащая <span className='italic-coral'>“Шерсть”</span>, предназначенный чтобы разгрузить напряженный мозг и нервишки. Удачи!</span>
                    </p>
            </div>
        )
    }
}

export default WelcomePage;