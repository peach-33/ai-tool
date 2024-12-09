import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <div className="text-xl font-bold">AI Tools</div>
        <nav>
          <ul className="flex gap-6">
            <li>首页</li>
            <li>工具</li>
            <li>关于</li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 