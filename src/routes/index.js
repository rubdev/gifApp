import Home from '../pages/home';
import Header from '../templates/header';

const routes = {
    '/': Home
};

const router = () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = Header();
    content.innerHTML = Home();
}

export default router;