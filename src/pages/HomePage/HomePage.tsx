import React from "react";
import { Link } from "wouter";
import MobileWidth from "@/components/MobileWidth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "sughro" | "kubro";
}

const MenuContent: React.FC<MenuContentProps> = ({ variant }) => {
  return (
    <div className="mt-8">
      <Button
        className="w-60 mb-2 block mx-auto"
        variant="outline"
        asChild={true}
      >
        <Link href={`/almatsurat-pagi-${variant}`}>Al Ma'tsurat Pagi</Link>
      </Button>

      <Button className="w-60 block mx-auto" variant="outline" asChild={true}>
        <Link href={`/almatsurat-sore-${variant}`}>Al Ma'tsurat Sore</Link>
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
            <MenuContent variant="sughro" />
          </TabsContent>
          <TabsContent value="kubro">
            <MenuContent variant="kubro" />
          </TabsContent>
        </Tabs>
      </div>
    </MobileWidth>
  );
};
