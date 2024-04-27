import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/events.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from 'next/navigation'

const collections = () => {

  const router = useRouter()

  const slides = [
    {
      id: 1,
      image: "/image 16.png",
    },

    {
      id: 2,
      image: "/image 13.png",
    },

    {
      id: 3,
      image: "/image 17.png",
    },

    {
      id: 4,
      image: "/image 15.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(true); // State to track the active state

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentIndex, slides.length]);

  const handleToggle = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <main
        className={`main relative min-h-screen max-h-screen pl-5 pb-5 ${styles.event}`}
      >
        <div className={`flex`}>
          <div className={`flex-column ${styles.left}`}>
            <div className="pt-5 pb-5 flex">
              <Image
                className="mx-2"
                src="/Astrix Branding.png"
                width={50}
                height={50}
                alt="Picture of the logo"
              />
              <p className={styles.logo}>Astrix.</p>
            </div>
            <div className="flex">
              <div className="">
                <span className={styles.txtGap}>
                  <h1>ASTR</h1>
                  <h1>IX</h1>
                </span>
                <p className="mt-16"></p>
                <span className={styles.txtGap}>
                  <h1>COL</h1>
                  <h1>ECT</h1>
                  <h1>BLE</h1>
                </span>
              </div>
              <div className={styles.slideshow}>
                <div className={styles.slideshowSlider}>
                
                  {slides.map((slide, index) => (
                    <div
                      className={styles.slide}
                      key={slide.id}
                      style={{
                        opacity: index===currentIndex ? 1 : 0.8,
                        transform: `translate3d(${
                          (index - currentIndex) * 100
                        }%, 0, 0)`,
                      }}
                    >
                    <p className="text-xl">{(index===currentIndex) || (index === currentIndex+1) ? "Lunar Palace\n(ft.Kanye West)" : <span className="text-transparent h-10">H</span> }</p>
                      <Image
                        src={slide.image}
                        width={450}
                        height={550}
                        alt="Picture"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`mt-14 ${styles.form}`}>
              <div className={styles.radioBlock}>
                <input
                  type="radio"
                  id="contrasts-on"
                  checked={!isActive}
                  onChange={handleToggle}
                />
                <label onClick={() => router.push('/events')}  htmlFor="contrasts-on">Events</label>
                <input
                  type="radio"
                  id="contrasts-off"
                  checked={isActive}
                  onChange={handleToggle}
                />
                <label htmlFor="contrasts-off" className={styles.offLabel}>
                  Collections
                </label>
                <span className={styles.selected} aria-hidden="true"></span>
              </div>
            </div>
          </div>

          <span className={`w-20 h-screen ml-auto ${styles.spn}`}>
        <div className={`${styles.early}`}>

          <div className={styles.article}>
            <p class={styles.exampleLeft}>
              Event : Oasis Bus tour , JLN Stadium , Delhi{" "}
              <span className={styles.symbol}>*</span> Collection Live : Meta
              Lives , live on astrix{" "}
            </p>
          </div>
        </div>

        </span>

          <div className={` ${styles.right}`}>
            <div className="p-4">
              <p className={styles.rightTitle}>
                Explore Your First <br /> collectible
              </p>
              <p className={`mt-4 ${styles.rightHeading}`}>
                Meta <br /> Lives
              </p>

              <div className="flex mt-2">
                <p className={`px-2 mr-4 ${styles.venue}`}>Live in Astrix</p>
              </div>
              <p className={`mt-8 text-xs`}>
                Lorem ipsum dolor sit, amet consectetur Enim nobis <br />
                fugit error voluptatem itaque at in <br /> explicabo sapiente
                exercitationem!
              </p>

              <div className="flex mt-6 mb-12">
                <Image
                  className=""
                  src="/people.png"
                  width={100}
                  height={10}
                  alt="Picture of the location"
                />
                <p className={`px-2 mr-4 ${styles.venue}`}>
                  22k people interested
                </p>
              </div>
              <div className="">
                <p className="text-xs">Collectibles</p>
              </div>
              <div className="mt-2">
                <Carousel
                arrows={false}
                  additionalTransfrom={0}
                  centerMode={false}
                  className=""
                  containerClass="container"
                  dotListClass=""
                  draggable
                  partialVisible={true}
                  focusOnSelect={false}
                  itemClass=""
                  keyBoardControl
                    minimumTouchDrag={80}

                  responsive={responsive}
                  rtl={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  
                  
                    <Image
                      className=""
                      src="/Card Small.png"
                      width={130}
                      height={10}
                      alt="Picture of the location"
                    />
                  
                    <Image
                      className=""
                      src="/Card Small.png"
                      width={130}
                      height={10}
                      alt="Picture of the location"
                    />
                  
                    <Image
                      className=""
                      src="/Card Small.png"
                      width={130}
                      height={10}
                      alt="Picture of the location"
                    />
                 
                  
                </Carousel>
              </div>
              <div className="flex mt-4">
                <button className={`ml-auto pr-16 mt-auto ${styles.joinBtn}`}>
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
};

export default collections;
