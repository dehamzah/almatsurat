import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { DzikrCard } from "@/components/DzikrCard";
import MobileWidth from "@/components/MobileWidth";
import { Button } from "@/components/ui/button";
import { dzikrData } from "@/data/dzikr";

export const DetailPage = () => {
  return (
    <MobileWidth>
      <div className="p-2">
        <Button variant="ghost" size="icon" asChild={true}>
          <Link href="/">
            <ArrowLeft />
          </Link>
        </Button>
      </div>
      <div className="p-2">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">
          Al Ma'tsurat Pagi Sughro
        </h1>
      </div>
      <div className="py-6">
        {dzikrData.map((dzikr) => {
          return (
            <DzikrCard
              dzikr={dzikr}
              className="mb-4 mx-4"
              showLatin={false}
              showTranslation={true}
            />
          );
        })}
      </div>
    </MobileWidth>
  );
};
