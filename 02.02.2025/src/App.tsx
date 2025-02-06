import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input} from "@/components/ui/input";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { IconClass } from "./constants/icons-class";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { text } from "stream/consumers";

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
          <div className={IconClass[3]} >
          <div className={IconClass[1]}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-sun-rain"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/><path d="M11 20v2"/><path d="M7 19v2"/></svg>
          </div>
          <p className={IconClass[2]}>Wheather</p>
          </div>
          <div className={IconClass[0]} >
          <div className={IconClass[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/></svg>
          </div>
          <p className={IconClass[2]}>Cities</p>
          </div>
          <div className={IconClass[0]} >
          <div className={IconClass[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
          </div>
          <p className={IconClass[2]}>Map</p>
          </div>
          <div className={IconClass[0]} >
          <div className={IconClass[1]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
          </div>
          <p className={IconClass[2]}>Settings</p>
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
    <CardHeader className="justify-start p-6 "><p className="text-[10px] text-muted-foreground font-bold">TODAY'S FORECAST</p></CardHeader>
          <CardContent className="px-10 flex flex-row justify-between mb-5 h-32">

          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs text-muted-foreground">6:00 AM</p>
            <img  src="./img/cloud.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">25&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs text-muted-foreground">9:00 AM</p>
            <img  src="./img/cloud_sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">28&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs text-muted-foreground">12:00 PM</p>
            <img  src="./img/sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">33&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs text-muted-foreground">3:00 PM</p>
            <img  src="./img/sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg font-bold">34&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs text-muted-foreground">6:00 PM</p>
            <img  src="./img/sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg  font-bold">32&deg;</p>
          </div>
          <Separator orientation="vertical" className="h-30"/>
          <div className="flex flex-col justify-between ">
            <p className="self-center text-xs text-muted-foreground">9:00 PM</p>
            <img  src="./img/cloud_sun.png" alt="" className=" h-12"></img>
            <p className="self-center text-lg  font-bold">30&deg;</p>
          </div>

      
          </CardContent>

        </Card>
    </div>


    <div className="col-start-2 row-start-4">
      
       <Card className="h-full flex flex-col justify-around">
    <CardHeader className="justify-between px-6 pt-5">
      <p className="text-[10px] font-bold text-muted-foreground">AIR CONDITIONS</p>
      
      <Button className="text-[10px] text-foreground px-3 py-1 rounded-xl bg-btnbackground" size={"sx"}>See more</Button>

      </CardHeader>
          <CardContent className="px-10 flex flex-row gap-44 mb-5 h-32">

          <div className="flex flex-col justify-between">


              <div className="mb-6" >
                    <div className={IconClass[4]} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
                    <p >Real feel</p>
                    </div>


                    <p className={IconClass[5]}>30&deg;</p>
              </div>


              <div >

                  <div className={IconClass[4]} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                      <p>Chance of rain</p>
                  </div>
                   
                  
                    <p className={IconClass[5]}>0%</p>
              </div>

          </div>
          
          <div > 
              <div className="mb-6">
                  <div className={IconClass[4]} >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>
                    <p >Wind</p>
                    </div>
                    <p className={IconClass[5]}>0.2 km/h</p>
              </div>

              <div>
                  <div className={IconClass[4]} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>
                    <p>UV index</p>
                    </div>

                    <p className={IconClass[5]}>3</p>
              </div>

          </div>




       

      
          </CardContent>

        </Card>
    </div>




    <div className="row-span-3 col-start-3 row-start-2 h-full">
    <Card className="h-full  ">

    <CardHeader className="justify-between px-7 pt-6">
    <p className="text-[10px] font-bold text-muted-foreground">7-DAY FORECAST</p>
    </CardHeader>
          <CardContent className="px-8 text-[.8rem] ">
      
          <div>

<div className="flex flex-row justify-between items-center my-3 ">
<p className="text-muted-foreground w-6">Today</p>
    <div className="flex flex-row gap-4 items-center justify-center ">
    <img  src="./img/sun.png" alt="" className=" h-12 w-12"></img>
    <p>Sunny</p>
    </div>
  <div className="flex flex-row "><p>36</p>/<p className="text-muted-foreground">22</p></div>
</div>
</div>
<Separator />

        <div>

              <div className="flex flex-row justify-between items-center my-4 ">
              <p className="text-muted-foreground w-6">Tue</p>
                  <div className="flex flex-row gap-4 items-center justify-center  ">
                  <img  src="./img/sun.png" alt="" className=" h-12 w-12"></img>
                  <p>Sunny</p>
                  </div>
                <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
              </div>
        </div>
        <div>
        <Separator />
<div className="flex flex-row justify-between items-center my-4 ">
<p className="text-muted-foreground w-6">Wed</p>
    <div className="flex flex-row gap-4 items-center justify-center  ">
    <img  src="./img/sun.png" alt="" className=" h-12 w-12"></img>
    <p>Sunny</p>
    </div>
  <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
</div>
</div>
<Separator />

<div>

<div className="flex flex-row justify-between items-center my-4 ">
<p className="text-muted-foreground w-6">Thu</p>
    <div className="flex flex-row gap-4 items-center justify-center  ">
    <img  src="./img/cloud.png" alt="" className=" h-12 w-12"></img>
    <p>Cloudy</p>
    </div>
  <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
</div>
</div>
<Separator />

<div>

<div className="flex flex-row justify-between items-center my-4 ">
<p className="text-muted-foreground w-6">Fri</p>
    <div className="flex flex-row gap-4 items-center justify-center  ">
    <img  src="./img/cloud.png" alt="" className=" h-12 w-12"></img>
    <p>Cloudy</p>
    </div>
  <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
</div>
</div>
<Separator />

<div>

<div className="flex flex-row justify-between items-center my-4 ">
<p className="text-muted-foreground w-6">Sat</p>
    <div className="flex flex-row gap-4 items-center justify-center  ">
    <img  src="./img/rain.png" alt="" className=" h-12 w-12"></img>
    <p>Rainy</p>
    </div>
  <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
</div>
</div>
<Separator />

<div>

<div className="flex flex-row justify-between items-center my-4 ">
<p className="text-muted-foreground w-6">Sun</p>
    <div className="flex flex-row gap-4 items-center justify-center  ">
    <img  src="./img/storm.png" alt="" className=" h-12 w-12"></img>
    <p>Storm</p>
    </div>
  <div className="flex flex-row "><p>37</p>/<p className="text-muted-foreground">21</p></div>
</div>
</div>


    
          </CardContent>

        </Card>


    </div>
</div>
    
</div>





</div> 


</ThemeProvider>

  );
}
console.log(IconClass[0]);
export default App;
