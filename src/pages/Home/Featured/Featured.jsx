import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                heading="Check it out"
                subHeading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center bg-black bg-opacity-50 items-center px-36 pb-20 pt-12'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where you can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempora soluta dicta alias est, esse sapiente
                        molestias dolorem sequi optio corporis tenetur eum enim
                        praesentium accusamus veniam minima iure quasi eius accusantium
                        repudiandae libero voluptates, eveniet aperiam! Beatae, eligendi
                        obcaecati autem molestias ullam neque corrupti tenetur, asperiores
                        distinctio reprehenderit at alias!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;