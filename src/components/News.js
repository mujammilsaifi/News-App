
// import React ,{Component} from 'react';
import React ,{useEffect,useState,} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

// export class News extends Component {
const News=(props)=>{

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    document.title=`${props.category} -NewsApp`



    // -------------for classbased----
    // constructor(props){
    //     super(props);
    //     this.state={
    //         articles:[],
    //         loading:false,
    //         page: 1,
    //         totalResults:0
    //     }
    //     document.title=`${this.props.category} -NewsApp`
    // }
    // ----------------------------------------


    // async componentDidMount(){
    //     this.props.setProgress(0)    
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.props.setProgress(50)
    //     this.setState({ articles: parsedData.articles,
    //         totalResults:parsedData.totalResults,
    //         loading:false

    //     })
    //     this.props.setProgress(100)
    // }


    const updateNews = async ()=>{
        props.setProgress(10);
        const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({loading:true})
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
        document.title=`${props.category} -NewsApp`
        // eslint-disable-next-line
    }, [])

    // const handleNextClick = async () => {
    //     console.log("Next");
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize))) {
        
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=074125a3db5548cea6ec27a132a459df&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({loading:true})
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json()
    //     //     console.log(parsedData);
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading:false
    //     //     })
    //     // }

    //     setPage(page+1)
    //     updateNews();
    // }

    // const handlePrevClick = async () => {
    //     console.log("Previous");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading:true})
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // console.log(parsedData);
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading:false
    //     // })
    //     setPage(page-1);
    //     updateNews();

    // }

    
        // infinite scrool bar ad-----
        // fetchMoreData = async () => {
        //     this.setState({ page: this.state.page + 1 })
            
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //     let data = await fetch(url);
            
        //     let parsedData = await data.json()
        //     this.setState({
        //         articles: this.state.articles.concat(parsedData.articles),
        //         totalResults: parsedData.totalResults,
        //        loading:false,
                
        //     })
        // };
        
        const fetchMoreData = async () => {
            // this.setState({ page: this.state.page + 1 })
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
            setPage(page+1)
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
            
        };
    // render() {
        return (
                <>
                {/* this.props=props
                this.state.articles=articles */}

                <h1 className='text-center' style={{margin:'35px' ,marginTip:'90px'}}>News- Top Headlines From {props.category}</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
                >
                <div className='container my-3'>
                <div className="row">
                {/* !this.state.loading && this.state.articles.map((element)=> */}
                {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://picsum.photos/150/100"} newsUrl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div> 
                })}
                     
                </div>
                {/* <div className="container d-flex justify-content-between my-2">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
              </div>
              </InfiniteScroll>
              </>
            )
            
    // }
}

export default News;