import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Saba Writes takes your privacy very seriously; therefore, we have set forth this Privacy Notice to describe the information that we collect through our website, how we use your information, and how we will protect your information."
};

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto text-justify py-5">
      <h1 className="text-center text-3xl font-bold py-10">Privacy Policy</h1>

      <p>
        Saba Writes takes your privacy very seriously; therefore, we have set forth this Privacy Notice to describe the information that we collect through our website, how we use your information, and how we will protect your information.
      </p>

      <p>Your continued use of our site indicates that you accept the terms of this Privacy Policy.</p>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Your Information</h2>
        <p>As a visitor to Saba Writes, we may collect two types of information from you:</p>
        <h3 className="font-semibold">1. Personal Information</h3>
        <p>
          This refers to any information that you provide to us voluntarily, such as when you subscribe to receive emails from us, send us an email, leave a comment on an article, or any other type of communication.
        </p>
        <h3 className="font-semibold">2. Non-personal Information</h3>
        <p>
          Non-personal information includes browser type, device type and model, IP address, date and time of visits, pages visited while using the site, and how long you were on Saba Writes, so we can learn what kinds of content readers appreciate and improve our website.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Cookies and Tracking Technology</h2>
        <p>
          We use cookies to enhance your experience on our website, perform analytics regarding website performance and usage via affiliate tracking, display ads relevant to your interests, and more. You can learn more about how cookies work in our Cookie Policy.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Information Usage</h2>
        <ul className="list-disc list-inside">
          <li>To keep the website up and running</li>
          <li>To make improvements to the content and overall experience of users</li>
          <li>To respond directly to any inquiry you send us</li>
          <li>To provide a newsletter or updates when you sign up</li>
          <li>To gather statistical trends and measure website performance</li>
        </ul>
        <p>We never sell your personal information.</p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Sharing Information</h2>
        <p>Your personal information will be shared only when needed:</p>
        <ul className="list-disc list-inside">
          <li>With trusted services such as web hosting, email providers, and analytic services</li>
          <li>Where required by law and legal proceedings</li>
          <li>With advertising or affiliate partners strictly for tracking and reporting purposes</li>
        </ul>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Affiliate Links, Ads & Sponsorships</h2>
        <p>
          Some of the links on our site are "Affiliate Links," meaning we may earn a commission if you purchase through the link at no extra cost to you.
        </p>
        <p>
          We may display advertising and work with brands through Sponsored Content or Gifted Products. Paid/Sponsored Content will always be disclosed, and we provide honest opinions on products we are compensated for.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">How Do We Protect Your Information</h2>
        <p>
          While we take reasonable measures to protect your information, there is no guarantee of complete security with any online system. Our goal is to offer the best possible protection.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Links to Other Websites</h2>
        <p>We are not responsible for how other websites treat your information.</p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Rights Regarding Your Privacy</h2>
        <p>You may have the right to view, update, or request removal of your personal information. Contact us to exercise your rights.</p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Privacy of Children</h2>
        <p>Saba Writes does not knowingly collect personal information about children under the age of 13.</p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Updates to Our Policy</h2>
        <p>From time to time, we may update this Privacy Policy. Any modifications will be available here.</p>
        <p>Contact: <Link href="mailto:info@sabawrites.com" className="text-blue-600 underline">info@sabawrites.com</Link></p>
      </section>
    </main>
  );
};

export default Page;
