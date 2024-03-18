import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class News extends Component {
    static defaultProps = {
        pageSize: 11,
        category:"general"
      }
    static propsTypes={
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    // totalResults=8;
    // status="ok";
    // articles=[
    //     {
    //         "source": {
    //             "id": "fox-sports",
    //             "name": "Fox Sports"
    //         },
    //         "author": "John Fanta, Michael Cohen",
    //         "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
    //         "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
    //         "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
    //         "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
    //         "publishedAt": "2024-02-29T20:59:30Z",
    //         "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Sports News | Breaking & Latest Sports News | Reuters",
    //         "description": "Find latest sports news from every corner of the globe at Reuters.com, your online source for breaking international news coverage.",
    //         "url": "https://www.reuters.com/sports/",
    //         "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=179",
    //         "publishedAt": "2024-02-29T20:37:22.1445641Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "four-four-two",
    //             "name": "FourFourTwo"
    //         },
    //         "author": "Mark White",
    //         "title": "Gary Neville reveals Sky conversation following 'billion-pound bottle jobs' line",
    //         "description": "Gary Neville called Chelsea “billion-pound bottle jobs” following their League Cup capitulation, in a moment that was later discussed with a producer at Sky Sports",
    //         "url": "https://www.fourfourtwo.com/news/gary-neville-reveals-sky-conversation-following-billion-pound-bottle-jobs-line",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/bZNjknyXnWLUE4N5nrbZUR-1200-80.jpg",
    //         "publishedAt": "2024-02-29T17:00:21Z",
    //         "content": "Gary Neville has spoken about his now infamous blasting of Chelsea as “billion-pound bottle jobs”, reflecting on the moment that the Blues lost the League Cup final.\r\nSpeaking on the Stick to Footbal… [+3443 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news-ca",
    //             "name": "Google News (Canada)"
    //         },
    //         "author": "650 CKOM News Talk Sports",
    //         "title": "Sask. won't remit carbon tax on home heating, Duncan says - 650 CKOM News Talk Sports",
    //         "description": `The minister called the carbon tax a “disaster,” saying it has driven up costs without reducing emissions.“The real solution would be for Trudeau to scrap the carbon tax on everyone and everything. But until that happens, Saskatchewan families won’t pay the Trudeau carbon tax on their household SaskEnergy bill and the federal government won’t receive those amounts from our government either,`,
    //         "url": "https://news.google.com/rss/articles/CBMiWWh0dHBzOi8vd3d3LmNrb20uY29tLzIwMjQvMDIvMjkvc2Fzay13b250LXJlbWl0LWNhcmJvbi10YXgtb24taG9tZS1oZWF0aW5nLW1pbmlzdGVyLXNheXMv0gEA?oc=5",
    //         "urlToImage": null,
    //         "publishedAt": "2024-02-29T16:13:00+00:00",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "talksport",
    //             "name": "TalkSport"
    //         },
    //         "author": "Josh Fordham",
    //         "title": "Manchester United release statement after journalists ‘banned’ from press conference...",
    //         "description": "Manchester United explained why four journalists were banned from an Erik ten Hag press conference on Tuesday. Sky Sports chief reporter Kaveh Solhekhol, the Manchester Evening News’ Samuel L…",
    //         "url": "https://talksport.com/football/1666142/man-utd-journalists-banned-press-conference-erik-ten-hag/",
    //         "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/10/228f511f-c84a-48e8-b067-5c7277d90984.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    //         "publishedAt": "2023-12-05T12:12:06Z",
    //         "content": "Manchester United explained why four journalists were banned from an Erik ten Hag press conference on Tuesday.\r\nSky Sports chief reporter Kaveh Solhekhol, the Manchester Evening News' Samuel Luckhurs… [+820 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bleacher-report",
    //             "name": "Bleacher Report"
    //         },
    //         "author": null,
    //         "title": "New Micah Parsons Show ",
    //         "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
    //         "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
    //         "urlToImage": null,
    //         "publishedAt": "2023-11-27T20:37:24.6381564Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "bleacher-report",
    //             "name": "Bleacher Report"
    //         },
    //         "author": null,
    //         "title": " Mikal Bridges Interview ",
    //         "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
    //         "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
    //         "urlToImage": null,
    //         "publishedAt": "2023-11-27T20:37:24.3882176Z",
    //         "content": "Nets star sits down with Taylor Rooks for exclusive convo."
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Reuters Graphics",
    //         "title": "Reuters Graphics - Charts, Maps, Interactive Graphics and Videos",
    //         "description": "The latest world news - politics, sports, culture, science and environment - from our graphics journalists in Singapore, Bangalore, London and New York.",
    //         "url": "https://www.reuters.com/graphics/",
    //         "urlToImage": "https://www.reuters.com/graphics/cdn/img/home.jpg",
    //         "publishedAt": "2020-12-21T00:00:00Z",
    //         "content": null
    //     }
    // ]
    constructor()
    {
        super();
            this.state={
            articles:[],//articles:this.articles
            loading:false,
            totalResults:0,
            pg:1,
            // pgSize:8
        }   
    }
   
    async componentDidMount()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=81b3708957c2462ebda4f285f2b19eb3&pageSize=${this.props.pageSize}&page=1`;
        this.setState({loading:true});
        let data= await (await fetch(url)).json();
        console.log(data.articles);
        this.setState({articles:data.articles, totalResults:data.totalResults,loading:false});
    }
    onHandleNextClick=async()=>{
        this.pg=this.state.pg + 1;
        this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=81b3708957c2462ebda4f285f2b19eb3&pageSize=${this.props.pageSize}&page=${this.pg}`;
        let data= await (await fetch(url)).json();
        if((this.state.totalResults-this.state.pgSize>this.state.pgSize)||this.state.totalResults>0)
        {
            this.totalResults=this.state.totalResults-this.state.pgSize;
            if((this.totalResults>0&&this.totalResults<this.state.pgSize))
                this.totalResults=0;
            this.setState({articles:data.articles,pg:this.state.pg+1 ,totalResults:this.totalResults,loading:false});
        }
    }
    onHandlePrevClick=async()=>{
        this.pg=this.state.pg - 1;
        this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=81b3708957c2462ebda4f285f2b19eb3&&pageSize=${this.props.pageSize}&page=${this.pg}`;
        let data= await (await fetch(url)).json();
        if((this.state.totalResults+this.state.pgSize>=this.state.pgSize)||this.state.totalResults>0)
        {
            this.totalResults=this.state.totalResults+this.state.pgSize;
            this.setState({articles:data.articles,pg:this.state.pg-1 ,totalResults:this.totalResults,loading:false});
        }
    }
    render() {
    return (
      <div className='container my-2'>            
         <h2>NewsDaily-Top Headlines</h2>
         {this.state.loading && <Spinner />}
            <div className="row my-3 d-flex justify-content-center">
            {!this.state.loading&& this.state.articles.map((element)=>{
                
                return <div className="col-md-4" key={element.url} >
                    <Newsitem title={element.title} desp={element.description==null?" ":element.description.slice(0,160)} imgUrl={element.urlToImage} newsUrl={element.url} />
                </div>
                })}
                {/* 
                element.title==null?" ":element.title.slice(0,50)
                <div className="col-md-4">
                <Newsitem title={this.articles[1].title} desp="I love Crciket" imgUrl={this.articles[1].urlToImage}/>
                </div>
                <div className="col-md-4">
                    <Newsitem title={this.articles[2].title} desp="I love Crciket" imgUrl={this.articles[2].urlToImage} />
                </div>
                <div className="col-md-4">
                    <Newsitem title={this.articles[3].title} desp="I love Crciket" imgUrl={this.articles[3].urlToImage}/>
                </div>
                <div className="col-md-4">
                    <Newsitem title={this.articles[4].title} desp="I love Crciket" imgUrl={this.articles[4].urlToImage}/>
                </div>
                <div className="col-md-4">
                    <Newsitem title={this.articles[5].title} desp="I love Crciket" imgUrl={this.articles[5].urlToImage}/>
                </div> */}
            </div>
            
            <div className="d-flex justify-content-between gap-5">
                <button disabled={this.state.pg<=1}type="button" className='btn btn-dark'onClick={this.onHandlePrevClick}>&larr; Prev</button>
                <button disabled={this.state.totalResults===0 ||this.state.articles===null} className='btn btn-dark' onClick={this.onHandleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
  }
}
