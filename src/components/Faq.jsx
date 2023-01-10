import { allQuestion } from "../content/allQuestions";

export const Faq = () => {
  return (
    <>
      <div id="faq" className="section bg-juicy-100">
        <h1 className="text-center font-bold text-3xl md:text-5xl my-2 md:my-5">FAQ's</h1>
        <div className="mx-auto w-full max-w-lg bg-white rounded-2xl md:p-6">
          {allQuestion.map((q) => {
            return (
              <div class="">
                <details class="group [&_summary::-webkit-details-marker]:hidden ">
                  <summary class="flex w-full items-center justify-between px-4 py-2 border-b-2 border-juicy-200  cursor-pointer">
                    <h2 class="text-left text-xl font-extrabold text-black ">
                      {q.question}
                    </h2>

                    <svg
                      class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed bg-white text-lg text-gray-800">
                    {q.answer}
                  </p>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
