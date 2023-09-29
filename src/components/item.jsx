import React from "react";
import localFont from 'next/font/local'
import Image from "next/image";
export default function Item(props) {

    return (
        <>
            <div className="">
                <div className="px-3">
                    <Image src={props.image} alt="logo" />
                    <div className="flex flex-col">
                        <span className="text-xl">{props.name}</span>
                        <span className="font-bold text-xl">{props.price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}