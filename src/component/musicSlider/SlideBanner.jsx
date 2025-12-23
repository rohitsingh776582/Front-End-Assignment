
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import bannerImg from "../../assets/Music_1.avif";
import bannerImg_1 from "../../assets/Music_2.avif";
import bannerImg_2 from "../../assets/Music_3.avif";
import bannerImg_3 from "../../assets/Music_4.avif";
import bannerImg_4 from "../../assets/Music_5.avif";
import banerImg_5 from "../../assets/Music_6.avif";

// change path according to your file

export default function SlideBanner() {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[85%]">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
          <SwiperSlide>
            <img
              src={bannerImg}
              alt="banner"
              className="
            w-full 
            h-[130px]        /* Mobile */
            sm:h-[160px]     /* Small screens */
            md:h-[200px]     /* Tablet & bigger screens */
            object-cover 
            rounded-2xl
          "
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={bannerImg_1}
              alt="banner"
              className="
            w-full 
            h-[130px]        /* Mobile */
            sm:h-[160px]     /* Small screens */
            md:h-[200px]     /* Tablet & bigger screens */
            object-cover 
            rounded-2xl
          "
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={bannerImg_2}
              alt="banner"
              className="
            w-full 
            h-[130px]        /* Mobile */
            sm:h-[160px]     /* Small screens */
            md:h-[200px]     /* Tablet & bigger screens */
            object-cover 
            rounded-2xl
          "
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={bannerImg_3}
              alt="banner"
              className="
            w-full 
            h-[130px]        /* Mobile */
            sm:h-[160px]     /* Small screens */
            md:h-[200px]     /* Tablet & bigger screens */
            object-cover 
            rounded-2xl
          "
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={bannerImg_2}
              alt="banner"
              className="
            w-full 
            h-[130px]        /* Mobile */
            sm:h-[160px]     /* Small screens */
            md:h-[200px]     /* Tablet & bigger screens */
            object-cover 
            rounded-2xl
          "
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={bannerImg_4}
              alt="banner"
              className="
            w-full 
            h-[130px]        /* Mobile */
            sm:h-[160px]     /* Small screens */
            md:h-[200px]     /* Tablet & bigger screens */
            object-cover 
            rounded-2xl
          "
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={banerImg_5}
              alt="banner"
              className="
               w-full 
                h-[130px]
                  sm:h-[160px]
                  md:h-[200px]
              object-cover
               object-center
               rounded-2xl
               "
            />
          </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  );
}
