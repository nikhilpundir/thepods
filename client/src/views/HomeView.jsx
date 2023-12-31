import React from "react";
import { Link } from "react-router-dom";
import {
  heroImage,
  classicPod,
  premiumPod,
  womenPod,
  secOne,
  receptionist,
  era1,
  era2,
  era3
} from "../assets/assets";

function HomeView() {
  return (
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-fit">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>

        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Luxury at cheap price.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Most affordable stay in the world with all the facilities that
                  a hotel can provide you at a cheaper price.
                </p>
                <button
                  className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 mt-5"
                  
                >
                  <Link to="/book" className="text-gray-800">
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-14 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <img
                  src={classicPod}
                  alt="Classic Pods"
                  className="mx-10 mt-10 rounded-lg"
                />

                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold">Classic Pods</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Our classic pods are the most economical and value for money
                    stay.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-10 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <img
                  src={premiumPod}
                  alt="Premium Pods"
                  className="mx-10 mt-10 rounded-lg"
                />

                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold">Premium Pods</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Feel the premiumness and enjoy the ambiance inside our
                    premium pods.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-14 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <img
                  src={womenPod}
                  alt="Ladies Pods"
                  className="mx-10 mt-10 rounded-lg"
                />

                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold">Ladies Pods</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    The first-ever ladies-only pod for the safety and security
                    of women.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Why should you choose us?
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                We are the first-ever multi-chain pods in India, with over 50
                cities and over 1600 pods, we are the market leader in this
                segment.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Premium experience at an economy cost is what we strive to give
                to our customers.
              </p>
              <a href="#" className="font-bold text-gray-800 mt-8">
                EXPLORE MORE!
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src={secOne}
                  className="w-full align-middle rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="Receptionist"
                className="max-w-full rounded-lg shadow-lg"
                src={receptionist}
              />
            </div>

            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-red-600 p-3 text-center  inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    width="28"
                    viewBox="0 0 512 512"
                  >
                    <path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold">OUR SERVICES</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  We try to provide the best possible services that our customer
                  needs and you deserve.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
                          <i className="fas fa-bed"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Cozy Sleeping Pods</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
                          <i className="fab fa-wifi"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">FREE WIFI</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3">
                          <i className="far fa-clock"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">24 HRS RECEPTION</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonials
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-red-500">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    James
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                "I was hesitant at first, but this product exceeded my
                expectations. It has made a significant impact on my daily life,
                and I couldn't be happier with the results. The team's
                dedication to quality and customer satisfaction is truly
                commendable."
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-red-500">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Michael
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                "I had an amazing experience with this service! The team was
                incredibly helpful and attentive to my needs. They went above
                and beyond to ensure everything was perfect. I highly recommend
                their services."
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-red-500">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Joseph
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                "I am truly impressed with the exceptional service provided by
                this team. Their attention to detail and commitment to
                excellence set them apart. I highly recommend their services to
                anyone seeking top-notch solutions."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Era of Pods
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Explore our latest pods and book your favorite now!
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <Link to="/book" className="group relative block">
                <img
                  src={era1}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Book Now
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/book" className="group relative block">
                <img
                  src={era2}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Book Now
                  </span>
                </div>
              </Link>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Link to="/book" className="group relative block">
                <img
                  src={era3}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Book Now
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HomeView;
