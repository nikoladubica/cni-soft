import styled from "styled-components";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperItem = styled.div`
    height: 300px;
    width: 220px;
    background: linear-gradient(55.42deg, #3092ED 17.49%, #F75AFF 100.67%);
    border-radius: 8px;
    
    @media screen and (min-width: 768px) {
        width: unset;
    }
`;

const SwiperComponent = props => {
    return (
        <Swiper className='swiper-component'
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    navigation: true
                },
            }}
        >
            <SwiperSlide>
                <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperItem />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperItem />
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperComponent;