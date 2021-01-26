import Home from '../pages/home';
import Header from '../templates/header';
import Footer from '../templates/footer';

const routes = {
    '/': Home
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    content.innerHTML = await Home();
    footer.innerHTML = await Footer();
}

export default router;