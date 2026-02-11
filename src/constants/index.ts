
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Customized Gifting', href: '/gifting' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Live DIY Stations', href: '/diy-stations' },
  { label: 'Art Classes', href: '/art-classes' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export interface ServiceDetails {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string[]; // Array of paragraphs
  icon: string;
  coverImage: string;
  aiHint: string; // For cover image
  galleryImageHints: string[]; // For related gallery items
  whatsappEnquiryText: string;
}

export const SERVICES: ServiceDetails[] = [
  {
    slug: 'gifting',
    title: 'Customized Gifting',
    subtitle: 'Thoughtful Gifts, Artfully Made',
    shortDescription: 'Unique, handcrafted gifts tailored for every occasion and recipient.',
    longDescription: [
      "Make every occasion special with personalized, handcrafted gifts from HappyArts. We believe that the best gifts come from the heart, and our customized gifting service is all about creating memorable presents that reflect thoughtfulness and creativity.",
      "Whether it's for birthdays, anniversaries, corporate events, or just to show someone you care, we work with you to design and craft unique items. From custom art pieces to beautifully assembled gift hampers, each creation is made with attention to detail and a touch of artistic flair."
    ],
    icon: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/e_background_removal/f_png/v1748952549/IMG-20250603-WA0014_r9h23z.jpg',
    coverImage: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1749118207/Photo_Collage_upmzdm.png',
    aiHint: 'gift collage',
    galleryImageHints: ['custom mug', 'gift box', 'engraved plaque'],
    whatsappEnquiryText: "Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Customized%20Gifting%20service.",
  },
  {
    slug: 'workshops',
    title: 'Art Workshops',
    subtitle: 'Unleash Your Inner Artist',
    shortDescription: 'Engaging and fun art workshops for all skill levels, fostering creativity.',
    longDescription: [
      "Discover your creative potential in our engaging art workshops! HappyArts offers a variety of workshops designed for all ages and skill levels. Whether you're a beginner looking to try something new or an experienced artist wanting to refine your techniques, we have something for you.",
      "Our workshops cover diverse art forms like painting, crafting, mixed media, and more. We provide a supportive and inspiring environment where you can learn, create, and connect with fellow art enthusiasts. Join us to explore your artistic side and take home your own masterpiece!"
    ],
    icon: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/e_background_removal/f_png/v1748952548/IMG-20250603-WA0013_wjkspq.jpg',
    coverImage: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952547/IMG-20250525-WA0130_rkl0iq.jpg',
    aiHint: 'resin art',
    galleryImageHints: ['paint class', 'crafting group', 'student artwork'],
    whatsappEnquiryText: "Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Art%20Workshops.",
  },
  {
    slug: 'diy-stations',
    title: 'Live DIY Stations',
    subtitle: 'Interactive Fun for Events',
    shortDescription: 'Interactive DIY art stations to make your events memorable and unique.',
    longDescription: [
      "Add a unique and interactive element to your events with HappyArts' Live DIY Stations! Perfect for parties, corporate events, weddings, and festivals, our DIY stations offer guests a chance to get creative and take home a personalized party favor.",
      "We set up and manage fun, engaging art and craft activities tailored to your event's theme. From T-shirt painting to accessory making, our live stations are a guaranteed hit, providing entertainment and a memorable experience for all your attendees."
    ],
    icon: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/e_background_removal/f_png/v1748952552/IMG-20250603-WA0016_p19tug.jpg',
    coverImage: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952482/IMG-20250525-WA0129_qosbxq.jpg',
    aiHint: 'event craft station',
    galleryImageHints: ['party crafts', 'event activity', 'DIY table'],
    whatsappEnquiryText: "Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Live%20DIY%20Stations.",
  },
  {
    slug: 'art-classes',
    title: 'Art Classes',
    subtitle: 'Nurture Your Artistic Journey',
    shortDescription: 'Regular art classes providing structured learning in various art forms.',
    longDescription: [
      "Embark on a structured artistic journey with HappyArts' regular art classes. Designed for continuous learning and skill development, our classes cater to different age groups and interests. We offer a curriculum-based approach to various art forms, including drawing, painting, sculpture, and more.",
      "Our experienced instructors provide personalized guidance in a friendly and encouraging atmosphere. Whether you're pursuing art as a hobby or a passion, our classes will help you build a strong foundation and grow as an artist. Join our community and nurture your talent!"
    ],
    icon: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952551/IMG-20250603-WA0015_dhgt4r.jpg',
    coverImage: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952482/IMG-20250525-WA0125_no8wis.jpg',
    aiHint: 'art class students',
    galleryImageHints: ['drawing lesson', 'painting studio', 'children art'],
    whatsappEnquiryText: "Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Art%20Classes.",
  },
  {
    slug: 'events',
    title: 'Special Events',
    subtitle: 'Celebrate with Creativity',
    shortDescription: 'Unique artistic experiences for your special occasions and corporate gatherings.',
    longDescription: [
      "Transform your special occasions into unforgettable creative experiences with HappyArts. We specialize in curating artistic events, from themed parties and festive celebrations to engaging corporate team-building activities.",
      "Our team works with you to design a unique event that incorporates interactive art, live demonstrations, and custom decor, ensuring a vibrant and memorable atmosphere for you and your guests. Let's make your next event a masterpiece."
    ],
    icon: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751627165/Background_Removal_Screenshot_Jul_2_2025_ebrekw.png',
    coverImage: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615676/IMG-20250703-WA0058_ojibtc.jpg',
    aiHint: 'party event',
    galleryImageHints: ['special event', 'party decoration', 'corporate event'],
    whatsappEnquiryText: "Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Special%20Events.",
  },
  {
    slug: 'valentines',
    title: "Valentine's Gifts",
    subtitle: 'Celebrate Love with Handcrafted Treasures',
    shortDescription: 'Unique, romantic gifts for your special someone, artfully made by hand.',
    longDescription: [
        "Express your love in the most personal way with a custom-made gift from HappyArts. Our Valentine's collection is all about capturing romantic moments and creating keepsakes that will be treasured for years to come.",
        "From personalized portraits and custom-engraved items to luxurious gift hampers filled with handcrafted goodies, we help you create a one-of-a-kind expression of your affection. Let's work together to make this Valentine's Day truly unforgettable."
    ],
    icon: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/e_background_removal/f_png/v1748952549/IMG-20250603-WA0014_r9h23z.jpg',
    coverImage: 'https://picsum.photos/seed/valentines-cover/1200/600',
    aiHint: 'valentines gift',
    galleryImageHints: ['valentines', 'love', 'heart', 'couple'],
    whatsappEnquiryText: "Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Valentine's%20Specials.",
  }
];

export interface GalleryMedia {
  id: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
  category?: string[]; // e.g., ['gifting', 'workshops']
  aiHint: string;
}

export const GALLERY_ITEMS: GalleryMedia[] = [
  // Valentine's Images
  { id: 'gallery-valentines-1', src: 'https://picsum.photos/seed/vday1/600/600', alt: 'Romantic Heart Gift Box', type: 'image', category: ['valentines', 'gifting'], aiHint: 'valentines gift' },
  { id: 'gallery-valentines-2', src: 'https://picsum.photos/seed/vday2/600/600', alt: 'Custom Couple Mugs', type: 'image', category: ['valentines', 'gifting'], aiHint: 'couple mugs' },
  { id: 'gallery-valentines-3', src: 'https://picsum.photos/seed/vday3/600/600', alt: 'Personalized Love Frame', type: 'image', category: ['valentines', 'gifting'], aiHint: 'love frame' },
  { id: 'gallery-valentines-4', src: 'https://picsum.photos/seed/vday4/600/600', alt: '"I Love You" Hamper', type: 'image', category: ['valentines', 'gifting'], aiHint: 'gift hamper' },
  { id: 'gallery-valentines-5', src: 'https://picsum.photos/seed/vday5/600/600', alt: 'Engraved Jewelry Box', type: 'image', category: ['valentines', 'gifting'], aiHint: 'jewelry box' },
  { id: 'gallery-valentines-6', src: 'https://picsum.photos/seed/vday6/600/600', alt: 'Hand-painted Portrait', type: 'image', category: ['valentines', 'gifting'], aiHint: 'portrait painting' },
  { id: 'gallery-valentines-7', src: 'https://picsum.photos/seed/vday7/600/600', alt: 'Scented Candle Set', type: 'image', category: ['valentines', 'gifting'], aiHint: 'candle set' },
  { id: 'gallery-valentines-8', src: 'https://picsum.photos/seed/vday8/600/600', alt: 'Luxury Chocolate Box', type: 'image', category: ['valentines', 'gifting'], aiHint: 'chocolate box' },

  // Gifting Images
  { id: 'gallery-gifting-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751467014/IMG-20250701-WA0055_whfybr.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751466996/IMG-20250701-WA0027_cbuc1s.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751466994/IMG-20250701-WA0023_gm7gqo.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751466992/IMG-20250701-WA0063_x1yntk.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952530/IMG-20250525-WA0045_w7axsk.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952530/IMG-20250525-WA0055_u38hdu.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952531/IMG-20250525-WA0049_dtp2my.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952531/IMG-20250525-WA0011_npzhgx.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952527/IMG-20250525-WA0029_cu2oua.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952515/IMG-20250525-WA0107_k6oyew.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-11', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952487/IMG-20250525-WA0059_na540r.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-12', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952478/IMG-20250525-WA0101_zcafgp.jpg', alt: 'Customized Gift Piece', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-13', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952504/IMG-20250525-WA0007_wuqits.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-14', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952505/IMG-20250525-WA0015_tvjyrt.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-15', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952510/IMG-20250525-WA0033_tupdtn.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-16', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952511/IMG-20250525-WA0017_ysyeqr.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-17', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952510/IMG-20250525-WA0023_xq5aab.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-18', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952508/IMG-20250525-WA0021_ooq271.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-19', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952509/IMG-2_1_ffb0da.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-20', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952488/IMG-20250525-WA0061_hkm4tf.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-21', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952476/IMG-20250525-WA0047_y5exkc.jpg', alt: 'Customized Gift Item', type: 'image', category: ['gifting'], aiHint: 'custom gift' },
  { id: 'gallery-gifting-brush-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763585/WhatsApp_Image_2025-11-28_at_7.38.49_PM_mbxmdq.jpg', alt: 'Engraved Hair Brush', type: 'image', category: ['gifting'], aiHint: 'hair brush' },
  { id: 'gallery-gifting-brush-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763581/WhatsApp_Image_2025-11-28_at_7.38.50_PM_ubzbrk.jpg', alt: 'Custom Hair Brush', type: 'image', category: ['gifting'], aiHint: 'hair brush' },
  { id: 'gallery-gifting-brush-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763559/WhatsApp_Image_2025-11-28_at_7.51.30_PM_ccudaq.jpg', alt: 'Personalized Hair Brush', type: 'image', category: ['gifting'], aiHint: 'hair brush' },
  { id: 'gallery-gifting-brush-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763558/WhatsApp_Image_2025-11-28_at_7.51.35_PM_daqa7v.jpg', alt: 'Wooden Hair Brush', type: 'image', category: ['gifting'], aiHint: 'hair brush' },
  { id: 'gallery-gifting-cap-1', src: 'https://res.cloudinary.com/dsdp8sjkh/video/upload/v1764763585/WhatsApp_Video_2025-11-28_at_7.51.46_PM_au99oq.mp4', alt: 'Custom Cap Animation', type: 'video', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-cap-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763575/WhatsApp_Image_2025-11-28_at_7.38.51_PM_xm3ndl.jpg', alt: 'Embroidered Cap', type: 'image', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-cap-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763574/WhatsApp_Image_2025-11-28_at_7.38.52_PM_beun5l.jpg', alt: 'Personalized Hat', type: 'image', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-cap-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763573/WhatsApp_Image_2025-11-28_at_7.51.20_PM_cedaab.jpg', alt: 'Custom Design Cap', type: 'image', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-cap-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763573/WhatsApp_Image_2025-11-28_at_7.50.54_PM_oeqd9c.jpg', alt: 'Stylish Custom Cap', type: 'image', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-cap-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763557/WhatsApp_Image_2025-11-28_at_7.51.36_PM_1_ddre7l.jpg', alt: 'Cap with Logo', type: 'image', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-cap-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763556/WhatsApp_Image_2025-11-28_at_7.51.39_PM_1_pg1nk1.jpg', alt: 'Name Embroidered Cap', type: 'image', category: ['gifting'], aiHint: 'custom cap' },
  { id: 'gallery-gifting-jellybag-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763584/WhatsApp_Image_2025-11-28_at_7.38.48_PM_1_awbl5o.jpg', alt: 'Personalized Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763584/WhatsApp_Image_2025-11-28_at_7.38.48_PM_2_a4boyd.jpg', alt: 'Custom Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763574/WhatsApp_Image_2025-11-28_at_7.38.54_PM_ndbpw6.jpg', alt: 'Jelly Bag with Name', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763574/WhatsApp_Image_2025-11-28_at_7.38.53_PM_jsdvlk.jpg', alt: 'Colorful Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763573/WhatsApp_Image_2025-11-28_at_7.38.55_PM_yx6u4k.jpg', alt: 'Jelly Bag Gift', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763559/WhatsApp_Image_2025-11-28_at_7.51.33_PM_jdw6dm.jpg', alt: 'Stylish Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763558/WhatsApp_Image_2025-11-28_at_7.51.33_PM_2_z7wj2t.jpg', alt: 'Jelly Bag for Her', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763558/WhatsApp_Image_2025-11-28_at_7.51.34_PM_ekfvc7.jpg', alt: 'Kids Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763558/WhatsApp_Image_2025-11-28_at_7.51.33_PM_1_h3htrw.jpg', alt: 'Beach Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763557/WhatsApp_Image_2025-11-28_at_7.51.36_PM_byw5qu.jpg', alt: 'Jelly Tote Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-11', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763557/WhatsApp_Image_2025-11-28_at_7.51.36_PM_2_nmvi8l.jpg', alt: 'Fashion Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-12', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763557/WhatsApp_Image_2025-11-28_at_7.51.37_PM_jjhswp.jpg', alt: 'Transparent Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },
  { id: 'gallery-gifting-jellybag-13', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1764763555/WhatsApp_Image_2025-11-28_at_7.38.48_PM_scx0se.jpg', alt: 'Summer Jelly Bag', type: 'image', category: ['gifting'], aiHint: 'jelly bag' },


  // Workshops Images
  { id: 'gallery-workshop-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615676/IMG-20250703-WA0033_axgz6z.jpg', alt: 'Workshop Creation 1', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751466991/IMG-20250701-WA0020_mvklcw.jpg', alt: 'Workshop Creation 2', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751466989/IMG-20250701-WA0014_pt1reu.jpg', alt: 'Workshop Creation 3', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952542/IMG-20250525-WA0122_nn3jgd.jpg', alt: 'Workshop Creation 4', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952541/IMG-20250525-WA0119_djpphx.jpg', alt: 'Workshop Creation 5', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952538/IMG-20250525-WA0085_ikkcbc.jpg', alt: 'Workshop Creation 6', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952538/IMG-20250525-WA0115_pqsgoq.jpg', alt: 'Workshop Creation 7', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952517/IMG-20250525-WA0123_oqq9vj.jpg', alt: 'Workshop Creation 8', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952516/IMG-20250525-WA0120_xiwwdo.jpg', alt: 'Workshop Creation 9', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952496/IMG-20250525-WA0118_jzbbee.jpg', alt: 'Workshop Creation 10', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-11', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952495/IMG-20250525-WA0117_jymhk7.jpg', alt: 'Workshop Creation 11', type: 'image', category: ['workshops'], aiHint: 'workshop art' },
  { id: 'gallery-workshop-12', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952493/IMG-20250525-WA0113_s6sgim.jpg', alt: 'Workshop Creation 12', type: 'image', category: ['workshops'], aiHint: 'workshop art' },

  // DIY Stations Images
  { id: 'gallery-diy-station-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751466988/IMG-20250701-WA0061_gds9fx.jpg', alt: 'DIY Station Activity 1', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952553/IMG-20250525-WA0139_xozt6r.jpg', alt: 'DIY Station Activity 2', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952522/IMG-20250525-WA0145_q3v28t.jpg', alt: 'DIY Station Activity 3', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952520/IMG-20250525-WA0128_pzshcl.jpg', alt: 'DIY Station Activity 4', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952503/IMG-20250525-WA0146_bnj7cn.jpg', alt: 'DIY Station Activity 5', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952499/IMG-20250525-WA0134_gxn30i.jpg', alt: 'DIY Station Activity 6', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1750_IMG-20250525-WA0137_yyncii.jpg', alt: 'DIY Station Activity 7', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615676/IMG-20250703-WA0058_ojibtc.jpg', alt: 'DIY Station Activity 8', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952496/IMG-20250525-WA0118_jzbbee.jpg', alt: 'DIY Station Activity 9', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },
  { id: 'gallery-diy-station-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952495/IMG-20250525-WA0117_jymhk7.jpg', alt: 'DIY Station Activity 10', type: 'image', category: ['diy-stations'], aiHint: 'diy station' },

  // Art Classes Images (10)
  { id: 'gallery-art-class-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952542/IMG-20250525-WA0122_nn3jgd.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952520/IMG-20250525-WA0136_ijm0rk.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952516/IMG-20250525-WA0120_xiwwdo.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952499/IMG-20250525-WA0134_gxn30i.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952495/IMG-20250525-WA0117_jymhk7.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952496/IMG-20250525-WA0118_jzbbee.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952495/IMG-20250525-WA0116_dd90fn.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952489/IMG-20250525-WA0065_fm1bvp.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952481/IMG-20250525-WA0121_hzzbsz.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },
  { id: 'gallery-art-class-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748952478/IMG-20250525-WA0031_xb4r9g.jpg', alt: 'Art Class Work', type: 'image', category: ['art-classes'], aiHint: 'student art' },

  // Events Images (10)
  { id: 'gallery-event-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615684/IMG-20250703-WA0011_dr1p2l.jpg', alt: 'Event Decoration', type: 'image', category: ['events'], aiHint: 'event decoration' },
  { id: 'gallery-event-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615678/IMG-20250701-WA0036_krenm9.jpg', alt: 'Event Activity', type: 'image', category: ['events'], aiHint: 'event activity' },
  { id: 'gallery-event-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615677/IMG-20250701-WA0034_qplbpf.jpg', alt: 'Event Food Art', type: 'image', category: ['events'], aiHint: 'food art' },
  { id: 'gallery-event-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615676/IMG-20250703-WA0041_cvi9gq.jpg', alt: 'Event Setup', type: 'image', category: ['events'], aiHint: 'event setup' },
  { id: 'gallery-event-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751467003/IMG-20250701-WA0044_fwuz1y.jpg', alt: 'Event Art Piece', type: 'image', category: ['events'], aiHint: 'event art' },
  { id: 'gallery-event-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751467000/IMG-20250701-WA0025_uvlxip.jpg', alt: 'Event Details', type: 'image', category: ['events'], aiHint: 'event details' },
  { id: 'gallery-event-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615677/IMG-20250703-WA0049_bxh5uh.jpg', alt: 'Event Craft', type: 'image', category: ['events'], aiHint: 'event craft' },
  { id: 'gallery-event-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615676/IMG-20250703-WA0047_cqnbg5.jpg', alt: 'Event Gift', type: 'image', category: ['events'], aiHint: 'event gift' },
  { id: 'gallery-event-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615677/IMG-20250703-WA0061_e7fier.jpg', alt: 'Special Event', type: 'image', category: ['events'], aiHint: 'special event'},
  { id: 'gallery-event-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1751615677/IMG-20250703-WA0059_a8s5gv.jpg', alt: 'Event Moment', type: 'image', category: ['events'], aiHint: 'event moment'},
  
  // Rakshabandhan Images
  { id: 'gallery-rakhi-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201293/WhatsApp_Image_2025-07-18_at_14.35.52_emr8xm.jpg', alt: 'Handcrafted Rakhi', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi handcrafted' },
  { id: 'gallery-rakhi-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201293/WhatsApp_Image_2025-07-18_at_14.35.50_1_kmjoqo.jpg', alt: 'Rakhi Gift Hamper', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi hamper' },
  { id: 'gallery-rakhi-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201292/WhatsApp_Image_2025-07-18_at_14.35.53_2_g3natu.jpg', alt: 'Designer Rakhi', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi designer' },
  { id: 'gallery-rakhi-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201291/WhatsApp_Image_2025-07-18_at_14.35.53_vsicnn.jpg', alt: 'Rakhi Collection', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi collection' },
  { id: 'gallery-rakhi-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201290/WhatsApp_Image_2025-07-18_at_14.41.03_kzsh1y.jpg', alt: 'Elegant Rakhi', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi elegant' },
  { id: 'gallery-rakhi-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201290/WhatsApp_Image_2025-07-18_at_14.35.52_1_jtiyxo.jpg', alt: 'Artistic Rakhi', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi artistic' },
  { id: 'gallery-rakhi-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201288/WhatsApp_Image_2025-07-18_at_14.35.53_1_of5nrl.jpg', alt: 'Brother Sister Rakhi', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi brother' },
  { id: 'gallery-rakhi-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201288/WhatsApp_Image_2025-07-18_at_14.41.03_1_nvg6ot.jpg', alt: 'Rakhi Special', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi special' },
  { id: 'gallery-rakhi-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201288/WhatsApp_Image_2025-07-18_at_14.41.05_rhtahl.jpg', alt: 'Modern Rakhi', type: 'image', category: ['rakshabandhan'], aiHint: 'rakhi modern' },
  { id: 'gallery-rakhi-video', src: 'https://res.cloudinary.com/dsdp8sjkh/video/upload/v1753201589/WhatsApp_Video_2025-07-18_at_14.41.42_gmtzfc.mp4', alt: 'Rakhi Celebration Video', type: 'video', category: ['rakshabandhan'], aiHint: 'rakhi video' },

  // Diwali Images
  { id: 'gallery-diwali-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201290/WhatsApp_Image_2025-07-18_at_14.35.51_b26fih.jpg', alt: 'Diwali Lamp', type: 'image', category: ['diwali'], aiHint: 'diwali lamp' },
  { id: 'gallery-diwali-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201292/WhatsApp_Image_2025-07-18_at_14.35.51_1_agx2t4.jpg', alt: 'Diwali Decoration', type: 'image', category: ['diwali'], aiHint: 'diwali decor' },
  { id: 'gallery-diwali-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201291/WhatsApp_Image_2025-07-18_at_14.35.52_2_x6cim2.jpg', alt: 'Festive Diya', type: 'image', category: ['diwali'], aiHint: 'diwali diya' },
];

export const WHATSAPP_LINK = "https://wa.me/919403420909?text=Hello%20HappyArts!";
export const RAKSHABANDHAN_WHATSAPP_LINK = "https://wa.me/919403420909?text=Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Rakshabandhan%20Specials.";
export const VALENTINES_WHATSAPP_LINK = "https://wa.me/919403420909?text=Hello%20HappyArts!%20I'd%20like%20to%20enquire%20about%20your%20Valentine's%20Specials.";
export const INSTAGRAM_LINK = "https://www.instagram.com/happy_arts_13?igsh=MTZtNDRraWh4OGR1aQ==";
export const EMAIL_LINK = "mailto:dhritisolanki80@gmail.com";
