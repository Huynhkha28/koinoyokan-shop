import React from "react";
import localFont from 'next/font/local'
import Image from "next/image";
import footer from "../../public/image/footerimage.png";
const myFont = localFont({ src: '../../public/font/SVN-Saint Monica.otf' })
export default function Footer() {
    return (
        <>
            <div className="mt-6 w-[1140px] relative bg-[url('../../public/image/footerimage.png')] h-[170px]">
                <div className=" text-[#efe70c] text-4xl z-10 flex justify-around h-full items-center flex-col">
                    <span className={myFont.className}>ABOUT US</span>
                    <span className={myFont.className}>to detail</span>
                </div>
                <div className="mt-4 bg-slate-100 p-4 font-medium">
                    <div>CÔNG TY TNHH MTV KOI NO YOKAN</div>
                    <div>Giấy phép đăng ký kinh doanh số 03156 do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp lần đầu ngày 16/12/2022</div>
                    <div>Địa chỉ: 80 Trần Quang Diệu, Phường 14, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</div>
                    <div>Hotline: 0123456789</div>
                    <div>Email: hello@koinoyokan.com</div>
                </div>
            </div>
        </>
    )
}