import { activationAndEvent, manpowerAndHR, marketing, mosanadah, softwareAndAI, telecoms } from '@/helpers/constant';
import { Link } from '@/navigation';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, MenuIcon, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState , useEffect } from 'react';
import SwitchLang from '../atoms/SwitchLang';

export default function Navbar({ isclick, handleClick }) {
    const t = useTranslations('Navbar');
    const [isScrolled, setIsScrolled] = useState(false);

    // Monitor scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { value: '/', name: t('home') },
        {
            value: '',
            name: t('business-units'),
            list: [
                { value: '/services?n=' + telecoms, name: t('telecom') },
                { value: '/services?n=' + manpowerAndHR, name: t('manpower-hr-solutions') },
                { value: '/services?n=' + softwareAndAI, name: t('software-and-ai') },
                { value: '/services?n=' + activationAndEvent, name: t('merchandising-activation-event-management') },
                { value: '/services?n=' + mosanadah, name: t('mosanadah') },
                { value: '/services?n=' + marketing, name: t('marketing') },
            ],
        },
        {
            value: '',
            name: t('our-products'),
            list: [
                { value: '/services?n=' + mosanadah, name: t('erp') },
                { value: '/services?n=' + softwareAndAI, name: t('joe-mi') },
                { value: '/services?n=' + softwareAndAI, name: t('joe-x') },
            ],
        },
        {
            value: '',
            name: t('our-services'),
            list: [
                { value: '/services?n=' + manpowerAndHR, name: t('manpower') },
                { value: '/services?n=' + softwareAndAI, name: t('hr-solutions') },
                { value: '/services?n=' + marketing, name: t('marketing') },
                { value: '/services?n=' + marketing, name: t('social-media') },
            ],
        },
        { value: '/#ourPartners', name: t('our-partners') },
        { value: '/blogs', name: t('blogs') },
        { value: '/join-us', name: t('join-us') },
        { value: '/about-us', name: t('about-us') },
        { value: '/contact-us', name: t('contact-us') },
    ];

    const style = {
        a: 'block p-[10px] cursor-pointer hover:text-white hover:bg-primary',
    };

    const handleClose = e => {
        if (e.value) {
            handleClick();
        }
    };

    return (
        <nav className={` text-white z-[10] relative `}>
			<div  className={`${isclick ? ' rtl:right-[251px] ltr:left-[251px] top-[0px]' : 'rtl:right-0 ltr:left-0 top-0 '} ${isScrolled ? 'bg-[#111] bg-opacity-90 ' : 'bg-transparent'} p-[20px] fixed !duration-300 !transition-all w-full `} >
				<div className={` ${isclick ? "": "container"} flex items-center justify-between gap-[10px]`}>
                    <div className="flex items-center gap-[10px]  " >
                        <div onClick={handleClick} className={`   cursor-pointer hover:bg-primary !duration-300 !transition-all flex items-center justify-center text-white w-[40px] h-[40px] `}><MenuIcon />  </div>
                        <SwitchLang />
                    </div>
                    <Link href="/" > <Image className="w-[160px] max-md:w-[100px] " src="/assets/svg/logo-white.svg" width={160} height={60} alt="" /> </Link>
                </div>
			</div>

            <ul className={` ${isclick ? 'ltr:left-0 rtl:right-0' : 'ltr:left-[-250px] rtl:right-[-250px]'} max-sm:overflow-y-auto !duration-300 !transition-all fixed top-0 w-[250px] h-screen bg-white text-black py-[50px] flex flex-col gap-[2px]`}>
                <div className=' mb-[40px] mt-[-40px] '>
                    <Image className='object-contain' src='/assets/svg/logo.svg' alt='' width={120} height={90} />
                </div>

                {links.map((link, index) => (
                    <li key={index} className=' group relative  '>
                        <Link onClick={() => handleClose(link)} href={link.value} className={` ${style.a} text18 flex justify-between items-center  `}>
                            {link.name}
                            {link.list && <ChevronDown className={` opacity-80 `} />}
                        </Link>

                        <ul className='bg-white z-[100] ltr:sm:border-l-[4px] ltr:border-l-black rtl:sm:border-r-[4px] rtl:border-r-black   shadow-md top-0 hidden group-hover:block sm:absolute rtl:sm:right-[250px] ltr:sm:left-[250px]  sm:w-[200px] '>
                            {link.list &&
                                link.list.map((e, i) => (
                                    <li key={i} className='text14 hover:text-white hover:bg-primary relative hover:after:h-[60%] after:top-[50%] after:translate-y-[-50%] after:absolute after:h-0 after:w-[3px] after:bg-white ltr:after:right-[5px] rtl:after:left-[5px] after:duration-300  '>
                                        <Link onClick={() => handleClose(e)} className={style.a} href={e.value}>
                                            {e.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
