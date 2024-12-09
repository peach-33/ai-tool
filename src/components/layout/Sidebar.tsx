import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { title: '推荐工具', icon: '🌟' },
    { title: '最新上架', icon: '🆕' },
    { title: '热门工具', icon: '🔥' },
    { title: '我的收藏', icon: '❤️' },
    { title: '使用记录', icon: '📝' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-r-2xl p-6">
      <div className="space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 cursor-pointer transition-all"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-gray-700 font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 