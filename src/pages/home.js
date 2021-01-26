import getTrendingDataGifs from '../utils/getData';

const Home = async () => {
    const trendingGifs = await getTrendingDataGifs();
    console.log(trendingGifs);
    const view = `
        <div class="row mt-5 gifs">
            ${trendingGifs.data.map(gif => `
                <article class="col mt-2  gif-item">
                    <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
                    <h3>${gif.title}</h3>
                </article>
                `).join('')}
            
        </div> 
    `;
    return view;
}

export default Home;
