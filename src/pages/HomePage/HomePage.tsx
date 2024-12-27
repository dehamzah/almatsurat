import MobileWidth from "@/components/MobileWidth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuContent = () => {
  return (
    <div className="mt-8">
      <Button className="w-60 mb-2 block mx-auto" variant="outline">
        Dzikir Pagi
      </Button>

      <Button className="w-60 block mx-auto" variant="outline">
        Dzikir Sore
      </Button>
    </div>
  );
};

export const HomePage = () => {
  return (
    <MobileWidth className="text-center">
      <div className="pt-20 pb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Al Ma'tsurat
        </h1>
        <p>Doa dan Dzikir yang dinukil dari Rasulullah SAW</p>
      </div>
      <div>
        <Tabs defaultValue="sughro">
          <TabsList>
            <TabsTrigger value="sughro">Sughro</TabsTrigger>
            <TabsTrigger value="kubro">Kubro</TabsTrigger>
          </TabsList>
          <TabsContent value="sughro">
            <MenuContent />
          </TabsContent>
          <TabsContent value="kubro">
            <MenuContent />
          </TabsContent>
        </Tabs>
      </div>
    </MobileWidth>
  );
};
