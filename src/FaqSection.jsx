import React, { useState } from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "ပုဂံခေတ်",
      answer: "",
    },
    {
      id: 2,
      question: "ယဉ်ကျေးမှုနဲ့ပတ်သက်ပြီး သိချင်တာတွေရှိရင်",
      answer:
        "မြန်မာ့ယဉ်ကျေးမှုရဲ့ အဓိကအချက်အလက်တွေ၊ ဓလေ့ထုံးတမ်း၊ ပွဲတော်တွေ၊ အစားအသောက်၊ အနုပညာ၊ လက်မှုပစ္စည်းတွေ စတဲ့ အကြောင်းတွေကို မေးနိုင်ပါတယ်.",
    },
    {
      id: 3,
      question: "နိုင်ငံရေးနဲ့ပတ်သက်ပြီး သိချင်တာတွေရှိရင် ",
      answer:
        "မြန်မာနိုင်ငံရဲ့ နိုင်ငံရေးအခြေအနေ၊ နိုင်ငံရေးပါတီတွေ၊ နိုင်ငံတော်အစိုးရ စတဲ့ အကြောင်းတွေကို မေးနိုင်ပါတယ်။",
    },
    {
      id: 4,
      question: "စီးပွားရေးနဲ့ပတ်သက်ပြီး သိချင်တာတွေရှိရင် ",
      answer:
        "မြန်မာနိုင်ငံရဲ့ စီးပွားရေးအခြေအနေ၊ စိုက်ပျိုးရေး၊ စက်မှုလုပ်ငန်း၊ ခရီးသွားလုပ်ငန်း စတဲ့ အကြောင်းတွေကို မေးနိုင်ပါတယ်။",
    },
    {
      id: 5,
      question: "ပထဝီဝင်နဲ့ပတ်သက်ပြီး သိချင်တာတွေရှိရင် ",
      answer:
        "မြန်မာနိုင်ငံရဲ့ ပထဝီဝင်အနေအထား၊ မြို့တော်၊ မြစ်ချောင်းတွေ၊ တောင်တန်းတွေ၊ ရာသီဥတု စတဲ့ အကြောင်းတွေကို မေးနိုင်ပါတယ်။",
    },

    {
      id: 6,
      question: "ပထဝီဝင်နဲ့ပတ်သက်ပြီး သိချင်တာတွေရှိရင် ",
      answer:
        "မြန်မာနိုင်ငံရဲ့ ပထဝီဝင်အနေအထား၊ မြို့တော်၊ မြစ်ချောင်းတွေ၊ တောင်တန်းတွေ၊ ရာသီဥတု စတဲ့ အကြောင်းတွေကို မေးနိုင်ပါတယ်။",
    },
  ]);

  const toggleQuestion = (id) => {
    setQuestions(
      questions.map((el) =>
        el.id === id ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen: false }
      )
    );
  };

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-3">
        Git Frequently Asked Questions
      </h2>
      <div className="flex flex-col">
        {questions.map((question) => (
          <Faq
            toggleQuestion={toggleQuestion}
            key={question.id}
            faq={question}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
