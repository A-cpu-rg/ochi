import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full h-auto bg-black p-10 text-white font-['Test_Founders_Grotesk_X-Condensed']">
      <div className="w-full md:w-1/3 flex flex-col justify-between">
        <h1 className="text-6xl md:text-8xl leading-none">EYE-<br/>OPENING</h1>
        <p className="text-sm opacity-60">© ochi design 2024. <a href="#" className="underline">Legal Terms</a></p>
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-start md:items-center">
  <h2 className="text-lg mb-2">Follow Us</h2>
  <div className="space-y-2">
    <a href="#" className="text-lg underline">Instagram</a>
    <br/>
    <a href="#" className="text-lg underline">Behance</a>
    <br/>
    <a href="#" className="text-lg underline">Facebook</a>
    <br/>
    <a href="#" className="text-lg underline">LinkedIn</a>
  </div>
</div>



      <div className="w-full md:w-1/3 flex flex-col justify-between">
        <div className="space-y-5">
          <p className="text-lg">202-1965 W 4th Ave<br/>Vancouver, Canada</p>
          <p className="text-lg">30 Chukarina St<br/>Lviv, Ukraine</p>
        </div>
        <a href="mailto:hello@ochi.design" className="text-lg underline">hello@ochi.design</a>
      </div>
    </div>
  );
}

export default Footer;
