export default function Header() {
    return(
        <>
            <div class="h-[92px] w-full bg-gainsborough all_center">
                <div class="w-[300px] small:w-[350px] bad:w-[890px] mobile:w-[720px] flex justify-between items-center def:w-[1420px] desk:w-[1240px]">
                    <div class="gap-[40px] hidden justify-center items-center bad:flex">
                        <span class="text-dullGrey font-roboto text-[24px] font-medium cursor-pointer">Каталог</span>
                        <span class="text-dullGrey font-roboto text-[24px] font-medium cursor-pointer">Подарочные карты</span>
                    </div>
                    <img src="../public/Logo.svg" alt="Logo Header"/>
                    <div class="hidden justify-center items-center gap-[30px] bad:flex">
                        <span class="text-dullGrey font-robotoMono text-[24px] font-medium">RU/RUS</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.5 17.5L22 22" stroke="#717171" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#717171" stroke-width="1.5" stroke-linejoin="round"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#717171" stroke-width="1.5"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.8569 3.74469C14.8652 1.60383 11.9991 4.7597 11.9991 4.7597C11.9991 4.7597 9.13283 1.60382 5.14113 3.74468C0.306415 6.33768 -0.0407553 16.492 11.9991 21C24.0389 16.492 23.6916 6.33769 18.8569 3.74469Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z" stroke="#717171" stroke-width="1.5"/><path d="M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9" stroke="#717171" stroke-width="1.5" stroke-linecap="round"/></svg>
                    </div>
                    <div class="flex bad:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M33.3334 8.33325H13.3334" stroke="#717171" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.3334 20H6.66671" stroke="#717171" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.3334 31.6667H20" stroke="#717171" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>
            </div>
        </>
    )
}