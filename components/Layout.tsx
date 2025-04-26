type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-border">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50">Help</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-purple-600">Export Results</button>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">{children}</main>
    </div>
  );
};


export default Layout;
