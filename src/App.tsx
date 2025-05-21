function App() {
  return (
    <main className="">
      <header className="h-screen w-[100%] bg-primary text-secondary p-14">
        <section className="flex flex-row items-center gap-2">
          <img
            src="/logo.PNG"
            alt="logo de estrellitas"
            className="w-6 h-6 text-center"
          />
          <p className="font-arimo font-semibold text-xl">street style & co</p>
        </section>
        <section className="absolute left-240 top-2">
          <img src="/remera.png" alt="remera de presentacion" className="" />
        </section>

        <section className="relative font-public-sans font-light text-[200px] tracking-tight">
          <div className="relative left-20 h-50 w-40">
            <h1 className="w-10">FIND</h1>
          </div>
          <div className="relative left-90 h-50 w-40">
            <h1 className="w-10">YOUR</h1>
          </div>
          <div className="relative left-180 h-50 w-40">
            <h1 className="w-10">VIBE</h1>
          </div>
        </section>
        <section className="relative top-[-60px] left-40 w-100 font-public-sans text-[28px] font-light leading-7">
          <p>Check out our Captivating</p>
          <p>Cities shirt collection</p>
        </section>
        <section className="absolute left-320 top-145 font-arimo font-light text-[13px] w-30 p-9 border-secondary rounded-full border-2">
          <a href="#cards" className="flex flex-col items-center">
            <p>EXPLORE</p> <p>HERE</p>
          </a>
        </section>
      </header>
      <section className="h-screen w-[100%] relative bg-secondary text-secondary p-14">
        <div className="absolute inset-0 z-0">
          <img
            src="fondo-chicos.PNG"
            alt="imagen de fondo"
            className="h-screen w-[100%] object-cover"
          />
        </div>

        <section className="relative z-10">
          <div className="absolute top-70 text-[120px] font-arimo font-light tracking-tight">
            <h1 className="w-290 h-30">WE’RE</h1>
            <h1 className="w-290 h-30">PROUD OF</h1>
            <h1 className="w-290 h-30">OUR ROOTS</h1>
          </div>
          <div className="absolute top-100 left-200 w-130 text-justify text-[28px] font-public-sans font-light leading-7">
            <p>
              What's special about your product, service, or company? Use this
              space to highlight the things that set you apart from your
              competition, whether it's a special feature, a unique philosophy,
              or awards and recognition that you have received. Think of this as
              your elevator pitch to get the reader's attention.
            </p>
          </div>
        </section>
      </section>
      <section className="h-screen w-[100%] bg-primary text-secondary p-14">
        <div className="flex flex-col items-end justify-end mb-30 text-[120px] font-arimo font-light tracking-tight">
          <h1 className="h-30">WE´RE</h1>
          <h1 className="h-30">PROUD OF</h1>
          <h1 className="h-30">OUR CLOTHES</h1>
        </div>
        <div className="flex flex-row items-center justify-evenly text-[25px] font-arimo font-light tracking-tight leading-6 gap-23">
          <div>
            <img
              src="/item-1.PNG"
              alt="items de muestra"
              className="w-18 h-18 mb-5"
            />
            <p>DESIGNED</p>
            <p>BY LOCALS</p>
          </div>
          <div>
            <img
              src="/item-2.PNG"
              alt="items de muestra"
              className="w-19 h-18 mb-5"
            />
            <p>INCLUSIVE</p>
            <p>SIZES</p>
          </div>
          <div>
            <img
              src="/item-3.PNG"
              alt="items de muestra"
              className="w-17 h-19 mb-5"
            />
            <p>ECO-FRIENDLY</p>
            <p>PACKAGING</p>
          </div>
        </div>
      </section>
      <section
        id="cards"
        className="h-screen w-[100%] bg-primary text-secondary p-14"
      >
        <h1 className="font-arimo text-[120px]">NEW ARRIVALS</h1>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div className="group relative border-1 rounded-xl p-8">
            <img
              src="/card-remera.png"
              alt="remera de frente."
              className="aspect-square p-5 rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <h3 className="font-public-sans text-lg">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    City of shirts
                  </a>
                </h3>
                <p className="font-public-sans text-lg">$20.00</p>
              </div>

              <p className="border-1"></p>
            </div>
          </div>
          <div className="group relative border-1 rounded-xl p-8">
            <img
              src="/card-buzo-capucha.png"
              alt="remera de frente."
              className="aspect-square p-5 rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <h3 className="font-public-sans text-lg">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Street Smart Hoodie
                  </a>
                </h3>
                <p className="font-public-sans text-lg">$20.00</p>
              </div>

              <p className="border-1"></p>
            </div>
          </div>
          <div className="group relative border-1 rounded-xl p-8">
            <img
              src="/card-buzo.png"
              alt="remera de frente."
              className="aspect-square p-5 rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <h3 className="font-public-sans text-lg">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Urban Sweet Shirt
                  </a>
                </h3>
                <p className="font-public-sans text-lg">$20.00</p>
              </div>

              <p className="border-1"></p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-[100%] relative bg-secondary text-primary p-14">
        <div className="mb-25 text-[120px] font-arimo font-light tracking-tight leading-28">
          <h1>REACH OUT FOR INQUIRIES</h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-70 mt-10">
          <div>
            <h1 className="font-arimo text-2xl">PHONE</h1>
            <p className="font-public-sans text-xl">(123) 456-7890</p>
          </div>
          <div>
            <h1 className="font-arimo text-2xl">EMAIL</h1>
            <p className="font-public-sans text-xl">
              hello@reallygreatsite.com
            </p>
          </div>
          <div>
            <h1 className="font-arimo text-2xl">SOCIAL</h1>
            <p className="font-public-sans text-xl">Instagram Facebook</p>
          </div>
        </div>
        <div className="flex justify-end mt-25 text-[120px] font-arimo font-light tracking-tight">
          <h1>AND PARTNERSHIP</h1>
        </div>
      </section>
    </main>
  );
}

export default App;
