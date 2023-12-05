import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import styles from "@/styles/customer/customer.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import Link from 'next/link';
import { FormattedPrice } from '@/helpers/index'
import Image from 'next/image'
import image from 'next/image'
import { useLocalStorageValue } from '@react-hookz/web'

const ProductDetails: FC = () => {

  const [products, setProducts] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    image: ''
  });

  const router = useRouter();
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(1);
  const [ productsTake, setProductsTake ] = useState(10)  // you can set this on default
  const [ filters, setFilters ] = useState("")
  const [ filterProducts, setFilterProducts ] = useState(null)
  const [ search, setSearch ] = useState("")
  const [ productSearch, setProductSearch ] = useState(null)
  const [ page, setPage] = useState(0)
  const [ userId, setUserId] = useState("")
  const [ productsD, setProductsD ] = useState<[]>()

  const cartProduct = useLocalStorageValue<any> ("products")

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  // Settings for the react-slick carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const cookies = Cookies.get("ecom_token") as any
    const { userID }: any = jwtDecode(cookies) as any
    setUserId(userID)
  }, [ userId ])

  if (router.isFallback) {
    return (<p>Loading.....</p>)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/product/getProductById/${router.query.id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-cache',
        });
  
        if (!res.ok) {
          throw new Error(`Failed to fetch product data: ${res.status}`);
        }
  
        const result = await res.json();
        setProductsD(result);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
  
    fetchData();
  }, [router]);

  useEffect(() => {
    productsD?.map(({ productID, image, name, quantity, price, descriptions, category, userID, stock}: any) => {
        setProducts({
          image: image,
          name: name,
          quantity: quantity,
          price: price,
          description: descriptions,
          category: category,
          stock: stock
        })
    })
  }, [productsD])

  return (
    <div className={styles.bodyProducts}>
      <section className="absolute top-20" id="productdetail">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex flex-col lg:flex-row gap-8">
      
            {/* Product Details Div */}
            <div className="w-full lg:w-6/12 items-center mt-8 lg:mt-0">
              
              {/* ... (your existing code for Product Details) */}
              {/* <!-- Description Div --> */}
            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
              <div className='lg:absolute top-[150px] left-[200px]'>
              <p className="mb-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-white">
              <Link href="/"> <span>Home </span> </Link> /<Link href="/products"> <span>Products</span> </Link> / <span> {products.name}</span>
              </p>
              <h2 className="font-bold lg:text-5xl text-3xl lg:leading-9 leading-7 text-white mt-4">
              {products.name}
              </h2>

                    <p className="w-[750px] font-normal text-base leading-6 text-white mt-7">{products.description}</p>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white mt-6 ">{FormattedPrice(products.price)}</p>

                    <div className="lg:mt-11 mt-10">
                    <div className="flex flex-row justify-between">
                        <p className="font-medium text-base leading-4 text-white">Select quantity</p>
                        <div className="flex">
                            <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1 text-white">
                                -
                            </span>
                            <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />
                            <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 text-white">
                                +
                            </span>
                        </div>
                    </div>

                        <hr className="bg-white w-full my-2" />
                        <div className=" flex flex-row justify-between items-center mt-4">
                        <p className="font-medium text-base leading-4 text-white">{products.stock}</p>
                        <div className="flex">


                        <div id="quantity" aria-label="quantity" className="bg-white border border-gray-300 h-full text-center w-14 pb-1 rounded">
                          {products.quantity}
                        </div>

                        </div>
                        </div>
                        <hr className="bg-white w-full mt-4" />
                    </div>

                    <button  onClick={() => {
                      cartProduct.set([{
                        productID: router.query.id,
                        name: products.name,
                        category: products.category,
                        total: parseInt(products.price) * count, 
                        quantity: count,
                        image: products.image
                      }])
                }}
                className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-white-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6" >Add to Cart</button>
            </div>
            </div>
            </div>

            <div className='lg:relative top-[30px] left-[700px]'>
            {/* Carousel and Images Div */}
            <div className="w-full lg:w-6/12 flex flex-col lg:gap-8 sm:gap-6 gap-4">
              {/* Preview Images Carousel */}
              <div className="carousel-container" style={{ maxWidth: "500px" }}> {/* Adjust the maxWidth to your preference */}
              <Slider {...carouselSettings}>
                <div>
                {products.image.length > 0 && (
    <Image src={products.image[2]} alt={products.name} height={120} width={520} />
  )}
                </div>
                <div>
                {products.image.length > 0 && (
    <Image src={products.image[1]} alt={products.name} height={120} width={520} />
  )}
                </div>
                <div>
                {products.image.length > 0 && (
    <Image src={products.image[0]} alt={products.name} height={120} width={520} />
  )}
                </div>
                {/* Add more image items as needed */}
              </Slider>
              </div>

              {/* ... (remaining existing code) */}

              {/* Images below Carousel */}
              <div className="w-full grid grid-cols-3 gap-4">
              {products.image.length > 0 && (
    <Image src={products.image[2]} alt={products.name} height={120} width={520} />
  )}
                {products.image.length > 0 && (
    <Image src={products.image[1]} alt={products.name} height={120} width={520} />
  )}
                 {products.image.length > 0 && (
    <Image src={products.image[0]} alt={products.name} height={120} width={520} />
  )}
              </div>
              </div>
              <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                {/* ... (your existing code for additional images) */}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>

  );

};

(ProductDetails as PageWithLayout).layout = HomePageLayout;
export default ProductDetails;

