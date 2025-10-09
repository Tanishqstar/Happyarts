
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { WHATSAPP_LINK, EMAIL_LINK, INSTAGRAM_LINK } from '@/constants'; // Updated imports
import { MessageSquare, Mail, Phone, Instagram as InstagramIcon } from 'lucide-react'; // Renamed Instagram to avoid conflict
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProximityText } from '@/components/proximity-text';

export default function ContactPage() {
  return (
    <SectionWrapper 
      title={<ProximityText text="Get in Touch" />} 
      subtitle="We'd Love to Hear From You"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-foreground/80 mb-10">
          Have a question, want to discuss a custom project, or interested in our services? 
          Reach out to us! We're always excited to connect and bring creative ideas to life.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg rounded-xl border-border/60">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <MessageSquare className="mr-3 h-7 w-7" /> Direct Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                The quickest way to reach us is via WhatsApp. Click the button below to start a chat.
              </p>
              <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white shadow-md">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-xl border-border/60">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Mail className="mr-3 h-7 w-7" /> Other Ways to Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground/90 flex items-center mb-1">
                  <Mail className="mr-2 h-5 w-5 text-primary/80" /> Email Us
                </h3>
                <a href={EMAIL_LINK} className="text-foreground/70 hover:text-primary transition-colors">
                  dhritisolanki80@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/90 flex items-center mb-1">
                  <Phone className="mr-2 h-5 w-5 text-primary/80" /> Call Us
                </h3>
                <a href="tel:+919403420909" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 94034 20909
                </a>
              </div>
               <div>
                <h3 className="font-semibold text-foreground/90 flex items-center mb-1">
                  <InstagramIcon className="mr-2 h-5 w-5 text-primary/80" /> Follow Us
                </h3>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                  @happy_arts_13
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const metadata = {
  title: 'Contact Us | HappyArts',
  description: 'Get in touch with HappyArts for inquiries about gifts, workshops, DIY stations, and art classes.',
};
