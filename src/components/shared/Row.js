import React, { useRef } from 'react';
import styled from 'styled-components';

// Reusable Netflix-style content row: title + horizontally scrolling track
// with hover-reveal chevron arrows that page through the items.
// `bottomPad` reserves vertical space below the cards so hover-expand
// previews (used by Projects) are not clipped by the scroll container.

const Section = styled.section`
  padding: 20px 0;
`;

const RowTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 15px 50px;
`;

const Outer = styled.div`
  position: relative;

  &:hover button.row-arrow {
    opacity: 1;
  }
`;

const Viewport = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 50px ${props => props.$bottomPad || 8}px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Arrow = styled.button`
  position: absolute;
  top: 8px;
  bottom: ${props => props.$bottomPad || 8}px;
  ${props => (props.$dir === 'left' ? 'left: 0;' : 'right: 0;')}
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${props => (props.$dir === 'left' ? '90deg' : '270deg')},
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 25;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    background: linear-gradient(
      ${props => (props.$dir === 'left' ? '90deg' : '270deg')},
      rgba(0, 0, 0, 0.88),
      rgba(0, 0, 0, 0.1)
    );
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function Row({ id, title, children, bottomPad }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (el) {
      el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <Section id={id}>
      <RowTitle>{title}</RowTitle>
      <Outer>
        <Arrow
          className="row-arrow"
          $dir="left"
          $bottomPad={bottomPad}
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          ❮
        </Arrow>
        <Viewport ref={ref} $bottomPad={bottomPad}>
          {children}
        </Viewport>
        <Arrow
          className="row-arrow"
          $dir="right"
          $bottomPad={bottomPad}
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          ❯
        </Arrow>
      </Outer>
    </Section>
  );
}

export default Row;
