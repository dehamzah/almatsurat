import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dzikr, SubDzikr } from "@/types";
import React from "react";

interface DzikrCardProps extends React.HTMLAttributes<HTMLDivElement> {
  dzikr: Dzikr;
  showLatin: boolean;
  showTranslation: boolean;
}

interface SubDzikrItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  subDzikr: SubDzikr[];
  showLatin: boolean;
  showTranslation: boolean;
}

const SubDzikrItems: React.FC<SubDzikrItemsProps> = ({
  subDzikr,
  showLatin,
  showTranslation,
}) => {
  return (
    <>
      <div className="leading-8">
        {subDzikr.map((child) => (
          <span className="text-base ml-2 inline">{child.arabic}</span>
        ))}
      </div>

      {showLatin && (
        <div className="mt-2">
          {subDzikr.map((child) => (
            <span className="text-sm mt-2 text-slate-700 ml-2 inline">
              {child.latin}.
            </span>
          ))}
        </div>
      )}

      {showTranslation && (
        <div className="mt-2">
          {subDzikr.map((child) => (
            <span className="text-sm mt-2 text-slate-700 ml-2 inline">
              {child.translation}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export const DzikrCard: React.FC<DzikrCardProps> = ({
  dzikr,
  className,
  showLatin,
  showTranslation,
}) => {
  return (
    <div className={className}>
      <Card className="text-right">
        <CardHeader>
          <CardTitle>{dzikr.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {dzikr.children && (
            <SubDzikrItems
              subDzikr={dzikr.children}
              showLatin={showLatin}
              showTranslation={showTranslation}
            />
          )}
        </CardContent>
        <CardFooter>
          <p className="w-full text-sm text-slate-700">{dzikr.repeat}x</p>
        </CardFooter>
      </Card>
    </div>
  );
};
