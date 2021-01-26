import Home from '../pages/home';
import Header from '../templates/header';
import Footer from '../templates/footer';

const routes = {
    '/': Home
};

const router = () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = Header();
    content.innerHTML = Home();
    footer.innerHTML = Footer();
}

export default router;