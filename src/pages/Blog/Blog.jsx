
import NavBar from '../Shared/NavigationBar/NavBar';

const Blog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='ps-5 pb-2'>
            <p className='mb-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p className='mb-2'>ANS:</p>


            <p className='mb-2'>Compare SQL and NoSQL databases?</p>
            <p className='mb-2'>ANS:SQL database:It is scalable vertically.It is performs in complex queries and it has relational database management system.But it is not suitable for hirerchical data storage.
                <br/> 
                NonSQL database:Scalable horizontally.It is under of Distributed database management system.It is a best choise for  hirerchical data storage.But it can not works good for complex queries.
                
             </p>

            <p className='mb-2'>What is express js? What is Nest JS (google it)?</p>
            <p className='mb-2'>ANS:Express js: For building web and mobile applications,a node js web application framework that provides broad features is called express js.It is need for single or multiple page web application.<br/>
                Nest Js:For developing modern server side applications a framework is needed that is call Nest js. 
            </p>
            <p className='mb-2'>What is MongoDB aggregate and how does it work?</p>
            <p className='mb-2'>ANS:Aggregation:It can store or process a large number of data in different  coleections under one database and can transfer or pass them diffrent stages.
                <br/>Mongoose's aggregate() function returns an instance of Mongoose's Aggregate class.  </p>
        </div>
        </div>
    );
};

export default Blog;