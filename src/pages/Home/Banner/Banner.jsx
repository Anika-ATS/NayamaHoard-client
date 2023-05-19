import grp1 from '../../../assets/img/grp1.jpg';
// import Unicorn from '../../../assets/img/unicorn1.jpg';
import grp2 from '../../../assets/img/grp2.jpg';
import grp4 from '../../../assets/img/grp4.jpg';
import grpn3 from '../../../assets/img/grpn3.jpg';
import GRP1 from '../../../assets/img/GRP1.avif';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={GRP1} className="w-full" />
                <div className="absolute  left-5  bottom-1/2 ">
                    <div className='pl-5 pt-2 space-y-7 w-1/3'>
                        <h2 className=' ps-10  text-4xl'>Let's Visit  <span className='text-bold text-purple-800'>Nyama Hoard</span> with our special customers!!</h2>
                        
                    </div>


                </div>
                <div className="absolute justify-start  left-20  bottom-60 ">
                    <a href="#slide4" className="btn btn-circle mr-4 bg-purple-800">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-purple-800">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={grp1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={grp2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={grpn3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={grp4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>


    );
};

export default Banner;