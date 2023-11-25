import banner1 from '../../../assets/banner/slider1-3.jpg';
import banner2 from '../../../assets/banner/slider2-3.jpg';
import banner3 from '../../../assets/banner/slider4-3.jpg';

const Banner = () => {
  return (
    <div className="container w-[95%] justify-center mx-auto">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full  h-screen "
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#322626b5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center px-5">

              <h2 className="text-3xl text-[#f7eaea] mb-2">
                From courses  to degrees
              </h2>

              <p className=" text-white">
                100% online learning from the world’s best universities and companies
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* carousel 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full h-screen"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#322626b5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center px-5">

              <h2 className="text-3xl text-[#f7eaea] mb-2">
                From courses  to degrees
              </h2>

              <p className=" text-white">
                100% online learning from the world’s best universities and companies
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* carousel 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full h-screen"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#322626b5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center px-5">

              <h2 className="text-3xl text-[#f7eaea] mb-2">
                From courses  to degrees
              </h2>

              <p className=" text-white">
                100% online learning from the world’s best universities and companies
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* carousel 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Ypqzyyq/senior-people-celebrating-together.jpg"
            className="w-full h-screen"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#322626b5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center px-5">

              <h2 className="text-3xl text-[#f7eaea] mb-2">
                From courses  to degrees
              </h2>

              <p className=" text-white">
                100% online learning from the world’s best universities and companies
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Banner;