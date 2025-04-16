import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
`;

const StalkerContainer = styled(motion.section)`
  max-width: 800px;
  margin: 100px auto;
  padding: 60px 20px;
  text-align: center;
`;
const FunText = styled.p` font-size: 1.1rem; margin-bottom: 1.5rem; color: #333; `;
const FunList = styled.ul` list-style: none; padding: 0; margin-bottom: 1.5rem; `;
const FunItem = styled(motion.li)` margin: 10px 0; `;

const StalkerPage = () => {
  return (
    <StalkerContainer 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <SectionHeader>😜 Stalker Page</SectionHeader>
      <FunText>Oh, hi there! You found my not-so-secret Stalker Page. Since you’re here, enjoy some fun facts and quirky tidbits about me:</FunText>
      <FunList>
        <FunItem whileHover={{ scale: 1.1, rotate: 2 }}>
          If you're reading this, you either really like me or clicked the wrong link. I'll assume it's the first 😉.
        </FunItem>
        <FunItem whileHover={{ scale: 1.1, rotate: -2 }}>
          Easter Egg: I watch literally everything cinema, because I'm opsessed with creativity        </FunItem>
        <FunItem whileHover={{ scale: 1.1, rotate: 1 }}>
          Fun Fact: My code probably has more coffee in it than bytes. ☕ Debugging at 3 AM actually works (with enough caffeine).
        </FunItem>
        <FunItem whileHover={{ scale: 1.1, rotate: -1 }}>
          Secret Talent: I can hold a conversation with a rubber duck. It’s how I fix tricky bugs — advanced debugging technique!
        </FunItem>
      </FunList>
      <FunText>Thanks for visiting the Stalker Page. Now go check out my projects before I catch you snooping! 😄</FunText>
    </StalkerContainer>
  );
};

export default StalkerPage;