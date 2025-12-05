
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, ArrowRight, Brush, Gift, Smile, Sparkles, Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GALLERY_ITEMS } from '@/constants';
import type { GalleryMedia } from '@/constants';
import React, { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ImageTrail from '@/components/image-trail';


const CircularGallery = dynamic(() => import('@/components/circular-gallery'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-[600px]"><p>Loading gallery...</p></div>
});


// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
};

// --- Mock Data ---
const originals = [
  {
    id: 'original-1',
    name: 'Personalized Jelly Bag',
    description: 'Vibrant and fun. Perfect for beach days or city strolls.',
    image: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763584/WhatsApp_Image_2025-11-28_at_7.38.48_PM_1_awbl5o.jpg',
    aiHint: 'jelly bag',
    tag: 'Trending',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    id: 'original-2',
    name: 'Custom Embroidered Cap',
    description: 'Minimalist style with your unique signature or icon.',
    image: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763575/WhatsApp_Image_2025-11-28_at_7.38.51_PM_xm3ndl.jpg',
    aiHint: 'embroidered cap',
    tag: 'Bestseller',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'original-3',
    name: 'Engraved Heirloom Brush',
    description: 'Wooden craftsmanship meeting personalized elegance.',
    image: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763585/WhatsApp_Image_2025-11-28_at_7.38.49_PM_mbxmdq.jpg',
    aiHint: 'engraved hairbrush',
    tag: 'Limited',
    color: 'bg-amber-100 text-amber-700'
  },
];

