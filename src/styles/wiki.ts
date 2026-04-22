export const wiki = {
  app: "min-h-screen bg-[#f8f9fa] text-[#202122] antialiased font-['Lato',-apple-system,'Segoe_UI',sans-serif] text-sm leading-[1.6]",
  serif: "font-['Linux_Libertine',Georgia,Times,serif]",
  link: "cursor-pointer text-[#0645ad] no-underline hover:underline",
  header:
    "sticky top-0 z-[100] flex items-center justify-between border-b border-[#c8ccd1] bg-white px-6 py-2 max-md:flex-col max-md:items-start max-md:gap-1",
  logoSection: "flex items-center gap-3",
  logo: "flex h-[50px] w-[50px] items-center justify-center",
  logoGlobe: "text-[38px] grayscale",
  wordmark: "flex flex-col",
  wordmarkTitle:
    "font-['Linux_Libertine',Georgia,Times,serif] text-[19px] leading-[1.1] text-[#202122]",
  wordmarkTagline: "text-[10.5px] italic tracking-[0.02em] text-[#54595d]",
  headerLinks: "flex gap-2 text-xs",
  tabsRow:
    "flex items-end justify-between border-b border-[#a2a9b1] bg-white px-6 max-md:flex-col max-md:items-start max-md:gap-1.5 max-md:pb-2",
  tabs: "mb-[-1px] flex",
  tab: "mr-[-1px] cursor-pointer rounded-t-[2px] border border-b-0 border-[#a2a9b1] bg-[#ccdae8] px-3.5 py-1.5 text-[12.5px] text-[#0645ad] transition-colors hover:bg-[#e0e8f0]",
  activeTab:
    "border-b border-b-white bg-white font-bold text-[#202122] hover:bg-white",
  searchContainer: "relative mb-1.5",
  searchInput:
    "w-[220px] rounded-[2px] border border-[#a2a9b1] px-2 py-1 text-[13px] outline-none transition-colors focus:border-[#3366cc]",
  searchButton:
    "ml-1 cursor-pointer rounded-[2px] border border-[#a2a9b1] bg-gradient-to-b from-white to-[#ddd] px-2.5 py-1 text-[13px]",
  searchDropdown:
    "absolute left-0 top-full z-50 w-[220px] border border-[#a2a9b1] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
  searchItem:
    "cursor-pointer px-2.5 py-1.5 text-[13px] text-[#0645ad] hover:bg-[#eaf3ff]",
  body: "mx-auto min-h-screen max-w-[1100px] border border-t-0 border-[#c8ccd1] bg-white px-7 pb-10 pt-5 max-md:px-3.5 max-md:pb-[30px] max-md:pt-3.5",
  pageTitle:
    "border-b border-[#a2a9b1] pb-1 font-['Linux_Libertine',Georgia,Times,serif] text-3xl font-normal leading-[1.2]",
  pageSubtitle: "mb-4 mt-2 text-[12.5px] text-[#54595d]",
  banner:
    "mb-4 flex items-center gap-2 rounded-[2px] border border-[#a3d3b5] bg-[#cef2e0] px-3.5 py-2 text-[13px]",
  bannerIcon: "text-lg",
  hatnote: "mb-3.5 pl-6 text-[13px] italic text-[#54595d]",
  contentWrapper: "overflow-hidden",
  h2: "mb-2.5 mt-7 flex items-baseline gap-2 border-b border-[#a2a9b1] pb-0.5 font-['Linux_Libertine',Georgia,Times,serif] text-[22px] font-normal",
  h3: "mb-1.5 mt-[18px] flex items-baseline gap-2 font-['Linux_Libertine',Georgia,Times,serif] text-[17px] font-bold",
  paragraph: "mb-2.5 text-sm leading-[1.65] text-[#202122]",
  editLink:
    "ml-1 cursor-pointer text-xs font-normal text-[#54595d] hover:text-[#0645ad] font-['Lato',-apple-system,'Segoe_UI',sans-serif]",
  ref: "ml-px cursor-pointer align-super text-[11px] leading-none text-[#0645ad] hover:underline",
  toc: "mb-[18px] inline-block min-w-60 border border-[#c8ccd1] bg-[#f8f9fa] px-4 py-2.5",
  tocTitle: "mb-1.5 flex justify-center gap-2 text-center text-sm font-bold",
  tocToggle: "cursor-pointer text-[12.5px] font-normal text-[#0645ad]",
  tocList: "list-none p-0",
  tocListItem: "py-px",
  tocSubItem: "pl-5",
  tocAnchor: "text-[13px] text-[#0645ad] no-underline hover:underline",
  tocNumber: "inline-block min-w-7 text-[#202122]",
  infobox:
    "float-right clear-right mb-4 ml-5 w-[280px] border border-[#c8ccd1] border-collapse bg-[#f8f9fa] text-[13px] leading-normal max-md:float-none max-md:ml-0 max-md:w-full",
  infoboxHeader:
    "bg-[#b8c7d9] p-2 text-center font-['Linux_Libertine',Georgia,Times,serif] text-[17px] font-bold",
  infoboxImage: "bg-[#f8f9fa] p-2.5 text-center",
  avatar:
    "mx-auto flex h-[200px] w-[180px] items-center justify-center border border-[#c8ccd1] bg-[#e0e4e8] text-[80px]",
  infoboxCaption: "mt-1 text-xs text-[#54595d]",
  infoboxLabel:
    "w-[90px] border-t border-[#c8ccd1] bg-[#f8f9fa] px-2.5 py-1 text-left align-top text-[12.5px] font-bold",
  infoboxData: "border-t border-[#c8ccd1] px-2.5 py-1 text-[12.5px]",
  table: "w-full border-collapse",
  educationTable: "my-2 w-full border-collapse text-[13.5px]",
  compactTable: "my-2 border-collapse text-[13.5px]",
  tableHeadCell:
    "border border-[#c8ccd1] bg-[#eaecf0] px-2.5 py-1.5 text-left align-top font-bold",
  tableCell: "border border-[#c8ccd1] px-2.5 py-1.5 text-left align-top",
  langCell: "border border-[#c8ccd1] px-3.5 py-1.5 text-left",
  skillsTable: "my-2.5 w-full border-collapse text-[13px]",
  skillsHeadCell:
    "w-40 border border-[#c8ccd1] bg-[#eaecf0] px-2.5 py-1.5 text-left align-top text-[13px] font-bold",
  skillTag:
    "mr-1 mt-0.5 inline-block cursor-pointer rounded-[2px] border border-[#a3c1e0] bg-[#eaf3ff] px-2 py-px text-[12.5px] text-[#0645ad] transition-colors hover:bg-[#d0e3f7]",
  projectTable: "my-2.5 w-full border-collapse text-[13.5px]",
  projectRow: "hover:[&>td]:bg-[#f8f9fa]",
  bulletList: "my-1.5 list-disc pl-6 text-[13.5px] leading-[1.7] [&>li]:mb-1",
  showMore:
    "mt-0.5 inline-block cursor-pointer text-[12.5px] text-[#0645ad] hover:underline",
  timeline: "relative my-2 mb-3.5 ml-2.5 border-l-[3px] border-[#c8ccd1] pl-[18px]",
  timelineItem:
    "relative mb-3.5 before:absolute before:left-[-24.5px] before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-white before:bg-[#b8c7d9] before:content-['']",
  timelineYear: "text-[13px] font-bold text-[#54595d]",
  timelineRole: "font-bold text-[#202122]",
  timelineCompany: "cursor-pointer text-[#0645ad] hover:underline",
  contactGrid: "my-2.5 grid grid-cols-2 gap-2 max-md:grid-cols-1",
  contactItem: "border border-[#c8ccd1] bg-[#f8f9fa] px-3.5 py-2.5 text-[13px]",
  contactLabel:
    "mb-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[#54595d]",
  contactValue: "[&>a]:text-[13.5px] [&>a]:text-[#0645ad] [&>a]:no-underline [&>a:hover]:underline",
  cvActions: "flex flex-wrap gap-2",
  cvActionLink:
    "inline-flex cursor-pointer items-center rounded-[2px] border border-[#a2a9b1] bg-gradient-to-b from-white to-[#eaecf0] px-2.5 py-1 text-[12.5px] font-bold text-[#0645ad] no-underline hover:bg-[#eaf3ff] hover:underline",
  cvViewerBackdrop:
    "fixed inset-0 z-[300] flex items-center justify-center bg-black/45 px-4 py-6",
  cvViewerDialog:
    "flex h-full max-h-[900px] w-full max-w-[900px] flex-col border border-[#a2a9b1] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
  cvViewerHeader:
    "flex items-center justify-between border-b border-[#c8ccd1] bg-[#f8f9fa] px-3 py-2",
  cvViewerTitle:
    "font-['Linux_Libertine',Georgia,Times,serif] text-[18px] font-bold text-[#202122]",
  cvViewerClose:
    "cursor-pointer rounded-[2px] border border-[#a2a9b1] bg-gradient-to-b from-white to-[#eaecf0] px-2.5 py-1 text-[12.5px] text-[#202122] hover:bg-[#eaf3ff]",
  cvViewerBody: "min-h-0 flex-1 overflow-y-auto bg-[#eaecf0] p-3",
  cvViewerStatus:
    "mb-3 border border-[#c8ccd1] bg-white px-3 py-2 text-center text-[13px] text-[#54595d]",
  cvViewerPages: "flex flex-col items-center gap-3",
  cvViewerPage:
    "max-w-full border border-[#a2a9b1] bg-white p-2 shadow-[0_1px_4px_rgba(0,0,0,0.12)]",
  cvViewerCanvas: "block max-w-full",
  referencesList:
    "columns-2 gap-6 text-[12.5px] leading-[1.8] max-md:columns-1",
  referenceItem: "mb-0.5 break-inside-avoid",
  referenceNumber: "cursor-pointer font-bold text-[#0645ad]",
  externalList:
    "list-disc pl-7 text-sm leading-loose [&_a]:text-[#0645ad] [&_a]:no-underline hover:[&_a]:underline",
  externalIcon: "ml-[3px] inline-block h-3.5 w-3.5 align-middle opacity-50",
  categories:
    "mt-6 flex flex-wrap items-center gap-1 border border-[#c8ccd1] bg-[#f0f0f0] px-3 py-2 text-[13px]",
  categoriesLabel: "mr-1 font-bold",
  categoryLink: "cursor-pointer text-[#0645ad] no-underline hover:underline",
  categorySeparator: "mx-0.5 text-[#a2a9b1]",
  footer:
    "mx-auto max-w-[1100px] px-7 py-4 text-center text-xs leading-[1.7] text-[#54595d]",
  lastModified:
    "mt-5 border-t border-[#c8ccd1] pt-2 text-[12.5px] text-[#54595d]",
  scrollTop:
    "fixed bottom-7 right-7 z-[200] flex h-10 w-10 translate-y-3 cursor-pointer items-center justify-center rounded-[2px] border border-[#a2a9b1] bg-white text-lg opacity-0 shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-[opacity,transform,background-color] duration-200 hover:bg-[#eaf3ff]",
  scrollTopVisible: "translate-y-0 opacity-100",
} as const
