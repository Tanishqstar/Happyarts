
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, User } from 'lucide-react';

// Hardcoded data for the specific bento layout
const testimonials = {
    review1: {
        text: "The custom gift box was beyond my expectations! Every detail was perfect and it made for such a special present. Truly artistic work.",
        author: "Priya S.",
    },
    video1: {
        src: "https://res.cloudinary.com/dsdp8sjkh/video/upload/v1751615730/VID-20250701-WA0031_3_yzgsq2.mp4",
        poster: "https://res.cloudinary.com/dsdp8sjkh/video/upload/v1751615730/VID-20250701-WA0031_3_yzgsq2.jpg",
    },
    video2: {
        src: "https://res.cloudinary.com/dsdp8sjkh/video/upload/v1751630653/Video-59_z5kaqs.mp4",
        poster: "https://res.cloudinary.com/dsdp8sjkh/video/upload/v1751630653/Video-59_z5kaqs.jpg",
    },
    review2: {
        text: "HappyArts' live DIY station was the highlight of our event. Our guests had so much fun and the team was fantastic to work with!",
        author: "Rohan M.",
    },
};

export function TestimonialsSection() {
  return (
    <SectionWrapper
      title="What Our Clients Say"
      subtitle="Testimonials"
      className="bg-muted/40"
      disableSubtitleDecryption
      applyTitleShimmer={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        {/* Left Review */}
        <Card className="w-full aspect-square flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  <User className="h-6 w-6 text-foreground/80" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonials.review1.author}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">"{testimonials.review1.text}"</p>
          </CardContent>
          <CardFooter className="min-h-[20px]"></CardFooter>
        </Card>

        {/* Video 1 */}
        <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg group border border-border/60">
          <video
            src={testimonials.video1.src}
            poster={testimonials.video1.poster}
            autoPlay
            loop
            muted
            controls
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 2 */}
        <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg group border border-border/60">
          <video
            src={testimonials.video2.src}
            poster={testimonials.video2.poster}
            autoPlay
            loop
            muted
            controls
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Review */}
        <Card className="w-full aspect-square flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  <User className="h-6 w-6 text-foreground/80" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonials.review2.author}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">"{testimonials.review2.text}"</p>
          </CardContent>
          <CardFooter className="min-h-[20px]"></CardFooter>
        </Card>
      </div>
    </SectionWrapper>
  );
}
