/* eslint-disable no-irregular-whitespace */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import React from "react";

const faqItems = [
  {
    question: "1 What digital marketing courses do you offer?",
    answer:
      "RSDM offers comprehensive digital marketing courses covering SEO, social media marketing, Google Ads, content marketing, email marketing, analytics, and more. We provide both beginner and advanced courses tailored for students, job seekers, professionals, and entrepreneurs.  ",
  },
  {
    question: "2 What are the prerequisites for your courses?",
    answer:
      "There are no strict prerequisites. Anyone with a passion for digital marketing can enroll. Basic computer and internet knowledge can be helpful but is not mandatory.",
  },
  {
    question: "3.	What is the duration of your courses?",
    answer:
      "Our courses range from *2 months to 6 months*, depending on the level and depth of the program. We offer flexible schedules to accommodate students and working professionals.  ",
  },
  {
    question: "4.	What are the fees for your courses?",
    answer:
      "Our course fees vary based on the program selected. Please visit our website or contact us for detailed fee structures and payment options.  ",
  },
  {
    question: "5.	Do you offer online or in-person classes, or both?",
    answer:
      "We offer both *in-person* classes at our Rajkot institute and *online* courses for those who prefer flexible learning options.  ",
  },
  {
    question: "6.	Do you provide placement assistance after course completion?",
    answer:
      "Yes, RSDM provides *placement assistance*, including resume building, interview preparation, and job referrals, to help students secure positions in top companies. ",
  },
  {
    question:
      "7.	What are the career opportunities after completing a digital marketing course? ",
    answer:
      "Graduates can explore roles such as *Digital Marketing Specialist, SEO Analyst, Social Media Manager, PPC Expert, Content Marketer, Email Marketing Specialist, and Digital Marketing Consultant* in various industries.  ",
  },
  {
    question:
      "8.	What is the average salary one can expect after completing a digital marketing course? ",
    answer:
      "Entry-level digital marketers can expect salaries starting from *₹3-5 LPA, while experienced professionals can earn *₹8-15 LPA or more**, depending on expertise and location. Freelancers can also earn substantial income through projects.  ",
  },
  {
    question:
      "9. What are the qualifications and experience of your instructors?",
    answer:
      "Our instructors are *industry experts* with *years of experience* in digital marketing, having worked on real-world campaigns for top brands. They bring hands-on knowledge and insights into the latest industry trends.  ",
  },
  {
    question:
      "10.	What makes your digital marketing institute different from others? ",
    answer:
      "RSDM stands out with its *practical approach, expert mentorship, hands-on projects, state-of-the-art facilities, placement support, and industry-relevant curriculum* designed to help students succeed in real-world scenarios.  ",
  },
  {
    question:
      "11.	 How do your courses prepare students for the latest trends in digital marketing, such as AI, automation, and evolving platform algorithms?",
    answer: `We continuously update our curriculum to include *AI-driven marketing, automation tools, evolving SEO & social media algorithms, and data-driven strategies* to ensure our students stay ahead in the ever-changing digital landscape. `,
  },
];

const FaqItem = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger className="py-4 px-6 text-lg font-semibold bg-blue-100 dark:bg-blue-800 rounded-lg shadow-md hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors">
      {question}
    </AccordionTrigger>
    <AccordionContent className="p-6 text-base bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      {answer}
    </AccordionContent>
  </AccordionItem>
);

export function Faq({ items = faqItems }) {
  return (
    <div className="">
      <h3 className="text-2xl font-bold text-blue-950 mb-4">
        Frequently Asked Questions
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full  mx-auto space-y-4"
      >
        {items.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </Accordion>
    </div>
  );
}
