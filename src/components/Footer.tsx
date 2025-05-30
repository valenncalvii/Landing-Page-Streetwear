const Footer = () => {
  return (
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
          <p className="font-public-sans text-xl">hello@reallygreatsite.com</p>
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
  );
};

export default Footer;
