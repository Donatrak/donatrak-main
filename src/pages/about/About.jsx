import HeroImage from "../../assets/images/Hero.jpg";
const About = ({ campaign = {}, title = "DonaTrak" }) => {
  return (
    <div className="bg-neutral-light py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">About DonaTrak</h2>
        <p className="text-lg text-[#4B5563] mb-12">
          Empowering communities through transparency and trust. At DonaTrak, we
          bridge the gap between donors and recipients, ensuring every
          contribution makes a tangible impact.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end">
          <img
            src={
              campaign.image
                ? `https://savefiles.org/${campaign.image}?shareable_link=346`
                : HeroImage
            }
            alt={campaign.title || title}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Our Mission
          </h3>
          <p className="text-base text-[#4B5563] mb-4">
            At DonaTrak, our mission is to create a world where every act of
            giving is traceable, transparent, and impactful. We believe in the
            power of trust and the difference it can make in the lives of those
            who give and those who receive.
          </p>
          <p className="text-base text-[#4B5563] mb-4">
            By leveraging innovative technology and our passion for helping
            others, we ensure that every donation is tracked and used
            effectively, so you can see the real-world impact of your
            generosity.
          </p>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-primary mb-4">
              Our Core Values
            </h4>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2">
              <li>Transparency: Every transaction is open and accessible.</li>
              <li>
                Trust: Building relationships based on honesty and integrity.
              </li>
              <li>Impact: Ensuring every donation makes a difference.</li>
              <li>Innovation: Using technology to empower change.</li>
              <li>Community: Bringing people together for a common good.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
