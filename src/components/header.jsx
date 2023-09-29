import React from "react";
import localFont from 'next/font/local'
import Image from "next/image";
import groupIcon from '../../public/image/icon.png'
import nameshop from '../../public/image/name.png'
export default function Header() {
    const categoryName = ['NỮ', 'NAM', 'TRẺ EM'];
    return (
        <div className="w-[1140px] h-fit">
            <div className="w-full h-[30px] flex flex-row justify-end items-center  text-lg">
                <div className="flex items-center w-fit h-full px-2 border-r-2 border-black">
                    English
                </div>
                <div className="flex items-center w-fit h-full px-2 border-r-2 border-black">
                    Japanese
                </div>
                <div className="flex items-center w-fit h-full px-2 border-black">
                    Tiếng Việt
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="flex flex-col justify-center  text-[#be2b43] text-[30px] w-[33%]">
                    <span className=" w-fit">
                        KOI NO YOKAN
                    </span>
                    <Image src={nameshop} alt="logo" className="items-center flex w-fit" />
                </div>
                <div className=" h-[100px] flex justify-center items-center w-[33%]">
                    <span className=" text-black font-bold text-2xl pr-3" >
                        NỮ
                    </span>
                    <span className=" text-black font-bold text-2xl px-3" >
                        NAM
                    </span>
                    <span className=" text-black font-bold text-2xl pl-3" >
                        TRẺ EM
                    </span>
                </div>
                <div className=" h-[100px] flex justify-end items-center pr-10 w-[33%]">
                    <Image src={groupIcon} alt="logo" className="h-[30px]" />
                </div>
            </div>

        </div>
    )
}