'use client';

import React, { CSSProperties, useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 定义选项类型
type Identity = '学生党' | '职场小白' | null;
type AIField = '文本' | '图片' | '聊天' | '代码' | '视频' | '音频' | '办公' | null;

// 定义推荐工具类型
interface RecommendTool {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string[];
}

const HomePage = () => {
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(true);
  const [identity, setIdentity] = useState<Identity>(null);
  const [aiField, setAiField] = useState<AIField>(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

  // 添加回鼠标事件处理函数
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  // 修改推荐工具数据结构
  const recommendTools: Record<string, RecommendTool> = {
    '文本': {
      id: 'copy-ai',
      title: 'Copy.ai',
      description: '智能生成多平台营销文案，支持多种文案类型和风格',
      icon: '/Copy.ai.png',
      link: '/tools/xiezuo/copy-ai',
      category: ['白嫖', '网感型', '创意激发器', '社交']
    },
    '图片': {
      id: 'midjourney',
      title: 'Midjourney',
      description: 'AI图像生成工具，将文字转换为艺术作品',
      icon: '/midjourney.png',
      link: '/tools/image/midjourney',
      category: ['AI绘画', '图像生成', '创意设计']
    },
    '聊天': {
      id: 'chatgpt',
      title: 'ChatGPT',
      description: '强大的AI对话助手，可以回答问题、写作和编程',
      icon: '/chatgpt.png',
      link: '/tools/chat/chatgpt',
      category: ['AI对话', '智能助手', '多功能']
    },
    '代码': {
      id: 'github-copilot',
      title: 'GitHub Copilot',
      description: 'AI编程助手，提供代码建议和自动完成',
      icon: '/github-copilot.png',
      link: '/tools/code/github-copilot',
      category: ['编程助手', '代码生成', '开发工具']
    },
    '视频': {
      id: 'runway',
      title: 'Runway',
      description: 'AI视频编辑和生成工具',
      icon: '/runway.png',
      link: '/tools/video/runway',
      category: ['视频编辑', '特效生成', '创意工具']
    },
    '音频': {
      id: 'mubert',
      title: 'Mubert',
      description: 'AI音乐生成工具',
      icon: '/mubert.png',
      link: '/tools/audio/mubert',
      category: ['音乐生成', '音频处理', '创意音乐']
    },
    '办公': {
      id: 'notion-ai',
      title: 'Notion AI',
      description: 'AI驱动的智能办公助手',
      icon: '/notion-ai.png',
      link: '/tools/office/notion-ai',
      category: ['办公助手', '文档处理', '协作工具']
    }
  };

  const handleComplete = () => {
    if (identity && aiField) {
      setShowWelcome(false);
      setShowRecommendation(true);
    }
  };

  // 在推荐工具弹窗中使用选择的领域
  const getRecommendedTool = () => {
    return aiField ? recommendTools[aiField] : recommendTools['文本'];
  };

  // 添加处理最后三个按钮位置的函数
  const getButtonStyle = (index: number, total: number) => {
    const isLastThree = index >= total - 3;
    return {
      ...styles.optionButton,
      backgroundColor: aiField === ['文本', '图片', '聊天', '代码', '视频', '音频', '办公'][index] ? '#BC9CFF' : 'white',
      color: aiField === ['文本', '图片', '聊天', '代码', '视频', '音频', '办公'][index] ? 'white' : '#41537B',
      transform: isLastThree ? 'translateX(calc(25% + 4px))' : 'none',
    };
  };

  return (
    <div style={styles.container}>
      {/* 欢迎弹窗 */}
      {showWelcome && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>
              欢迎来到 AI TOOLS
              <div style={styles.modalTitleDecoration}></div>
            </h2>
            
            <div style={styles.questionSection}>
              <h3 style={styles.questionTitle}>你的身份是？</h3>
              <div style={styles.optionsContainer}>
                <button 
                  style={{
                    ...styles.optionButton,
                    backgroundColor: identity === '学生党' ? '#BC9CFF' : 'white',
                    color: identity === '学生党' ? 'white' : '#41537B',
                  }}
                  onClick={() => setIdentity('学生党')}
                >
                  学生党
                </button>
                <button 
                  style={{
                    ...styles.optionButton,
                    backgroundColor: identity === '职场小白' ? '#BC9CFF' : 'white',
                    color: identity === '职场小白' ? 'white' : '#41537B',
                  }}
                  onClick={() => setIdentity('职场小白')}
                >
                  职场小白
                </button>
              </div>
            </div>

            <div style={styles.questionSection}>
              <h3 style={styles.questionTitle}>想要尝试的AI领域？</h3>
              <div style={styles.aiOptionsContainer}>
                {['文本', '图片', '聊天', '代码', '视频', '音频', '办公'].map((field, index, array) => (
                  <button 
                    key={field}
                    style={getButtonStyle(index, array.length)}
                    onClick={() => setAiField(field as AIField)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = `${index >= array.length - 3 ? 'translateX(calc(25% + 4px))' : 'none'} translateY(-2px)`;
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(188, 156, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = index >= array.length - 3 ? 'translateX(calc(25% + 4px))' : 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {field}
                  </button>
                ))}
              </div>
            </div>

            <button 
              style={{
                ...styles.completeButton,
                opacity: identity && aiField ? 1 : 0.5,
                cursor: identity && aiField ? 'pointer' : 'not-allowed',
              }}
              onClick={handleComplete}
              disabled={!identity || !aiField}
            >
              完成
            </button>
          </div>
        </div>
      )}

      {/* 推荐工具弹窗 */}
      {showRecommendation && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>为你推荐</h2>
            <div style={styles.recommendCard}>
              <Image 
                src={getRecommendedTool().icon}
                alt={getRecommendedTool().title}
                width={80}
                height={80}
                style={styles.recommendIcon}
              />
              <h3 style={styles.recommendTitle}>
                <strong>{getRecommendedTool().title}</strong>
              </h3>
              <p style={styles.recommendDesc}>
                {getRecommendedTool().description}
              </p>
              <div style={styles.recommendTags}>
                {getRecommendedTool().category?.map((tag, index) => (
                  <span key={index} style={styles.recommendTag}>#{tag}</span>
                ))}
              </div>
              <button 
                style={styles.viewDetailButton}
                onClick={() => router.push(getRecommendedTool().link)}
              >
                查看详情
              </button>
            </div>
            <button 
              style={styles.skipButton}
              onClick={() => setShowRecommendation(false)}
            >
              跳过
            </button>
          </div>
        </div>
      )}

      {/* 原有的主页内容 */}
      <main style={styles.mainContent}>
        <div style={styles.leftContent}>
          <h1 style={styles.mainTitle}>AI TOOLS</h1>
          <h2 style={styles.subTitle}>智能罗盘，导航你的AI探索之旅</h2>
          
          <p style={styles.description}>
            发现、探索和利用最新的AI工具和技术。
            我们精心筛选和评估每一个AI工具，
            为您提供最实用、最创新的AI应用推荐。
          </p>

          {/* 搜索框 */}
          <div style={styles.searchBox}>
            <input 
              type="text" 
              placeholder="探索AI工具..." 
              style={styles.searchInput}
            />
            <button 
              style={styles.searchButton}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              搜索
            </button>
          </div>
          
          <div style={styles.ctaSection}>
            <button 
              style={styles.primaryButton}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => router.push('/tools')}
            >
              开启你的旅程
            </button>
          </div>

          <div style={styles.statsSection}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>30+</span>
              <span style={styles.statLabel}>AI工具</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>10+</span>
              <span style={styles.statLabel}>应用场景</span>
            </div>
          </div>
        </div>
        
        {/* 添加右侧图片 */}
        <div style={styles.rightContent}>
          <Image 
            src="/0_0.png"
            alt="AI Tool"
            width={550}
            height={550}
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
              transform: 'translate(20px, 40px)'
            }}
          />
        </div>
      </main>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FEFCFD',
    fontFamily: "'Segoe UI', 'Microsoft YaHei', sans-serif",
    paddingTop: '64px',
  },
  
  mainContent: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '6rem auto 0',
    padding: '0 2rem',
    gap: '4rem',
    alignItems: 'center',
  },
  
  leftContent: {
    flex: '1',
    maxWidth: '600px',
    paddingTop: '3rem',
  },
  
  mainTitle: {
    fontSize: '4rem',
    fontWeight: '800',
    color: '#41537B',
    marginBottom: '2rem',
    lineHeight: '1.1',
    letterSpacing: '-1px',
  },
  
  subTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#41537B',
    marginBottom: '2.5rem',
    lineHeight: '1.3',
  },
  
  description: {
    fontSize: '1.2rem',
    color: '#41537B',
    lineHeight: '1.8',
    marginBottom: '3rem',
    maxWidth: '90%',
  },
  
  searchBox: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '2rem',
  },
  
  searchInput: {
    flex: '1',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    border: '2px solid rgba(167, 139, 250, 0.2)',
    borderRadius: '25px',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  
  searchButton: {
    backgroundColor: '#BC9CFF',
    color: '#FFFFFF',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(188, 156, 255, 0.2)',
  },
  
  ctaSection: {
    marginBottom: '2.5rem',
  },
  
  primaryButton: {
    backgroundColor: '#BC9CFF',
    color: '#FFFFFF',
    padding: '1rem 2.5rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(188, 156, 255, 0.2)',
  },
  
  statsSection: {
    display: 'flex',
    gap: '4rem',
  },
  
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#41537B',
    lineHeight: '1',
  },
  
  statLabel: {
    fontSize: '1rem',
    color: '#41537B',
  },
  
  rightContent: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    paddingRight: '20px',
  },
  
  ipImage: {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
  
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  modalContent: {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '36px',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },

  modalTitle: {
    fontSize: '32px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #4568DC 0%, #B06AB3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '32px',
    textAlign: 'center',
    fontFamily: "'SF Pro Display', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",
    letterSpacing: '-0.5px',
    textTransform: 'none',
    position: 'relative',
    padding: '0 0 12px 0',
  },

  modalTitleDecoration: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #4568DC 0%, #B06AB3 100%)',
    borderRadius: '2px',
  },

  questionSection: {
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  questionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#41537B',
    marginBottom: '20px',
    textAlign: 'center',
  },

  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '360px',
    marginBottom: '16px',
  },

  aiOptionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    width: '100%',
    maxWidth: '520px',
    margin: '0 auto',
  },

  optionButton: {
    padding: '12px 24px',
    borderRadius: '14px',
    border: '2px solid #BC9CFF',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    backgroundColor: 'white',
    minWidth: '100px',
  },

  completeButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#BC9CFF',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '500',
    marginTop: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  recommendCard: {
    backgroundColor: '#F8F9FF',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
  },

  recommendIcon: {
    borderRadius: '12px',
    marginBottom: '16px',
  },

  recommendTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#41537B',
    marginBottom: '16px',
  },

  recommendDesc: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '24px',
  },

  viewDetailButton: {
    backgroundColor: '#BC9CFF',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  skipButton: {
    backgroundColor: 'transparent',
    color: '#666',
    border: 'none',
    padding: '12px',
    marginTop: '16px',
    cursor: 'pointer',
    fontSize: '14px',
  },

  recommendTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  recommendTag: {
    padding: '6px 12px',
    backgroundColor: 'rgba(188, 156, 255, 0.1)',
    color: '#805AD5',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default HomePage;