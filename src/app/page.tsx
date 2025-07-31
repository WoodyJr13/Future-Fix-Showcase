import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Home() {
  const teamMembers = [
    {
      role: 'President',
      description: 'Provides overall leadership, guides long-term planning, and ensures the organization stays aligned with its mission and goals.',
    },
    {
      role: 'Vice President',
      description: 'Supports the President in leadership duties and helps oversee the organization’s operations, ensuring effective coordination across all teams.',
    },
    {
      role: 'Build Captain',
      description: 'Manages the safe and efficient use of tools, organizes access to materials, and ensures teams have the resources they need during build sessions and events.',
    },
    {
      role: 'Finance Head',
      description: 'Oversees all financial matters, including budgeting, tracking expenses, and managing funds to ensure the organization operates smoothly and sustainably.',
    },
    {
      role: 'Challenge Designer',
      description: 'Develops creative and engaging event prompts, designs challenge formats, and establishes clear rules and guidelines to ensure a fair and stimulating experience for all participants.',
    },
    {
      role: 'Outreach Director',
      description: 'Collaborates with the Media Head to promote engagement and increase participation through school connections, partnerships, and community outreach initiatives.',
    },
    {
      role: 'Media Head',
      description: 'Promotes events through digital platforms, manages the organization’s social media presence, and creates content to engage and grow the community.',
    },
    {
      role: 'Event Manager',
      description: 'Coordinates event logistics, including registration, venue setup, scheduling, and judging procedures to ensure smooth and organized execution.',
    },
  ];

  const galleryImages = [
    { src: 'https://placehold.co/1300x800.png', alt: 'Team working together', hint: 'team collaboration' },
    { src: 'https://placehold.co/1300x800.png', alt: 'Students building a prototype', hint: 'students building' },
    { src: 'https://placehold.co/1300x800.png', alt: 'Presentation to judges', hint: 'students presentation' },
    { src: 'https://placehold.co/1300x800.png', alt: 'Close-up of a student working', hint: 'student concentrating' },
    { src: 'https://placehold.co/1300x800.png', alt: 'Group of students brainstorming', hint: 'students brainstorming' },
    { src: 'https://placehold.co/1300x800.png', alt: 'Finished prototype on display', hint: 'prototype project' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Empowering Young Innovators Together
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Join us in fostering creativity and problem-solving skills.
            </p>
            <div className="mt-6">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#volunteer">Get Involved Now</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Mission</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  FutureFix is a student-led nonprofit that empowers middle and high school students to solve real-world problems through creative thinking, teamwork, and hands-on design. Using accessible materials—like wood, cardboard, and simple tools—students bring their ideas to life by building functional prototypes that address real-world challenges.
                </p>
                <p className="mt-4 text-muted-foreground text-lg">
                  But FutureFix goes beyond just building. Participants also learn how to pitch their ideas to a panel of judges or simulated "investors," strengthening their confidence, communication, and entrepreneurial thinking. Events are competitive, with teams earning prizes based on creativity, functionality, and presentation—preparing the next generation of builders and leaders.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Empowering Young Innovators"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                  data-ai-hint="students innovating"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Meet The Team</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-headline">{member.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Empowering young minds through creativity and design</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1300}
                    height={800}
                    className="h-full w-full object-cover"
                    data-ai-hint={image.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Events Schedule</h2>
              <p className="text-muted-foreground md:text-lg">
                Stay tuned for our upcoming events! Dates to be decided.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <Card className="p-4">
                <Calendar
                  mode="single"
                  className="rounded-md border"
                />
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Contact Us</h2>
                <p className="text-muted-foreground md:text-lg">
                  Message us on WhatsApp.
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Subscribe For Free</h2>
                <p className="text-muted-foreground md:text-lg">
                  Sign up to hear about upcoming events.
                </p>
                 <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Sign up</Button>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Board Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeejQrJQ0aPxHqIbb6CYdwB-QAmlQPKDPiBvWhwbx4ZyyG9AQ/viewform" target="_blank" rel="noopener noreferrer">
                          Apply Now
                        </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}