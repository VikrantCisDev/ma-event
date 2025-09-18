import React from "react";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <section className="py-5">
      <Container>
            <h2 className="pink-text fw-bold mb-lg-5 mb-4">Privacy Policy</h2>

            <div className=" mb-4 ">
              <h4 className="mb-2">What information do we collect?</h4>
              <p>
                We collect information from you when you register on our site or fill out a form.
                When registering on our site, as appropriate, you may be asked to enter your: Name, e-mail address,
                mailing address or phone number.
              </p>
              <p>
                Google, as a third-party vendor, uses cookies to serve ads on your site. Google’s use of the DART cookie
                enables it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users
                may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">What do we use your information for?</h4>
              <p>
                Any of the information we collect from you may be used in one of the following ways:
              </p>
              <ul>
                <li>
                  <strong>To personalise your experience</strong> (your information helps us to better respond to your individual needs);
                </li>
                <li>
                  <strong>To improve our website</strong> (we continually strive to improve our website offerings based on the information and feedback we receive from you);
                </li>
                <li>
                  <strong>To improve customer service</strong> (your information helps us to more effectively respond to your customer service requests and support needs);
                </li>
                <li>
                  <strong>To send periodic emails.</strong> The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.
                </li>
              </ul>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">How do we protect your information?</h4>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you
                enter, submit, or access your personal information.
              </p>
              <p>
                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket
                Layer (SSL) technology and then encrypted into our Database to be only accessed by those authorised
                with special access rights to our systems, and are required to keep the information confidential.
              </p>
              <p>
                After a transaction, your private information (credit divs, social security numbers, financials, etc.) will not
                be stored on our servers.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Do we use cookies?</h4>
              <p>
                Yes (Cookies are small files that a site or its service provider transfers to your computer's hard drive through
                your Web browser (if you allow) that enables the site's or service provider's systems to recognise your
                browser and capture and remember certain information).
              </p>
              <p>
                We use cookies to understand and save your preferences for future visits and compile aggregate data
                about site traffic and site interaction so that we can offer better site experiences and tools in the future. We
                may contract with third-party service providers to assist us in better understanding our site visitors. These
                service providers are not permitted to use the information collected on our behalf except to help us
                conduct and improve our business.
              </p>
              <p>
                If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you
                can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off,
                some of our services may not function properly. However, you can still place orders over the telephone or
                by contacting customer service.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Do we disclose any information to outside parties?</h4>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
                This does not include trusted third parties who assist us in operating our website, conducting our business,
                or servicing you, so long as those parties agree to keep this information confidential. We may also release
                your information when we believe release is appropriate to comply with the law, enforce our site
                policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor
                information may be provided to other parties for marketing, advertising, or other uses.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Third party links</h4>
              <p>
                Occasionally, at our discretion, we may include or offer third party products or services on our website.
                These third party sites have separate and independent privacy policies. We therefore have no
                responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about these sites.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Children’s Online Privacy Protection Act Compliance</h4>
              <p>
                We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act), we
                do not collect any information from anyone under 18 years of age. Our website, products and services
                are all directed to people who are at least 18 years old or older.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Online Privacy Policy Only</h4>
              <p>
                This online privacy policy applies only to information collected through our website and not to
                information collected offline.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Terms and Conditions</h4>
              <p>
                Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of
                liability governing the use of our website at{" "}
                <a href="https://www.maevent.co.za/terms-conditions" target="_blank" rel="noreferrer">
                  https://www.maevent.co.za/terms-conditions
                </a>
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Your Consent</h4>
              <p>
                By using our site, you consent to our online privacy policy.
              </p>
            </div>

            <div className=" mb-4 ">
              <h4 className="mb-2">Changes to our Privacy Policy</h4>
              <p>
                If we decide to change our privacy policy, we will post those changes on this page.
                This policy was last modified on <strong>19 October 2021</strong>.
              </p>
            </div>

            <div className=" shado">
              <h4 className="mb-2">Contacting Us</h4>
              <p>
                If there are any questions regarding this privacy policy you may contact us using the information below.<br />
                <a href="mailto:admin@maeventmyway.co.za">admin@maeventmyway.co.za</a><br />
                Chat to us on our Chat widget
              </p>
            </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;