import List1 from './components/list1';
import List2 from './components/list2';
import List3 from './components/list3';


export default function Home() {
  return (
    <div className="min-h-screen
    bg-gradient-to-r from-green-950 from-0% via-green-900 via-50% to-green-950 to-100%">
      <main className="flex flex-col gap-[32px] items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className=" text-[8vh]">✨Checklist✨</h1>
        <p className="text-[2vh]">Hey Daniel! Here's your daily checklist. Remember, you got this!</p>
      </main>
      <div className=" mt-[-20vh] grid grid-cols-3 min-h-screen p-8 gap-[1vw] sm:p-20 font-[family-name:var(--font-geist-sans)] position-absolute items-center justify-items-center">
        
        <div className="animate-all animate-(--animate-slide2)">
            <List2/>
        </div>

        <div className=" animate-all md:animate-(--animate-slide1)">
            <List1/>
        </div>
        
        <div className=" animate-all md:animate-(--animate-slide2)">
            <List3/>
        </div>

      </div>
    </div>


  );
}
