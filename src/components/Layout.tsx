// 共通のレイアウト
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Quiz App
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
