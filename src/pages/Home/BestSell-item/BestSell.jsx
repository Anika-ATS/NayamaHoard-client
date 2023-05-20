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

const BestSell = () => {
    return (
        <div >
            <p className='py-10 text-center text-purple-800 text-bold text-4xl hover:opacity-75'> Sell Items corner</p>

            <div className=' grid grid-cols-2 gap-8 px-44 py-10 bg-base-200'>
                {/* 1 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl bg-purple-800 ">
                    <figure className="px-5 pt-5 ">
                        <img src={t1} alt="" className=" mask mask-circle hover:scale-75 hover:rotate-45" />
                    </figure>
                    <div className="card-body items-center text-center">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-4" className="btn btn-outline text-white">Sell Info</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold text-purple-800">This Product has 5% off!</h3>
                                <p className="py-4">Code:2204B<br/>Wanna Buy?Go to Order Section</p>
                            </label>
                        </label>
                        
                    </div>
                </div>

                {/* 2 */}
                
                    <div className="card w-96 h-25 bg-base-100 shadow-xl ps-2 bg-base-300">
                        <figure className="px-5 pt-10">
                            <img src={t4} alt="" className="mask mask-circle hover:scale-75 hover:-rotate-45" />
                        </figure>
                        <div className="card-body items-center text-center">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-4" className="btn btn-outline ">Sell Info</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold text-purple-800">This Product has 3% off!</h3>
                                <p className="py-4">Code:2204C<br/>Wanna Buy?Go to Order Section</p>
                            </label>
                        </label>
                        
                    </div>

                    </div>
                  
              

                {/* 3 */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl ps-2 bg-base-300">
                    <figure className="px-5 pt-10">
                        <img src={t3} alt="" className="mask mask-circle   hover:scale-75 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-4" className="btn btn-outline">Sell Info</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold text-purple-800">This Product has 7% off!</h3>
                                <p className="py-4">Code:2204D<br/>Wanna Buy?Go to Order Section</p>
                            </label>
                        </label>
                        
                    </div>

                </div>
                {/* {4} */}
                <div className="card w-96 h-25 bg-base-100 shadow-xl ps-2 bg-purple-800">
                    <figure className="px-5 pt-10">
                        <img src={t7} alt="" className="mask mask-circle hover:rotate-45 hover:scale-75  " />
                    </figure>
                    <div className="card-body items-center text-center">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-4" className="btn btn-outline text-white">Sell Info</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold text-purple-800">This Product has 5% off!</h3>
                                <p className="py-4">Code:2204A<br/>Wanna Buy?Go to Order Section</p>
                            </label>
                        </label>
                        
                    </div>
                </div>


            </div>

        </div>
    );
};

export default BestSell;