type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <header className="flex items-center justify-between p-6 bg-surface shadow-card border-b border-border">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-gray-100">
            Help
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-purple-700">
            Export Results
          </button>
        </div>
      </header>
      <main className="max-w-container mx-auto p-6 space-y-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
