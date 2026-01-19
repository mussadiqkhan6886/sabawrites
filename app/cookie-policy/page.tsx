import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto text-justify py-5">
      <h1 className="text-center text-3xl font-bold py-10">Cookies Policy</h1>

      <section className="py-5">
        <p>
          This Cookies Policy explains how we use cookies and other technologies when you visit our website.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">What Are Cookies?</h2>
        <p>
          Cookies are small pieces of information (text files) stored on your computer that enable a website to give you better service and improve your browsing experience.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Why We Use Cookies</h2>
        <ul className="list-disc list-inside">
          <li>To ensure our website functions correctly</li>
          <li>To keep track of your preferences</li>
          <li>To analyze how visitors utilize the website</li>
          <li>To make enhancements to our content and site layout</li>
          <li>To provide support for affiliate tracking and advertising</li>
        </ul>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Types of Cookies You May Experience</h2>
        <h3 className="font-semibold py-1">Essential Cookies</h3>
        <p>Needed for basic website functionality.</p>

        <h3 className="font-semibold py-1">Analytics Cookies</h3>
        <p>Help us analyze which pages are most frequently visited and how visitors navigate our website.</p>

        <h3 className="font-semibold py-1">Functional Cookies</h3>
        <p>Allow us to deliver individualized experiences based on your profile.</p>

        <h3 className="font-semibold py-1">Advertising and Affiliate Cookies</h3>
        <p>Allow advertising networks and affiliate partners to track referrals and deliver personalized ads.</p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Third-Party Cookies</h2>
        <p>
          Some cookies may come from trusted third parties like advertising networks, affiliate partners, and analytics providers. These cookies follow the privacy policies of the respective third parties.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Managing Your Cookies</h2>
        <p>
          You can manage or disable cookies via your browser settings. You may also delete cookies already saved on your computer. Disabling cookies may impact how certain areas of our website function.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Policy Updates</h2>
        <p>
          This policy may be updated occasionally as technology and regulations evolve.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Contact</h2>
        <p>
          For any questions regarding our Cookies Policy, contact us at <Link href="mailto:info@sabawrites.com" className="text-blue-600 underline">info@sabawrites.com</Link>.
        </p>
      </section>
    </main>
  );
};

export default Page;
