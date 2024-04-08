import Header from "~/components/Header";
import Main from "~/components/Main";
import Sale from "~/components/Sale";
import Collection from "~/components/Collection";
import Futter from "~/components/Futter";

export default function Home() {
  return (
    <>
      <div class="w-full all_center flex-col bg-gainsborough">
        <Header />
        <Main />
        <Sale />
        <Collection />
        <Futter />
      </div>
    </>
  );
}
