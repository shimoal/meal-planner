const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-14 flex flex-col items-center justify-center h-full">
      {children}
    </div>
  )
}

export default PageContainer
