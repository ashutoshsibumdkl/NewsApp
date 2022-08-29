import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
// import { cleanup } from '@testing-library/react';
// import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
 
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
        // setProgress = setProgress.bind(this);
        // state = {
        //     articles : [],
        //     loading : false,
        //     page : 1,
        //     totalResults : 0
        // }

        
   
    
    
    
    const updatePage = async() => {
        //props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        //props.setProgress(100);    
    }
    
    //passed the API url and fetch the data and parsed to json and then set the state 

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsStorm`;
        updatePage();
    },[])

    //const componentDidMount = async () => {   
     //}

    // const handlePreviousClick = async () => {
        
    //     setPage(page - 1 )
    //     updatePage();

    // }
    
    // const handleNextClick = async () => {

    //     setPage(page + 1 )
    //     updatePage();
       
    // }

    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1 );

        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);

      };

//   render() {
    return (
        <>
      <div className='container my-3'>
        <div>
            <h1 className='text-center ' style={{margin: "35px 0px", marginTop: "80px"}}>NewsStorm - Top headlines on {capitalizeFirstLetter(props.category)}</h1>
            {loading && <Spinner />}

                <InfiniteScroll
                                dataLength={articles.length}
                                next={fetchMoreData}
                                hasMore={articles.length !== totalResults}
                                loader={<Spinner /> }    >
                    <div className="container row">
                                {articles.map((element) => {
                                return  <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                                    <NewsItem  title = {element.title ? element.title.slice(0, 45) : ""} description = {element.description ? element.description.slice(0, 88) : ""} imageUrl= {element.urlToImage} newsUrl= {element.url} 
                                    author = {element.author ? element.author : "Unknown"} date = {element.publishedAt ? element.publishedAt : "recently"} source = {element.source.name ? element.source.name : "Unknown"}/>
                                </div> 
                            })}
                    </div>
                </InfiniteScroll>
            </div> 
      </div>
      
      </>
    )
 // }
}


export default News
