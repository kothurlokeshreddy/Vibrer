import { RiArrowDropLeftLine, RiArrowDropRightLine} from "react-icons/ri";
import { FaShapes } from "react-icons/fa6";

import Products from '../Products';
import AboutUs from '../AboutUs';
import Process from '../Process';
import Footer from '../Footer';

import './index.css'

const Banner = () => {
    return (
      <section className = "home-banner">
        <img className = "home-img" src = "https://s3-alpha-sig.figma.com/img/be82/a2c1/4b9d9bd6645310d22891a2afe7f19b54?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRQoY8Iero4r~ClJV~ZAkiuaE~8qDn84Lq0C1o4J4HVmaxp6rq7LcsINI9H4BSkXr6saFIgriWX3OBqnqNlIsMGsaH0KgDP0XxIUfdeBoukzn6InPY~9xxaG1TlwGS2E8No4oJYNCvf4gMgGBIjuIKa37asuAN-Vhm4FV3Y6GdSkcBHYfgbztoBqQf6vnnNPluSC2wQbVkqTsth8AYEVNEFD~poAcQ-gYZ8W6iCWxMOgsLVjakJANN5g-1oKtfCYabWk3-HfT6gKFA1NRUCuDTR941jvR7l995yc559P9pyy-gHuK6nyH8BrBC0fqhFcT2jSl932-Q-BW2RZDbmUDg__" alt = "home banner"/>
        <div className = "product-categories">
          <h2 className = "categories-heading">Product Categories</h2>
          <div className="category-carousel">
            <RiArrowDropLeftLine className="arrow"/>
            <ul className = "cateogry-cards-list">
              <li className = "category-card">
                <p>Living Room</p>
                <img src = "https://s3-alpha-sig.figma.com/img/aa1f/8a3d/faaa11bfc3a4ccd718ea84d5cd6901b7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwYIKiKMz-lqhLGiVoq0A7PeipAVL~rJZTt8H0XvxIbhCKUZSu71NvGMJ3ertSbNcHFbhqGYn7P8SaoqulQ44iYP9HPQgJS8UEtgZwISkIaVi0iXNTymhsAaxSUPSYiKqxJMiHYn~4LQRnCyzmqPxxJSNg8IyU5mP0~i7GEmxzNmf-Rg8fHZdBC6o~nWqvOJ0F2IOcLNLvfpsVvZqF7xevN2oHgHwFaouRB19blKRigaGIv0vnlFoYuaf3hfxbGWwRswmfA7t~sFN80OeT6ssqRd8YVMnY1EJsUowVl6r8D8JdY25opXhEgavYS4OCcUg9I6w0Jxm-Z44Fi-1JZ3mg__" alt = "living" />
              </li>
              <li className = "category-card">
                <p>Dining</p>
                <img src = "https://s3-alpha-sig.figma.com/img/12d2/86ea/2d12885878ba88297fdcf20289e5a504?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hfnbhyv5joa2oFJldumvp4LzR1NhjTJHu8wYQ2htJ4NoeoJqUHAm0To1QZyENincchq2DCWJNa22w5T-sELBwvYUgyVpaf9HExxWWCWCcoclybKgG1lKefGpZe7t1MVCHB1l6Th5wpS8wjoYHaY~SLyE9-wyIsK6DbapR8DVvVf8IqJTRoTqwk7CK43jI4DDveFNLYKHbegAspKJVB8Dsvw3ybK8WQAk~QMR-NQw2xHy4HujFmYdqWlmO0NQ6o~VKNBQc667al0w~zcGb4vEIl8SDlihEnDbjZ-Nfe9A0Vd8fCLo1Zahg77NrFq0k2GCIR3d980mvexKtMCkDRsUnA__" alt = "living" />
              </li>
              <li className = "category-card">
                <p>Bedroom</p>
                <img src = "https://s3-alpha-sig.figma.com/img/5c86/592a/4a3c8e77162f27fec0db0c7219076675?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvPyt4h3cr92TIiaKNSQ9VZLEGo31jpuBofyaTNfRfw5nod7M-4jdQnQcCCLxLDSBlmlpbUYeVQ60N4pTp-izXHNFpQXYtqERxD~2r4DMpujSogThiXj0bVUSFaxiPw0cDLRHb9NUTDPkXxXTvczwXy79GLgGz01uegBNEFlbLoHveK~zIEyDpWdUVR9i3Rn31zjHmuXT-Pba7id2IrMgdWF~34nDVpbykEALCLtfMGA4UWj8EHJcfoc-j4ILP8Of2jV1KDa8uRN-aOvzA8t20XGAHpWJNhZU4m09NtkaXq9MlzRj5Lkm~ZJW21OIvp96VxUY76TlD2XRxo930KFwg__" alt = "living" />
              </li>
              <li className = "category-card">
                <p>Office</p>
                <img src = "https://s3-alpha-sig.figma.com/img/082c/1d34/a43c37ca8ef2f5c5ca7d99d9cdfd3e2b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrfFpnv8eQJb4QIY28NMjtKvznBYkSBWm2vi4KCfzSHA97AKsVidAv7AjiVshmnrDXhxzKeLbrMpxgacAhTcuvTZPXlk8mpgrCacFlcrkva48AZ7X8YBx5sn1HcBili-1czVuM4mBucCTTiJgzrcXCaBwU96tmjANGiFAD1ZVp6Hwv9f9-ZUDiPfb6l7R7eI8DZhMsdb~fy3xaHgF6EX8ZmLId8tD9FSH3GjHHT3cY5dXVXtJb8PxtaM8QWvIk2rK7I4vbXQq7sP7dUNlXCZO4xhhuVla92a5Gw7JsVtb1GngXYDnsfnY8D9mRQbpGGAoesJhN7zW~5uk9TatIHxXA__" alt = "living" />
              </li>
              <li className = "category-card">
                <p>Storage</p>
                <img src = "https://s3-alpha-sig.figma.com/img/19c4/8116/73b5e7682d48f29e1e0bfa2aba30eb89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKBFSwz~LiSpI~0VBG5D2idn07-TXoSAm5qq0qf861JyS8wucpyqa5zdRChYtgoT~0J98sfU7NAaJUvVT~Ry4-YP7EOJPFLwmgGVI551e~V-nz6amAutpyPDT6iPOSkbnarqNYWRPD-OgaXGQjid-0r~r2DDGuSYzMZBVRvZ1CYXLspr0r7nA-V2oOWkH1c1qK~G~5igCFG4ryEFe8jJWUFRWhEMQv5rJWrFL8IpBl67639tl1kLJaf-lNW~1I5P5HKhOEK2A4UxqPwJF-35y5wUuXevy6TEw~i~Hor9uXR7QK5JRYWm8Q-VesIh0PlojrNm4pZo~VQ42oWxRusBIw__" alt = "living" />
              </li>
              <li className = "category-card">
                <p>Study Room</p>
                <img src = "https://s3-alpha-sig.figma.com/img/b7cc/c388/d23bb45adf1dee5fa669566bc571b751?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjDpOKQeLmFbOZEuJ5w~IPdN-1luVE~EMKBSy04qspEKCmYlPbS7uEk0rvZDCDxdOUZEglaoG-RPZgqwnnSNTRFjD-Vl7knQ2msuxRf-eikNAtnJX0vpCp~CrVy13RGWEXn~EwZC4pYrqrV~gwNWGIqc~DCetm83np6oluV35jbLjR6m9DCT0kBk-wsD98kzICP7RhKix4cDN87Zt4JFKcTojQ8ZbG~A-Eg2ebvOmnCDOZ~jx8GtR-Zd~8tHNpUkV0HDE7GVY81Xcxs2Q-g6U2ggXOckRnbOjA-llnSbAhD2VFLqaMGLniWTsPZeakY-XrEksVh7fT1k14y0pmitjw__" alt = "living" />
              </li>
          </ul>
          <RiArrowDropRightLine className="arrow"/>
          </div>
        </div>
        <div className="segments">
          <div className="segments-container">
            <FaShapes style={{height : '24px', width : '24px'}}/>
            <p>Segments</p>
          </div>
          <ul className="segments-cards-list">
            <li className="segments-card residential">
              <p>Residential</p>
              <button>View More</button>
            </li>
            <li className="segments-card institutional">
              <p>Institutional</p>
              <button>View More</button>
            </li>
            <li className="segments-card commercial">
              <p>Commercial</p>
              <button>View More</button>
            </li>
          </ul>
        </div>
        <Products />
        <section className="carousels">
          <h2>Interior Designing</h2>
          <p>Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless experience.</p>
          <button>Know More</button>
          <div className="carousel-container">
            <RiArrowDropLeftLine className="arrow"/>
            <img className = "carousel-img" src = "https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__" alt = "carousel" />
            <RiArrowDropRightLine className="arrow"/>
          </div>
        </section>
        <AboutUs />
        <Process />
        <Footer />
      </section>
    );
  };
  
  export default Banner;
  