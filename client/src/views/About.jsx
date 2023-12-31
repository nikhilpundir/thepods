import React from 'react'
import { AboutImage, NikhilCTO,Abhishek } from '../assets/assets.js'

const About = () => {
  return (
    <>
      <div className="container my-10 mx-auto px-4">
        <div className="items-center flex flex-wrap">

          <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">

              <h3 className="text-3xl font-semibold">ABOUT US</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Welcome to ThePods - your gateway to a unique Japanese experience right here in India! We are thrilled to introduce a groundbreaking service, pioneering the booking of Japanese pods, a first-of-its-kind offering in the country.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600"> At ThePods, we believe in bringing the beauty of Japanese culture and innovation to your doorstep. Our platform opens doors to a novel way of accommodation, allowing you to immerse yourself in the charm of Japanese pods without leaving India. Say goodbye to conventional stays and embrace the comfort and efficiency of Japanese pod living.</p>

            </div>
          </div>
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img src={AboutImage} alt='About Image' className="mx-auto mb-4 w-full h-full rounded-sm"/>
          </div>
        </div>
      </div>
      <div >
        <div className="items-center ">

         

          <div className="w-full  ml-auto mr-auto px-4">
            <div className="md:pr-12 mx-24">

              <h3 className="text-3xl text-center font-semibold">OUR MISSION</h3>
              {/* <h1 className="text-xl font-semibold"> Key Highlights:</h1> */}
              <p className="mt-4 text-xl leading-relaxed text-gray-600">
             
             Join us at <i>ThePods</i> and be among the first to savor the novelty of Japanese pod living in the heart of India. Book your pod now and embark on a one-of-a-kind adventure with us!
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              <b><i>Unprecedented Experience:</i></b> Embark on a journey like never before as we bring the concept of Japanese pods to India for the first time. Immerse yourself in a fusion of modernity and tradition, redefining the way you experience hospitality.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              <i><b>Innovative Accommodation:</b></i> Our Japanese pods offer a perfect blend of minimalistic design and cutting-edge technology. Each pod is thoughtfully crafted to provide you with a cozy, private space that aligns with the sophistication of Japanese architecture.

              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              <i><b>Culture at Your Fingertips:</b></i> Discover the essence of Japan within the borders of India. Our pods not only redefine accommodation but also offer a unique opportunity to explore Japanese culture, creating an authentic experience right at home..
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              <i><b>Convenience Redefined:</b></i> Experience a seamless booking process tailored to your needs. We prioritize your comfort, ensuring that your journey with us is as smooth and enjoyable as your stay in our Japanese pods.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              <i><b>Exclusive Availability:</b></i> Be part of a select group to indulge in this exclusive experience. ThePods is proud to be the pioneer in bringing Japanese pods to India, offering a limited opportunity for you to book a stay unlike any other.
              </p>

            </div>
          </div>
        </div>
      </div>




      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our team</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">Our dedicated team who has done all the hard work to bring this facility to India</p>
          </div>
          <div className="grid gap-2 lg:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {/* Team member 1 */}
            <div className="text-center text-gray-500">
            <img src={Abhishek} alt="CTO" className="mx-auto mb-4 w-36 h-36 rounded-full" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Abhisek Jena</a>
              </h3>
              <p>CEO/Founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#39569c] ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#120fe6" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00acee]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#000000" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 496 512"><path fill="#17191c" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ea4c89]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512"><path fill="#184ca0" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Team member 2 */}
            <div className="text-center text-gray-500">
            <img src={NikhilCTO} alt="CTO" className="mx-auto mb-4 w-36 h-36 rounded-full" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Nikhil Pundir</a>
              </h3>
              <p>CTO/Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#39569c] ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#120fe6" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00acee]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#000000" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 496 512"><path fill="#17191c" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ea4c89]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512"><path fill="#184ca0" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* More team members */}
          </div>
        </div>
      </section>





    </>
  )
}

export default About