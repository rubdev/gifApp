
const API_KEY = 'PIJ4df2LqpRdTFHKKo4G7HlVNjY4kn5S';
const URL_API = 'https://api.giphy.com/v1/gifs';
const TRENDING_GIFS = 'trending';
const SEARCH_GIFS = 'search';

const getTrendingDataGifs = async () => {
    const finalApiURL = `${URL_API}/${TRENDING_GIFS}?api_key=${API_KEY}`;
    try {
        const response = await fetch(finalApiURL);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`Fetch error: ${err}`);
    }
}

export default getTrendingDataGifs;