import React from "react";
import TogglePanel from "../../components/ui/TogglePanel";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const faqData = [
  {
    question: "What is Maeventmyway?",
    answer:
      "Maeventmyway is an emerging digital platform that seeks to bring all your events vendors (service providers) to your doorstep. The aim is to make it easier for event vendors to interact with people who need their services.",
  },
  {
    question: "How do I become a service provider on Maeventmyway?",
    answer:
      "You can become a service provider on Maeventmyway by simply creating / registering an account on the platform.",
  },
  {
    question: "Why do I need an account?",
    answer:
      'An account is a good thing! By placing your ads while being logged in you get the benefit of being able to manage all the ads you place in one convenient place. The "Your Account" link, once logged on (located at the top right-hand corner of the page), will list your current and expired ads. You can edit, delete, or renew from this area.',
  },
  {
    question: "How do I register / create an account on Maeventmyway?",
    answer:
      <>When on the Maeventmyway website, on top of your screen simply select <Link to="" >Post your AD</Link>, which will take you to a page where you can <Link to="" >register / login.</Link> if you are an existing member. You can also click on the <b>Account</b> Icon, which will give you an option to register / login.</>,
  },
  {
    question: "How do I post my AD?",
    answer:
      <>To post an AD or list your services on Maeventmyway, select <b>Post your AD.</b> This will take you to the Login / Register page. Once done, you’ll be taken to the post ad page where you will select the type of Ad you want to list (Sell / Book or Hire). Then choose a category that fits your service, add a title, and continue filling out all the relevant information.</>,
  },
  {
    question: "How much does it cost to post an AD on Maeventmyway?",
    answer: <>It is <b>completely free</b> of charge to <b>post your AD</b> on Maeventmyway.</>,
  },
  {
    question: "How long will it take for me to see my posted AD?",
    answer:
      "Once an AD/vendor listing has been added on Maeventmyway, it will go through a verification process. Once the AD authenticity checks out, you will receive an email confirming your AD listing. The process takes between 5 to 10 minutes.",
  },
  {
    question: "How do people find me on Maeventmyway?",
    answer:
      "Depending on the category of your posted AD (Foods and Beverages, Leisure, Entertainment, etc.), people looking for a specific service provider will be able to see your AD on Maeventmyway.",
  },
  {
    question: "Can I have more than 2 service listings on Maeventmyway?",
    answer:
      <>With an account on Maeventmyway, you can add as many listings as you want by simply logging in. New users can register an account and then <b>Post your AD</b>.</>,
  },
  {
    question: "Can I delete or edit an existing AD on Maeventmyway?",
    answer:
      "Yes, you can. Simply log into your account, go to your listings, select the listing you want to delete or edit, make the changes you want, and update it.",
  },
];

const Faq = () => {
  return (
    <section className="faq-section py-5">
      <Container>
        <h2 className="pink-text fs-1 fw-bold mb-xl-5 mb-4">
          FAQ's
        </h2>

        <TogglePanel data={faqData} />
      </Container>
    </section>
  );
};

export default Faq;
