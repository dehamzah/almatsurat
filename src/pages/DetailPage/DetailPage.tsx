import { Link, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { DzikrCard } from "@/components/DzikrCard";
import MobileWidth from "@/components/MobileWidth";
import { Button } from "@/components/ui/button";
import { dzikrData } from "@/data/dzikr";
import { ROUTES_TITLE } from "@/constants";

export const DetailPage = () => {
  const [location] = useLocation();
  const routePath = location as keyof typeof ROUTES_TITLE;
  const PAGE_TITLE = ROUTES_TITLE[routePath];

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
          {PAGE_TITLE}
        </h1>
      </div>
      <div className="py-6">
        {dzikrData.map((dzikr, index) => {
          return (
            <DzikrCard
              key={index}
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
