import "./style.scss";
const index = () => {
  return (
    <>
      <footer className="bg-[#F9F9FB] h-[356px]">
        <div className="mx-auto max-w-[1160px] mt-[100px]">
          <div className="wrapper pt-[58px] flex items-start justify-between border_bot pb-[60px]">
            <div>
              <h1 className="text-[24px] cursor-default">Title</h1>
              <a className="text-[16px] font-medium" href="tel:+">
                +998991234567
              </a>
              <div className="flex items-center gap-x-5 mt-[17px]">

                <a href="https://www.instagram.com/" className="hover:bg-gray-200 p-1 rounded-md duration-300 flex items-center">
                  <i class="bx bxl-instagram text-[24px] text-[#000]"></i>
                </a>

                <a href="https://www.whatsapp.com" className="hover:bg-gray-200 p-1 rounded-md duration-300 flex items-center">
                  <i class="bx bxl-whatsapp text-[24px] text-[#000]"></i>
                </a>

                <a href="https://www.facebook.com" className="hover:bg-gray-200 p-1 rounded-md duration-300 flex items-center">
                  <i class="bx bxl-facebook text-[24px] text-[#000]"></i>
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-x-[268px]">
                <div>
                  <h1 className="text-[16px] font-medium mb-[10px] cursor-default">
                    Help
                  </h1>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Contact us
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Delivery information
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Payment information
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Customer service
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    FAQ
                  </p>
                </div>

                <div>
                  <h1 className="text-[16px] font-medium mb-[10px] cursor-default">
                    About us
                  </h1>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Our Stores
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Flower care
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Site map
                  </p>
                </div>

                <div>
                  <h1 className="text-[16px] font-medium mb-[10px] cursor-default">
                    Legal
                  </h1>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Privacy policy
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Terms & Conditions
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Cookie policy
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Item 4
                  </p>
                  <p className="text-[16px] cursor-pointer hover:text-[#595CFF] text-[#606060] leading-7">
                    Item 5
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-[33px]">
            <p className="text-[12px] text-[#AFB1BD] cursor-default">
              © Copyright, {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;