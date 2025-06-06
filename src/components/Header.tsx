import { motion } from "framer-motion";
import { fadeIn } from "../hooks/animations/fadeIn";
import { splitText } from "../hooks/animations/splitText";
import SlideInDiv from "../hooks/animations/slideInDiv";
const Header = () => {
  return (
    <header className="h-screen w-[100%] bg-primary text-secondary p-14">
      <section className="flex flex-row items-center gap-2">
        <img
          src="/logo.png"
          alt="logo de estrellitas"
          className="w-8 h-8 text-center"
        />
        <p className="font-arimo font-semibold text-xl">Style.JGC</p>
      </section>

      <section className="absolute left-240 top-2">
        <SlideInDiv>
          <img
            src="/remera.png"
            alt="remera de presentacion"
            className="ml-30 mt-10 w-xs h-xs object-contain"
          />
        </SlideInDiv>
      </section>

      <section className="relative font-public-sans font-light text-[200px] tracking-tight">
        <div className="relative left-20 h-50 w-40">
          <h1 className="w-10">{splitText("FIND")}</h1>
        </div>
        <div className="relative left-90 h-50 w-40">
          <h1 className="w-10">{splitText("YOUR")}</h1>
        </div>
        <div className="relative left-180 h-50 w-40">
          <h1 className="w-10">{splitText("VIBE")}</h1>
        </div>
      </section>

      <section className="relative top-[-60px] left-40 w-100 font-public-sans text-[28px] font-light leading-7">
        <p>{splitText("Check out our captaving")}</p>
        <p>{splitText("Cities shirt collection")}</p>
      </section>

      <section className="absolute left-320 top-145 font-arimo font-light text-[13px] w-30 p-9 rounded-full border-2">
        <a href="#cards" className="flex flex-col items-center">
          <p>EXPLORAR</p> <p>AQUI</p>
        </a>
      </section>
    </header>
  );
};

export default Header;
