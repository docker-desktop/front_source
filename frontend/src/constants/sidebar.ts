// AppSidebar Constants

// Pages Content
export interface ISidebarList {
	content: string
	path: string
}

export const SidebarList: ISidebarList[] = [
	{
    content: "Container",
    path: '/container'
  },
  {
    content: 'Image',
    path: '/image'
  }
]
