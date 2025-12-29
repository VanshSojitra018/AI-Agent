import React from "react";
import img from "/assets/1.jpg";
const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What are the basics of AI agents?",

      answer:
        "AI agents are software systems that use AI to pursue goals and complete tasks on behalf of users. They show reasoning, planning, and memory and have a level of autonomy to make decisions, learn, and adapt.",
    },

    {
      question: "How do AI agents communicate with each other?",

      answer:
        "AI agents communicate in various ways depending on their role, environment and goals. Communication can be explicit or implicit, involving direct message exchanges or indirect observation of actions. Some systems rely on centralized control, where a single AI processes and distributes data to other agents.",
    },

    {
      question: "What language is used for AI agents?",

      answer:
        "Python – The most widely used language for AI and intelligent agents due to its rich ecosystem of libraries. Use Cases: Machine learning (TensorFlow, PyTorch), natural language processing (NLTK, spaCy), reinforcement learning (Stable-Baselines3).",
    },

    {
      question: "Can AI agents work together?",

      answer:
        "Collaboration occurs when several AI agents cooperate as a team to accomplish a task. During the collaboration phase, the system receives a task from the user or environment. The system decides which agents are needed and what roles they'll play. The system divides the complex problems into manageable pieces.",
    },
  ];

  return (
    <>
      <style>{`

                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            

                * {

                    font-family: 'Poppins', sans-serif;

                }

            `}</style>
      <section className="py-25 bg-black">
        <div className="max-w-4xl mx-auto  flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-0">
          <img className="max-w-sm w-full rounded-xl h-87.5" src={img} alt="" />

          <div>
            <p className="text-slate-400 text-sm font-medium">FAQ's</p>

            <h1 className="text-3xl font-semibold text-white">
              Looking for answer?
            </h1>

            {faqs.map((faq, index) => (
              <div
                className="border-b border-slate-400 py-4 cursor-pointer"
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-slate-400">
                    {faq.question}
                  </h3>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#90a1b9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p
                  className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
