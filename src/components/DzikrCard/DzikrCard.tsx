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
  fontSizeDzikr?: number;
}

interface SubDzikrItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  subDzikr: SubDzikr[];
  showLatin: boolean;
  showTranslation: boolean;
  fontSizeDzikr?: number;
}

const SubDzikrItems: React.FC<SubDzikrItemsProps> = ({
  subDzikr,
  showLatin,
  showTranslation,
  fontSizeDzikr = 24,
}) => {
  return (
    <>
      <div className="leading-8">
        {subDzikr.map((child, index) => (
          <span
            key={index}
            className={`font-uthmanic leading-9 dark:text-slate-200 ml-2 inline`}
            style={{ fontSize: `${fontSizeDzikr}px` }}
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
  fontSizeDzikr = 24,
}) => {
  return (
    <div className={className}>
      <Card className="text-center">
        <CardHeader className="p-4 pt-8">
          <CardTitle className="dark:text-slate-200">{dzikr.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {dzikr.children && (
            <SubDzikrItems
              subDzikr={dzikr.children}
              showLatin={showLatin}
              showTranslation={showTranslation}
              fontSizeDzikr={fontSizeDzikr}
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
