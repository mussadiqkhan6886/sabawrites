import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto text-justify py-5">
      <h1 className="text-center text-3xl font-bold py-10">Terms and Conditions</h1>

      <section className="py-5">
        <p>
          By accessing Saba Writes and using it, you agree to abide by these Terms and Conditions.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Website Use</h2>
        <p>
          You are required to use this site responsibly and lawfully. Any activity which damages or otherwise harms the site and/or other users is strictly prohibited.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Ownership of Content</h2>
        <p>
          All content on this website, including but not limited to articles, photographic images, branding, and logos, are the property of Saba Writes unless explicitly stated otherwise. Content may not be copied, reproduced, or otherwise distributed without the prior written consent of Saba Writes.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Comments and Contributions</h2>
        <p>
          Saba Writes reserves the right to remove any comment or other submission determined to be offensive, misleading, abusive, or otherwise considered spam.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Links to External Sites</h2>
        <p>
          This website may contain links to third-party websites. Saba Writes is not responsible for the content or practices of those sites.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Limitation of Liability</h2>
        <p>
          Saba Writes is not responsible for any loss, damage, or other outcome, whether directly or indirectly, associated with your use of this website, including but not limited to reliance on content, links to third parties, affiliate products, sponsored content, or any technical issues.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Changes to These Terms</h2>
        <p>
          These Terms and Conditions may be updated periodically. By continuing to use this website after changes have been made, you indicate your agreement to such changes.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Governing Law</h2>
        <p>
          These terms are governed by international laws.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Contact</h2>
        <p>
          For any inquiries regarding these terms, contact us at <Link href="mailto:info@sabawrites.com" className="text-blue-600 underline">info@sabawrites.com</Link>.
        </p>
      </section>
    </main>
  );
};

export default Page;
