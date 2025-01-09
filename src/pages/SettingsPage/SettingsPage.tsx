import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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

export const SettingsPage = () => {
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
          <Card>
            <CardHeader>
              <CardTitle>Tampilan</CardTitle>
              <CardDescription>Atur tema dan tampilan konten</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Mode Gelap</p>
                </div>
                <Switch id="dark-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Tampilkan Latin
                  </p>
                </div>
                <Switch id="show-latin" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Tampilkan Arti
                  </p>
                </div>
                <Switch id="show-translation" />
              </div>

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
                      Sedang
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup value="medium">
                      <DropdownMenuRadioItem value="small">
                        Kecil
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="medium">
                        Sedang
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="large">
                        Besar
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
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
