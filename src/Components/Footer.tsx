import Link from "next/link"

export default function Footer() {
    return (
      <footer className=" py-8 lg:py-20 p-10 overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between   lg:gap-6">
          <div>
            <h4 className="font-bold  text-[24px]">Furniro</h4>
            <p className=" text-[#9F9F9F] text-[16px] mt-10">400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA</p>
          </div>
         <div className="flex flex-wrap lg:flex-nowrap mt-10 lg:mt-0 gap-10 sm:gap-20 xl:gap-32"> <div>
            <h4 className="font-medium text-[#9F9F9F] text-[16px]">Links</h4>
            <ul className="space-y-6  mt-10">
              <Link href='/'><li>Home</li></Link>
              <Link href='/shop'><li>Shop</li></Link>
              <Link href='/blogs'><li>blog</li></Link>
              <Link href='/contact'><li>Contact</li></Link>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[#9F9F9F] text-[16px]">Help</h4>
            <ul className="space-y-6 mt-10">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[#9F9F9F] text-[16px]">Newsletter</h4>
            <div className="flex flex-col xl:flex-row gap-3 w-fit mt-10">
                <div className="border-b border-black w-full"><input type="email" className=" outline-none" placeholder="Enter Your Email Address"/></div>    
            <button className="border-b border-black font-medium">SUBSCRIBE</button> 
            </div>
            
          </div></div>
         

        </div>
      </footer>
    );
  }
  