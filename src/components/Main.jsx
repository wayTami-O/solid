export default function Main() {
    return(
        <>
            <div class="bg-[url('./public/Bg-Photo.png')] w-full h-[760px] bg-top mobile:h-[960px] mobile:bg-bottom flex justify-center">
                <div class="mobile:w-[760px] bad:w-[890px] def:w-[1420px] desk:w-[1240px] w-[300px] small:w-[350px] ">
                    <img src="../public/NewColl.svg" alt="New Collection"   class="mt-[516px] mobile:mt-[637px] def:mt-[660px]"/>
                    <div class=" w-[157px] h-[66px] mobile:w-[176px] mobile:h-[72px] bg-dullGrey rounded-[10px] all_center font-roboto text-[20px] mobile:text-[24px] font-medium cursor-pointer text-white mt-[50px]">Перейти</div>
                </div>
            </div>
        </>  
    )
}