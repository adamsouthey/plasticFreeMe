import React, { Component } from 'react'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const cards = [
	 {"image":"https://2.bp.blogspot.com/-92BCDX_oHBg/WSJCbP9YeEI/AAAAAAAACDg/6uMpyib18ccyfOF0xik6w60QZsH0feB8gCLcB/s1600/Plastic%2BFree%2BToiletries.jpg",
   "title":"Plastic Free Toiletries",
   "subtitle":"Advertising"},
  {"image":"https://cdn.shopify.com/s/files/1/0645/3807/collections/Plastic-free_products_1_1200x1200.png?v=1535093033",
   "title":"Nigel Nigel",
   "subtitle":"Sound & Vision"},
  {"image":"http://cdn.shopify.com/s/files/1/2297/7615/products/4MyEarth_Reusable_Food_Cover_Set_Red_Gingham_600x.jpg?v=1510718652",
   "title":"Caspian Bellevedere",
   "subtitle":"Accounting"},
   {"image":"https://cdn11.bigcommerce.com/s-9geauonp44/images/stencil/500x500/products/434/804/sta-bagportshop-filled_6d0e3152-fd6c-4a60-a103-a3bafec60d19__44126.1534820855.jpg?c=2",
    "title":"Caspian Test",
    "subtitle":"Accounting"},
		{"image":"https://cdn.shopify.com/s/files/1/2931/0150/products/oily-hair-low-res_1024x1024.jpg?v=1542055649",
     "title":"Caspian Test",
     "subtitle":"Accounting"},
]

class Article extends Component {

  render() {
    let image = this.props.data.image,
				title = this.props.data.title,
				subtitle = this.props.data.subtitle

    return (
      <figure className="snip1584">
				<img src={image} alt={image.title} height="350" width="350" />
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
			speed: 500,
			responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

		newsTemplate = data.map(function(item, index) {
			return (
				<Article data={item} />
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
