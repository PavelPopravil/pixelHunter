import {createTempate} from '../modules/createTemplate.js'
import renderTemplate from '../modules/renderTemplate.js'
import greetingBlock from './greeting.js';
import footer from './footer.js'

const moduleHtml = createTempate(`
    <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    ${footer}
`);

const btn = moduleHtml.querySelector('.intro__asterisk');

btn.addEventListener('click', function() {
    renderTemplate(greetingBlock);
});

export default moduleHtml;