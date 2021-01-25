import router from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Escucha los archivos que se han cargado
window.addEventListener('load', router);
// Escucha las rutas del hash al que te mueves
window.addEventListener('hashchange', router);