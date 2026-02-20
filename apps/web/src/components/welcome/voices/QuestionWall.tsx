import React from 'react';

interface QuestionBubble {
  id: string;
  text: string;
  left: string;
  bottom: string;
  duration: string;
  delay: string;
}

const QUESTION_BUBBLES: QuestionBubble[] = [
  {
    id: 'q1',
    text: '"Is it normal to cry this much after birth?"',
    left: '2%',
    bottom: '20%',
    duration: '7s',
    delay: '0s',
  },
  {
    id: 'q2',
    text: '"My doctor dismissed me. What do I do?"',
    left: '22%',
    bottom: '30%',
    duration: '9s',
    delay: '1.2s',
  },
  {
    id: 'q3',
    text: '"Can I still have children after my diagnosis?"',
    left: '42%',
    bottom: '15%',
    duration: '8s',
    delay: '0.5s',
  },
  {
    id: 'q4',
    text: '"Why does nobody talk about miscarriage grief?"',
    left: '62%',
    bottom: '35%',
    duration: '7.5s',
    delay: '2s',
  },
  {
    id: 'q5',
    text: '"Is my pain in my head, or is it real?"',
    left: '78%',
    bottom: '22%',
    duration: '10s',
    delay: '0.8s',
  },
  {
    id: 'q6',
    text: '"What if I never bond with my baby?"',
    left: '10%',
    bottom: '55%',
    duration: '8.5s',
    delay: '1.5s',
  },
  {
    id: 'q7',
    text: '"Nobody told me menopause would feel like this"',
    left: '35%',
    bottom: '60%',
    duration: '7s',
    delay: '0.3s',
  },
  {
    id: 'q8',
    text: '"Am I the only one who feels this way?"',
    left: '58%',
    bottom: '65%',
    duration: '9.5s',
    delay: '1.8s',
  },
  {
    id: 'q9',
    text: '"How do I tell my family about my diagnosis?"',
    left: '80%',
    bottom: '58%',
    duration: '8s',
    delay: '0.9s',
  },
];

export const QuestionWall: React.FC = () => {
  return (
    <div className="question-wall reveal">
      <canvas id="questionCanvas" />
      {QUESTION_BUBBLES.map((bubble) => (
        <div
          key={bubble.id}
          className="q-bubble"
          style={{
            left: bubble.left,
            bottom: bubble.bottom,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        >
          {bubble.text}
        </div>
      ))}
    </div>
  );
};

