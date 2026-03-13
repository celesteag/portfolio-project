import './News.css';

function News() {
    return (
        <main className="news">
            <h4 className="news-title">Noticias Tech</h4>

            <p className="news-description">
                Mantente al día con las últimas noticias de tecnología y desarrollo web.
            </p>

            <p className="rss-url">
                RSS Feed: <code>https://dev.to/feed</code>
            </p>
        </main>
    );
}

export default News;