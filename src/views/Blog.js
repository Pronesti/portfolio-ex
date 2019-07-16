import React,{useState, useEffect} from 'react';
import { Article } from '../components/'
import firebase from 'firebase';

const Blog = () => {
    var db = firebase.firestore();
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        var db_articles = [];
        db.collection("articles").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                db_articles.push(doc.data());
            });
            setArticles(db_articles)
        });
        console.log(articles)
    }, []);
    console.log(articles)
    return <div style={{textAlign: 'center'}}>{articles.map((article) => <Article obj={article} /> )}</div>
}

export default Blog
