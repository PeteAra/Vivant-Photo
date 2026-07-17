import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bubble, BubbleContent } from './ui/Bubble';

const MESSAGES = [
  {
    id: '1',
    from: 'client',
    text: 'Hi Michaela!! We’re engaged and dreaming of a summer shoot 💍',
  },
  {
    id: '2',
    from: 'michaela',
    text: 'Congrats you two!! I’m so down. Tell me the vibe you’re imagining?',
  },
  {
    id: '3',
    from: 'client',
    text: 'Golden hour, lots of laughing, nothing too posed — just us being us.',
  },
  {
    id: '4',
    from: 'michaela',
    text: 'That’s literally my favorite kind of session. I’ll send a few date options!',
  },
  {
    id: '5',
    from: 'client',
    text: 'Yesss can’t wait 🥹',
  },
];

const imessagePop = {
  hidden: { opacity: 0, y: 18, scale: 0.84 },
  shown: { opacity: 1, y: 0, scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 520,
    damping: 28,
    mass: 0.7,
  },
};

const ChatMessage = ({ message, previousFrom, index }) => {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const isMichaela = message.from === 'michaela';
  const sameSender = previousFrom === message.from;

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return undefined;

    let observer = null;
    let cancelled = false;
    let tries = 0;
    let timer = null;

    const bind = () => {
      if (cancelled) return true;
      const scrollRoot = document.querySelector('.home-scroll--bleed');
      if (!scrollRoot) return false;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          root: scrollRoot,
          threshold: 0.4,
          rootMargin: '-15% 0px -25% 0px',
        }
      );
      observer.observe(row);
      return true;
    };

    const tryBind = () => {
      if (bind() || tries > 30 || cancelled) return;
      tries += 1;
      timer = window.setTimeout(tryBind, 40);
    };
    tryBind();

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={rowRef}
      initial="hidden"
      animate={visible ? 'shown' : 'hidden'}
      variants={{
        hidden: imessagePop.hidden,
        shown: imessagePop.shown,
      }}
      transition={{
        ...imessagePop.transition,
        delay: visible ? index * 0.03 : 0,
      }}
      className={`chat-reveal-row${sameSender ? ' chat-reveal-row--tight' : ''}${
        isMichaela ? ' chat-reveal-row--sent' : ' chat-reveal-row--received'
      }`}
      style={{
        transformOrigin: isMichaela ? '100% 100%' : '0% 100%',
      }}
    >
      <Bubble
        align={isMichaela ? 'end' : 'start'}
        variant={isMichaela ? 'default' : 'muted'}
      >
        <BubbleContent>{message.text}</BubbleContent>
      </Bubble>
    </motion.div>
  );
};

const ChatReveal = () => (
  <div
    className="home-image-reveal"
    aria-label="Sample text conversation between Michaela and a client"
  >
    <div className="chat-reveal-thread">
      {MESSAGES.map((message, index) => (
        <ChatMessage
          key={message.id}
          message={message}
          previousFrom={MESSAGES[index - 1]?.from}
          index={index}
        />
      ))}
    </div>
  </div>
);

export default ChatReveal;
