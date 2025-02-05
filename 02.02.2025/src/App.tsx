import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input} from "@/components/ui/input";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { sideIconClass } from "./constants/side-icons";
import { Separator } from "@/components/ui/separator"


function App() {
  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     
    
   

<div className="flex items-center justify-center w-screen h-screen bg-bodybackground">

   

<div className="rounded-3xl m-16 bg-mainbackground p-4 w-3/5 h-3/4">

<div className="grid grid-cols-[1fr_7fr_4fr] grid-rows-[8%_28%_28%_30%] gap-3 h-full  ">
    <div className="row-span-4   ">
    <Card className=" h-full justify-self-center">
    <CardHeader>
  <div className="bg-bodybackground p-2 justify-self-center w-fit m-3 rounded-xl mb-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#68798b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>
    </div>
    </CardHeader>
          <CardContent >
          <div className={sideIconClass[0]} >
          <div className={sideIconClass[1]}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-sun-rain"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/><path d="M11 20v2"/><path d="M7 19v2"/></svg>
          </div>
          <p className={sideIconClass[2]}>Wheather</p>
          </div>
          <div className={sideIconClass[0]} >
          <div className={sideIconClass[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/></svg>
          </div>
          <p className={sideIconClass[2]}>Cities</p>
          </div>
          <div className={sideIconClass[0]} >
          <div className={sideIconClass[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
          </div>
          <p className={sideIconClass[2]}>Map</p>
          </div>
          <div className={sideIconClass[0]} >
          <div className={sideIconClass[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
          </div>
          <p className={sideIconClass[2]}>Settings</p>
          </div>

          
          </CardContent>
          
          
        </Card>

    </div>

    <div className= "h-min">
    <Input  placeholder="Search for cities" />
    
    </div>
    <div className="col-start-2 row-start-2 h-full">
      
    <Card className="bg-mainbackground flex justify-between h-full items-center px-10 ">
    
    <div className="flex flex-col justify-between content-center h-full pb-5">
      <div>
      <p className="font-bold text-3xl">Madrid</p>
      <p className="text-sm text-muted-foreground">Chance of rain 0%</p>
      </div>
      <p className="text-5xl font-bold">31&deg;</p>

    </div>
         <img src="./img/sun.png" alt="" className="content-center h-full"/>
       
        </Card>
      
      </div>
    <div className="col-start-2 row-start-3">
      
    <Card className="h-full flex flex-col justify-around">
    <CardHeader className="justify-start p-6"><p className="text-[10px] font-bold">TODAY'S FORECAST</p></CardHeader>
          <CardContent className="px-10 flex flex-row justify-between mb-5 h-32">

          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs">6:00 AM</p>
            <img  src="./img/cloud.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">25&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs">9:00 AM</p>
            <img  src="./img/cloud_sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">28&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs">12:00 PM</p>
            <img  src="./img/sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">33&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs">3:00 PM</p>
            <img  src="./img/sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">34&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs">6:00 PM</p>
            <img  src="./img/sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg  font-bold">32&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs">9:00 PM</p>
            <img  src="./img/cloud_sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg  font-bold">30&deg;</p>
          </div>


       
   
     
          
      
          </CardContent>

        </Card>
    </div>
    <div className="col-start-2 row-start-4">
      
    <Card className="h-full  ">
          <CardContent >
       
          </CardContent>

        </Card>
    </div>

    <div className="row-span-3 col-start-3 row-start-2 h-full">
    <Card className="h-full ">
          <CardContent >
      
          </CardContent>

        </Card>


    </div>
</div>
    
</div>





</div> 


</ThemeProvider>

  );
}
console.log(sideIconClass[0]);
export default App;
