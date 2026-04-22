export const wiki = {
  app: "min-h-screen bg-[var(--wiki-page-bg)] text-[var(--wiki-text)] antialiased font-['Lato',-apple-system,'Segoe_UI',sans-serif] text-sm leading-[1.6] transition-colors duration-150",
  serif: "font-['Linux_Libertine',Georgia,Times,serif]",
  link: "cursor-pointer text-[var(--wiki-link)] no-underline hover:text-[var(--wiki-link-hover)] hover:underline",
  textHighlight: "font-semibold text-[var(--wiki-text)]",
  anchorTarget: "scroll-mt-24",
  header:
    "sticky top-0 z-[100] flex items-center justify-between gap-4 border-b border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-6 py-2 max-md:flex-wrap max-md:items-start max-md:gap-2 max-md:px-3.5",
  logoSection: "flex min-w-0 shrink-0 items-center gap-3",
  logo: "flex h-[50px] w-[50px] items-center justify-center",
  logoGlobe: "text-[38px] grayscale",
  wordmark: "flex flex-col",
  wordmarkTitle:
    "font-['Linux_Libertine',Georgia,Times,serif] text-[19px] leading-[1.1] text-[var(--wiki-text)]",
  wordmarkTagline: "text-[10.5px] italic tracking-[0.02em] text-[var(--wiki-muted-text)]",
  headerActions: "flex shrink-0 flex-wrap items-center justify-end gap-3 text-xs max-md:justify-start",
  headerLinks: "flex gap-2",
  themeControl:
    "flex items-center overflow-hidden rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-page-bg)]",
  themeOption:
    "min-w-14 cursor-pointer border-r border-[var(--wiki-border-strong)] px-2 py-1 text-center text-[12px] text-[var(--wiki-link)] last:border-r-0 hover:bg-[var(--wiki-control-hover)] hover:underline",
  themeOptionActive:
    "bg-[var(--wiki-surface)] font-bold text-[var(--wiki-text)] hover:bg-[var(--wiki-surface)] hover:no-underline",
  tabsRow:
    "flex items-end justify-between border-b border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] px-6 max-md:flex-col max-md:items-start max-md:gap-1.5 max-md:pb-2",
  tabs: "mb-[-1px] flex",
  tab: "mr-[-1px] cursor-pointer rounded-t-[2px] border border-b-0 border-[var(--wiki-border-strong)] bg-[var(--wiki-tab-bg)] px-3.5 py-1.5 text-[12.5px] text-[var(--wiki-link)] transition-colors hover:bg-[var(--wiki-tab-hover)]",
  activeTab:
    "border-b border-b-[var(--wiki-surface)] bg-[var(--wiki-surface)] font-bold text-[var(--wiki-text)] hover:bg-[var(--wiki-surface)]",
  searchContainer:
    "relative flex min-w-[220px] max-w-[420px] flex-1 items-center max-md:order-3 max-md:w-full max-md:max-w-none",
  searchInput:
    "min-w-0 flex-1 rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] px-2 py-1 text-[13px] text-[var(--wiki-text)] outline-none transition-colors placeholder:text-[var(--wiki-muted-text)] focus:border-[var(--wiki-link-hover)]",
  searchButton:
    "ml-1 cursor-pointer rounded-[2px] border border-[var(--wiki-border-strong)] bg-gradient-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[13px] text-[var(--wiki-text)] hover:bg-[var(--wiki-control-hover)]",
  searchDropdown:
    "absolute left-0 top-full z-50 w-full border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] shadow-[0_2px_8px_var(--wiki-shadow)]",
  searchItem:
    "cursor-pointer px-2.5 py-1.5 text-[13px] text-[var(--wiki-link)] hover:bg-[var(--wiki-control-hover)]",
  body: "mx-auto min-h-screen max-w-[1100px] border border-t-0 border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-7 pb-10 pt-5 max-md:px-3.5 max-md:pb-[30px] max-md:pt-3.5",
  pageTitle:
    "border-b border-[var(--wiki-border-strong)] pb-1 font-['Linux_Libertine',Georgia,Times,serif] text-3xl font-normal leading-[1.2]",
  pageSubtitle: "mb-4 mt-2 text-[12.5px] text-[var(--wiki-muted-text)]",
  banner:
    "mb-4 flex items-center gap-2 rounded-[2px] border border-[var(--wiki-success-border)] bg-[var(--wiki-success-bg)] px-3.5 py-2 text-[13px]",
  bannerIcon: "text-lg",
  hatnote: "mb-3.5 pl-6 text-[13px] italic text-[var(--wiki-muted-text)]",
  contentWrapper: "overflow-hidden",
  h2: "mb-2.5 mt-7 flex items-baseline gap-2 border-b border-[var(--wiki-border-strong)] pb-0.5 font-['Linux_Libertine',Georgia,Times,serif] text-[22px] font-normal",
  h3: "mb-1.5 mt-[18px] flex items-baseline gap-2 font-['Linux_Libertine',Georgia,Times,serif] text-[17px] font-bold",
  paragraph: "mb-2.5 text-sm leading-[1.65] text-[var(--wiki-text)]",
  editLink:
    "ml-1 cursor-pointer text-xs font-normal text-[var(--wiki-muted-text)] hover:text-[var(--wiki-link)] font-['Lato',-apple-system,'Segoe_UI',sans-serif]",
  ref: "ml-px cursor-pointer align-super text-[11px] leading-none text-[var(--wiki-link)] hover:underline",
  toc: "mb-[18px] inline-block min-w-60 border border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-4 py-2.5",
  tocTitle: "mb-1.5 flex justify-center gap-2 text-center text-sm font-bold",
  tocToggle: "cursor-pointer text-[12.5px] font-normal text-[var(--wiki-link)]",
  tocList: "list-none p-0",
  tocListItem: "py-px",
  tocSubItem: "pl-5",
  tocAnchor: "text-[13px] text-[var(--wiki-link)] no-underline hover:underline",
  tocNumber: "inline-block min-w-7 text-[var(--wiki-text)]",
  infobox:
    "float-right clear-right mb-4 ml-5 w-[280px] border border-[var(--wiki-border)] border-collapse bg-[var(--wiki-page-bg)] text-[13px] leading-normal max-md:float-none max-md:ml-0 max-md:w-full",
  infoboxHeader:
    "bg-[var(--wiki-accent-bg)] p-2 text-center font-['Linux_Libertine',Georgia,Times,serif] text-[17px] font-bold",
  infoboxImage: "bg-[var(--wiki-page-bg)] p-2.5 text-center",
  avatar:
    "mx-auto flex h-[200px] w-[180px] items-center justify-center border border-[var(--wiki-border)] bg-[var(--wiki-avatar-bg)] text-[80px]",
  infoboxCaption: "mt-1 text-xs text-[var(--wiki-muted-text)]",
  infoboxLabel:
    "w-[90px] border-t border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-2.5 py-1 text-left align-top text-[12.5px] font-bold",
  infoboxData: "border-t border-[var(--wiki-border)] px-2.5 py-1 text-[12.5px]",
  table: "w-full border-collapse",
  educationTable: "my-2 w-full border-collapse text-[13.5px]",
  compactTable: "my-2 border-collapse text-[13.5px]",
  tableHeadCell:
    "border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top font-bold",
  tableCell: "border border-[var(--wiki-border)] px-2.5 py-1.5 text-left align-top",
  langCell: "border border-[var(--wiki-border)] px-3.5 py-1.5 text-left",
  langHeadCell:
    "border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-3.5 py-1.5 text-left font-bold",
  skillsTable: "my-2.5 w-full border-collapse text-[13px]",
  skillsHeadCell:
    "w-40 border border-[var(--wiki-border)] bg-[var(--wiki-subtle-bg)] px-2.5 py-1.5 text-left align-top text-[13px] font-bold",
  skillTag:
    "mr-1 mt-0.5 inline-block cursor-pointer rounded-[2px] border border-[var(--wiki-skill-border)] bg-[var(--wiki-skill-bg)] px-2 py-px text-[12.5px] text-[var(--wiki-link)] transition-colors hover:bg-[var(--wiki-skill-hover)]",
  projectTable: "my-2.5 w-full border-collapse text-[13.5px]",
  projectRow: "hover:[&>td]:bg-[var(--wiki-page-bg)]",
  bulletList: "my-1.5 list-disc pl-6 text-[13.5px] leading-[1.7] [&>li]:mb-1",
  showMore:
    "mt-0.5 inline-block cursor-pointer text-[12.5px] text-[var(--wiki-link)] hover:underline",
  timeline: "relative my-2 mb-3.5 ml-2.5 border-l-[3px] border-[var(--wiki-border)] pl-[18px]",
  timelineItem:
    "relative mb-3.5 before:absolute before:left-[-24.5px] before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-[var(--wiki-surface)] before:bg-[var(--wiki-accent-bg)] before:content-['']",
  timelineYear: "text-[13px] font-bold text-[var(--wiki-muted-text)]",
  timelineRole: "font-bold text-[var(--wiki-text)]",
  timelineCompany: "cursor-pointer text-[var(--wiki-link)] hover:underline",
  contactGrid: "my-2.5 grid grid-cols-2 gap-2 max-md:grid-cols-1",
  contactItem: "border border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-3.5 py-2.5 text-[13px]",
  contactLabel:
    "mb-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--wiki-muted-text)]",
  contactValue: "[&>a]:text-[13.5px] [&>a]:text-[var(--wiki-link)] [&>a]:no-underline [&>a:hover]:underline",
  cvActions: "flex flex-wrap gap-2",
  cvActionLink:
    "inline-flex cursor-pointer items-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-gradient-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[12.5px] font-bold text-[var(--wiki-link)] no-underline hover:bg-[var(--wiki-control-hover)] hover:underline",
  cvViewerBackdrop:
    "fixed inset-0 z-[300] flex items-center justify-center bg-black/45 px-4 py-6",
  cvViewerDialog:
    "flex h-full max-h-[900px] w-full max-w-[900px] flex-col border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] shadow-[0_8px_30px_var(--wiki-dialog-shadow)]",
  cvViewerHeader:
    "flex items-center justify-between border-b border-[var(--wiki-border)] bg-[var(--wiki-page-bg)] px-3 py-2",
  cvViewerTitle:
    "font-['Linux_Libertine',Georgia,Times,serif] text-[18px] font-bold text-[var(--wiki-text)]",
  cvViewerClose:
    "cursor-pointer rounded-[2px] border border-[var(--wiki-border-strong)] bg-gradient-to-b from-[var(--wiki-control-bg)] to-[var(--wiki-control-bg-end)] px-2.5 py-1 text-[12.5px] text-[var(--wiki-text)] hover:bg-[var(--wiki-control-hover)]",
  cvViewerBody: "min-h-0 flex-1 overflow-y-auto bg-[var(--wiki-subtle-bg)] p-3",
  cvViewerStatus:
    "mb-3 border border-[var(--wiki-border)] bg-[var(--wiki-surface)] px-3 py-2 text-center text-[13px] text-[var(--wiki-muted-text)]",
  cvViewerPages: "flex flex-col items-center gap-3",
  cvViewerPage:
    "max-w-full border border-[var(--wiki-border-strong)] bg-white p-2 shadow-[0_1px_4px_var(--wiki-shadow)]",
  cvViewerCanvas: "block max-w-full",
  referencesList:
    "columns-2 gap-6 text-[12.5px] leading-[1.8] max-md:columns-1",
  referenceItem: "mb-0.5 break-inside-avoid",
  referenceNumber: "cursor-pointer font-bold text-[var(--wiki-link)]",
  externalList:
    "list-disc pl-7 text-sm leading-loose [&_a]:text-[var(--wiki-link)] [&_a]:no-underline [&_a:hover]:underline",
  externalIcon: "ml-[3px] inline-block h-3.5 w-3.5 align-middle opacity-50",
  categories:
    "mt-6 flex scroll-mt-24 flex-wrap items-center gap-1 border border-[var(--wiki-border)] bg-[var(--wiki-muted-bg)] px-3 py-2 text-[13px]",
  categoriesLabel: "mr-1 font-bold",
  categoryLink: "cursor-pointer text-[var(--wiki-link)] no-underline hover:underline",
  categorySeparator: "mx-0.5 text-[var(--wiki-border-strong)]",
  footer:
    "mx-auto max-w-[1100px] px-7 py-4 text-center text-xs leading-[1.7] text-[var(--wiki-muted-text)]",
  lastModified:
    "mt-5 border-t border-[var(--wiki-border)] pt-2 text-[12.5px] text-[var(--wiki-muted-text)]",
  scrollTop:
    "fixed bottom-7 right-7 z-[200] flex h-10 w-10 translate-y-3 cursor-pointer items-center justify-center rounded-[2px] border border-[var(--wiki-border-strong)] bg-[var(--wiki-surface)] text-lg text-[var(--wiki-text)] opacity-0 shadow-[0_2px_6px_var(--wiki-shadow)] transition-[opacity,transform,background-color] duration-200 hover:bg-[var(--wiki-control-hover)]",
  scrollTopVisible: "translate-y-0 opacity-100",
} as const
