import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Gallery from "@/components/gallery"
import PackageCard from "@/components/package-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/DSC01202.jpg" alt="Background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative h-full container mx-auto flex flex-col justify-center items-start px-4 md:px-6">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-playfair font-semibold leading-tight animate-fade-in-up">
              Timeless Portraits in Golden Light
            </h1>
            <p className="text-xl md:text-2xl font-open-sans animate-fade-in-up animation-delay-200">
              Capturing the essence of every soul through elegant photography.
            </p>
            <div className="animate-fade-in-up animation-delay-300">
              <Button asChild size="lg" className="mt-4 bg-white text-stone-800 hover:bg-white/90 rounded-none">
                <Link href="#gallery">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-2/5 h-1/3 md:h-2/3">
          <div className="relative h-full w-full animate-float">
            <Image src="/images/DSC01202.jpg" alt="Foreground" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 animate-on-scroll">
              About Bella Luce Photography
            </h2>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed animate-on-scroll animation-delay-200">
              At Bella Luce, we specialize in capturing authentic moments with elegance and emotion. Based in Negombo,
              Sri Lanka, our work blends natural light and artistic composition.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="relative h-80 overflow-hidden animate-on-scroll animation-delay-300">
                <Image
                  src="/images/about-1.jpg"
                  alt="About Bella Luce"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-80 overflow-hidden animate-on-scroll animation-delay-400">
                <Image
                  src="/images/about-2.jpg"
                  alt="About Bella Luce"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="mt-12 text-left animate-on-scroll animation-delay-500">
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                Our philosophy is simple: to create timeless images that tell your unique story. Whether it's a wedding,
                family portrait, or special event, we approach each session with creativity and attention to detail.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                We believe that the best photographs happen when you feel comfortable and at ease. That's why we take
                the time to get to know you, understand your vision, and create a relaxed environment where natural
                moments can shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-12 animate-on-scroll">
            Photography Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PackageCard
              title="Basic"
              price="LKR 8,000"
              features={["1 hour session", "1 location", "15 edited photos", "Digital delivery", "Basic retouching"]}
              delay={0}
            />

            <PackageCard
              title="Deluxe"
              price="LKR 15,000"
              features={[
                "2 hours session",
                "2 locations",
                "25 edited photos",
                "Digital delivery",
                "Advanced retouching",
                "5 printed photos (5×7)",
              ]}
              featured={true}
              delay={100}
            />

            <PackageCard
              title="Premium"
              price="LKR 22,000"
              features={[
                "4 hours session",
                "Multiple locations",
                "35 edited photos",
                "Digital delivery",
                "Premium retouching",
                "10 printed photos (5×7)",
                "One 11×14 mounted print",
              ]}
              delay={200}
            />
          </div>

          <div className="text-center mt-12 animate-on-scroll animation-delay-500">
            <p className="text-lg text-stone-700 mb-6">
              Looking for something custom? Contact us for specialized packages.
            </p>
            <Button asChild className="bg-stone-800 hover:bg-stone-700 rounded-none">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-12 animate-on-scroll">
            Best Captures
          </h2>

          <Gallery />

          <div className="text-center mt-12 animate-on-scroll">
            <Button
              asChild
              variant="outline"
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white rounded-none"
            >
              <Link href="#contact">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-12 animate-on-scroll">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Bella Luce captured our wedding day perfectly. The photos are absolutely stunning and really captured the emotions of the day.",
                name: "Amara & Dinesh",
                location: "Negombo",
              },
              {
                quote:
                  "I was nervous about my portrait session, but the photographer made me feel so comfortable. The results exceeded my expectations!",
                name: "Priya S.",
                location: "Colombo",
              },
              {
                quote:
                  "The family photoshoot was a wonderful experience. The photos are treasures we'll cherish forever. Highly recommend!",
                name: "The Fernando Family",
                location: "Negombo",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl text-stone-300 mb-4">"</div>
                <p className="text-stone-700 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-stone-800">{testimonial.name}</p>
                  <p className="text-stone-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-12 animate-on-scroll">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-stone-700" />
                    <a
                      href="mailto:bellaluce.creative@gmail.com"
                      className="text-stone-700 hover:text-stone-900 transition-colors"
                    >
                      bellaluce.creative@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-stone-700" />
                    <a href="tel:+94767618727" className="text-stone-700 hover:text-stone-900 transition-colors">
                      076 761 8727
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://web.facebook.com/profile.php?id=61574952052773"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/senuka.rosa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/94767618727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="h-[300px] w-full border border-stone-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126755.19543231002!2d79.79450847025894!3d7.204166538049264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ed517c3b9573%3A0x284e3d2894c54a93!2sNegombo!5e0!3m2!1sen!2slk!4v1711777161716"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll animation-delay-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Bella Luce</h3>
              <p className="text-stone-400">Capturing timeless moments in Negombo, Sri Lanka and beyond.</p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-stone-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="text-stone-400 hover:text-white transition-colors">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-stone-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-stone-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-stone-400">
                <li>Negombo, Sri Lanka</li>
                <li>076 761 8727</li>
                <li>bellaluce.creative@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center">
            <p className="text-stone-400">
              &copy; {new Date().getFullYear()} Bella Luce Photography. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

