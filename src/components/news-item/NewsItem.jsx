
function NewsItem({ newsId, title, description, pubDate, link, category }) {
    return (
        <article className="news-item" data-news-id={newsId} onClick={() => navigate(`/news/${newsId}`)}
            style={{ cursor: 'pointer' }}>
            <div className="news-header">
                <span className="news-category" data-category={category}>
                    {category}
                </span>
                <time className="news-date">{pubDate}</time>
            </div>

            <h2 className="news-title">{title}</h2>

            <p className="news-description">{description}</p>

            <a href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link">
                Leer más
            </a>
        </article>
    )
}

export default NewsItem;