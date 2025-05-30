const SectionNewProducts = () => {
  return (
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
                  <span aria-hidden="true" className="absolute inset-0"></span>
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
                  <span aria-hidden="true" className="absolute inset-0"></span>
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
                  <span aria-hidden="true" className="absolute inset-0"></span>
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
  );
};

export default SectionNewProducts;
// This component displays a section with new products, including images, titles, and prices.
