import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import chefService from '../../../assets/home/chef-service.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"Order Online"}
                subHeading={"From 11.00am to 10.00pm"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >

                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide1} alt="" />
                        <h3 className='md:text-4xl uppercase text-center absolute bottom-6 left-1/2 -translate-x-1/2 text-white'>Salad</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='md:text-4xl uppercase text-center -m-16 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='md:text-4xl uppercase text-center -m-16 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='md:text-4xl uppercase text-center -m-16 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='md:text-4xl uppercase text-center -m-16 text-white'>Salad</h3>
                </SwiperSlide>
            </Swiper>
            <div className='mb-16 relative'>
                <img src={chefService} alt="" />
                <div className='text-center w-10/12 h-64 flex flex-col md:p-10 mx-auto bg-white md:absolute top-24 left-24'>
                    <h3 className='uppercase text-4xl mb-3'>Bistro Bossa</h3>
                    <p className='w-8/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Necessitatibus, libero accusamus laborum
                        deserunt ratione dolor officiis praesentium! Deserunt magni
                        aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                        quibusdam nemo.</p>
                </div>
            </div>
        </section>
    );
};

export default Category;