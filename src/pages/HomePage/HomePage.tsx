import React from "react";
import { Link } from "wouter";
import MobileWidth from "@/components/MobileWidth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import almatsuratIcon from "@/assets/almatsurat.png";
import { Settings } from "lucide-react";

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
        <Link href={`/almatsurat-pagi-${variant}`}>
          <span>☀️</span> Al Ma'tsurat Pagi
        </Link>
      </Button>

      <Button className="w-60 block mx-auto" variant="outline" asChild={true}>
        <Link href={`/almatsurat-sore-${variant}`}>
          <span>🌙</span> Al Ma'tsurat Sore
        </Link>
      </Button>
    </div>
  );
};

export const HomePage = () => {
  return (
    <MobileWidth className="text-center">
      <div className="p-2 text-right">
        <Button variant="ghost" size="icon" asChild={true}>
          <Link href="/settings">
            <Settings />
          </Link>
        </Button>
      </div>
      <div className="pt-10 pb-10">
        <img
          src={almatsuratIcon}
          width={35}
          height={35}
          alt="Al Ma'tsurat Icon"
          className="inline-block mb-2"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Al Ma'tsurat
        </h1>
        <p>Kumpulan Doa dan Dzikir yang diambil dari Al-Qur'an</p>
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
