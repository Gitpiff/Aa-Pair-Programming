import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SingleArticle.css';

const SingleArticle = () => {
  //get the id
  let { id } = useParams();
  //load ALL of the articles
  const articles = useSelector((state) => state.articleState.entries)
  //find current article
  const currentArticle = articles.find(article => article.id === id)
  console.log(currentArticle)
  
  return (
    <div className='singleArticle'>
      <h1>{currentArticle.title}</h1>
      <img
        src={currentArticle.imageUrl}
        alt='home'
      />
      <p>
        {currentArticle.body}
      </p>
    </div>
  );
};

export default SingleArticle;
