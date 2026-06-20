import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Row from '../shared/Row';

const CardWrapper = styled(motion.div)`
  flex: 0 0 280px;
  position: relative;
  transform-origin: center top;
`;

const CardImage = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 160px;
  background: ${props => props.color || '#333'};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
`;

const CardDescription = styled.p`
  font-size: 0.75rem;
  color: #b3b3b3;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e50914;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  text-transform: uppercase;
`;

// Netflix-style hover "mini-modal" that drops below the card
const Preview = styled(motion.div)`
  position: absolute;
  top: calc(100% - 4px);
  left: 0;
  right: 0;
  background: #181818;
  border-radius: 0 0 6px 6px;
  padding: 14px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
`;

const PreviewButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

const RoundBtn = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(42, 42, 42, 0.6);
  color: #fff;
  transition: all 0.2s;

  &:hover {
    border-color: #fff;
  }

  &.play {
    background: #fff;
    color: #000;
    border-color: #fff;

    &:hover {
      background: #e5e5e5;
    }
  }
`;

const PreviewMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  color: #ddd;
  margin-bottom: 8px;
`;

const Match = styled.span`
  color: #46d369;
  font-weight: 700;
`;

const HD = styled.span`
  border: 1px solid #777;
  border-radius: 3px;
  padding: 0 4px;
  font-size: 0.6rem;
  color: #aaa;
`;

const PreviewTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.72rem;
  color: #ddd;
`;

const Dot = styled.span`
  color: #646464;
  margin: 0 6px;
  font-size: 0.6rem;
`;

const projectData = [
  {
    title: "RenewCanvas Africa",
    description: "Circular-economy art marketplace turning plastic waste into purchasable art. Built solo as founder — AI listing & pricing assistant, 3D virtual gallery, MTN MoMo checkout, and per-artwork impact tracking.",
    color: "linear-gradient(135deg, #0b3d2e 0%, #2e8b57 100%)",
    badge: "Featured",
    // TODO: confirm live URL — README references renewcanvas.africa
    link: "https://renewcanvas.page",
    year: "2026",
    match: 99,
    tags: ["Circular Economy", "Marketplace", "AI"]
  },
  {
    title: "Advnchur",
    description: "A social network where your bucket list becomes your profile — cross off goals as BeReal-style moments, match with people who share your dreams, and rally allies to help you live the list.",
    color: "linear-gradient(135deg, #0a0a0f 0%, #d4a017 100%)",
    badge: "New",
    // TODO: add live URL once deployed (planned domain: twentythree.app)
    year: "2026",
    match: 97,
    tags: ["Social Network", "Next.js", "Supabase"]
  },
  {
    title: "Heimdall",
    description: "AI-powered inmate tracking system using ArcFace deep learning and FAISS vector search. Real-time camera monitoring with 100% accuracy.",
    color: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    badge: "Featured",
    link: "https://heimdall-frontend.onrender.com/",
    video: "https://youtu.be/mrSDCkoHs4M",
    year: "2025",
    match: 98,
    tags: ["AI/ML", "Computer Vision", "Real-Time"]
  },
  {
    title: "AQI App",
    description: "Interactive app providing real-time Air Quality Index data with clean visualizations and pollution alerts.",
    color: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    year: "2024",
    match: 95,
    tags: ["Data Viz", "Environment", "API"]
  },
  {
    title: "EmpowerHer Tales",
    description: "Platform sharing inspirational stories of women's empowerment with engaging UI and content management.",
    color: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
    year: "2024",
    match: 93,
    tags: ["Web App", "Social Impact", "CMS"]
  },
  {
    title: "Healthcare App",
    description: "Python-based application connecting healthcare providers, job seekers, and patients with Flask backend.",
    color: "linear-gradient(135deg, #00b4db 0%, #0083b0 100%)",
    year: "2023",
    match: 94,
    tags: ["Python", "Flask", "Backend"]
  },
  {
    title: "YouTube Clone",
    description: "Full-stack web app replicating YouTube features with React frontend and Flask/Python backend.",
    color: "linear-gradient(135deg, #c31432 0%, #240b36 100%)",
    year: "2023",
    match: 92,
    tags: ["Full-Stack", "React", "Flask"]
  },
  {
    title: "Airbnb Clone",
    description: "Property listing & booking platform using React, Flask, and PostgreSQL with search filters and maps.",
    color: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
    year: "2023",
    match: 91,
    tags: ["React", "PostgreSQL", "Maps"]
  }
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Row id="projects" title="My Projects" bottomPad={150}>
      {projectData.map((proj, idx) => (
        <CardWrapper
          key={idx}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === idx ? 1.06 : 1,
            zIndex: hovered === idx ? 30 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <CardImage
            style={{ background: proj.color }}
            href={proj.link || "#"}
            target={proj.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {proj.badge && <CardBadge>{proj.badge}</CardBadge>}
            <CardTitle>{proj.title}</CardTitle>
            <CardDescription>{proj.description}</CardDescription>
          </CardImage>

          <AnimatePresence>
            {hovered === idx && (
              <Preview
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <PreviewButtons>
                  {proj.link && (
                    <RoundBtn className="play" href={proj.link} target="_blank" rel="noopener noreferrer" title="View Live">
                      ▶
                    </RoundBtn>
                  )}
                  {proj.video && (
                    <RoundBtn href={proj.video} target="_blank" rel="noopener noreferrer" title="Watch Demo">
                      ▶
                    </RoundBtn>
                  )}
                  <RoundBtn as="button" type="button" title="Add to list" onClick={e => e.preventDefault()}>
                    ＋
                  </RoundBtn>
                  <RoundBtn as="button" type="button" title="Like" onClick={e => e.preventDefault()}>
                    👍
                  </RoundBtn>
                </PreviewButtons>

                <PreviewMeta>
                  {proj.match && <Match>{proj.match}% Match</Match>}
                  {proj.year && <span>{proj.year}</span>}
                  <HD>HD</HD>
                </PreviewMeta>

                {proj.tags && (
                  <PreviewTags>
                    {proj.tags.map((tag, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <Dot>●</Dot>}
                        <span>{tag}</span>
                      </React.Fragment>
                    ))}
                  </PreviewTags>
                )}
              </Preview>
            )}
          </AnimatePresence>
        </CardWrapper>
      ))}
    </Row>
  );
};

export default Projects;
