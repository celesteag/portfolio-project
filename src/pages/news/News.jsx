import './News.css';

function News() {
    return (
        <main className="news">
            <h4 className="news-title">Noticias Tech</h4>

            <p className="news-description">
                Mantente al día con las últimas noticias de tecnología y desarrollo web.
            </p>


            <a href="https://dev.to/feed"
                target="_blank"
                rel="noreferrer"
                className="rss-link">
                Ver fichero RSS
            </a>
        </main>
    );
}

export default News;