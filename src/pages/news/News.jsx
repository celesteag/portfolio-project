import './News.css';
import news from "../../data/news";
import NewsItem from "../../components/news-item/NewsItem";

function News() {
    return (
        <div className="news">
            {news.map((item, index) => {
                return < NewsItem key={index} newsId={index} title={item.title} description={item.description} pubDate={item.pubDate}
                    link={item.link}
                    category={item.category} />
            })
            }

        </div>
    )
}

export default News;