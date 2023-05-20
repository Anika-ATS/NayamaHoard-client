import Marquee from "react-fast-marquee";
import t1 from '../../../assets/img/t1.jpg';
import t2 from '../../../assets/img/t2.webp';
import t3 from '../../../assets/img/t3.jpg';
import t4 from '../../../assets/img/t4.webp';
import t5 from '../../../assets/img/t5.jpg';
import t6 from '../../../assets/img/t6.jpg';
import t7 from '../../../assets/img/t7.jpg';
import t8 from '../../../assets/img/t8.jpg';
import t9 from '../../../assets/img/t9.jpg';
import t10 from '../../../assets/img/t10.webp';

const Gallery = () => {
    return (
        <div >
            <h1 className=" py-10 text-center text-purple-800 text-bold text-4xl">Nyama Gallery</h1>
        <Marquee>
            <div className="grid gap-x-4 gap-y-4 grid-cols-10 bg-base-300">               
                {/* 1 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t1} alt="Shoes" className="rounded-xl hover:scale-75" />
                    </figure>
                    
                    {/* <div className="card-body items-center text-center"></div> */}
                        <p className="card-body items-center text-center">I'm so pretty,ain't I?</p>
                        
                    
                </div>
                {/* 2 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t2} alt="Shoes" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center">Hello from Us!</p>
                    {/* <div className="card-body items-center text-center">
                        
                        <p>Hello from Us!</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div> */}
                </div>
                {/* 3 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t3}alt="Shoes" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center">Are you like Gray?</p>
                    {/* <div >                       
                        <p className="card-body items-center text-center">Are you like Gray?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div> */}
                </div>
                {/* 4 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t4} alt="Shoes" className="rounded-xl hover:scale-75" />
                    </figure>
                            
                        <p className="card-body items-center text-center">
                            Cutypie Horse
                        </p>
                        
                    
                </div>
                {/* 5 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t5} alt="" className="rounded-xl hover:scale-75" />
                    </figure>
                    
                    <p className="card-body items-center text-center pb-24">I'm Dragon</p>
                       
                    
                </div>
                {/* 6 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t6} alt="Shoes" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center pb-7"> Puppy</p>
                    
                </div>
                {/* 7 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t7} alt="" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center pb-7">I'm bore now!</p>
                  
                </div>
                {/* 8 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t8} alt="Shoes" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center pb-24">
                        Mew Mew</p>
                   
                </div>
                {/* 9 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={t9} alt="" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center pb-11">
                        Sleeping Unicorn !!</p>
                   
                </div>
                {/* 10 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl mr-5">
                    <figure className="px-10 pt-10">
                        <img src={t10} alt="" className="rounded-xl hover:scale-75" />
                    </figure>
                    <p className="card-body items-center text-center pb-11">
                        Hamba Hamba</p>
                    
                </div>

            </div>

        </Marquee>
        </div>

    );
};

export default Gallery;