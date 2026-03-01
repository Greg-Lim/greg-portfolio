import { myResume } from "@/resume/myResume";

export function Contact() {
  return (
    <div className="flex flex-col gap-8 mx-auto justify-items-start">
      <section>
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'd love to hear from you! Feel free to reach out via email or phone.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <div className="space-y-6">
          {/* Email */}
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:limgreg33cc@gmail.com"
                className="text-primary  hover:underline font-semibold"
              >
                {myResume.basics.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a className="text-primary hover:underline font-semibold">
                {myResume.basics.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {myResume.basics.location?.city}
              </p>
            </div>
          </div>

          {/* Nationality */}
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Nationality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {myResume.basics.nationality}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
