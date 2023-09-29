import React from "react";
import localFont from 'next/font/local'
import Image from "next/image";
import banner from '../../public/image/website.png';
import chi1 from '../../public/image/chi1.png'
import chi2 from '../../public/image/chi2.png'
import chi3 from '../../public/image/chi3.png'
import do1 from '../../public/image/do1.png'
import do2 from '../../public/image/do2.png'
import do3 from '../../public/image/do3.png'
import do4 from '../../public/image/do4.png'
import do5 from '../../public/image/do5.png'
import do6 from '../../public/image/do6.png'
import Item from '@/components/item'
const myFont = localFont({ src: '../../public/font/SVN-Saint Monica.otf' })
export default function Body() {
    const itemList = [
        {
            index: 0,
            name: 'Áo len mềm mại',
            price: '450.000đ',
            image: do1
        },
        {
            index: 0,
            name: 'Boot lông mềm mại',
            price: '1.050.000đ',
            image: do2
        },
        {
            index: 0,
            name: 'Áo nỉ cổ cao',
            price: '380.000đ',
            image: do3
        },
        {
            index: 0,
            name: 'Túi Canvas 12',
            price: '480.000đ',
            image: do4
        },
        {
            index: 0,
            name: 'Áo khoác Jean mùa đông',
            price: '1.805.000đ',
            image: do5
        },
        {
            index: 0,
            name: 'Quần nỉ bông mềm',
            price: '380.000đ',
            image: do6
        }
    ]
    return (
        <div className="w-[1140px]">
            <div className="my-6">
                <Image src={banner} alt="logo" />
            </div>
            <div className="flex justify-around w-[1150px]">
                <div className=" ">
                    <Image src={chi1} alt="logo" />
                    <div className=" text-[#efe70c] text-3xl z-10 relative top-[-40%] left-[25%]">
                        <span className={myFont.className}>COLLECTION</span>
                    </div>
                </div>
                <div className="">
                    <Image src={chi2} alt="logo" />
                    <div className=" text-[#efe70c] text-3xl z-10 relative top-[-40%] left-[30%]">
                        <div className="relative left-[15%] mb-2">
                            <span className={myFont.className}>OF</span>
                        </div>
                        <div className="relative left-[-10%]">
                            <span className={myFont.className}>WINTER</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image src={chi3} alt="logo" />
                    <div className=" text-[#efe70c] text-3xl z-10 relative top-[-40%] left-[30%]">
                        <span className={myFont.className}>DECEMBER</span>
                    </div>
                </div>
            </div>
            <div className="font-bold text-2xl">
                NEW ARRIVAL
            </div>
            <div className="flex h-fit flex-wrap justify-center">
                {itemList.map(item => (
                    <Item key={item.index} name={item.name} price={item.price} image={item.image} />
                )
                )}
            </div>
        </div>
    )
}