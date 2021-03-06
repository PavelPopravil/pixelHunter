import * as utils from '../utils/utils.js';
import greetings from './greeting.js';

const moduleHtml = utils.createTemplate(`
    <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
`);

const btn = moduleHtml.querySelector(`.intro__asterisk`);

btn.addEventListener(`click`, () => {
    utils.renderTemplate(greetings());
});

export default moduleHtml;
