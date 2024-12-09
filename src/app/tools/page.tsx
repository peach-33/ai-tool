'use client';

import React, { CSSProperties } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// 定义工具数据
const tools = [
  {
    title: 'AI 写作助手',
    description: '智能写作助手，帮助你快速创作高质量内容',
    icon: '/images/writing.png',
    category: '写作辅助'
  },
  {
    title: '智能图像生成',
    description: '将文字描述转换为精美图像',
    icon: '/images/image.png',
    category: '图像生成'
  },
  {
    title: '代码助手',
    description: '智能代码补全和优化建议',
    icon: '/images/code.png',
    category: '编程开发'
  },
];

// 工具卡片组件
const ToolCard = ({ title, description, icon, category }: {
  title: string;
  description: string;
  icon: string;
  category: string | string[];
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // 获取正确的路径
  const getPath = () => {
    if (title === 'Copy.ai') {
      return '/tools/xiezuo/copy-ai';
    } else if (title === '晓语台') {
      return '/tools/xiezuo/xiaoyutai';
    }
    return '#';
  };

  return (
    <Link href={getPath()} style={{ textDecoration: 'none' }}>
      <div 
        style={{
          ...styles.card,
          boxShadow: isHovered 
            ? '0 8px 24px rgba(0, 0, 0, 0.1)'
            : '0 4px 12px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.cardContent}>
          <div style={styles.iconContainer}>
            <Image 
              src={icon} 
              alt={title} 
              width={48}
              height={48}
              style={{
                borderRadius: '8px',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div style={styles.cardInfo}>
            <h3 style={styles.cardTitle}>{title}</h3>
            <div>
              {Array.isArray(category) ? (
                category.map((tag, index) => (
                  <span key={index} style={styles.cardCategory}>#{tag}</span>
                ))
              ) : (
                <span style={styles.cardCategory}>#{category}</span>
              )}
            </div>
            <p style={styles.cardDescription}>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// 添加一个展开/收起按钮组件
const ToggleButton = ({ isExpanded, onClick }: { isExpanded: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    style={{
      ...styles.toggleButton,
      right: isExpanded ? '-20px' : '-28px',
    }}
  >
    <span style={styles.toggleArrow}>{isExpanded ? '◀' : '▶'}</span>
  </button>
);

// 修改侧边栏组件
const Sidebar = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null);

  const menuItems = [
    {
      title: '内容创作与写作',
      icon: '✍️',
      subItems: [
        { 
          title: '社交媒体文案', 
          description: '生成小红书、微博、Instagram 等平台的短文案' 
        },
        { 
          title: '小说与文章写作', 
          description: '生成博客或长文案写作' 
        },
        { 
          title: '学术小助手', 
          description: '论文写作和学术研究辅助' 
        }
      ]
    },
    {
      title: '图像生成与编辑',
      icon: '🎨',
      subItems: [
        { 
          title: 'AI生成艺术', 
          description: '原创图像生成，适合艺术创作和概念设计' 
        },
        { 
          title: '图片增强与修复', 
          description: '提升图像质量，增强细节' 
        },
        { 
          title: '模板化设计与排版', 
          description: '快速创建专业的设计作品' 
        }
      ]
    }
  ];

  // 添加点击处理函数
  const handleCategoryClick = (title: string) => {
    onCategorySelect(title);
  };

  return (
    <>
      {/* 添加一个收起状态下的迷你侧边栏 */}
      {!isExpanded && (
        <div style={styles.miniSidebar}>
          <ToggleButton isExpanded={isExpanded} onClick={() => setIsExpanded(true)} />
          {menuItems.map((item, index) => (
            <MiniMenuItem 
              key={index}
              item={item.icon}
              title={item.title}
            />
          ))}
        </div>
      )}
      
      {/* 展开状态的侧边栏 */}
      <div style={{
        ...styles.sidebar,
        transform: isExpanded ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
      }}>
        <ToggleButton isExpanded={isExpanded} onClick={() => setIsExpanded(false)} />
        <div style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              style={styles.categoryWrapper}
              onClick={() => handleCategoryClick(item.title)}
            >
              <div 
                style={{
                  ...styles.menuCategory,
                  backgroundColor: hoveredCategory === item.title ? 'rgba(188, 156, 255, 0.1)' : 'transparent'
                }}
                onMouseEnter={() => setHoveredCategory(item.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <span style={styles.menuIcon}>{item.icon}</span>
                <span style={styles.menuTitle}>{item.title}</span>
              </div>
              <div style={styles.subMenuContainer}>
                {item.subItems.map((subItem, subIndex) => (
                  <MenuItem 
                    key={subIndex} 
                    item={subItem} 
                    index={subIndex} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// 修改工具数据结构
const toolsData = {
  '社交媒体文案': [
    {
      title: 'Copy.ai',
      description: '智能生成多平台营销文案，支持多种文案类型和风格',
      icon: '/Copy.ai.png',
      category: ['白嫖', '网感型', '创意激发器', '社交']
    },
    {
      title: '晓语台',
      description: '专注中文社交媒体文案，擅长小红书、抖音等平台风格',
      icon: '/晓语台.png',
      category: ['白嫖', '网感型', '创意激发器', '社交']
    },
    {
      title: 'Rytr',
      description: '多语言文案生成，支持25+种语言的创意写作',
      icon: '/Rytr.png',
      category: '文案创作'
    },
    {
      title: 'Writesonic',
      description: '专业的营销文案工具，擅长品牌宣传和产品描述',
      icon: '/Writesonic.jpg',
      category: '文案创作'
    }
  ],
  '小说与文章写作': [
    {
      title: 'Kimi长文生成器',
      description: '智能生成长篇文章，支持多种写作风格和主题',
      icon: '/Kimi.jpg',
      category: '长文创作'
    },
    {
      title: '火山写作',
      description: '专业的中文写作助手，提供智能纠错和润色功能',
      icon: '/火山写作.png',
      category: '写作辅助'
    },
    {
      title: 'ChatGPT',
      description: '强大的AI写作工具，可用于创意写作和内容生成',
      icon: '/writing.png',
      category: 'AI写作'
    }
  ],
  '学术小助手': [
    {
      title: 'Grammarly',
      description: '专业的语法检查和写作优化工具，提供学术写作建议',
      icon: '/writing.png',
      category: '写作辅助'
    },
    {
      title: 'ProWritingAid',
      description: '深度文本分析工具，改进学术写作风格和结构',
      icon: '/writing.png',
      category: '写作分析'
    },
    {
      title: 'Wordvice AI',
      description: '专业的学术论文编辑和校对服务',
      icon: '/writing.png',
      category: '论文编辑'
    },
    {
      title: 'Scholarcy',
      description: '智能文献读和总结工具，快速取关键信息',
      icon: '/writing.png',
      category: '文献分析'
    }
  ],
  'AI生成艺术': [
    {
      title: 'AI绘画助手',
      description: '将文字描述转化为精美的艺术作品',
      icon: '/images/art.png',
      category: '艺术创作'
    },
    {
      title: '概念设计生成器',
      description: '快速生成产品和场景概念图',
      icon: '/images/concept.png',
      category: '设计意'
    },
    {
      title: '角色设计助手',
      description: '生成游戏和动画角色设计',
      icon: '/images/character.png',
      category: '角色设计'
    },
    {
      title: '场景生成器',
      description: '创建独特的场景和背景图像',
      icon: '/images/scene.png',
      category: '场景设计'
    }
  ],
  '图片增强与修复': [
    {
      title: '图像超分辨率',
      description: '提升图片清晰度和细节',
      icon: '/images/enhance.png',
      category: '图像处理'
    },
    {
      title: '老照片修复',
      description: '修复和增强旧照片',
      icon: '/images/restore.png',
      category: '图像修复'
    },
    {
      title: '图像降噪',
      description: '去除图片噪点提升质量',
      icon: '/images/denoise.png',
      category: '图像优化'
    }
  ],
  '模板化设计与排版': [
    {
      title: '海报设计助手',
      description: '快速生成专业海报设计',
      icon: '/images/poster.png',
      category: '平面设计'
    },
    {
      title: '社媒图片生成器',
      description: '生成各平台规格的图片',
      icon: '/images/social.png',
      category: '社设计'
    },
    {
      title: '版式计工具',
      description: '智能排版和布局优化',
      icon: '/images/layout.png',
      category: '排版设计'
    }
  ]
};

// 修改主页面组件
export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('内容创作与写作');

  // 据选中的类别返回对应的子类别列表
  const getSubCategories = () => {
    if (selectedCategory === '内容创作与写作') {
      return [
        { title: '社交媒体文案', tools: toolsData['社交媒体文案'] },
        { title: '小说与文章写作', tools: toolsData['小说与文章写作'] },
        { title: '学术小助手', tools: toolsData['学术小助手'] }
      ];
    } else if (selectedCategory === '图像生成与编辑') {
      return [
        { title: 'AI成艺术', tools: toolsData['AI生成艺术'] },
        { title: '图片增强与修复', tools: toolsData['图片增强与修复'] },
        { title: '模板化设计与排版', tools: toolsData['模板化设计与排版'] }
      ];
    }
    return [];
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Sidebar onCategorySelect={setSelectedCategory} />
        <main style={styles.main}>
          <div style={styles.mainContent}>
            <h1 style={styles.title}>{selectedCategory}</h1>
            
            {getSubCategories().map((category, index) => (
              <section key={index} style={styles.section}>
                <h2 style={styles.subtitle}>{category.title}</h2>
                <div style={styles.grid}>
                  {category.tools?.map((tool, toolIndex) => (
                    <ToolCard key={toolIndex} {...tool} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FEFCFD',
    fontFamily: "'Segoe UI', 'Microsoft YaHei', sans-serif",
    paddingTop: '64px',
  },
  content: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '300px',
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '16px',
    padding: '24px 24px 24px 24px',
    position: 'fixed',
    left: 0,
    top: '64px',
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 1,
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    paddingTop: '24px',
  },
  menuItem: {
    padding: '12px',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  menuIcon: {
    fontSize: '20px',
  },
  menuText: {
    color: '#41537B',
    fontWeight: '600',
    fontSize: '0.95rem',
    marginBottom: '8px',
  },
  main: {
    flex: 1,
    marginLeft: '300px',
    padding: '32px',
    marginTop: '40px',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#41537B',
    marginBottom: '32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 一行两个卡片
    gap: '24px',
    marginBottom: '32px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '32px', // 增加内边距
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s ease',
    width: '100%', // 确保卡片占满宽度
  },
  cardContent: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    padding: '4px 0',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    backgroundColor: 'rgba(188, 156, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    overflow: 'hidden',
    flexShrink: 0,
  },
  cardInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '10px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#41537B',
    marginBottom: '12px',
  },
  cardCategory: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '999px',
    backgroundColor: 'rgba(188, 156, 255, 0.1)',
    color: '#BC9CFF',
    fontSize: '14px',
    marginBottom: '16px',
    marginRight: '8px',
  },
  cardDescription: {
    fontSize: '15px',
    color: '#666666',
    lineHeight: 1.6,
    marginTop: '8px',
  },
  menuCategory: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 12px',
    borderBottom: '1px solid rgba(188, 156, 255, 0.2)',
    marginBottom: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  menuTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#41537B',
  },
  subMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingLeft: '12px',
  },
  menuItemContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuDescription: {
    color: '#666666',
    fontSize: '0.85rem',
    lineHeight: '1.4',
  },
  categoryWrapper: {
    marginBottom: '24px',
  },
  toggleButton: {
    position: 'absolute',
    right: '-16px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#BC9CFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(188, 156, 255, 0.3)',
    zIndex: 20,
    transition: 'all 0.3s ease',
    padding: 0,
  },
  toggleArrow: {
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  miniSidebar: {
    width: '60px',
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
    padding: '24px 8px',
    position: 'fixed',
    left: 0,
    top: '64px',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    zIndex: 1,
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  },
  miniMenuItem: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: 'rgba(188, 156, 255, 0.1)',
  },
  section: {
    marginBottom: '48px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#41537B',
    marginBottom: '24px',
  },
};

// 修改 MenuItem 组件
const MenuItem = ({ item, index }: { 
  item: { title: string; description: string }; 
  index: number 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.menuItem,
        backgroundColor: isHovered ? 'rgba(188, 156, 255, 0.1)' : 'transparent',
        textDecoration: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.menuItemContent}>
        <span style={styles.menuText}>{item.title}</span>
        <p style={styles.menuDescription}>{item.description}</p>
      </div>
    </div>
  );
};

// 修改 miniMenuItem 的悬效果
const MiniMenuItem = ({ item, title }: { item: string; title: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        ...styles.miniMenuItem,
        backgroundColor: isHovered ? 'rgba(188, 156, 255, 0.2)' : 'rgba(188, 156, 255, 0.1)'
      }}
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={styles.menuIcon}>{item}</span>
    </div>
  );
}; 