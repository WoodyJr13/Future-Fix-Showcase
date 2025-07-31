import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { VolunteerForm } from '@/components/volunteer-form';
import { Sprout, Users, Heart, Calendar, Clock, MapPin } from 'lucide-react';

export default function Home() {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Compassion',
      description: 'We lead with empathy, ensuring our actions are rooted in understanding and care for the communities we serve.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working together with volunteers and local leaders to achieve shared goals.',
    },
    {
      icon: <Sprout className="h-10 w-10 text-primary" />,
      title: 'Sustainability',
      description: 'We are committed to creating lasting change that respects our planet and empowers future generations.',
    },
  ];

  const galleryImages = [
    { src: 'https://placehold.co/600x400.png', alt: 'Volunteers planting trees', hint: 'volunteers community' },
    { src: 'https://placehold.co/600x400.png', alt: 'Community gathering', hint: 'people smiling' },
    { src: 'https://placehold.co/600x400.png', alt: 'Children learning in an outdoor classroom', hint: 'children learning' },
    { src: 'https://placehold.co/600x400.png', alt: 'A clean river flowing through a park', hint: 'clean river' },
  ];

  const events = [
    {
      title: 'Annual River Cleanup',
      date: 'October 26, 2024',
      time: '9:00 AM - 1:00 PM',
      location: 'Greenwood Park',
      description: 'Join us for our biggest event of the year! We\'ll be working together to clean up the Greenwood riverbank and restore its natural beauty.'
    },
    {
      title: 'Community Garden Planting Day',
      date: 'November 9, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Oakwood Community Center',
      description: 'Help us plant a community garden that will provide fresh produce for local families. All ages and skill levels are welcome!'
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Driving Positive Change
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              FutureFix is a non-profit organization dedicated to building a brighter, more sustainable future through community-driven initiatives and volunteer action.
            </p>
            <div className="mt-6">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#volunteer">Get Involved</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Mission</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Our mission is to empower communities to create sustainable solutions for environmental and social challenges. We believe that by working together, we can fix the problems of today to build a better future for everyone.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Impact in Action</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                See the tangible results of our community's hard work and dedication.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                    data-ai-hint={image.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Upcoming Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Join us at an upcoming event and be part of the change.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 mt-12">
              {events.map((event, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90">Register Now</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Become a Volunteer</h2>
                <p className="text-muted-foreground md:text-lg">
                  Ready to make a difference? Fill out the form to join our team of passionate volunteers. We have roles for every skill set and level of availability.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Your time and talent can help us create a better world for all.
                </p>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Application</CardTitle>
                    <CardDescription>Tell us a bit about yourself.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VolunteerForm />
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
