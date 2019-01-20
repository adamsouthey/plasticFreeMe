import React, { Component } from 'react'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const cards = [
	 {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
   "title":"Burgundy Flemming",
   "subtitle":"Advertising"},
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
   "title":"Nigel Nigel",
   "subtitle":"Sound & Vision"},
  {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
   "title":"Caspian Bellevedere",
   "subtitle":"Accounting"},
   {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    "title":"Caspian Test",
    "subtitle":"Accounting"},
    {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
     "title":"Nigel Nigel",
     "subtitle":"Sound & Vision"},
]

class Article extends Component {

  render() {
    let image = this.props.data.image,
				title = this.props.data.title,
				subtitle = this.props.data.subtitle

    return (
      <figure className="snip1584">
				<img src={image} />
			</figure>
    )
  }
}

class News extends Component {
  render () {
    let data = this.props.data
		let newsTemplate
		let settings = {
    	dots: true,
			infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
    }

		newsTemplate = data.map(function(item, index) {
			return (
					<div key={index}>
						<Article data={item} />
					</div>
			)
		})

		return (
			<div className='news'>
				<Slider {...settings}>{newsTemplate}</Slider>
			</div>
		);
  }
}

class HotProducts extends Component {
  render () {
    return (
      <div className='app'>
				<Typography variant='h5' gutterBottom>Cards</Typography>
				<News data={cards} />
			</div>
    )
  }
}

export default HotProducts