export default function GiftingPage() {
  const [occasion, setOccasion] = useState('');
  const [budget, setBudget] = useState('');
  const [personalTouches, setPersonalTouches] = useState('');
  const [key, setKey] = useState(0);

  const isFormComplete = occasion && budget && personalTouches;

  const whatsappMessage = useMemo(() => {
    const header = "Hello HappyArts! I'd like to design a custom gift with the following details:\n\n";
    const occasionLine = `*Occasion:* ${occasion}\n`;
    const budgetLine = `*Budget:* ${budget}\n`;
    const touchesLine = `*Personal Touches:* ${personalTouches}\n\n`;
    const footer = "Could you please help me with some ideas?";
    return encodeURIComponent(header + occasionLine + budgetLine + touchesLine + footer);
  }, [occasion, budget, personalTouches]);

  useEffect(() => {
    // This will force a re-render of the ImageTrail component on route change,
    // which is a good practice for components with complex internal state.
    setKey(prevKey => prevKey + 1);
  }, []);

  // Scroll handler
  const handleScrollTo = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Dynamic Suggestion Logic
  const sampleIdea = useMemo(() => {
    if (occasion === 'anniversary' && (budget === '2k-5k' || budget === '5k+')) {
      return {
        title: "Romantic & Timeless",
        desc: "For this range, we suggest:",
        ideas: ["Hand-painted couple portrait with gold leaf details", "A luxe hamper with engraved wine glasses & chocolates"]
      };
    }
    if (occasion === 'birthday') {
       return {
        title: "Fun & Personal",
        desc: "Perfect birthday vibes:",
        ideas: ["A pop-art style caricature mug", "A 'Box of Sunshine' hamper with their favorite color theme"]
      };
    }
    return {
      title: "Let's Create Magic",
      desc: "Based on your inputs, we will suggest:",
      ideas: ["Custom artwork reflecting their personality", "Themed utility gifts they'll use every day"]
    };
  }, [occasion, budget]);

  const galleryItems = useMemo(() => {
    return GALLERY_ITEMS.filter(item => item.category?.includes('gifting')).map(item => ({
      src: item.src,
      alt: item.alt,
      type: item.type,
      id: item.id
    }));
  }, []);
  
  const trailImages = useMemo(() => {
    return GALLERY_ITEMS.filter(item => item.category?.includes('gifting')).map(item => item.src);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-background selection:bg-primary/20">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10">
        
        {/* 1. Hero Section */}
        <SectionWrapper className="pt-24 pb-20 md:pt-32 md:pb-32 relative">
          <div className="absolute inset-0 z-0">
             <ImageTrail
              key={key}
              items={trailImages}
              variant={1}
            />
          </div>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto relative z-10"
          >
            <motion.div variants={fadeInUp} className="flex justify-center items-center gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20 backdrop-blur-sm">
                The Art of Giving
              </span>
            </motion.div>
            
            <div className="mb-6 relative inline-block">
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 pb-2"
              >
                Gifts That Tell a Story
              </motion.h1>
              <motion.div 
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 10 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-6 -right-8 md:-right-16 text-primary hidden md:block"
              >
                <Sparkles size={48} strokeWidth={1.5} />
              </motion.div>
            </div>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              Whether you need a quick, handcrafted treasure or a fully bespoke masterpiece, 
              we turn your emotions into tangible art.
            </motion.p>

            {/* Split Cards */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
              
              <motion.div whileHover="hover" variants={hoverScale}>
                <Card onClick={handleScrollTo('originals')} className="cursor-pointer h-full bg-gradient-to-br from-card to-muted/50 border-border/50 shadow-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative p-8 pb-4">
                    <div className="w-12 h-12 bg-background rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Star size={24} />
                    </div>
                    <CardTitle className="text-2xl font-serif">HappyArts Originals</CardTitle>
                    <CardDescription className="text-base mt-2">Ready-to-ship handcrafted pieces. Perfect for quick yet thoughtful gestures.</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-8 pt-0 flex justify-end">
                    <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div whileHover="hover" variants={hoverScale}>
                <Card onClick={handleScrollTo('custom-gifting')} className="cursor-pointer h-full bg-gradient-to-br from-primary to-pink-500 text-primary-foreground border-primary shadow-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <CardHeader className="relative p-8 pb-4 z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      <Brush size={24} />
                    </div>
                    <CardTitle className="text-2xl font-serif text-white">Design Custom Gift</CardTitle>
                    <CardDescription className="text-base mt-2 text-primary-foreground/80">Collaborate with us to create a one-of-a-kind piece from scratch.</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-8 pt-0 flex justify-end z-10">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* 2. Originals Section */}
        <SectionWrapper id="originals" className="bg-muted/30 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Curated Collection</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Our favorite in-stock pieces. Pick one, personalize it with a name or charm, and it's ready to go.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto"
            >
               {['All', 'For Him', 'For Her', 'Kids', 'Festive'].map((filter, i) => (
                  <Button 
                    key={filter} 
                    variant={i === 0 ? "default" : "outline"} 
                    className="rounded-full px-6"
                  >
                    {filter}
                  </Button>
               ))}
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {originals.map((item) => (
              <motion.div variants={fadeInUp} key={item.id}>
                <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Image Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      data-ai-hint={item.aiHint}
                    />
                    <div className="absolute top-3 left-3">
                      <span className={cn("text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide", item.color)}>
                        {item.tag}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                       <Button 
                          asChild 
                          className="rounded-full bg-white text-black hover:bg-white/90 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100"
                        >
                          <a href={`https://wa.me/919403420909?text=Enquiry: ${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer">
                            <MessageSquare className="mr-2 h-4 w-4" /> Enquire Now
                          </a>
                        </Button>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* 3. Custom Gifting Section */}
        <SectionWrapper id="custom-gifting" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">The Atelier</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Design a Custom Gift</h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-6 md:p-10 shadow-2xl"
              >
                 <div className="flex justify-between items-center mb-8 border-b border-border/40 pb-6">
                    <div>
                      <h3 className="text-2xl font-semibold">Your Vision</h3>
                      <p className="text-muted-foreground">Tell us a little, we'll do the rest.</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                       {[1, 2, 3].map(n => (
                         <div key={n} className="w-2 h-2 rounded-full bg-primary/20 data-[active=true]:bg-primary" data-active={true} />
                       ))}
                    </div>
                 </div>

                 <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-base font-medium">Occasion</Label>
                        <Select onValueChange={setOccasion}>
                            <SelectTrigger className="h-12 rounded-xl bg-background/50 border-border/60 focus:ring-primary/20 transition-all hover:bg-background">
                                <SelectValue placeholder="Select Occasion" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Birthday">Birthday</SelectItem>
                                <SelectItem value="Anniversary">Anniversary</SelectItem>
                                <SelectItem value="Baby Shower">Baby Shower</SelectItem>
                                <SelectItem value="Corporate">Corporate</SelectItem>
                            </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-base font-medium">Budget</Label>
                        <Select onValueChange={setBudget}>
                            <SelectTrigger className="h-12 rounded-xl bg-background/50 border-border/60 focus:ring-primary/20 transition-all hover:bg-background">
                                <SelectValue placeholder="Ideally under..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="< ₹1000">&lt; ₹1000</SelectItem>
                                <SelectItem value="₹1000 – ₹2000">₹1000 – ₹2000</SelectItem>
                                <SelectItem value="₹2000 – ₹5000">₹2000 – ₹5000</SelectItem>
                                <SelectItem value="₹5000+">₹5000+</SelectItem>
                            </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-medium">Personal Touches</Label>
                      <Textarea 
                        placeholder="E.g., They love blue, travel, and coffee. Maybe something with their initials?" 
                        className="min-h-[120px] rounded-xl bg-background/50 border-border/60 focus:ring-primary/20 resize-none hover:bg-background transition-all"
                        value={personalTouches}
                        onChange={(e) => setPersonalTouches(e.target.value)}
                      />
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="flex-1 rounded-xl h-12 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                        <Sparkles className="mr-2 h-5 w-5" /> Get Ideas
                      </Button>
                      <Button
                        size="lg"
                        asChild
                        className={cn(
                          "flex-1 rounded-xl h-12 transition-all",
                          isFormComplete 
                            ? "bg-accent text-accent-foreground shadow-lg hover:bg-accent/90" 
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        )}
                        disabled={!isFormComplete}
                      >
                        <a href={isFormComplete ? `https://wa.me/919403420909?text=${whatsappMessage}` : undefined} target="_blank" rel="noopener noreferrer">
                          Share idea! <MessageSquare className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                 </form>
              </motion.div>
            </div>

            {/* Right: Interactive Preview Card */}
            <div className="lg:col-span-5 sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-[#fffcf5] text-slate-800 relative">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/20 rounded-bl-[100px] z-0" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-pink-400/20 rounded-tr-[80px] z-0" />
                  
                  <CardHeader className="relative z-10 pb-2">
                    <div className="flex items-center gap-3 text-primary mb-1">
                      <div className="p-2 bg-white rounded-full shadow-sm">
                        <Gift size={20} />
                      </div>
                      <span className="font-bold tracking-wide text-xs uppercase opacity-70">HappyArts Suggests</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={sampleIdea.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardTitle className="text-3xl font-serif text-slate-900">{sampleIdea.title}</CardTitle>
                      </motion.div>
                    </AnimatePresence>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6 pt-4">
                    <AnimatePresence mode="wait">
                       <motion.div
                         key={sampleIdea.desc}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         className="text-slate-600 font-medium"
                       >
                         {sampleIdea.desc}
                       </motion.div>
                    </AnimatePresence>

                    <ul className="space-y-4">
                       <AnimatePresence>
                         {sampleIdea.ideas.map((idea, i) => (
                           <motion.li 
                              key={idea + i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
                           >
                              <Heart className="h-5 w-5 text-red-400 fill-red-400 shrink-0 mt-0.5" />
                              <span className="text-slate-700 leading-snug">{idea}</span>
                           </motion.li>
                         ))}
                       </AnimatePresence>
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="bg-slate-50 p-4 justify-center border-t border-slate-100">
                     <p className="text-xs text-slate-400 flex items-center gap-1">
                       <Smile size={12} /> We customize every detail
                     </p>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* 4. Process Section (Horizontal Scroll/Grid) */}
        <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
           <SectionWrapper>
             <div className="relative z-10 text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
               <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">From a spark of an idea to a wrapped gift in your hands.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary-foreground/20 z-0"></div>

                {[
                   { icon: MessageSquare, title: "Chat", text: "Share your idea & budget" },
                   { icon: Brush, title: "Design", text: "We sketch & propose options" },
                   { icon: Sparkles, title: "Craft", text: "We create it with love" },
                   { icon: Gift, title: "Deliver", text: "Wrapped & sent to you" },
                ].map((step, idx) => (
                   <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative z-10 flex flex-col items-center text-center"
                   >
                      <div className="w-24 h-24 bg-primary-foreground text-primary rounded-full flex items-center justify-center mb-6 shadow-xl text-3xl font-bold transform transition-transform hover:scale-110 duration-300 border-4 border-primary-foreground/50 bg-clip-padding">
                        <step.icon size={36} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-primary-foreground/70 px-4">{step.text}</p>
                   </motion.div>
                ))}
             </div>
           </SectionWrapper>
        </div>

        {/* 5. Inspiration Gallery */}
        <SectionWrapper className="py-24">
           <div className="flex flex-col items-center mb-12">
                 <h2 className="text-4xl font-bold mb-8">Inspiration Gallery</h2>
            </div>
          <div className="relative h-[60vh]">
            <CircularGallery items={galleryItems} bend={3} borderRadius={0.05} scrollEase={0.02} />
          </div>
           
           <div className="mt-16 text-center flex justify-center gap-4">
              <Button asChild>
                <Link href="/gallery?category=gifting" className="inline-flex items-center">
                  View Full Gallery <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#originals" className="inline-flex items-center">
                  See Originals
                </Link>
              </Button>
           </div>
        </SectionWrapper>

        {/* 6. CTA Footer Strip */}
        <div className="mb-8 px-4">
           <SectionWrapper>
              <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-center relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                 
                 <div className="relative z-10 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Still undecided?</h3>
                    <p className="text-slate-300 max-w-xl mx-auto text-lg">
                       Don't stress. Just message us your budget and we'll send you a curated list of ideas within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                       <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold px-8" onClick={handleScrollTo('custom-gifting')}>
                          Help Me Choose
                       </Button>
                       <Button size="lg" variant="outline" className="rounded-full border-slate-600 text-white hover:bg-white/10 hover:text-white" onClick={handleScrollTo('originals')}>
                          Browse Originals
                       </Button>
                    </div>
                 </div>
              </div>
           </SectionWrapper>
        </div>

      </div>
    </div>
  );
}

    