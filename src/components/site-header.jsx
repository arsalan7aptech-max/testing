import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "./ui/button";
import { Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export function SiteHeader() {
  const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <header
      className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        {/* <h1 className="text-base font-medium">Documents</h1> */}
          <Button className={"ml-180 "} variant="outline" size="icon" aria-label="Submit" onClick={toggleTheme}>
        <Sun />
      </Button>
      <p>Theme:{theme}</p>
      </div>
    </header>
  );
}
