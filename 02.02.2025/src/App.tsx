import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input} from "@/components/ui/input";
import { ThemeProvider } from "@/components/theme-provider.tsx";
function App() {
  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     
    
   

<div className="flex items-center justify-center w-screen h-screen bg-bodybackground">

   

<div className="rounded-3xl m-16 bg-mainbackground p-4 w-3/5 h-3/4">

<div className="grid grid-cols-[1fr_7fr_4fr] grid-rows-[8%_28%_28%_30%] gap-3 h-full  ">
    <div className="row-span-4   ">
    <Card className=" h-full justify-self-center">
          <CardContent >
        Бок
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
      
    <Card className="h-full ">
          <CardContent >
        
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

export default App;
