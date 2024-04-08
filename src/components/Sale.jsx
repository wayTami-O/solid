import Product from './Product'

export default function Sale() {
    return(
        <div class="w-full flex-col all_center py-[100px] bg-gainsborough gap-[40px]">
            <div class="def:w-[1420px] bad:w-[890px] desk:w-[1240px] mobile:w-[720px] w-[300px] small:w-[350px] flex justify-between items-center">
                <span class="font-roboto text-[30px] text-dullGrey " >Бестселлеры</span>
                <div class="gap-[10px] hidden arr:flex">
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px]"></div>
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px] opacity-50"></div>
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px] opacity-50"></div>
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px] opacity-50"></div>
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px] opacity-50"></div>
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px] opacity-50"></div>
                    <div class="w-[19px] h-[19px] bg-dullGrey rounded-[50px] opacity-50"></div>
                </div>
            </div>
            <div class="all_center">
                <svg class="cursor-pointer hidden w-[60px] h-[60px] def:w-[90px] def:h-[90px]  arr:flex" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><path d="M56.25 22.5L36.4016 42.3484C35.1517 43.5983 34.5266 44.2234 34.5266 45C34.5266 45.7766 35.1517 46.4017 36.4016 47.6516L56.25 67.5" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <Product />
                <svg class="cursor-pointer hidden w-[60px] h-[60px] def:w-[90px] def:h-[90px] arr:flex" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><path d="M33.75 67.5L53.5984 47.6516C54.8483 46.4017 55.4734 45.7766 55.4734 45C55.4734 44.2234 54.8483 43.5982 53.5984 42.3484L33.75 22.5" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
        </div>
    )
}