import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon } from "lucide-react"

const data = {
  user: {
    name: "SAIM",
    email: "saim@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/Dashboard",
      icon: (
        <LayoutDashboardIcon />
      ),
    },
    {
      title: "Contact",
      url: "/Dashboard/Contact",
      icon: (
        <ListIcon />
      ),
    },
    {
      title: "Product",
      url: "/Dashboard/Product",
      icon: (
        <FolderIcon/>
      ),
    },
        {
      title: "ProductList",
      url: "/Dashboard/ProductList",
      icon: (
        <FolderIcon />
      ),
    },
        {
      title: "AddProduct",
      url: "/Dashboard/AddProduct",
      icon: (
        <FolderIcon />
      ),
    },
      {
      title: "ProductDetail",
      url: "/Dashboard/ProductDetail",
      icon: (
        <FolderIcon />
      ),
    },
    {
      title: "Orders",
      url: "/Dashboard/Orders",
      icon: (
        <UsersIcon />
      ),
    },
            {
      title: "Form",
      url: "/Dashboard/Form",
      icon: (
        <ChartBarIcon />
      ),
    },
                {
      title: "Counter",
      url: "/Dashboard/Counter",
      icon: (
        <ChartBarIcon />
      ),
    },
            {
      title: "Login",
      url: "/Dashboard/Login",
      icon: (
        <UsersIcon />
      ),
    },
    {
      title: "Signup",
      url: "/Dashboard/Register",
      icon: (
        <UsersIcon />
      ),
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: (
        <CameraIcon />
      ),
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: (
        <FileTextIcon />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: (
        <FileTextIcon />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon />
      ),
    },
    // {
    //   title: "Get Help",
    //   url: "#",
    //   icon: (
    //     <CircleHelpIcon />
    //   ),
    // },
    {
      title: "Search",
      url: "#",
      icon: (
        <SearchIcon />
      ),
    },
  ],
  documents: [
    // {
    //   name: "Data Library",
    //   url: "#",
    //   icon: (
    //     <DatabaseIcon />
    //   ),
    // },
    // {
    //   name: "Reports",
    //   url: "#",
    //   icon: (
    //     <FileChartColumnIcon />
    //   ),
    // },
    // {
    //   name: "Word Assistant",
    //   url: "#",
    //   icon: (
    //     <FileIcon />
    //   ),
    // },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className='bg-amber-400 font-bold'>
      <SidebarHeader className='bg-amber-400 text-7xl '>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="#">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">DASHBOARD</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='bg-amber-400'>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className='bg-amber-400'>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
