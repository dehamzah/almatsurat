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
        {subDzikr.map((child, index) => (
          <span
            key={index}
            className="font-uthmanic leading-9 text-lg dark:text-slate-200 ml-2 inline"
          >
            {child.arabic}
          </span>
        ))}
      </div>

      {showLatin && (
        <div className="mt-2">
          {subDzikr.map((child, index) => (
            <span
              key={index}
              className="text-sm leading-3 mt-2 text-slate-700 dark:text-slate-400 ml-2 inline"
            >
              {child.latin}.
            </span>
          ))}
        </div>
      )}

      {showTranslation && (
        <div className="mt-2">
          {subDzikr.map((child, index) => (
            <span
              key={index}
              className="text-sm leading-3 mt-2 text-slate-700 dark:text-slate-400 ml-2 inline"
            >
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
          <CardTitle className="dark:text-slate-200">{dzikr.title}</CardTitle>
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
          <p className="w-full text-sm text-slate-700 dark:text-slate-500">
            {dzikr.repeat}x
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
