import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input} from "@/components/ui/input";
function App() {
  return (

    <div className="flex justify-center content-center h-[80vh]">

<div className="rounded-3xl m-16 bg-gray-900 p-5 w-3/5 ">

<div className="grid grid-cols-[1fr_7fr_4fr] grid-rows-4 gap-4  ">
    <div className="row-span-4 w-fit">
    <Card className="h-full w-5/6 bg-slate-800">
          <CardContent >
        Бок
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>

    </div>
    <div >
    <Input className="border-slate-800  bg-slate-800 " placeholder="Search for cities" />
    
    </div>
    <div className="col-start-2 row-start-2">
      
    <Card className=" bg-gray-900">
          <CardContent >
          погода
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      
      </div>
    <div className="col-start-2 row-start-3">
      
    <Card className="h-full  bg-slate-800">
          <CardContent >
        
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
    </div>
    <div className="col-start-2 row-start-4">
      
    <Card className="h-full  bg-slate-800">
          <CardContent >
       
          </CardContent>
          <CardFooter>
          
          </CardFooter>
        </Card>
    </div>

    <div className="row-span-3 col-start-3 row-start-2 h-full">
    <Card className="h-full  bg-slate-800">
          <CardContent >
      
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>


    </div>
</div>
    
</div>
  
</div>


  );
}

export default App;
