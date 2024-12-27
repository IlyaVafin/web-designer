import React from 'react'
import './Reviews.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Основные стили Swiper
import 'swiper/css/navigation' // Если нужен модуль навигации
import 'swiper/css/pagination' // Если нужен модуль пагинации
import { Navigation, Pagination } from 'swiper/modules' // Импортируем модули
import rating from './../../assets/ratingLinkedIn.svg'
import reviews from './../../assets/reviews.mp4'
import Video from './../shared/Video'
import arrowRight from './../../assets/arrow-right.png'
import arrowLeft from './../../assets/arrowleft.png'
const Reviews = () => {
	return (
		<>
			<div className='reviews__wrapper'>
				<h1>Reviews</h1>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					navigation = {{
						prevEl: '.custom-prev',
						nextEl: '.custom-next',
					}}
					pagination={{ el: '.custom-pagination'}}
				>
					<SwiperSlide>
						<div className='reviews__content'>
							<Video srcVideo={reviews} />
							<div className='reviews__content-text'>
								<h4>Collective Filmsfotografie</h4>
								<p className='reviews__name'>Charlotte Preisel</p>
								<p className='reviews__desc'>
									Das allerbeste Design, die professionelle Hilfe und sehr gute
									Entscheidung sind ihre Vorschläge
								</p>
								<img src={rating} alt='' />
								<p className='reviews__num'>01</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='reviews__content'>
							<Video srcVideo={reviews} />
							<div className='reviews__content-text'>
								<h4>Collective Filmsfotografie</h4>
								<p className='reviews__name'>Charlotte Preisel</p>
								<p className='reviews__desc'>
									Das allerbeste Design, die professionelle Hilfe und sehr gute
									Entscheidung sind ihre Vorschläge
								</p>
								<img src={rating} alt='' />
								<p className='reviews__num'>02</p>
							</div>
						</div>
					</SwiperSlide>
					<button className="custom-prev">
						<img src={arrowLeft} alt="" />
				</button>
				<button className="custom-next">
				<img src={arrowRight} alt="" />
				</button>
				</Swiper>
				<div className="custom-pagination">
				<div className="swiper-pagination-bullet-active"></div>
					<div className="swiper-pagination-bullet"></div>
				</div>
			</div>
		</>
	)
}

export default Reviews
