import home from '../pages/home';
import header from '../templates/header';

const routes = {
    '/': home
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await header();
}

export default router;