const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {children}
      </div>
    );
  };
  
  export default Layout;
  