'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const xiaoyutaiPage = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const router = useRouter();

  return (
    <div className="container">
      <div className="content">
        <div className="hero-section">
          <div className="breadcrumb">
            <span 
              onClick={() => router.push('/tools')} 
              style={{ cursor: 'pointer' }}
            >
              内容创作与写作
            </span>
            <span className="separator">{'>'}</span>
            <span>社交媒体文案</span>
          </div>
          
          <div className="hero-content">
            <div className="left-content">
              <div className="title-section">
                <div className="logo">
                  <Image 
                    src="/晓语台.png"
                    alt="晓语台"
                    width={40}
                    height={40}
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <h1>晓语台</h1>
              </div>

              <p className="subtitle">
                利用智能写作工具，只需几秒钟，完成高质量广告文案创作
              </p>

              <div className="tags">
                {['白嫖', '网感型', '创意激发器', '社交'].map((tag, index) => (
                  <span key={index} className="tag">#{tag}</span>
                ))}
              </div>

              <a 
                href="https://www.xiaoyutai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: isHovered ? 'translateY(-2px)' : 'none'
                }}
              >
                跳转链接
              </a>

              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">模板</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">语言</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">功能</span>
                </div>
              </div>
            </div>

            <div className="right-content">
              <Image 
                src="/晓语台-page.png"
                alt="晓语台 Screenshot"
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                }}
                priority
              />
            </div>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">📝</span>
            工具介绍
          </h2>
          <p className="section-text">
          晓语台是一款基于AI技术的智能创作平台，专注于营销文本的AI创作，覆盖500余款创作主题，服务于多行业和职业场景，帮助企业和自媒体人快速获取创作灵感和营销物料，提升内容创作的便利性和效率。
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">👥</span>
            面向用户
          </h2>
          <div className="user-grid">
            <div className="user-card">
              <h3 className="user-title" style={{ textAlign: 'center' }}>企业营销人员</h3>
              <p className="user-desc" style={{ textAlign: 'center' }}>需要快速生成产品描述、广告文案、活动宣传等营销内容的企业。</p>
            </div>
            <div className="user-card">
              <h3 className="user-title" style={{ textAlign: 'center' }}>自媒体创作者</h3>
              <p className="user-desc" style={{ textAlign: 'center' }}>为博主、vlogger等内容创作者提供文案灵感和素材。</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">⚡</span>
            主要功能
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>智能文本创作</h3>
              <p className="feature-desc">
              利用先进的AI技术，快速生成高质量的营销文案
              </p>
            </div>
            <div className="feature-card">
              <h3>多场景覆盖</h3>
              <p className="feature-desc">
              提供500余款创作主题，涵盖不同行业、平台和职业场景
              </p>
            </div>
            <div className="feature-card">
              <h3>点击式操作</h3>
              <p className="feature-desc">
              用户友好的界面设计，让创作过程变得简单直观
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">💰</span>
            价格方案
          </h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <p className="price">永久免费</p>
              <ul className="features-list">
                <li>· 2,000字的聊天</li>
                <li>· ChatGPT 3.5 & Claude 3</li>
                <li>· 支持品牌声音</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="price">$49/月</p>
              <ul className="features-list">
                <li>· 无限字数的聊天</li>
                <li>· 15+营销工作流程</li>
                <li>· 销售工作流程</li>
                <li>· 私人社区访问</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Advanced</h3>
              <p className="price">$249/月</p>
              <ul className="features-list">
                <li>· 2k工作流程积分/月</li>
                <li>· 无限的聊天项目</li>
                <li>· 访问所有最新的LLMs</li>
                <li>· Workflow Builder访问</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">📖</span>
            新手教程
          </h2>
          <div className="tutorial-grid">
            <div className="tutorial-image-wrapper">
              <Image 
                src="/copyai教程1.png"
                alt="Copy.ai Tutorial 1"
                width={520}
                height={293}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
              <a 
                href="https://www.bilibili.com/video/BV1wSiRYRE7q"
                target="_blank"
                rel="noopener noreferrer"
                className="play-button"
              >
                <div className="play-icon"></div>
              </a>
            </div>
            <div className="tutorial-image-wrapper">
              <Image 
                src="/copyai教程2.png"
                alt="Copy.ai Tutorial 2"
                width={520}
                height={293}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
              <a 
                href="https://www.bilibili.com/video/BV1ZZiRYEEYv"
                target="_blank"
                rel="noopener noreferrer"
                className="play-button"
              >
                <div className="play-icon"></div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: #FEFCFD;
          padding-top: 84px;
        }

        .content {
          max-width: 1104px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .hero-section {
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 40px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        .breadcrumb {
          margin-bottom: 24px;
          color: #666;
        }

        .breadcrumb span {
          color: #666;
          text-decoration: none;
        }

        .separator {
          margin: 0 8px;
          color: #999;
        }

        .section {
          margin-bottom: 40px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 600;
          color: #41537B;
          margin-bottom: 24px;
        }

        .section-icon {
          font-size: 24px;
        }

        .subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .tags {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .tag {
          padding: 6px 12px;
          background-color: rgba(188, 156, 255, 0.1);
          color: #805AD5;
          border-radius: 16px;
          font-size: 14px;
        }

        .cta-button {
          display: inline-block;
          background-color: #BC9CFF;
          color: white;
          padding: 14px 36px;
          border-radius: 12px;
          text-decoration: none;
          margin: 16px 0 28px;
          transition: all 0.2s ease;
          font-weight: 500;
          width: fit-content;
        }

        .stats {
          display: flex;
          gap: 32px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #41537B;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
        }

        .description-section {
          margin-top: 48px;
        }

        .description-section h2 {
          font-size: 24px;
          color: #41537B;
          margin-bottom: 16px;
        }

        .description-section p {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
        }

        .stats-grid {
          display: flex;
          gap: 48px;
          margin-top: 8px;
          padding-left: 8px;
        }

        .user-grid, .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .tutorial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 24px;
          width: 100%;
          max-width: 1104px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-text {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
        }

        .user-card, .feature-card, .pricing-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .pricing-card {
          text-align: center;
        }

        .price {
          font-size: 24px;
          font-weight: 600;
          color: #41537B;
          margin: 16px 0;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          padding: 8px 0;
          color: #666;
        }

        .tutorial-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(255, 255, 255, 1);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 12px 0 12px 20px;
          border-color: transparent transparent transparent #666;
          margin-left: 4px;
        }

        .hero-content {
          display: flex;
          gap: 48px;
          margin-top: 24px;
          max-width: 1104px;
          margin-left: auto;
          margin-right: auto;
        }

        .left-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .right-content {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .title-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .title-section h1 {
          font-size: 32px;
          font-weight: 700;
          color: #41537B;
          margin: 0;
        }

        .stats-grid {
          display: flex;
          gap: 48px;
          margin-top: 8px;
          padding-left: 8px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #41537B;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
        }

        .user-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .user-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .user-title {
          font-size: 20px;
          font-weight: 600;
          color: #41537B;
          margin-bottom: 16px;
          text-align: center;
        }

        .user-desc {
          color: #666;
          line-height: 1.6;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .feature-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          text-align: center;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #41537B;
          margin-bottom: 16px;
          text-align: center;
        }

        .feature-desc {
          color: #666;
          line-height: 1.6;
          text-align: center;
          margin-top: 12px;
        }

        .tutorial-image-wrapper {
          position: relative;
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(255, 255, 255, 1);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 12px 0 12px 20px;
          border-color: transparent transparent transparent #666;
          margin-left: 4px;
        }

        .section {
          max-width: 1104px;
          margin: 0 auto 48px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        .feature-desc {
          color: #666;
          text-align: center;
          line-height: 1.6;
          margin-top: 12px;
        }

        .tutorial-image-wrapper {
          border-radius: 16px;
          overflow: hidden;
        }

        .tutorial-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          transition: transform 0.3s ease;
        }

        .features-list li {
          color: #666;
          margin-bottom: 12px;
          line-height: 1.6;
          text-align: left;
        }

        .breadcrumb span {
          color: #666;
          text-decoration: none;
        }

        .breadcrumb span:first-child:hover {
          color: #BC9CFF;
        }
      `}</style>
    </div>
  );
};

export default xiaoyutaiPage;

