import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import MobileWidth from "@/components/MobileWidth";
import { DzikrCard } from "@/components/DzikrCard";
import { dzikrData } from "@/data/dzikr";
import { useAtom } from "jotai";
import {
  settingDarkModeAtom,
  settingFontSizeAtom,
  settingShowLatinAtom,
  settingShowTranslationAtom,
} from "@/states/settings";
import { Theme, useTheme } from "@/components/ThemeProvider/ThemeProvider";

const sampleDzikr = dzikrData[0];

export const SettingsPage = () => {
  const [showLatin, setShowLatin] = useAtom(settingShowLatinAtom);
  const [showTranslation, setShowTranslation] = useAtom(
    settingShowTranslationAtom
  );
  const [darkMode, setDarkMode] = useAtom(settingDarkModeAtom);
  const [fontSize, setFontSize] = useAtom(settingFontSizeAtom);

  const { theme, setTheme } = useTheme();

  const toggleShowLatin = () => setShowLatin(!showLatin);
  const toggleShowTranslation = () => setShowTranslation(!showTranslation);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleFontSizeChange = (value: string) => setFontSize(value);

  const handleThemeChange = (value: string) => setTheme(value as Theme);

  const fontSizeDisplayMap: Record<string, string> = {
    sm: "Kecil",
    base: "Sedang",
    lg: "Besar",
  };

  const themeDisplayMap: Record<string, string> = {
    system: "Sistem",
    light: "Terang",
    dark: "Gelap",
  };

  return (
    <MobileWidth>
      <div className="p-2">
        <Button variant="ghost" size="icon" asChild={true}>
          {/* todo: go back to previous page instead of hardcoded the path */}
          <Link href="/">
            <ArrowLeft />
          </Link>
        </Button>
      </div>
      <main>
        <div className="p-2 mb-4">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">
            Pengaturan
          </h1>
        </div>

        <div className="mx-4">
          <div>
            <div>
              <h2 className="text-lg font-bold mb-4">Tampilan</h2>

              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Tema</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <TextIcon className="h-4 w-4 mr-2" />
                        {themeDisplayMap[theme]}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup
                        value={theme}
                        onValueChange={handleThemeChange}
                      >
                        <DropdownMenuRadioItem value="system">
                          {themeDisplayMap["system"]}
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="light">
                          {themeDisplayMap["light"]}
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">
                          {themeDisplayMap["dark"]}
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Tampilkan Latin
                    </p>
                  </div>
                  <Switch
                    id="show-latin"
                    checked={showLatin}
                    onClick={toggleShowLatin}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Tampilkan Arti
                    </p>
                  </div>
                  <Switch
                    id="show-translation"
                    checked={showTranslation}
                    onClick={toggleShowTranslation}
                  />
                </div>

                {/* todo: implement font size setting */}
                {false && (
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Ukuran Tulisan
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <TextIcon className="h-4 w-4 mr-2" />
                          {fontSizeDisplayMap[fontSize]}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuRadioGroup
                          value={fontSize}
                          onValueChange={handleFontSizeChange}
                        >
                          <DropdownMenuRadioItem value="sm">
                            {fontSizeDisplayMap["sm"]}
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="base">
                            {fontSizeDisplayMap["base"]}
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="lg">
                            {fontSizeDisplayMap["lg"]}
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div>
            <h2 className="text-lg font-bold mb-4">Pratinjau</h2>
            <div className="mb-4">
              <DzikrCard
                dzikr={sampleDzikr}
                className="mx-0"
                showLatin={showLatin}
                showTranslation={showTranslation}
              />
            </div>
          </div>
        </div>
      </main>
    </MobileWidth>
  );
};

function TextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
