export default function Collection() {
    return(
        <div class="def:w-[1420px] bad:w-[890px] desk:w-[1240px] w-[300px] small:w-[350px] mobile:w-[720px] flex-col flex gap-[40px] mb-[100px]">
            <span class="font-roboto text-telegraph text-[30px] font-black tracking-[3px]">Коллекции</span>
            <div class="grid grid-cols-3 grid-rows-2">
                <div class="bg-[url('../public/GRID.ico')] collection_grid_container">
                    <span class="collection_grid_title">Grid</span>
                    <br />
                    <span class="collection_grid_description">COLLECTION</span>
                </div>
                <div class="bg-[url('../public/CURVE.ico')] collection_grid_container">
                    <span class="collection_grid_title">CURVE</span>
                    <br />
                    <span class="collection_grid_description">COLLECTION</span>
                </div>
                <div class="bg-[url('../public/GOLDEN_ROPE.ico')] collection_grid_container">
                    <span class="collection_grid_title">GOLDEN ROPE</span>
                    <br />
                    <span class="collection_grid_description">COLLECTION</span>
                </div>
                <div class="bg-[url('../public/PUFFY.ico')] collection_grid_container">
                    <span class="collection_grid_title">PUFFY</span>
                    <br />
                    <span class="collection_grid_description">COLLECTION</span>
                </div>
                <div class="bg-[url('../public/MIX.ico')] collection_grid_container">
                    <span class="collection_grid_title">MIX</span>
                    <br />
                    <span class="collection_grid_description">COLLECTION</span>
                </div>
                <div class="bg-[url('../public/FIRST.ico')] collection_grid_container">
                    <span class="collection_grid_title">THE FIRST</span>
                    <br />
                    <span class="collection_grid_description">COLLECTION</span>
                </div>
            </div>
        </div>
    )
}