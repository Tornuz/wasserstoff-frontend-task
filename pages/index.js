import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter()
  return (

    // Main component covering Home page of vertical screen height
    // and to navigate to the next page
     
    <main onClick={() => router.push('/collections')} className={`main min-h-screen p-20 ${inter.className}`}>
      {/* Main top Logo of Astro */}
      <div className=" w-full">
        <Image
          src="/AstrixLogo.png"
          width={400}
          height={400}
          alt="Picture of the logo"
        />
      </div>

{/* Main Flex div to center the content both horizontally and vertically */}

      <div  className="flex flex-column items-center justify-center ">
        <div  className="">
          <div className="mainContainer relative flex items-center mt-16">
            <h1>WE</h1>
            <div className="flex">
              <Image
                className="h-14 img1"
                src="/image143.png"
                width={424}
                height={300}
                alt="Picture on the 1st line"
              />

              {/* Animating by moving text components */}

              <div className="early">
                <p className="pl-2 exampleLeft">ORGANISE THE</p>
              </div>
            </div>
          </div>
          <div className="mainContainer relative flex items-center">
            <h1>CONNECTION</h1>

            <div className="flex">
              <Image
                className="h-14 img2"
                src="/image 141.png"
                width={550}
                height={300}
                alt="Picture on the 2nd line"
              />

              <div className="early2">
                <p className="pl-2 exampleLeft2">THE</p>
              </div>
            </div>
          </div>

          <div className="mainContainer relative flex items-center">
          <div className="flex">

            <Image
              className="h-14 img31"
              src="/image 144.png"
              width={298}
              height={300}
              alt="Picture on the 3rd line"
            />
            <div className="early3">
                <p className="flex pl-2 exampleLeft3">BETWEEN
                
            <Image
              className="h-14 img32"
              src="/image 145.png"
              width={180}
              height={300}
              alt="Picture on the 3rd line"
            />
            <span>MUSIC</span>
                </p>
            </div>
          </div>
          </div>

          <div className="mainContainer relative flex items-center">
      
            <h1>ARTIST</h1>
            <div className="flex">

            <Image
              className="h-14 img41"
              src="/image 147.png"
              width={280}
              height={300}
              alt="Picture on the 4th line"
            />
            <div className="early">
                <p className="flex pl-2 exampleLeft">CULTURE
                
                <Image
              className="h-14 img42"
              src="/image 146.png"
              width={260}
              height={300}
              alt="Picture on the 4th line"
            />
                </p>
            </div>
            
            </div>
          </div>

          <div className="mainContainer relative flex items-center ">
            <div className="flex">
            <Image
              className="h-14 img51"
              src="/image 139.png"
              width={230}
              height={100}
              alt="Picture on the last line"
            />
            

            <div className="early3">
                <p className="flex pl-2 exampleLeft3">ART
            <Image
              className="h-14 img52"
              src="/image 137.png"
              width={145}
              height={100}
              alt="Picture on the last line"
            />
            <span>& COLLECTIONS</span>
            
            </p>
</div>
          </div>
            </div>
        </div>
      </div>
    </main>
  );
}
