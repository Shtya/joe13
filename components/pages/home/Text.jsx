"use client"
import Button from '@/components/atoms/Button'
import EffectFixed from '@/helpers/EffectFixed'
import TextSlide from '@/helpers/TextSlide'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl'



export default function Text({more , less , btn = true , overlay = true , hidden , component , list , data , grid=1 , img , icon , title , description}) {
	const t = useTranslations()
  const listRef = useRef(null); // Reference to the list
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the list is expanded

  const handleReadMore = () => {
    if (!isExpanded) {
      // Animate the list to show
      gsap.to(listRef.current, {
        height: 'auto',
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
      });
    } else {
      // Animate the list to hide
      gsap.to(listRef.current, {
        height: 0,
        duration: 0.5,
        opacity: 0,
        ease: 'power2.in',
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
	<EffectFixed overlay={overlay} image={img} z={"z-[-100]"}>

    {icon && <div className={`${isExpanded ? " h-0 overflow-hidden " : "" }  transition-all duration-300 `} > <Image  className=" object-contain " src="/assets/imgs/logo2.png" alt="" width={200} height={80} /> </div>}
    
    {!icon && <TextSlide  cnParent={` ${hidden && isExpanded && "hidden" }  ${isExpanded ?"w-full flex items-start justify-start text-primary  " : ""}   `}         cn={` ${!isExpanded ? "text-center" : "!text-primary rtl:text-right ltr:text-left"} w-full text40 text-white `}  text={title}/>}
    {icon && 		<div  className={`${isExpanded ?"w-full flex items-start justify-start !text-primary rtl:text-right ltr:text-left" : "hidden"} text-center duration-300 transition-all w-full text40 text-white `} > {title} </div>  }
		<TextSlide  cnParent={` ${hidden && isExpanded && "hidden" } ${isExpanded ?"w-full flex items-start justify-start mt-[-15px] " : ""}`}  cn={` ${!isExpanded ? "text-center" : "text18 rtl:text-right ltr:text-left" } w-full text22 text-white `} text={description}/>

		
    {list && <div ref={listRef} className="overflow-hidden mt-4 opacity-0" style={{ height: 0 }} >
        <div className="w-screen">
          <ul className={`container mx-auto !px-[50px] list-disc grid grid-cols-${grid} max-md:grid-cols-1 gap-[10px] `}>
            {
              list.map((item, index) => (
                        <li key={index} className="text-white  text20 mb-[10px] font-[500] w-fit " > <TextSlide text={item}   /> </li>
                    ))
              }
          </ul>
        </div>
      </div>}


    {data && <div ref={listRef} className="overflow-hidden mt-4 opacity-0" style={{ height: 0 }} >
        <div className="w-screen">
          <ul className={`container mx-auto !px-[50px] grid grid-cols-${grid} max-md:grid-cols-1 gap-[30px] `}>
            {
              data.map((item, index) => (
                        <li key={index} className="  " > 
                          <div className="mb-[20px] grid grid-cols-[auto,1fr] items-center gap-[10px] text-white  text22 font-[500] w-fit" >
                            <TextSlide cnParent={"flex-none w-full "} text={item?.title}   />
                            <TextSlide cnParent={"text18 font-[400] opacity-70  "} text={item?.desc} />
                          </div>
                          {item?.data?.map((item, index) => (<div key={index} className="text-white  text18 opacity-70 list-disc mx-[30px]  font-[500] w-fit " > <TextSlide text={item}   /> </div> )) }
                        </li>
                    ))
              }

          </ul>
        </div>
      </div>}

    {component && <div ref={listRef} className="overflow-hidden mt-4 opacity-0" style={{ height: 0 }} >  {component } </div>}

	  {btn && <Button onClick={handleReadMore} borderAll={true} cn="mt-[0px]" name={isExpanded ? t("showLess") : more || t("readMore") } />}


	</EffectFixed>
  )
}