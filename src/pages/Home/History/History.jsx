import grp1 from '../../../assets/img/grp1.jpg';
import grp2 from '../../../assets/img/grp2.jpg';

const History = () => {
    return (
        <div className="hero min-h-screen lg:h-100 bg-base-300 mt-0 mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex flex-col gap-3'>
                    <img src={grp1} className="max-w-sm rounded-lg shadow-2xl hover:scale-75 hover:rotate-45" />
                    <img src={grp2} alt="" className="max-w-sm rounded-lg shadow-2xl hover:scale-75 hover:rotate-45" />
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-purple-800 ">Soft Toys History:</h1>
                    <p className="py-6">
                        In 1880, the German firm Steiff became the first commercial producer of stuffed animals. Steiff made its stuffed animals with upholstery-making technology they had invented just for that purpose. Toy company Hasbro introduced the Ithaca Kitty in 1892 as one of their first mass-produced plush animals.
                    </p>
                    <h2 className="text-xl font-bold text-purple-800 py-3 ">Purpose:</h2>
                        
                    <p  className="py-6">
                        Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life.</p>
                    <h2 className="text-xl font-bold text-purple-800 py-3">Nyama Hoard History:</h2>   
                    <p className="py-6">We started  our journey selectively on <span className="text-lg font-bold text-purple-800 ">Animal Soft Toys</span> where there are many other options for toys.We have a vision that if children play with animal soft toys they will easilly fimiliar with different kinds of animal and that will helps there growth and intelligence. They do not feel bore to know them from book and they will also can know about animals characteristics while playing with these items easily.they can memorise them with fun .  </p>
                </div>
            </div>
        </div>
    );
};

export default History;