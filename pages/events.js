import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/styles.module.css";
import { useRouter } from "next/navigation";

const events = () => {
  const router = useRouter();

  // An array of images for carousel
  const slides = [
    {
      id: 1,
      image: "/image 12.png",
    },

    {
      id: 2,
      image: "/image 13.png",
    },

    {
      id: 3,
      image: "/image 14.png",
    },

    {
      id: 4,
      image: "/image 15.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // state to track the index os slides
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

  return (
    <>
      <main
        className={`main relative min-h-screen max-h-screen pl-5 pb-5 ${styles.event}`}
      >
        <div className={`flex`}>
          <div className={` flex-column ${styles.left}`}>
            <div className="pt-6 pb-6 flex">
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
                  <h1>EVE</h1>
                  <h1>NTS</h1>
                </span>
              </div>
              {/* Mapping through slides to render the carousel slides */}

              <div className={styles.slideshow}>
                <div className={`mt-10 ${styles.slideshowSlider}`}>
                  {slides.map((slide, index) => (
                    <div
                      className={`${styles.slide}`}
                      key={slide.id}
                      style={{
                        opacity: index === currentIndex ? 1 : 0.8,
                        transform: `translate3d(${
                          (index - currentIndex) * 100
                        }%, 0, 0)`,
                      }}
                    >
                      <Image
                        className="relative"
                        src={slide.image}
                        width={450}
                        height={550}
                        alt="Picture"
                      />
                      {index === currentIndex ? (
                        ""
                      ) : (
                        <p className={styles.imgLogo}>Event Name</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Routing Buttons to navigate from events to collections and vice-versa */}

            <div className={`mt-32 ${styles.form}`}>
              <div className={styles.radioBlock}>
                <input
                  type="radio"
                  id="contrasts-on"
                  checked={isActive}
                  onChange={handleToggle}
                />
                <label htmlFor="contrasts-on">Events</label>
                <input
                  type="radio"
                  id="contrasts-off"
                  checked={!isActive}
                  onChange={handleToggle}
                />
                <label
                  onClick={() => router.push("/collections")}
                  htmlFor="contrasts-off"
                  className={styles.offLabel}
                >
                  Collections
                </label>
                <span className={styles.selected} aria-hidden="true"></span>
              </div>
            </div>
          </div>

          {/* Middle line with the Animated texts */}

          <span className={`w-20 h-screen ml-auto ${styles.spn}`}>
            <div className={`${styles.early}`}>
              <div className={styles.article}>
                <p class={styles.exampleLeft}>
                  Event : Oasis Bus tour , JLN Stadium , Delhi{" "}
                  <span className={styles.symbol}>*</span> Collection Live :
                  Meta Lives , live on astrix{" "}
                </p>
              </div>
            </div>
          </span>

          {/* Covering the right side of the page of the middle moving texts line */}

          <div className={` ${styles.right}`}>
            <div className="p-5">
              <p className={styles.rightTitle}>
                Explore Your First <br /> event
              </p>
              <p className={styles.rightHeading}>Event Name</p>

              <div className="flex mt-2">
                <Image
                  className=""
                  src="/location_on.png"
                  width={25}
                  height={10}
                  alt="Picture of the location"
                />
                <p className={`px-2 mr-4 ${styles.venue}`}>venue</p>

                <Image
                  className=""
                  src="/alarm.png"
                  width={30}
                  height={10}
                  alt="Picture of the alarm"
                />
                <p className={`px-2 ${styles.venue}`}>04/3/2024 @19:00</p>
              </div>
              <p className={`mt-8 text-xs`}>
                Lorem ipsum dolor sit, amet <br /> consectetur Enim nobis fugit
                error <br />
                voluptatem itaque at in <br /> explicabo sapiente
                exercitationem!
              </p>

              <p className="mt-4 mb-4 text-lg">Artist Lineup</p>
              <div className="flex items-center">
                <Image
                  className="h-25 rounded"
                  src="/image 157.png"
                  width={100}
                  height={10}
                  alt="Picture of the alarm"
                />
                <Image
                  className="rounded"
                  src="/image 159.png"
                  width={130}
                  height={110}
                  alt="Picture of the alarm"
                />
                <Image
                  className="h-25 rounded"
                  src="/image 158.png"
                  width={100}
                  height={10}
                  alt="Picture of the alarm"
                />
              </div>
              <div className="flex">
                <Image
                  className="mt-8 rounded"
                  src="/image 131.png"
                  width={80}
                  height={80}
                  alt="Picture of the alarm"
                />
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

export default events;
