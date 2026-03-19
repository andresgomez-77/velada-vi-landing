import { motion } from 'framer-motion';
import { Twitch, Youtube, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { 
    icon: Twitch, 
    href: 'https://twitch.tv/ibai', 
    label: 'Twitch',
    color: 'hover:text-[#9146FF]' 
  },
  { 
    icon: Youtube, 
    href: 'https://youtube.com/@IbaiLlanos', 
    label: 'YouTube',
    color: 'hover:text-[#FF0000]' 
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com/IbaiLlanos', 
    label: 'Twitter/X',
    color: 'hover:text-[#1DA1F2]' 
  },
  { 
    icon: Instagram, 
    href: 'https://instagram.com/ibaillanos', 
    label: 'Instagram',
    color: 'hover:text-[#E4405F]' 
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-velada-dark/50 border border-velada-gold/20 flex items-center justify-center text-white/50 ${social.color} hover:border-velada-gold/50 transition-all`}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.a>
      ))}
    </motion.div>
  );
}
