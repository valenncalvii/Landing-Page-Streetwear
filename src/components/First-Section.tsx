const FirstSection = () => {
  return (
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
            competition, whether it's a special feature, a unique philosophy, or
            awards and recognition that you have received. Think of this as your
            elevator pitch to get the reader's attention.
          </p>
        </div>
      </section>
    </section>
  );
};

export default FirstSection;
// This code defines a React functional component named FirstSection.
// It renders a section with a background image and text overlay.
// The section has a height of the full viewport and uses Tailwind CSS for styling.
