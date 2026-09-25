import { Calendar, Home, Icon, Inbox, Mail, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { title } from "process"

const items = [
    {
      title: "Home",
      url: "#",
      Icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      Icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      Icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      Icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      Icon: Settings,
    },
    {
      title: "Email",
      url: "#",
      Icon: Mail,
    }
]

export function AppSidebar(){
  return(
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.Icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}