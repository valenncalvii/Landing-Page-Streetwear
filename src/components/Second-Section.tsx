const SecondSection = () => {
  return (
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
  );
};

export default SecondSection;
// This code defines a React functional component named SecondSection.
// It renders a section with a background color of primary and text color of secondary.
